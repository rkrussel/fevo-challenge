export default class Person {
    applications: string[]
    emails: string[]
    name: string
    
    constructor(applications: string[], emails: string[], name: string) {
        this.applications = applications;
        this.emails = emails;
        this.name = name;
    }
}