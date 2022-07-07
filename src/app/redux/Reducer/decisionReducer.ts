import { Decision } from "../../shared/model/decision";

const decisions = new Array<Decision>()

export default function decisionReducer(state = decisions, action: any){
    switch (action.type){
        case 'Decisions':
            return action.payload
        default:
            return state;
    }
}