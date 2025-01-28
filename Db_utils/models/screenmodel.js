import mongoose from 'mongoose';

const screenshcema = new mongoose.Schema({
    id:{
        type:"String",
        required:true,
    },
    screenname:{
        type:"String",
        required:true,
    },
    screencapacity:{
        type:"Number",
        required:true,
    },
    timeslotsIds:{
        type:"Array",
    },
    theaterId:{
        type:"String",
    }
})

const screenModel = new mongoose.model('screen', screenshcema , 'screens');

export default screenModel ;

