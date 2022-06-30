import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDecisions } from '../../redux/Action/decisionAction';
import { setUser } from '../../redux/Action/usuarioAction';
import sessionStorage from '../../shared/utils/sessionStorage';
import AuthLayout from './authLayout';

const AuthScript = () => {
    const [token, setToken] = useState<number | undefined>()
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
            dispatch(setUser(null))
            dispatch(setDecisions(null))
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