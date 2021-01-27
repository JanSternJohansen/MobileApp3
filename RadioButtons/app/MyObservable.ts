import { Observable } from "@nativescript/core";

export class MyObservable extends Observable
{
    private _selectedIndex;
    private _name;
    private _names: string[];

    constructor(names: string[])
    {
        super();
        this._names = names;
    }
    
    public get name() {
        return this._name;
    }
    public set name(value)
    {
        this._name = value;
        this.notifyPropertyChange("name", value);
    }

    public get selectedIndex(): number {
        return this._selectedIndex;
    }
    public set selectedIndex(value: number) {
        this._selectedIndex = value;
        this.name = this._names[value];
    }
    

}