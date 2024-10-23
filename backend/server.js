import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; //User different port for the backend

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes); // Mount user routes

//Connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }   
};

// Connect to MongoDB
connectToDatabase();

//Sample route
app.get('/', (req, res) => {
    res.send('Welcome to afuentes-portfolio API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});