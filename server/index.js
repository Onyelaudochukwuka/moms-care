import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const CONNECTION_URL = `mongodb+srv://${process.env.USERNAME.toLowerCase()}:${process.env.PASSWORD}@cluster0.bmcxh.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log({ Error: error.message }));

// mongoose.set('useFindAndModify', false);
// https://mongodb.com/cloud/atlas