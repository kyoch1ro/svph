export interface ILogin{
    loginMsg: string;
    isSigningIn: boolean;
    loginIsSuccess: boolean;
    login(form: any);
}