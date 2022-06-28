
export default function decisionReducer(state = null, action: any){
    switch (action.type){
        case 'Decisions':
            return action.payload[0];
        default:
            return state;
    }
}