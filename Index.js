import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/gym.js';
import {sequlize} from './models/index.js';
import cors from 'cors';
import { Gym } from './models/index.js';

const app = express();
const port = 3090;

app.use(bodyParser.json());
app.use(cors());


sequlize.sync()
.then(() => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});

app.use('/gym', router);


app.get('/gym', (req, res) => {
    res.send('My to Do App');
});