export class Decision{
    idDecision?: string;
    name?: string;
    iduser?: number;

    constructor(id?: string, decision: Decision = {}) {
        this.idDecision = id;
        this.name = decision.name;
        this.iduser = decision.iduser;
    }
}