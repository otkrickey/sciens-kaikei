import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const API_KEY = process.env.DB_API_KEY;
        if (!API_KEY) {
            throw new Error("Failure:Unconnected to MongoDB");
        }
        await mongoose.connect(API_KEY);
        console.log("Success:Connected to MongoDB");
    } catch (err) {
        console.log(err);
        console.log("Failure:Unconnected to MongoDB");
        throw new Error();
    }
};

export default connectDB;