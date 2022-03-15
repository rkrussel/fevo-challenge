import express, { json } from 'express';
import data from './accounts.json';
import Account from './models/Account';
import Person from './models/Person';
import { createAccounts, createPeople, mergeAccounts } from './utils/accounts';

const app = express();
const port = 3000;

const accounts: Account[] = createAccounts(data);
const people: Person[] = createPeople(accounts);
const merged: Person[] = mergeAccounts(people);
console.log('merged', merged);

app.get('/', (req, res) => {
    res.send(merged);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});