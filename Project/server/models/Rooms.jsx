import mongoose from "mongoose";

const roomSchema=mongoose.Schema({
    roomName:{
        type:String,
    },
    host:{
        type:String,
        require:true,
    },
    meetType:{
        type:String,
    },
    meetDate:{
        type:String,
    },
    meetTime:{
        type:String,
    },
    participants:{
        type:Array,
    },
    currentParticipants:{
        type:Array
    }    
},{Timestamp:true})

const Rooms=mongoose.model("rooms",roomSchema);
export default Rooms;