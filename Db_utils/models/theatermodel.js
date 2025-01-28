import mongoose from 'mongoose';


const ThearterSchema = new mongoose.Schema({
    id:{
        type:"String",
        required:true,
    },
    theatername:{
        type:"String",
        required:true,
    },
    theateremail:{
        type:"String",
        required:true,
    },
    theaterphonenumber:{
        type:"String",
    },
    theateraddress:{
      type:"String",
    },
    screens:{
        type:"array"
    }
})

const theaterModel = new mongoose.model('theater', ThearterSchema, 'theaters');


export default theaterModel;