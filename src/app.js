import express from 'express';
import mongoose from 'mongoose';
const app = express();

app.use(express.json())

//routes

mongoose.connect("mongodb://localhost:27017/")
export const viteNodeApp = app