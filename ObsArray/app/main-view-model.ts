import { Observable, ObservableArray } from '@nativescript/core';
import { Person } from './Person';

export class ViewModel extends Observable 
{
    items: ObservableArray<Person>;
    newName: string;

    constructor()
    {
        super();
        this.items = new ObservableArray<Person>(
            [new Person("Mikkel"), 
            new Person("Rasmus"), 
            new Person("Tobias"), 
            new Person("Viktor") 
            //new Person("Lucas"), 
            //new Person("Tobias"), 
            //new Person("Jonas")]
            ]);
    }

    addItem()
    {
        this.items.push(new Person(this.newName));
    }

}
