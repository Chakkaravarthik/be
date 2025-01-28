import express from 'express';
import movieModel from '../../Db_utils/models/movieModel.js';

const movieRouter = express.Router();


movieRouter.get('/', async(req,res)=>{

    try{
        let movies = await movieModel.find({});
        res.status(200).send({movies, code:1})
    }catch(e){
        console.log(e)
    }
})

export default movieRouter;