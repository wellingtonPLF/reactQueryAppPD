import { Usuario } from "../../shared/model/usuario";

export function setUser (usuario: Usuario){
    return{
        type: 'Usuario',
        payload: [usuario]
    }
}