"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accounts_json_1 = __importDefault(require("./accounts.json"));
const accounts_1 = require("./utils/accounts");
const app = (0, express_1.default)();
const port = 3000;
const accounts = (0, accounts_1.createAccounts)(accounts_json_1.default);
const people = (0, accounts_1.createPeople)(accounts);
const merged = (0, accounts_1.mergeAccounts)(people);
console.log('merged', merged);
app.get('/', (req, res) => {
    res.send(merged);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map