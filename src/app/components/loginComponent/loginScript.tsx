import { useState } from 'react';
import { Usuario } from '../../shared/model/usuario';
import usuarioService from './../../shared/services/userService';
import LoginLayout from './loginLayout';
import sessionStorage from '../../shared/utils/sessionStorage';
import UsuarioNull from '../../shared/solid/nullObject/usuarioNull';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/Action/usuarioAction';

const LoginScript = () => {
    const [usuario, setUsuario] = useState(new UsuarioNull())
    const navegate = useNavigate()
    const user = useSelector( (state: any) => state.usuarioRedux)
    const [countFails, setCountFails] = useState(0)
    const [loginAcception, setLoginAcception ] = useState(false)
    const dispatch = useDispatch();

    const ChangeNoUser = () => {
        setUsuario(new UsuarioNull())
    }

    const HandleCount = () => {
        setLoginAcception(true)
        setCountFails(countFails+1)
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
                            ChangeNoUser()
                            HandleCount()
                            throw new Error('Esse usuario não existe 1!')
                        }
                        const id = it[0].iduser
                        if(id != undefined){
                            usuarioService.pesquisarPorId(id).then(
                              result => {
                                if (result.password == usuario.password){
                                    sessionStorage.setToken('usuario', id)
                                    setLoginAcception(false)
                                    // const resultado = new Usuario(result.iduser,result.name, result.password, result.email, result.decisions)
                                    user.iduser = result.iduser
                                    user.name = result.name
                                    user.password = result.password
                                    user.email = result.email
                                    user.decisions = result.decisions
                                    setUser(user)
                                    navegate("/")
                                }
                                else{
                                    HandleCount()
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
            <LoginLayout usuario={usuario} logarUsuario={logarUsuario} setName={ChangeName}
            setPassword={ChangePassword} countFails={countFails} loginAccepted={loginAcception}/>
        </>
    );
};

export default LoginScript;