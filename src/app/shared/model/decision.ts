export class Decision{

    private _idDecision?: string;
    private _name?: string;
    private _iduser?: number;

    constructor(id?: string, name?: string, iduser?: number) {
        this._idDecision = id;
        this._name = name
        this._iduser = iduser
    }

    public get idDecision() : string | undefined{
        return this._idDecision;
    }

    public set idDecision(idDecision: string | undefined) {
        this._idDecision = idDecision;
    }

    public get name() : string | undefined{
        return this._name;
    }

    public set name(name: string | undefined) {
        this._name = name;
    }

    public get iduser() : number | undefined{
        return this._iduser;
    }

    public set iduser(iduser: number | undefined) {
        this._iduser = iduser;
    }
}