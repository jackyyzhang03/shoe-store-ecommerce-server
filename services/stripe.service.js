const stripe = require("stripe")(process.env.STRIPE_SECRET);

// TODO: Extract to config.
const redirectURL = "http://localhost:3000/cart";

const getCheckoutSession = async (items) => {
  return await stripe.checkout.sessions.create({
    line_items: items,
    // TODO: Extract to config.
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "cad",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
          tax_behavior: "exclusive",
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "cad",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
          tax_behavior: "exclusive",
        },
      },
    ],
    automatic_tax: {
      enabled: true,
    },
    mode: "payment",
    success_url: `${redirectURL}/?success=true`,
    cancel_url: `${redirectURL}?canceled=true`,
  });
};

module.exports = {
  getCheckoutSession: getCheckoutSession,
};
