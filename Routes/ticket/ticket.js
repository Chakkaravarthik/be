import express from 'express'
import ticketModel from '../../Db_utils/models/ticketModel.js';
import userModel from '../../Db_utils/models/userModel.js';


const ticketRouter = express.Router();


ticketRouter.get("/", async (req, res) => {
    try {

        res.status(200).send({ msg: "get working" });
    } catch (e) {
        console.log(e);
    }
})




ticketRouter.post("/", async (req, res) => {


    try {


        const { moviename, count, movieticketprice, response, customerobj,movieimg } = req.body;

        const { razorpay_payment_id } = response;

        const { id } = customerobj;

        console.log(req.body);


        // Create a new ticket entry
        const newTicket = new ticketModel({
            id: Date.now().toString(),
            movie_name: moviename,
            no_of_tickets: count,
            ticketrate: movieticketprice,
            orderId: razorpay_payment_id,
        });


        const newTicketRes = await newTicket.save();


        const user = await userModel.findOne({ id: id });

        if (!user) {
            return res.status(404).send({ msg: "User not found" });
        }



        console.log("ticket res", newTicketRes);

        user.tickets.push(newTicketRes);


        await user.save();


        res.status(200).send({ msg: "Ticket booked successfully", ticket: newTicketRes , code:1 ,movieimg});


    } catch (e) {
        console.error("Error booking ticket:", e);
        res.status(500).send({ msg: "An error occurred while booking the ticket", error: e.message });
    }
});


export default ticketRouter;