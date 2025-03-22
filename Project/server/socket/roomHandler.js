import { Socket } from "socket.io";
import Rooms from "../models/Rooms";
import User from "../models/User";


const roomHandler=(socket)=>{


    //creating a room with RoomSchema
    socket.on('create-room',async({userId,roomName,newMeetType,newMeetDate,newMeetTime})=>{
        const newRoom = new Rooms({
            roomName:roomName,
            host:userId,
            meetType:newMeetType,
            meetDate:newMeetDate,
            meetTime:newMeetTime,
            participants:[],
            currentParticipants:[],
        });
        const Room= await newRoom.save();
        await socket.emit("room-created",{roomId: room._id,meetType:newMeetType});
    });



    //This checks the code to join is valid or not ?

    socket.on('user-code-join',async({roomId})=>{
        const room = await Rooms.findOne({_id:roomId});
        if(room){
            await socket.emit("room-exits",{roomId});

        }
        else{
            socket.emit("room-not-exist");
        }
    });


    //When user request to join an meeting that is private

    socket.on('request-to-join-room',async({roomId})=>{
        const room =await Rooms.findOne({_id:roomId});
        if(userId==room.host){
            socket.emit('join-room',{roomId, userId});
        }
        else{
            socket.emit("requesting-host",{userId});
            socket.broadcast.to(roomId).emit('user-requested-to-join',{participantId:userId,hostId:room.hostId})
        }
    });


    //this is when we provide an option to join the meet ,  and add particpanstr to current particpants
    socket.on("join-room" , async({roomId,userId})=>{
        await Rooms.updateOne({_id: roomId},{$addToSet:{participants:userId}});
        await Rooms.updateOne({_id: roomId},{$addToSet:{currentParticipants:userId}});
        await socket.join(roomId);
        console.log(`User : ${user.Id} joined room ${roomId}`);
        await socket.broadcast.to(roomId).emit("user-joined",{userId});
        
    });


    //

    socket.on("get-participants",async({roomId})=>{
        const room =await Rooms.findOne({_id:roomId});
        const roomName=room.roomName;
        const participants=room.currentParticipants;
        const username={};
        const users=await User.find(
            {_id:{$in:participants}},
            {_id:1,username:1}
        ).exec()
        users.forEach(user=>{
            const {_id , username}=user;
            username[_id.valueOf().toString()]=username;
        });
        socket.emit("participants-list",{username,roomName});

    });

    socket.on("fetch-my-meets",async({userId})=>{
        const meets=await Rooms.find({host :userId},{_id:1,roomName:1,meetType:1,meetDate:1,meetTime:1})
        await socket.emit("meets-fetched",{myMeets:meets})
    });

    socket.on("delete-meet", async ({ roomId }) => {
        await Rooms.deleteOne({ _id: roomId });
        socket.emit("room-deleted");
    });
    socket.on("update-meet-details", async ({ roomId, roomName, newMeetDate, newMeetTime }) => {
        await Rooms.updateOne({ _id: roomId }, { $set: { roomName: roomName, newMeetDate: newMeetDate, newMeetTime: newMeetTime } });
        socket.emit("meet-details-updated");
    });
    
    socket.on("user-left-room", async ({ userId, roomId }) => {
        await Rooms.updateOne({ _id: roomId }, { $pull: { currentParticipants: userId } });
        await socket.leave(roomId);
    });
    
    socket.on("user-disconnected", async ({ userId, roomId }) => {
        console.log(`User: ${userId} left room ${roomId}`);
    });
    
    


}