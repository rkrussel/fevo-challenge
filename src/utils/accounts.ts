import Person from '../models/Person';
import Account from '../models/Account';

export const createAccounts = (data: Array<any>): Account[] => {
    return data.map((account) => {
        return new Account(account.application, account.emails, account.name);
    })
}

export const createPeople = (accounts: Account[]): Person[] => {
    return accounts.map((account) => {
        return new Person([account.application], account.emails, account.name);
    })
}

export const mergeAccounts = (people: Person[]): Person[] => {
    const merged: Person[] = [];
    people.forEach(person => {
        const match = merged.find(m => m.emails.some(email => person.emails.includes(email)))

        if (match) {
            const emails = new Set([...match.emails, ...person.emails]);
            const apps = new Set([...match.applications, ...person.applications]);
            match.emails = Array.from(emails.values());
            match.applications = Array.from(apps.values());
        } else {
            merged.push(person)
        }
    });

    return merged;
}