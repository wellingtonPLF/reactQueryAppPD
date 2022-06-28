import { Usuario } from "../../shared/model/usuario";

export function setUser (usuario: Usuario | null){
    return{
        type: 'Usuario',
        payload: [usuario]
    }
}