

import express from 'express';
import router from './routes/route.js';
import connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const port = process.env.PORT || 8000;
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);
app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`);
});

connection();

