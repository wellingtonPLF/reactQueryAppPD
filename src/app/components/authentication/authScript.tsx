import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDecisions } from '../../redux/Action/decisionAction';
import { setUser } from '../../redux/Action/usuarioAction';
import sessionStorage from '../../shared/utils/sessionStorage';
import AuthLayout from './authLayout';

interface Props {
    alterarEstado: () => void;
}

const AuthScript = ({alterarEstado}: Props) => {
    const [token, setToken] = useState<number | undefined>()
    const dcRedux = useSelector( (state: any) => state.decisionRedux)
    const user = useSelector( (state: any) => state.usuarioRedux)
    const dispatch = useDispatch();

    const handleToken = (token: any) => {
        setToken(token)
    }

    useEffect( () => {
        const tokenId = sessionStorage.getToken('usuario')
        if (tokenId){
            handleToken(tokenId)
        }
    }, [])

    const removeToken = () => {
        if (token != undefined){
            sessionStorage.removeToken(token)
            const vai = user
            user.iduser = undefined
            user.name = ""
            user.password = ""
            user.email = ""
            user.decisions = []
            setUser(user)
            dcRedux.length = 0
            setDecisions(dcRedux)
            alterarEstado()
        }
        setToken(undefined)
    }

    return (
        <>
            <AuthLayout token={token} removeToken={removeToken} />
        </>
    );
};

export default AuthScript;