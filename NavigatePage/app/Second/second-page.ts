import { EventData, Page, TextField } from "@nativescript/core";
import { MyData } from "~/MyData";

var myData: MyData;
var page: Page;

export function onNavigatingTo(args: EventData)
{
    page = <Page>args.object;
    myData = page.navigationContext.myData;
    var par1: string = page.navigationContext.param1;

    var txtFromMain: TextField = page.getViewById("txtFromMain");
    txtFromMain.text = myData.Forward;
}

export function onGoMain(args: EventData)
{
    var txtToMain: TextField = page.getViewById("txtToMain");
    myData.Backward = txtToMain.text;
    page.frame.goBack();
}