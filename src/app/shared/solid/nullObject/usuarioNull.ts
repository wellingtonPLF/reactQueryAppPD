import { Usuario } from "../../model/usuario";

class UsuarioNull extends Usuario {

    public get iduser(): string | undefined {
        return undefined
    }

    public get name(): string | undefined {
        return ''
    }

    public get password() : string | undefined{
        return ''
      }
    
    public get email() : string | undefined {
        return ''
    }

    public get decisions() : Array<number> | undefined {
        return [];
    }
}

export default UsuarioNull;