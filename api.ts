import express, { Request, Response } from 'express';
import { join } from 'path';
import * as fs from 'fs';
const { version } = require('./data/json/api.json');
const app = express();
const PORT = 3000;

function responseFile(path: string){
    return JSON.parse(fs.readFileSync(path, "utf8"));
}

app.get('/', (req: Request, res: Response) => {
  res.json(responseFile("data/json/api.json"));
});

app.get('/team', (req: Request, res: Response) => {
    res.json(responseFile("data/json/team.json"));
});

app.get('/messages', (req: Request, res: Response) => {
    res.json(responseFile("data/json/messages.json"));
});

app.get('/latestVersion/:platform', (req: Request, res: Response) => {
  res.json(responseFile(`data/json/latestVersion${req.params.platform}.json`));
});

app.get('/staff/:name/photo', (req: Request, res: Response) => {
    res.json(responseFile(`data/img/staff_${req.params.name}.json`));
});


app.listen(PORT, () => {
  console.log(`PapiAPI est joignable via le port ${PORT} en version ${version} !`);
});
