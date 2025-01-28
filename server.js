import express from 'express'
import { mongooseConnect } from './Db_utils/mongoosedb.js';
import theaterRouter from './Routes/theater/theater.js';
import cors from 'cors';
import screenRouter from './Routes/screen/screen.js';
import movieRouter from './Routes/movie/movie.js';
import registerRouter from './Routes/Authentication/register.js';
import loginRouter from './Routes/Authentication/login.js';
import ticketRouter from './Routes/ticket/ticket.js';



const server = express(); // server creation

server.use(express.json()) // middleware 

server.use(cors()); // for cors error

await mongooseConnect(); // cloud db connection


//routers 

server.use('/theater', theaterRouter)
server.use('/theater/screen' ,screenRouter)
server.use('/movie', movieRouter)
server.use('/register', registerRouter)
server.use('/login', loginRouter)
server.use('/ticket', ticketRouter)

const port = 8000;
server.listen(port, ()=>{
    console.log(`server listen in port no : ${port}`);
})