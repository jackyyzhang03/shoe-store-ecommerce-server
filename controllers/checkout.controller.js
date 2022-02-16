const stripeService = require("../services/stripe.service");

const stripeCheckout = async (req, res) => {
  const session = await stripeService.getCheckoutSession(req.body.items);
  return res.status(200).json({ url: session.url });
}

module.exports = {
  stripeCheckout: stripeCheckout,
}