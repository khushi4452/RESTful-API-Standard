import { Schema, model } from "mongoose";
const busSchema = new Schema (
    {
        busNo:{
            type: String,
            required: true,
            enum : ["111","654","786","999"],
        },
    }
)