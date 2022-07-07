import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import AuthScript from "../../components/authentication/authScript";
import DecisionScript from "../../components/decisionComponent/decisionScript";
import PerfilScript from "../../components/perfilComponent/perfilScript";
import { setUser } from "../../redux/Action/usuarioAction";
import { Usuario } from "../../shared/model/usuario";
import { queryClient } from "../../shared/services/queryClient";
import userService from "../../shared/services/userService";
import UsuarioNull from "../../shared/solid/nullObject/usuarioNull";
import sessionStorage from "../../shared/utils/sessionStorage";
import './mainStyle.scss'

const mainLayout = () => {

    const user = useSelector( (state: any) => state.usuarioRedux)
    const dispatch = useDispatch()
    const [usuario, setUsuario] = useState<Usuario | null>();

    const dcRedux = useSelector( (state: any) => state.decisionRedux)

    // const { data } = 
    
    useQuery('user', () => {
        const token = sessionStorage.getToken('usuario')
        if(token){
            // const response = 
            userService.pesquisarPorId(parseInt(token)).then(
                it => {
                    user.iduser = it.iduser
                    user.name = it.name
                    user.password = it.password
                    user.email = it.email
                    user.decisions = it.decisions
                    setUser(user)
                    //return it
                    setUsuario(it)
                }
            )
            //return response
        }
    }, {
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false
    })

    const alterarEstado = () => {
        setUsuario(new UsuarioNull())
    }

    useEffect( () => {
        //queryClient.setQueryData('user', user)
        if (user){
            setUsuario(user)
        }
    }, [])

    useEffect( () => {
        if (user == null){
            // queryClient.setQueryData('user', null))
            setUsuario(null)
        }
    }, [user])

    return (
        <div className="pagina">
            <AuthScript alterarEstado={alterarEstado}/>
            <PerfilScript usuario={usuario} />
            <DecisionScript usuario={usuario} />
        </div>
    );
};

export default mainLayout;