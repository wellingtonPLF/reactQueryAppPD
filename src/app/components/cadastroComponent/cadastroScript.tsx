import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usuario } from '../../shared/model/usuario';
import userService from './../../shared/services/userService';
import usuarioService from './../../shared/services/userService';
import CadastroLayout from './cadastroLayout';

const CadastroScript = () => {
    const [usuario, setUsuario] = useState(new Usuario(undefined, "", "", "", undefined))
    const navegate = useNavigate()
    const [counting, setCounting] = useState<number>(0)
    const [notOk, setIsNotOk] = useState<boolean>(false);

    const ChangeName = (name: string) => {
        if (usuario != undefined){
            setUsuario(new Usuario(usuario.iduser, name, usuario.password, usuario.email, usuario.decisions ))
        }
    }

    const ChangeEmail = (email: string) => {
        if (usuario != undefined){
            setUsuario(new Usuario(usuario.iduser, usuario.name, usuario.password, email, usuario.decisions ))
        }
    }

    const ChangePassword = (password: string) => {
        if (usuario != undefined){
            setUsuario(new Usuario(usuario.iduser, usuario.name, password, usuario.email, usuario.decisions ))
        }
    }

    useEffect( () => {
        usuario.decisions = new Array<number>();
    }, [])

    const cadastrarUsuario = () => {
        try {
            if (usuario.name != undefined && usuario.password != undefined && usuario.email != undefined){
                userService.getUserByNome(usuario).then(
                    result => {
                        if (result[0]) {
                            setIsNotOk(true)
                            setCounting(counting + 1)
                            throw new Error("Um usuario com o mesmo nome já existe!")
                        }
                        else{
                            usuarioService.inserir(usuario).then(
                                it => {
                                    navegate("/")
                                }
                            )
                        }
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
            <CadastroLayout usuario={usuario} cadastrarUsuario={cadastrarUsuario} fine={notOk} counting={counting}
            setName={ChangeName} setPassword={ChangePassword} setEmail={ChangeEmail} />
        </>
    );
};

export default CadastroScript;