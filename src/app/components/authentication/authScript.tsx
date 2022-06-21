import { useEffect, useState } from 'react';
import { Usuario } from '../../shared/model/usuario';
import usuarioService from './../../shared/services/userService';
import AuthLayout from './authLayout';

const AuthScript = () => {
    const [usuario, setUsuario] = useState(new Usuario())

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
        // FireStore Array<Decision>
        // Spring Boot Array<number>
        usuario.decisions = new Array<number>();
    }, [])

    const cadastrarUsuario = () => {
        try {
            console.log('ok')
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
            <AuthLayout usuario={usuario} cadastrarUsuario={cadastrarUsuario} 
            setName={ChangeName} setPassword={ChangePassword} setEmail={ChangeEmail} />
        </>
    );
};

export default AuthScript;