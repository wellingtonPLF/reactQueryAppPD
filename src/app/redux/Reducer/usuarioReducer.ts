import UsuarioNull from "../../shared/solid/nullObject/usuarioNull";

export default function myReducer(state = new UsuarioNull(), action: any){
    switch (action.type){
        case 'Usuario':
            return action.payload[0];
        default:
            return state;
    }
}