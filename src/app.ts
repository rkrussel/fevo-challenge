import express, { json } from 'express';
import data from './accounts.json';
import { createAccounts, createPeople, mergeAccounts } from './utils/accounts';

const app = express();
const port = 3000;

const accounts = createAccounts(data);
const people = createPeople(accounts);
const merged = mergeAccounts(people);
console.log('merged', merged);

app.get('/', (req, res) => {
    res.send(merged);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});