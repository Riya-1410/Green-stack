import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const processPayment = async (req, res) => {
  try {
    const { amount, token } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: token,
      confirm: true,
    });
    res.json({ success: true, paymentIntent });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
