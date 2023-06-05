import express from 'express';
import mongoose from 'mongoose';
const app = express();
import userRouter from "./routers/user"
import authorRouter from "./routers/author"
import comicRouter from "./routers/comic"
import categoryRouter from "./routers/category"

app.use(express.json())

//routes
app.use("/api", categoryRouter);
app.use("/api", comicRouter);
app.use("/api", authorRouter);


mongoose.connect("mongodb://localhost:27017/")
export const viteNodeApp = app