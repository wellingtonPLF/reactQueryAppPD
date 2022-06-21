import { Usuario } from "../../model/usuario";

class UsuarioNull extends Usuario {

    public get iduser(): string | undefined {
        return '0'
    }

    public get name(): string | undefined {
        return 'anything'
    }

    public get password() : string | undefined{
        return '@#!%&*';
      }
    
    public get email() : string | undefined {
        return 'example@gmail.com';
    }

    public get decisions() : Array<number> | undefined {
        return [];
    }
}

export default UsuarioNull;