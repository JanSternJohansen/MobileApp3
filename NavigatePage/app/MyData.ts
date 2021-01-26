
export  class MyData
{
    static myData: MyData;
    private constructor()
    {
    }

    public static getObject(): MyData
    {
        if(!MyData.myData)
        {
            MyData.myData = new MyData();
        }
        return MyData.myData;
    }


    private _forward: string;
    private _backward: string;

    set Forward(value: string)
    {
        this._forward = value;
    }
    get Forward(): string
    {
        return this._forward;
    }
    set Backward(value: string)
    {
        this._backward = value;
    }
    get Backward(): string
    {
        return this._backward;
    }
}