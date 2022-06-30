import { Decision } from "../../shared/model/decision";

export function setDecisions(decisions: Array<Decision> | null){
    return{        
        type: 'Decisions',
        payload: decisions
    }
}