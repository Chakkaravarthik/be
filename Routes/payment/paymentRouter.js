import express from 'express'
import Razorpay from 'razorpay';


const PaymentRouter= express.Router();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,     
    key_secret: process.env.RAZORPAY_SECRET,  
  });


PaymentRouter.post('/', async (req, res)=>{

    try {
        const options = {
          amount: req.body.amount * 100, //
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
        };
    
        const order = await razorpay.orders.create(options);
        res.json(order);
      } catch (error) {
        res.status(500).send(error);
      }

})

export default PaymentRouter;