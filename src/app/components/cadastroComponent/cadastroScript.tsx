import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usuario } from '../../shared/model/usuario';
import usuarioService from './../../shared/services/userService';
import CadastroLayout from './cadastroLayout';

const CadastroScript = () => {
    const [usuario, setUsuario] = useState(new Usuario())
    const navegate = useNavigate()

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
            if (usuario.name != undefined && usuario.password != undefined && usuario.email != undefined){
                usuarioService.inserir(usuario).then(
                    it => {
                        navegate("/")
                    }
                )
            }
            else{
                throw new Error("Really? You didn't passed nothing!")
            }
        }
        catch (e) {
            console.log(e)
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