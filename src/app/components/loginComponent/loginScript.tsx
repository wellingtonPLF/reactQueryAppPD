import { useEffect, useState } from 'react';
import { Usuario } from '../../shared/model/usuario';
import usuarioService from './../../shared/services/userService';
import LoginLayout from './loginLayout';
import sessionStorage from '../../shared/utils/sessionStorage';
import UsuarioNull from '../../shared/solid/nullObject/usuarioNull';

const LoginScript = () => {
    const [usuario, setUsuario] = useState(new UsuarioNull())

    const ChangeUser = () => {
        setUsuario(new UsuarioNull())
    }

    const ChangeName = (name: string) => {
        if (usuario != undefined){
            setUsuario(new Usuario(usuario.iduser, name, usuario.password, usuario.email, usuario.decisions ))
        }
    }

    const ChangePassword = (password: string) => {
        if (usuario != undefined){
            setUsuario(new Usuario(usuario.iduser, usuario.name, password, usuario.email, usuario.decisions ))
        }
    }

    const logarUsuario = () => {
        try {          
            if (usuario?.name != undefined && usuario?.password != undefined){
                usuarioService.getUserByNome(usuario).then(
                    it => {
                        if (it[0] == undefined){
                            ChangeUser()
                            throw new Error('Esse usuario não existe 1!')
                        }
                        const id = it[0].iduser
                        if(id != undefined){
                            usuarioService.pesquisarPorId(id).then(
                              result => {
                                if (result.password == usuario.password){
                                    console.log('ok')
                                    sessionStorage.setToken('usuario', id)
                                }
                                else{
                                  throw new Error('Esse usuario não existe 2!')
                                }
                              }
                            )
                        }
                    }
                )
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <LoginLayout usuario={usuario} logarUsuario={logarUsuario} setUser={ChangeUser}
            setName={ChangeName} setPassword={ChangePassword}  />
        </>
    );
};

export default LoginScript;