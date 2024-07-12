import express from 'express';
import dotenv from 'dotenv';
import UserRoute from './Routes/UserRoute.js'; // Ensure this path is correct

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/api', UserRoute);

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
