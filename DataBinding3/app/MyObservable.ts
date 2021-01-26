
import { Observable } from "@nativescript/core";

export class MyObservable extends Observable
{
    private _fromHere: string;
    private _toHere: string;

    constructor()
    {
        super();
        this.ToHere = "Here it comes.....";
        this.FromHere = "Write something.....";
    }

    set FromHere(value: string)
    {
        this._fromHere = value;
    }

    get FromHere(): string
    {
        return this._fromHere;
    }

    set ToHere(value: string)
    {
        this._toHere = value;
        this.notifyPropertyChange("ToHere", value);
    }

    get ToHere(): string
    {
        return this._toHere;
    }

    OnTap()
    {
        this.ToHere = this.FromHere;
    }


}