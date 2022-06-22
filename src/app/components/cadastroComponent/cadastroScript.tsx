import { useEffect, useState } from 'react';
import { Usuario } from '../../shared/model/usuario';
import usuarioService from './../../shared/services/userService';
import CadastroLayout from './cadastroLayout';

const CadastroScript = () => {
    const [usuario] = useState(new Usuario())

    const ChangeName = (name: string) => {
        usuario.name = name
    }

    const ChangeEmail = (email: string) => {
        usuario.email = email;
    }

    const ChangePassword = (password: string) => {
        usuario.password = password;
    }

    useEffect( () => {
        usuario.decisions = new Array<number>();
    }, [])

    const cadastrarUsuario = () => {
        try {            
            usuarioService.inserir(usuario).then(
                it => {}
            )
        }
        catch (e) {
            console.log("Dados em Falta!")
        }
    }

    return (
        <>
            <CadastroLayout usuario={usuario} cadastrarUsuario={cadastrarUsuario} 
            setName={ChangeName} setPassword={ChangePassword} setEmail={ChangeEmail} />
        </>
    );
};

export default CadastroScript;