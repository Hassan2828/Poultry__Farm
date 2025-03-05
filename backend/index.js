import express from 'express';

import mongoose from 'mongoose';
const app = express();

import cors from 'cors';
app.use(cors());

import { RegisterRouter } from './routers/authentication/register.js';
import { LoginRouter } from './routers/authentication/login.js';

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/Anons')

app.use('/', RegisterRouter);
app.use('/', LoginRouter);
app.listen(8000,()=>{
    console.log("Server is on port 8000");
})