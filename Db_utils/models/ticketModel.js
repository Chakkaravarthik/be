import mongoose from "mongoose";

//schema creation 

const ticketSchema = new mongoose.Schema({
    id:{
        type:"String",
        required:true,
    },
    movie_name:{
        type:"String",
        required:true,
    },
    no_of_tickets:{
        type:"String",
        required:true,
    },
    ticketrate:{
        type:"String",
        required:true,
    },
    orderId:{
        type:"String",
        required:true,
    }
})

const ticketModel = new mongoose.model('ticket', ticketSchema, 'tickets');

export default ticketModel;