
import { EventData, Frame, NavigatedData, Page, TextField } from '@nativescript/core';
import { MyData } from './MyData';

var myData: MyData;
var page: Page;


export function navigatingTo(args: NavigatedData) 
{
    console.log("I navigatingTo")
    page = <Page>args.object;

    if(!args.isBackNavigation)
    {
        myData = MyData.getObject();
    }
    else
    {
        var fromSecond: string = myData.Backward;
        var txtFromSecond: TextField = page.getViewById("txtFromSecond");
        txtFromSecond.text = fromSecond;
    }
}


export function onGoSecond(args: EventData)
{
    console.log("I onGoSecond");
    var txtWriteToSecond: TextField = page.getViewById("txtToSecond");
    myData.Forward = txtWriteToSecond.text;
    var navigationOptions =
    {
        moduleName: "./Second/second-page",
        context:
        {
            myData: myData,
            param1: "Hej fra Main"
        }
    }
    Frame.topmost().navigate(navigationOptions);
}
