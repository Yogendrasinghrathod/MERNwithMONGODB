
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { Server } from 'socket.io';
import http from 'http';
import bodyParser from 'body-parser';
import { Socket } from 'dgram';

import authRoutes from './routes/auth.js'
import express from 'express'
const app=express();


app.use('/auth',authRoutes);

app.use(express.json());
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(cors());


const server=http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:'*',
        method:['GET','POST','PUT','DELETE']
    }
});


//socket Connection
io.on("connection",(socket)=>{
    console.log("User connected")
    roomHandler(socket);
    socket.on('disconnect',()=>{
        console.log("user disconnected");
    })
})


const PORT=process.env.PORT || 4000;
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    server.listen(PORT,()=>{
        console.log("running on PORT - ",PORT)
    });
})
.catch((err)=>{
    console.log('Error ',err);
})

