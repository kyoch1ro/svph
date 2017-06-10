export class Profile{
    email: string;
    firstname: string;
    lastname: string;
    gender: string;
    age: string;
    password: string;

    constructor(obj?: any){
        this.email = obj && obj.email || null;
        this.firstname = obj && obj.firstname || null;
        this.lastname = obj && obj.lastname || null;
        this.gender = obj && obj.gender || null;
        this.age = obj && obj.age || null;
        this.password = obj && obj.password || null;
    }




    register(): void{

    }
}