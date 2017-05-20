export interface iAuth{
    login(user: string, password: string): boolean;
    logout(): void;
    getUser(): string;
    isLoggedIn(): boolean;
}