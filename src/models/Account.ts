export default class Account {
    application: string
    emails: string[]
    name: string

    constructor(application: string, emails: string[], name: string) {
        this.application = application;
        this.emails = emails;
        this.name = name;
    }
}