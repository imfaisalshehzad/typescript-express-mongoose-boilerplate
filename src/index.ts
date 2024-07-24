import express from "express";
import {json} from "body-parser";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(json());

app.get("/", (req, res) => {
    res.send("Hello World!!!!");
});

const startServer = async () => {
    try {
        await mongoose.connect(`${process.env.MONOGO_DB_URI}`);
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
