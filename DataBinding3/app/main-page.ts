import { EventData, Observable, Page} from '@nativescript/core';
import { MyObservable } from './MyObservable';

export function navigatingTo(args: EventData) 
{
    const page = <Page>args.object;

    var myObs: MyObservable = new MyObservable();
    page.bindingContext = myObs;
    
}
