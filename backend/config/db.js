import mongoose from "mongoose"

 
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ashufatke03:9545ashu9923@cluster0.7mh47.mongodb.net/EDUNET').then(()=>console.log("DB connected"));
}