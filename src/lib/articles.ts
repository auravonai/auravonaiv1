export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "code"; lang: string; code: string }
  | { type: "note"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; source?: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  tags: string[];
  accent: string;
  author: string;
  authorRole: string;
  content: ContentBlock[];
};

export const articles: Article[] = [
  {
    slug: "building-ai-powered-saas-2025",
    title: "Building AI-Powered SaaS Products in 2025: Architecture That Holds Up",
    excerpt:
      "Most teams add AI on top of an existing architecture and wonder why it breaks under load. Here's how to design a SaaS product where AI is a structural component — not an afterthought.",
    category: "AI Solutions",
    readTime: "12 min read",
    date: "May 10, 2025",
    featured: true,
    tags: ["AI", "SaaS", "Architecture", "LLM"],
    accent: "violet",
    author: "Auravon AI",
    authorRole: "Engineering Studio",
    content: [
      {
        type: "paragraph",
        text: "There's a growing gap between 'AI-enhanced' products and products where AI is actually load-bearing. Most teams are in the first camp — they've added a ChatGPT wrapper and called it AI-native. The real architecture challenge begins when an AI feature is the primary reason users pay for your product.",
      },
      {
        type: "paragraph",
        text: "After building several production AI SaaS systems, the patterns that make or break them are consistent. This isn't a tutorial — it's a set of architectural decisions we'd make again, and a few we wouldn't.",
      },
      {
        type: "heading",
        level: 2,
        id: "start-with-the-data-model",
        text: "Start with the data model",
      },
      {
        type: "paragraph",
        text: "The biggest mistake teams make is treating LLM calls like REST API calls. They're not. LLMs introduce non-determinism, latency variance (50ms to 30s on the same query), token cost accumulation, and failure modes that don't exist in conventional services. Your schema needs to account for this from day one.",
      },
      {
        type: "code",
        lang: "sql",
        code: `-- Track every LLM interaction for debugging and cost attribution
CREATE TABLE ai_interactions (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id    UUID NOT NULL REFERENCES tenants(id),
  user_id      UUID REFERENCES users(id),
  feature      VARCHAR(100) NOT NULL,  -- 'chat', 'summarize', 'classify'
  model        VARCHAR(50) NOT NULL,
  prompt_tokens     INTEGER NOT NULL,
  completion_tokens INTEGER NOT NULL,
  latency_ms        INTEGER NOT NULL,
  cached            BOOLEAN DEFAULT FALSE,
  error             TEXT,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Index for cost analysis per tenant per day
CREATE INDEX idx_ai_interactions_tenant_day
  ON ai_interactions (tenant_id, (created_at::date));`,
      },
      {
        type: "paragraph",
        text: "Logging every interaction seems excessive until you get a surprise API bill or need to debug why one tenant's chat responses are degrading. Without this table you're flying blind.",
      },
      {
        type: "heading",
        level: 2,
        id: "multi-tenancy-and-data-isolation",
        text: "Multi-tenancy and data isolation",
      },
      {
        type: "paragraph",
        text: "If you're building a multi-tenant SaaS with RAG, you need strict isolation at the vector database level. A system that searches across all tenant data is a serious security and privacy problem. Each tenant's embeddings must be namespace-separated — a query from Tenant A should never surface Tenant B's documents.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// Pinecone namespace isolation — never query without the tenantId namespace
const index = pinecone.index("knowledge-base");

export async function queryKnowledgeBase(
  query: string,
  tenantId: string,
  topK = 5
) {
  const embedding = await embed(query);

  // The namespace ensures complete tenant isolation
  return index.namespace(tenantId).query({
    vector: embedding,
    topK,
    includeMetadata: true,
  });
}

// When indexing documents, always namespace by tenant
export async function indexDocument(
  doc: Document,
  tenantId: string
) {
  const embedding = await embed(doc.content);

  await index.namespace(tenantId).upsert([{
    id: doc.id,
    values: embedding,
    metadata: { title: doc.title, source: doc.url },
  }]);
}`,
      },
      {
        type: "heading",
        level: 2,
        id: "streaming-is-not-optional",
        text: "Streaming is not optional",
      },
      {
        type: "paragraph",
        text: "Users tolerate 15 seconds of a streaming response appearing word by word. They don't tolerate 15 seconds of a blank screen. Wire streaming into your API routes at the start — retrofitting it later is genuinely painful because it changes the client/server contract.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// Next.js App Router — streaming AI response
export async function POST(req: Request) {
  const { messages, tenantId } = await req.json();

  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    stream: true,
  });

  const encoder = new TextEncoder();

  return new Response(
    new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content ?? "";
          if (text) {
            controller.enqueue(
              encoder.encode(\`data: \${JSON.stringify({ text })}\n\n\`)
            );
          }
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      },
    }),
    {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    }
  );
}`,
      },
      {
        type: "heading",
        level: 2,
        id: "fallback-behavior-from-day-one",
        text: "Fallback behavior from day one",
      },
      {
        type: "paragraph",
        text: "OpenAI goes down. Claude has capacity issues. Your embedding service will have latency spikes. If your product's core functionality depends on an external AI API with no fallback, you have a reliability problem that will manifest at the worst possible moment.",
      },
      {
        type: "note",
        text: "A fallback doesn't have to be another AI model. It can be a deterministic response, a cached answer from a similar past query, or an honest 'I'm not able to help with that right now' with a way to contact support. Users tolerate known limitations far better than silent failures.",
      },
      {
        type: "heading",
        level: 2,
        id: "token-cost-management",
        text: "Token cost management",
      },
      {
        type: "paragraph",
        text: "AI API costs scale non-linearly with usage. A product that costs $50/month to run in development can generate surprising bills at even modest scale. Two patterns that pay for themselves quickly: semantic caching and routing by complexity.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// Semantic cache — return cached answer for semantically similar queries
async function getAIResponse(query: string, tenantId: string) {
  const queryEmbedding = await embed(query);

  // Check cache first (threshold: 0.95 = very high similarity)
  const cached = await findSimilarCachedResponse(
    queryEmbedding,
    tenantId,
    0.95
  );

  if (cached) {
    await logInteraction({ cached: true, tenantId });
    return { response: cached.response, fromCache: true };
  }

  // Route simple queries to a cheaper/faster model
  const model = isSimpleQuery(query) ? "gpt-4o-mini" : "gpt-4o";
  const response = await callLLM(query, model);

  await storeInCache(queryEmbedding, response, tenantId);
  await logInteraction({ cached: false, model, tenantId });

  return { response, fromCache: false };
}`,
      },
      {
        type: "heading",
        level: 2,
        id: "evaluation-before-shipping",
        text: "Evaluation before shipping",
      },
      {
        type: "paragraph",
        text: "The hardest part of AI SaaS isn't building the feature — it's knowing when it's good enough to ship. Build an evaluation suite before the feature goes live: a set of test prompts with expected outputs, measured against your pipeline. Run it after any model change, prompt change, or chunking strategy change. Without this, you're shipping blind.",
      },
      {
        type: "list",
        items: [
          "Define what 'correct' means for each AI feature before building it",
          "Build a test set of 20–50 representative queries with expected outputs",
          "Track retrieval quality (did the context contain the answer?) separately from generation quality (did the LLM use it correctly?)",
          "Re-evaluate after every meaningful change to the pipeline",
          "Log production failures — user feedback is the best evaluation data you have",
        ],
      },
    ],
  },
  {
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization: What Actually Moves the Needle",
    excerpt:
      "Chasing 100/100 Lighthouse scores is its own genre of content. This isn't that. Let's talk about making real Next.js apps measurably faster in ways that affect actual users.",
    category: "Web Development",
    readTime: "9 min read",
    date: "May 5, 2025",
    featured: true,
    tags: ["Next.js", "Performance", "SEO"],
    accent: "blue",
    author: "Auravon AI",
    authorRole: "Engineering Studio",
    content: [
      {
        type: "paragraph",
        text: "Lighthouse scores are a useful proxy but a poor goal. A 100/100 score on a staging environment with no real users doesn't tell you whether your app is fast for someone on a mid-range phone in Mumbai on a 4G connection. Let's focus on what actually affects real users.",
      },
      {
        type: "heading",
        level: 2,
        id: "server-components-first",
        text: "Server Components first",
      },
      {
        type: "paragraph",
        text: "The single highest-leverage change in modern Next.js is using Server Components correctly. Every component that doesn't require interactivity should be a Server Component. This isn't just about bundle size — it eliminates the client/server waterfall for data fetching and removes JavaScript that users have to parse and execute.",
      },
      {
        type: "code",
        lang: "tsx",
        code: `// Server Component — no 'use client', no JS sent to the browser
// Data fetches happen in parallel on the server
async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [product, relatedProducts, reviews] = await Promise.all([
    getProduct(id),
    getRelatedProducts(id),
    getReviews(id),
  ]);

  return (
    <div>
      <ProductDetails product={product} />
      {/* Suspense boundary — shows skeleton while reviews load */}
      <Suspense fallback={<ReviewSkeleton />}>
        <Reviews reviews={reviews} />
      </Suspense>
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}`,
      },
      {
        type: "heading",
        level: 2,
        id: "cache-aggressively-invalidate-precisely",
        text: "Cache aggressively, invalidate precisely",
      },
      {
        type: "paragraph",
        text: "Next.js's data cache is powerful but unintuitive. The key mental model: fetch requests are cached by default. You can opt out per-fetch or per-route. The mistake most teams make is disabling caching everywhere because they don't understand the defaults — and then wondering why their app is slow.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// Revalidate product data every 60 seconds
const product = await fetch(\`/api/products/\${id}\`, {
  next: { revalidate: 60, tags: ["products", \`product-\${id}\`] },
});

// Always fresh — user-specific data shouldn't be cached
const cart = await fetch(\`/api/cart/\${userId}\`, {
  cache: "no-store",
});

// On-demand revalidation when product is updated
import { revalidateTag } from "next/cache";
export async function updateProduct(id: string, data: ProductUpdate) {
  await db.product.update({ where: { id }, data });
  revalidateTag(\`product-\${id}\`);  // Clears only this product's cache
  revalidateTag("products");         // Clears product list caches
}`,
      },
      {
        type: "heading",
        level: 2,
        id: "the-image-issues-that-actually-matter",
        text: "The image issues that actually matter",
      },
      {
        type: "paragraph",
        text: "Next.js's Image component handles WebP conversion, responsive sizing, and lazy loading correctly by default. The places where it goes wrong: forgetting the `priority` prop on above-the-fold images (this is the single most common LCP problem we see), and setting `sizes` incorrectly which causes the browser to download oversized images.",
      },
      {
        type: "code",
        lang: "tsx",
        code: `// Priority on the hero image — the most common LCP fix
<Image
  src="/hero.jpg"
  alt="Product hero"
  width={1200}
  height={630}
  priority          // Never lazy-load the LCP element
  sizes="(max-width: 768px) 100vw, 1200px"
  quality={85}      // 85 is usually indistinguishable from 100 at half the size
/>

// For images below the fold — lazy load is correct (default)
<Image
  src="/product-thumbnail.jpg"
  alt={product.name}
  width={400}
  height={300}
  // No priority — lazy loading is correct here
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
/>`,
      },
      {
        type: "heading",
        level: 2,
        id: "bundle-analysis-before-you-optimize",
        text: "Bundle analysis before you optimize",
      },
      {
        type: "paragraph",
        text: "Before micro-optimizing anything, run bundle analysis. The output almost always shows one or two packages causing 60-70% of your bundle size. Fix those before doing anything else.",
      },
      {
        type: "code",
        lang: "bash",
        code: `# Install and run the bundle analyzer
npm install @next/bundle-analyzer --save-dev

# In next.config.ts
import bundleAnalyzer from "@next/bundle-analyzer";
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });
export default withBundleAnalyzer(nextConfig);

# Run the analysis
ANALYZE=true next build`,
      },
      {
        type: "note",
        text: "Common bundle bloat culprits: moment.js (replace with date-fns), lodash (import specific functions: `import debounce from 'lodash/debounce'`), and any charting library imported without tree-shaking. Recharts is generally leaner than Chart.js for typical dashboards.",
      },
      {
        type: "heading",
        level: 2,
        id: "what-actually-moves-core-web-vitals",
        text: "What actually moves Core Web Vitals",
      },
      {
        type: "list",
        items: [
          "LCP is almost always an image or large text block — find it in Chrome DevTools, then check: server-rendered? Priority set? WebP format?",
          "CLS is caused by images without explicit dimensions, late-loading ads, and font swaps — reserve space with aspect-ratio or explicit width/height",
          "INP (Interaction to Next Paint, the new FID) is caused by long JavaScript tasks on the main thread — check the Performance tab for tasks over 50ms",
          "FCP improves with server rendering and preloading fonts — use `<link rel='preload'>` for your primary font",
          "TTFB improves with edge rendering and proper caching — Vercel's edge network makes this mostly automatic",
        ],
      },
    ],
  },
  {
    slug: "rag-chatbot-langchain-guide",
    title: "Building Production-Grade RAG Chatbots with LangChain and Pinecone",
    excerpt:
      "Most RAG tutorials stop at 'it works in the notebook.' Production RAG is different — chunking that doesn't break context, retrieval that returns relevant results, and LLM calls that handle the window correctly.",
    category: "AI Solutions",
    readTime: "15 min read",
    date: "April 28, 2025",
    featured: false,
    tags: ["RAG", "LangChain", "Vector DB", "OpenAI"],
    accent: "cyan",
    author: "Auravon AI",
    authorRole: "Engineering Studio",
    content: [
      {
        type: "paragraph",
        text: "RAG (retrieval-augmented generation) sounds straightforward: embed your documents, store them in a vector database, retrieve relevant chunks at query time, and pass them to an LLM as context. In practice, there are at least a dozen ways to get this wrong in production.",
      },
      {
        type: "heading",
        level: 2,
        id: "chunking-strategy-matters-more-than-the-model",
        text: "Chunking strategy matters more than the model",
      },
      {
        type: "paragraph",
        text: "Your retrieval quality is largely determined by how you chunk your source documents. Chunks too small: each one lacks enough context to be useful. Chunks too large: you burn context window budget on irrelevant content and retrieval similarity degrades.",
      },
      {
        type: "code",
        lang: "python",
        code: `from langchain.text_splitter import RecursiveCharacterTextSplitter

# Recursive splitting respects document structure —
# splits on paragraphs, then sentences, then words
splitter = RecursiveCharacterTextSplitter(
    chunk_size=800,
    chunk_overlap=100,  # Overlap prevents context loss at chunk boundaries
    separators=["\\n\\n", "\\n", ". ", " ", ""],
    length_function=len,
)

chunks = splitter.split_documents(documents)

# Add metadata to every chunk for filtering and attribution
for chunk in chunks:
    chunk.metadata.update({
        "source_id": source_id,
        "tenant_id": tenant_id,
        "indexed_at": datetime.utcnow().isoformat(),
    })`,
      },
      {
        type: "heading",
        level: 2,
        id: "hybrid-retrieval",
        text: "Hybrid retrieval outperforms pure semantic search",
      },
      {
        type: "paragraph",
        text: "Dense retrieval (embedding similarity) misses exact keyword matches. A product name, an error code, a person's name — these often retrieve poorly from embedding search because the semantic space doesn't capture lexical specificity. Combining dense retrieval with BM25 sparse retrieval consistently produces better results across diverse query types.",
      },
      {
        type: "heading",
        level: 2,
        id: "evaluating-your-rag-pipeline",
        text: "Evaluating your RAG pipeline",
      },
      {
        type: "paragraph",
        text: "The question most teams skip: how do you know your RAG is actually working? The minimum viable evaluation: build a test set of 20–30 question/answer pairs from your knowledge base. For each pair, check two things: (1) did the retrieved context contain the answer, and (2) did the LLM use that context correctly. These can fail independently.",
      },
      {
        type: "note",
        text: "Retrieval accuracy and generation accuracy are separate concerns. A perfectly accurate retrieval system paired with a poorly prompted LLM will still give bad answers — and vice versa. Measure them independently.",
      },
      {
        type: "heading",
        level: 2,
        id: "prompt-engineering-for-rag",
        text: "Prompt engineering for RAG",
      },
      {
        type: "code",
        lang: "python",
        code: `SYSTEM_PROMPT = """You are a helpful assistant for {company_name}.
Answer questions based ONLY on the provided context.
If the context doesn't contain enough information to answer confidently,
say so clearly — do not speculate or make things up.
Always cite which part of the context you used."""

def build_prompt(query: str, context_chunks: list[str]) -> list[dict]:
    context = "\\n\\n---\\n\\n".join(context_chunks)
    return [
        {"role": "system", "content": SYSTEM_PROMPT},
        {
            "role": "user",
            "content": f"Context:\\n{context}\\n\\nQuestion: {query}"
        },
    ]`,
      },
    ],
  },
  {
    slug: "saas-pricing-strategy-startups",
    title: "SaaS Pricing Strategy for Startups: What Works and What Doesn't",
    excerpt:
      "Getting pricing wrong doesn't hurt immediately — you'll see the damage in churned trials, stalled expansions, and deals that go nowhere. Here's what we've seen work across products we've helped build.",
    category: "SaaS",
    readTime: "8 min read",
    date: "April 22, 2025",
    featured: false,
    tags: ["SaaS", "Pricing", "Growth"],
    accent: "emerald",
    author: "Auravon AI",
    authorRole: "Engineering Studio",
    content: [
      {
        type: "paragraph",
        text: "SaaS pricing is one of those areas where founders consistently underinvest in thinking. You'll spend months on features and hours on pricing. The revenue impact usually runs the other way.",
      },
      {
        type: "heading",
        level: 2,
        id: "the-freemium-trap",
        text: "The freemium trap",
      },
      {
        type: "paragraph",
        text: "Freemium works when the free tier provides genuine value and the paid features are obviously worth paying for. It fails when the free tier is so limited it's useless (users churn before seeing value), or when the upgrade path isn't compelling enough (users stay free forever). Most B2B SaaS products are better served by a time-limited free trial than a permanent free tier.",
      },
      {
        type: "note",
        text: "If your free tier's purpose is 'get users into the product,' a 14-day trial with full access achieves this better than a permanently hobbled free plan. The trial creates urgency; the free plan doesn't.",
      },
      {
        type: "heading",
        level: 2,
        id: "usage-based-pricing",
        text: "Usage-based pricing is harder to implement than it sounds",
      },
      {
        type: "paragraph",
        text: "Metered billing aligns cost with value, which genuinely reduces churn. But the implementation complexity is real. Every action that contributes to the bill needs to be instrumented, idempotently counted, and accurately reported to Stripe. The accounting becomes a product in itself. Get this wrong and you'll either undercharge (losing revenue) or overcharge (losing customers and trust).",
      },
      {
        type: "heading",
        level: 2,
        id: "annual-vs-monthly",
        text: "Annual vs monthly pricing",
      },
      {
        type: "paragraph",
        text: "Annual plans improve cash flow and reduce churn. The typical discount is 15–20%. Offering both monthly and annual from day one is worth the added complexity — but the default-selected option on your pricing page should be annual. Most users go with whatever's pre-selected, and the ones who switch to monthly were likely going to churn anyway.",
      },
      {
        type: "heading",
        level: 2,
        id: "pricing-page-design",
        text: "Pricing page design matters as much as the price",
      },
      {
        type: "list",
        items: [
          "Three tiers is almost always better than two or four — it anchors the middle option as 'the reasonable choice'",
          "Feature lists in pricing tables should be short — 5-7 items maximum",
          "Call out the plan you want people to buy with a visual highlight or 'Most popular' label",
          "If you offer annual billing, pre-select it and show the monthly equivalent ('$49/mo, billed annually')",
          "Add friction reduction near the CTA: 'Cancel anytime', 'No credit card required for trial', 'Upgrade or downgrade anytime'",
        ],
      },
    ],
  },
  {
    slug: "whatsapp-automation-business",
    title: "WhatsApp Business API: Building Reliable Automation for 2025",
    excerpt:
      "The WhatsApp Business API has higher open rates than email and more scale than manual support. Here's how to automate it without creating a brittle, untestable mess.",
    category: "Automation",
    readTime: "10 min read",
    date: "April 15, 2025",
    featured: false,
    tags: ["WhatsApp", "Automation", "n8n"],
    accent: "orange",
    author: "Auravon AI",
    authorRole: "Engineering Studio",
    content: [
      {
        type: "paragraph",
        text: "WhatsApp Business API is the highest-engagement customer communication channel for Indian businesses — open rates that make email look anaemic. The catch: it's more complex to implement correctly than most tutorials suggest, and getting it wrong in production is disruptive.",
      },
      {
        type: "heading",
        level: 2,
        id: "webhook-architecture",
        text: "Webhook architecture for reliable message processing",
      },
      {
        type: "paragraph",
        text: "WhatsApp may deliver webhook events more than once. Your handler must be idempotent — processing the same message twice should produce the same result as processing it once.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// Idempotent webhook handler
export async function POST(req: Request) {
  // Verify the webhook signature first
  const signature = req.headers.get("x-hub-signature-256") ?? "";
  const body = await req.text();
  if (!verifySignature(body, signature)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const payload = JSON.parse(body);

  for (const entry of payload.entry ?? []) {
    for (const change of entry.changes ?? []) {
      for (const message of change.value?.messages ?? []) {
        // Dedup by WhatsApp message ID — already processed = skip
        const exists = await db.waMessage.findUnique({
          where: { waMessageId: message.id },
        });
        if (!exists) {
          await processIncomingMessage(message, change.value);
        }
      }
    }
  }

  return new Response("OK");
}`,
      },
      {
        type: "heading",
        level: 2,
        id: "template-messages-and-session-windows",
        text: "Template messages and the 24-hour session window",
      },
      {
        type: "paragraph",
        text: "WhatsApp's messaging model has two modes: within 24 hours of a user messaging you (session window), you can send free-form messages. Outside the window, you must use pre-approved templates. Design your automation flows around this constraint from the start — not as an afterthought.",
      },
      {
        type: "heading",
        level: 2,
        id: "error-handling-and-retries",
        text: "Error handling and retries",
      },
      {
        type: "note",
        text: "The WhatsApp API returns 200 OK even when message delivery fails. Always listen for the status webhook callbacks to confirm delivery — don't assume a 200 response means the user received the message.",
      },
    ],
  },
  {
    slug: "react-native-vs-flutter-2025",
    title: "React Native vs Flutter in 2025: A Practical Comparison",
    excerpt:
      "This comparison exists in thousands of blog posts. Most compare synthetic benchmarks. Here's what we've seen working with both frameworks across real production apps.",
    category: "Mobile Apps",
    readTime: "7 min read",
    date: "April 8, 2025",
    featured: false,
    tags: ["React Native", "Flutter", "Mobile"],
    accent: "pink",
    author: "Auravon AI",
    authorRole: "Engineering Studio",
    content: [
      {
        type: "paragraph",
        text: "Both React Native and Flutter are capable of shipping production apps that feel right on iOS and Android. The choice between them is mostly about your team and your product, not which framework is 'better.'",
      },
      {
        type: "heading",
        level: 2,
        id: "when-react-native-makes-sense",
        text: "When React Native makes sense",
      },
      {
        type: "paragraph",
        text: "React Native's strongest argument in 2025 is the web developer pipeline. If your team knows React, the learning curve to shipping a functional mobile app is dramatically shorter than with Flutter. Sharing business logic, utility functions, and API client code with a Next.js web app is genuinely practical.",
      },
      {
        type: "list",
        items: [
          "Your team knows React/JavaScript and doesn't want to learn Dart",
          "You're sharing code with an existing web app",
          "You need access to a specific native module with a mature React Native library",
          "The app doesn't have unusually complex or custom UI",
          "You're on a tight timeline — React Native's Expo workflow is faster to get started",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "when-flutter-makes-sense",
        text: "When Flutter makes sense",
      },
      {
        type: "paragraph",
        text: "Flutter's rendering model gives you complete control over UI — every pixel is drawn by Flutter's own engine, not native platform widgets. This produces more consistent UIs across platforms, smoother 60/120fps animations, and better support for unusual custom UI. The Dart learning curve is real but shallow for most developers.",
      },
      {
        type: "heading",
        level: 2,
        id: "what-the-benchmark-comparisons-miss",
        text: "What the benchmark comparisons miss",
      },
      {
        type: "paragraph",
        text: "Both frameworks are good enough for the vast majority of apps. The 'which is faster' debate mostly disappears once you have a developer who actually knows the framework. The more important questions: What does your existing team know? Does your app need complex platform integrations (camera, Bluetooth, payments) where one framework has better library support? Do you need to ship a web version of the same app later?",
      },
      {
        type: "quote",
        text: "The best framework is the one your team can actually build with confidently. A Flutter app built by a team that knows React Native will be worse than a React Native app built by the same team.",
        source: "Engineering principle we repeat on every mobile project",
      },
    ],
  },
  {
    slug: "startup-tech-stack-2025",
    title: "The Startup Tech Stack Guide for 2025",
    excerpt:
      "The technical decisions you make in the first few months are hard to undo. Here's what we'd choose if we were starting a SaaS product today, and why.",
    category: "Startup Tech",
    readTime: "11 min read",
    date: "April 1, 2025",
    featured: false,
    tags: ["Startup", "Tech Stack", "Architecture"],
    accent: "indigo",
    author: "Auravon AI",
    authorRole: "Engineering Studio",
    content: [
      {
        type: "paragraph",
        text: "The tech stack decision that haunts startups for years isn't usually 'we picked the wrong language.' It's 'we picked a stack our team doesn't know well' or 'we picked something that became a bottleneck at 10,000 users.' Here's what we'd choose if we were starting a SaaS product today.",
      },
      {
        type: "heading",
        level: 2,
        id: "frontend-nextjs-with-typescript",
        text: "Frontend: Next.js with TypeScript",
      },
      {
        type: "paragraph",
        text: "Not a controversial choice in 2025. Server components, file-based routing, image optimization, and a massive ecosystem. TypeScript is non-negotiable — the productivity gains from type safety outweigh the setup cost within weeks, and the errors it catches before runtime are worth the verbosity.",
      },
      {
        type: "heading",
        level: 2,
        id: "backend-it-depends",
        text: "Backend: it depends on your team",
      },
      {
        type: "paragraph",
        text: "If your frontend is TypeScript, Node.js with Fastify or Hono gives you language consistency and good performance. If you need computation-heavy services or AI pipelines, Python with FastAPI is excellent. Don't introduce Go or Rust at a startup unless someone is already productive in it — the learning curve adds months you don't have.",
      },
      {
        type: "heading",
        level: 2,
        id: "database-postgresql",
        text: "Database: PostgreSQL",
      },
      {
        type: "paragraph",
        text: "PostgreSQL handles 99% of SaaS data requirements. It's not exciting but it's correct — full ACID compliance, excellent JSON support, mature ecosystem, and Prisma or Drizzle for type-safe access. Use Supabase if you want managed hosting with auth and realtime built in.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// Prisma schema for a multi-tenant SaaS
model Tenant {
  id        String   @id @default(cuid())
  name      String
  slug      String   @unique
  plan      Plan     @default(FREE)
  users     User[]
  createdAt DateTime @default(now())
}

model User {
  id        String   @id @default(cuid())
  email     String
  tenantId  String
  tenant    Tenant   @relation(fields: [tenantId], references: [id])
  role      Role     @default(MEMBER)
  createdAt DateTime @default(now())

  @@unique([email, tenantId])
}`,
      },
      {
        type: "heading",
        level: 2,
        id: "what-to-avoid-early",
        text: "What to avoid early",
      },
      {
        type: "list",
        items: [
          "Microservices — monolith first, always. Split when you have a real reason to, not because you read it's best practice",
          "GraphQL — REST is simpler, tRPC is excellent for TypeScript monorepos, GraphQL adds complexity you won't need until much later",
          "Kubernetes — use a managed platform (Vercel, Railway, Render) until you have a reason not to. K8s is an operational burden",
          "Multiple databases — start with one. Introduce Redis only when you need caching or job queues, not as a default",
          "Event-driven architecture — use synchronous APIs until you have a specific async problem. Events add complexity and debugging difficulty",
        ],
      },
    ],
  },
  {
    slug: "postgresql-performance-tips",
    title: "PostgreSQL Performance at Scale: What Actually Helps",
    excerpt:
      "Most PostgreSQL performance problems come down to three things: missing indexes, N+1 queries, or not understanding the query planner. Here's how to diagnose and fix all three.",
    category: "Web Development",
    readTime: "13 min read",
    date: "March 25, 2025",
    featured: false,
    tags: ["PostgreSQL", "Database", "Performance"],
    accent: "blue",
    author: "Auravon AI",
    authorRole: "Engineering Studio",
    content: [
      {
        type: "paragraph",
        text: "PostgreSQL handles a lot before it needs help. When it does struggle, the cause is almost always one of: missing or wrong indexes, ORM-generated N+1 queries, or misunderstood query planner behavior. Let's look at each.",
      },
      {
        type: "heading",
        level: 2,
        id: "understand-explain-analyze-first",
        text: "Understand EXPLAIN ANALYZE first",
      },
      {
        type: "paragraph",
        text: "Before optimizing anything, run EXPLAIN ANALYZE on your slow query. The output shows what the planner chose and how long each step took. Sequential scans on large tables and nested loop joins with large row counts are your targets.",
      },
      {
        type: "code",
        lang: "sql",
        code: `-- The most useful form — shows actual timing, buffer hits, and planning time
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT u.id, u.email, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.tenant_id = 'tenant_abc'
GROUP BY u.id, u.email
ORDER BY order_count DESC
LIMIT 50;

-- Look for: Seq Scan on large tables, Nested Loop with many rows
-- Good: Index Scan, Hash Join, parallel workers being used`,
      },
      {
        type: "heading",
        level: 2,
        id: "composite-indexes-for-multi-tenant-queries",
        text: "Composite indexes for multi-tenant queries",
      },
      {
        type: "paragraph",
        text: "The most common indexing mistake: adding a single-column index on a frequently-filtered column when every query also filters by tenant_id. A composite index (tenant_id, column) will be dramatically faster because PostgreSQL can use it to satisfy both filter conditions at once.",
      },
      {
        type: "code",
        lang: "sql",
        code: `-- Bad: single column index ignores the tenant_id filter
CREATE INDEX idx_orders_status ON orders (status);

-- Good: composite index — tenant_id first (equality), then status
CREATE INDEX CONCURRENTLY idx_orders_tenant_status
  ON orders (tenant_id, status, created_at DESC);

-- Partial index for a common filtered subset
CREATE INDEX CONCURRENTLY idx_active_users
  ON users (tenant_id, email)
  WHERE deleted_at IS NULL;  -- Only indexes active users`,
      },
      {
        type: "heading",
        level: 2,
        id: "n-plus-one-in-orms",
        text: "N+1 queries in ORMs",
      },
      {
        type: "paragraph",
        text: "ORM convenience hides N+1 patterns. Loading 50 users and then fetching each user's orders separately makes 51 queries instead of 2. The fix is eager loading — but you need to be deliberate about what you load.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// Bad: N+1 — 1 query for users + 1 per user for orders
const users = await prisma.user.findMany({ where: { tenantId } });
for (const user of users) {
  const orders = await prisma.order.findMany({
    where: { userId: user.id },
  });
  // Process...
}

// Good: 2 queries total — users + all their orders in one JOIN
const users = await prisma.user.findMany({
  where: { tenantId },
  include: {
    orders: {
      take: 10,
      orderBy: { createdAt: "desc" },
      select: { id: true, total: true, status: true, createdAt: true },
    },
  },
});`,
      },
      {
        type: "heading",
        level: 2,
        id: "connection-pooling",
        text: "Connection pooling with PgBouncer",
      },
      {
        type: "paragraph",
        text: "PostgreSQL can handle a few hundred simultaneous connections before performance degrades. At scale with a serverless deployment (where each function invocation opens a new connection), you'll hit this limit quickly. PgBouncer or Supabase's built-in pooler sits in front of PostgreSQL and multiplexes connections — essential for serverless workloads.",
      },
      {
        type: "note",
        text: "In transaction mode pooling (the default for serverless), prepared statements don't work across pooled connections. If you're using Prisma with PgBouncer, add `pgbouncer=true` to your connection string to disable named prepared statements.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const article = getArticle(slug);
  if (!article) return [];

  return articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, limit)
    .concat(
      articles
        .filter((a) => a.slug !== slug && a.category !== article.category)
        .slice(0, Math.max(0, limit - articles.filter((a) => a.slug !== slug && a.category === article.category).length))
    )
    .slice(0, limit);
}
