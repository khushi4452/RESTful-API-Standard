import express from 'express';
import mongoose from 'mongoose';
const express = require('express');
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const connDB = async ()=>{
  try {
   const conn = await mongoose.connect(process.env.MONGO_DB_URI);

   if(conn) {
     console.log("MongoDb connected successfully");
  }
  
  }catch(error){
  console.error("Error connecting to MongoDB:", error.message);
  }
  };
  connDB();
      
   

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});