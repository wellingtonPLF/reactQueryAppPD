import { Decision } from "../../model/decision";

class DecisionNull extends Decision {

    public get idDecision(): number | undefined {
        return undefined    
    }
    
    public get name(): string | undefined {
        return 'Nothing'
    }

    public get iduser(): number | undefined {
        return undefined
    }
}

export default DecisionNull;
