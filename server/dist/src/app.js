"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MilkData_json_1 = __importDefault(require("../data/MilkData.json"));
const bodyParser = require('body-parser');
const cors = require('cors');
const PRODUCTS = MilkData_json_1.default;
const app = (0, express_1.default)();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-Type',],
}));
app.get('/api/products', cors(), (_req, res) => {
    return res
        .status(200)
        .json({ PRODUCTS: PRODUCTS });
});
// app.get('/api/puppies/:id',cors(), (_req: Request, res: Response) => {
//   const puppyId = +((_req.params as {id:string}).id)
//   const puppyIndex = PUPPIES.findIndex(puppy => puppy.id === puppyId) 
//   if(puppyIndex === -1){
//     throw new Error ('puppy missing')
//   }
//   const puppyInfo = PUPPIES[puppyIndex]
//   return res.status(200).json({puppy : puppyInfo})
// });
// app.post('/api/puppies',cors(), (_req: Request, res: Response) => {
//   const {name,breed,birthDate, img} = _req.body;
//   const newPuppy = new Puppy (Date.now(), breed, name, birthDate, img);
//   PUPPIES.push(newPuppy);
//   return res.status(201).json({message: 'new puppy added' , puppies: PUPPIES})
// });
// app.put('/api/puppies/:id',cors(), (_req: Request, res: Response) => {
//   const puppyId = +((_req.params as {id: string}).id);
//   const updatedName = (_req.body as { name: string }).name;
//     const updatedBreed = (_req.body as { breed: string }).breed;
//     const updatedBd = (_req.body as { birthDate: string }).birthDate;
//     const img = (_req.body as { img: string }).img;
//   const puppyIndex = PUPPIES.findIndex(puppy=> puppy.id === puppyId);
//   if (puppyIndex === -1){
//     throw new Error ('puppy not found')
//   }
//   PUPPIES[puppyIndex] = new Puppy(puppyId, updatedBreed, updatedName,updatedBd, img);
//   res.status(200).json({message: ' updated' , updatePuppy: PUPPIES[puppyIndex]})
// });
// app.delete('/api/puppies/:id',cors(), (_req: Request, res: Response) => {
//   const puppyId = +((_req.params as {id: string}).id);
//   const puppyIndex = PUPPIES.findIndex(puppy=> puppy.id === puppyId);
//   if (puppyIndex === -1){
//     throw new Error ('puppy not found')
//   }
//  PUPPIES.splice(puppyIndex, 1)
//   res.status(200).json({message: ' puppy deleted'})
// });
exports.default = app;
//# sourceMappingURL=app.js.map