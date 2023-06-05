import express from 'express';
import mongoose from 'mongoose';
const app = express();
import comicRouter from "./routers/comic"
import categoryRouter from "./routers/category"
import authorRouter from "./routers/author"
import userRouter from "./routers/user"

app.use(express.json())

//routes
app.use("/api", authorRouter);
app.use("/api", comicRouter);
app.use("/api", categoryRouter);
app.use("/api", userRouter);

mongoose.connect("mongodb://localhost:27017/GW2")
export const viteNodeApp = app