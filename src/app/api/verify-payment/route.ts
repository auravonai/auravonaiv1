import crypto from "crypto";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    await request.json();

  const digest = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (digest === razorpay_signature) {
    return Response.json({ success: true });
  }
  return Response.json({ success: false }, { status: 400 });
}
