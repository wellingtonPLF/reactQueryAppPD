import DecisionNull from "../../shared/solid/nullObject/decisionNull";

export default function myReducer(state = new DecisionNull(), action: any){
    switch (action.type){
        case 'Decision':
            return action.payload[0];
        default:
            return state;
    }
}