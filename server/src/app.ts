import express from 'express';
import { Request, Response, Application } from 'express';
import  Storage  from './Data';


const bodyParser = require('body-parser')
const cors = require('cors');

 const PRODUCTS  = Storage



const app: Application = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  allowedHeaders: ['Content-Type',],
}));

app.get('/api/products',cors(), (_req: Request, res: Response) => {
  return res
  .status(200)
  .json({ PRODUCTS: PRODUCTS });
});



export default app;