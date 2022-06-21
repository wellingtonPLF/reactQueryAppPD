export class Usuario{

  private _iduser?: string;
  private _name?: string;
  private _password?: string;
  private _email?: string;
  private _decisions?: Array<number>;

  constructor(iduser?: string,  name?: string, password?: string, email?: string, decisions?: Array<number>) {
    this._iduser = iduser;
    this._name = name;
    this._password = password;
    this._email = email;
    this._decisions = decisions;
  }

  public get iduser() : string | undefined{
    return this._iduser;
  }

  public get name() : string | undefined {
    return this._name;
  }

  public get password() : string | undefined{
    return this._password;
  }

  public get email() : string | undefined {
    return this._email;
  }

  public get decisions() : Array<number> | undefined {
    return this._decisions;
  }

  public set iduser(iduser: string | undefined) {
    this._iduser = iduser;
  }

  public set name(name: string | undefined) {
    this._name = name;
  }

  public set password(password: string | undefined) {
    this._password = password;
  }

  public set email(email: string | undefined) {
    this._email = email;
  }

  public set decisions(decisions: Array<number> | undefined) {
    this._decisions = decisions;
  }

}