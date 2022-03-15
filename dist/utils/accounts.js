"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAccounts = exports.createPeople = exports.createAccounts = void 0;
const Person_1 = __importDefault(require("../models/Person"));
const Account_1 = __importDefault(require("../models/Account"));
const createAccounts = (data) => {
    return data.map((account) => {
        return new Account_1.default(account.application, account.emails, account.name);
    });
};
exports.createAccounts = createAccounts;
const createPeople = (accounts) => {
    return accounts.map((account) => {
        return new Person_1.default([account.application], account.emails, account.name);
    });
};
exports.createPeople = createPeople;
const mergeAccounts = (people) => {
    const merged = [];
    people.forEach(person => {
        const match = merged.find(m => m.emails.some(email => person.emails.includes(email)));
        if (match) {
            const emails = new Set([...match.emails, ...person.emails]);
            const apps = new Set([...match.applications, ...person.applications]);
            match.emails = Array.from(emails.values());
            match.applications = Array.from(apps.values());
        }
        else {
            merged.push(person);
        }
    });
    return merged;
};
exports.mergeAccounts = mergeAccounts;
//# sourceMappingURL=accounts.js.map