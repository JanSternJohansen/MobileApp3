
export class Person
{
    name: string;
    id: number;

    constructor(name: string)
    {
        this.name = name;
        this.id = new Date().getTime() * 10000 + Math.random() * 10000;
    }
}