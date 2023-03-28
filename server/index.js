import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import searchRoute from './routes/searchRoute.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/search', searchRoute);

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
