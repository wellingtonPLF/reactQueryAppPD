import React, { useEffect, useState } from 'react';
import sessionStorage from '../../shared/utils/sessionStorage';
import AuthLayout from './authLayout';

const AuthScript = () => {
    const [token, setToken] = useState<number | undefined>()

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