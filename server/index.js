import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import AuthRoutes from './Routes/AuthRoutes.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoutes from './Routes/PostRoutes.js'
import cors from 'cors'
import UploadRoute from './Routes/UploadRoute.js'
const app=express();

//serving images for public

app.use(express.static('public'))
app.use('/images',express.static("images"))
app.use(cors());
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

dotenv.config()
mongoose.connect(process.env.MONGO_DB,
{useNewUrlParser:true, useUnifiedTopology: true})
.
then(()=>app.listen(process.env.PORT,()=>console.log(`Listening at the port ${process.env.PORT}`))).
catch((error)=> console.log(error));

//usage of routes

app.use('/auth', AuthRoutes)
app.use('/user', UserRoute)
app.use('/posts', PostRoutes)
app.use('/upload',UploadRoute)

