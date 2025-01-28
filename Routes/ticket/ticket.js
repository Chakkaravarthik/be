import express from 'express'
import ticketModel from '../../Db_utils/models/ticketModel.js';
import userModel from '../../Db_utils/models/userModel.js';


const ticketRouter = express.Router();




ticketRouter.post("/", async (req, res) => {
    const { movie_name, no_of_tickets, ticketrate, userId } = req.body;

    try {
        // Create a new ticket entry
        const newTicket = new ticketModel({
            id: Date.now().toString(), 
            movie_name: movie_name,
            no_of_tickets: no_of_tickets,
            ticketrate: ticketrate
        });

       
        const newTicketRes = await newTicket.save();

      
        const user = await userModel.findOne({ id: userId });

        if (!user) {
            return res.status(404).send({ msg: "User not found" });
        }

       
        user.tickets.push(newTicketRes);

       
        await user.save();

      
        res.status(200).send({ msg: "Ticket booked successfully", ticket: newTicketRes });

        console.log(newTicketRes);

    } catch (e) {
        console.error("Error booking ticket:", e);
        res.status(500).send({ msg: "An error occurred while booking the ticket", error: e.message });
    }
});


export default ticketRouter;