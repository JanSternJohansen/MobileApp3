
import { EventData, Page } from '@nativescript/core';
import { MyObservable } from './MyObservable';

var names: string[] = ["Viktor", "Mikkel", "Ali", "Nicklas", "Jan"];

export function navigatingTo(args: EventData) 
{
    const page = <Page>args.object;

    page.bindingContext = new MyObservable(names);
}

export function onItemPressed(args: EventData)
{
    
}
