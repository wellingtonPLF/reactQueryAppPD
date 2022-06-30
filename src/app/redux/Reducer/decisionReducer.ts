
export default function decisionReducer(state = {}, action: any){
    switch (action.type){
        case 'Decisions':
            if (action.payload == null) {
                return null;
            }
            return action.payload
        default:
            return null;
    }
}