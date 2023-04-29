import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/todo.js';
import {sequlize} from './models/index.js';
import cors from 'cors';
import { Todo } from './models/index.js';

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

app.use('/todo', router);


app.get('/todo', (req, res) => {
    res.send('My to Do App');
});