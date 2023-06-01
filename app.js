import express from "express";

export const app=express();

app.listen(4000,(req,res)=>{
    console.log("connected to port 4000");
})