import { EventData, Observable, Page} from '@nativescript/core';

export function navigatingTo(args: EventData) 
{
    const page = <Page>args.object;

    var obs: Observable = new Observable();
    page.bindingContext = obs;

    obs.set("ToHere", "Her kommer det.....");
    obs.set("FromHere", "Skriv noget....");
    obs.set("OnTap", function(args: EventData)
    {
        var from: String = obs.get("FromHere");
        obs.set("ToHere", from);
    });

}
