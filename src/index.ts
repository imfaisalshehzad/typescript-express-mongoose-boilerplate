import express from "express";
import {json} from "body-parser";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/user";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(json());

app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

const startServer = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo_js:27017/expressjs?authSource=admin`);
        console.log('MongoDB connected..');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};

startServer().then(r => console.log('Server started successfully')).catch(e => console.error('Error starting server', e));
