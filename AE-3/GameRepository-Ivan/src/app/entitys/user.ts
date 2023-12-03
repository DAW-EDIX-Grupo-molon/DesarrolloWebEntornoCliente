export class User {

    private _userMail: string
    private _password: string
    private _userName: string
    private _access: boolean;

    constructor () {}

    //Getter and Setter
    public get userMail(): string {
        return this._userMail
    }
    public set userMail(value: string) {
        this._userMail = value
    }
    public get password(): string {
        return this._password
    }
    public set password(value: string) {
        this._password = value
    }
    public get userName(): string {
        return this._userName
    }
    public set userName(value: string) {
        this._userName = value
    }

    public get access(): boolean {
        return this._access
    }
    public set access(value: boolean) {
        this._access = value
    }

    public toString():string {
        return `Mail: ${this._userMail} | Username: ${this._userName}`
    }

}
