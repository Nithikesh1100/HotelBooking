// // routes/payment.js
const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('dotenv').config();


// router.post('/create-checkout-session', async(req,res)=>{
//     const {product}=req.body;
//     console.log(product);
//     const session = await stripe.checkout.session.create({
//         payment_method_types: ['card'],
//         line_items: [
//             {
//                 price_data: {
//                     currency: 'usd',
//                     product_data: {
//                         name: product.name,
//                         // price_unit: product.price
//                     },
//                     unit_amount: product.price,
//                 },
//                 quantity: 1
//             }
//         ],
//         mode: 'payment',
//         success_url: `${process.env.CLIENT_URL}/success`,
//         cancel_url: `${process.env.CLIENT_URL}/cancel`
//     })

//     res.json({id: session.id })
// })


router.post('/create-checkout-session', async (req, res) => {
    try {
        console.log("Received request at /create-checkout-session");
        const { product } = req.body;
        console.log("Received product:", product);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: product.name,
                        },
                        unit_amount: product.price,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
        });

        console.log("Checkout session created:", session.id);
        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports=router;