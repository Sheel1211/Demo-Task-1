import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { app } from "./app.js";
import { studentRoutes } from "./routes/studentRoutes.js";

mongoose.connect("mongodb://localhost:27017/Students").then(()=>{
    console.log("Successfully connected to the database");
}).catch((e)=>{
    console.log("error found" + e);
});
app.use(bodyParser.json());
app.use("/",studentRoutes);

app.get("/",(req,res)=>{
    res.send("I am server");
})

