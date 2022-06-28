import { Decision } from "../../shared/model/decision";

export function setDecision(decision: Decision){
    return{
        type: 'Decision',
        payload: [decision]
    }
}