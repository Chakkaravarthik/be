import mongoose from 'mongoose';

const movieshcema = new mongoose.Schema({
    id:{
        type:"String",
        required:true,
    },
    moviename:{
        type:"String",
        required:true,
    },
    movieimg:{
        type:"String",
        required:true,
    },
    movieticketprice:{
        type:"Number",
    }
})

const movieModel = new mongoose.model('movie', movieshcema , 'movies');

export default movieModel ;

