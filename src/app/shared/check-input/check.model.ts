import { IMultiInput } from 'app/core/contracts/imulti-input';
export class Check implements IMultiInput{
    name: any;
    caption: any;
    value: any;

    constructor(name?: any,caption?: any, value?: any){
        this.name = name || null;
        this.caption = caption || null;
        this.value = value || null;
    }
}

