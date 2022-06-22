import React, { useState } from 'react';
import AuthLayout from './authLayout';

const AuthScript = () => {
    const [token, setToken] = useState<number | undefined>(4)

    const removeToken = () => {
        setToken(undefined)
    }

    return (
        <>
            <AuthLayout token={token} removeToken={removeToken} />
        </>
    );
};

export default AuthScript;