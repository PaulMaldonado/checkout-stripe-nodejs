const stripe = require("stripe")('YOU_API_SECRET_HERE');

exports.index = function(req, res) {
    res.render('index');
}

exports.products = function(req, res) {
    res.render('products');
}

exports.checkout = async function(req, res) {
   const customer = await stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
   });

   const charge = await stripe.charges.create({
        customer: customer.id,
        amount: 92038,
        currency: 'usd',
        description: 'Site for buy online'
   });

   res.render('success');
}