const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const stripeSecret = process.env.STRIPE_KEY;

if (!stripeSecret) {
  console.error("Stripe key is missing");
  throw new Error("Stripe key is missing");
}

const stripe = require("stripe")(stripeSecret);

const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "USD",
    });

    res.status(200).json({
      clientPaymentSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "Payment amount must be greater than zero (0).",
    });
  }
});

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Amazon Server Running");
});
