import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/accounts.js';

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/users', userRoutes);

const CONNECTION_URL = 'mongodb+srv://cluster0.ptwo2.mongodb.net/myFirstDatabase';
const PORT = process.env.PROT || 5005;

app.get('/users', (req, res) => {
    res.send('Users are Gamers')
})

app.get('/', (req, res) => {
    res.send('Hello Gamers!'); 
});

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log(`Server Running on Port: ${PORT}`)
    }))
    .catch((error) => console.log(`${error} did not connect`));

