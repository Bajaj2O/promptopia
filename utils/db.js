import mongoose from "mongoose";
let isConnect = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnect) return;

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        isConnect = true;
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}   

export default connectDB;