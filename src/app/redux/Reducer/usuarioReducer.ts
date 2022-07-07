import { Usuario } from "../../shared/model/usuario";

const usuario = new Usuario()

export default function usuarioReducer(state = usuario, action: any){
    switch (action.type){
        case 'Usuario':
            return action.payload
        default:
            return state;
    }
}
