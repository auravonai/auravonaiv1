import Razorpay from "razorpay";
import { NextRequest } from "next/server";

const rzp = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  const { amount, planName } = await request.json();

  if (!amount || Number(amount) < 1000) {
    return Response.json({ error: "Minimum amount is ₹1,000" }, { status: 400 });
  }

  try {
    const order = await rzp.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: { planName: planName ?? "Custom Payment" },
    });
    return Response.json({ orderId: order.id, amount: order.amount });
  } catch {
    return Response.json({ error: "Could not create order" }, { status: 500 });
  }
}
