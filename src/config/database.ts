const mongoose=require("mongoose");


const connectDB=async()=>{
    await mongoose.connect(
        process.env.MONGO_URL
)};


export default connectDB;




