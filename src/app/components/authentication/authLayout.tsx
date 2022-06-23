import React from 'react';
import { Link } from 'react-router-dom';
import './authStyle.scss'

interface Props {
    token: number | undefined;
    removeToken: () => void;
}

const AuthLayout = ({token, removeToken}: Props) => {
    return (
        <div className="auth">
            <h1>Make Your Decision</h1>
            {
                !token && (
                    <div className='btns'>
                        <button className="signIn">
                            <Link to='/login'>Sign in</Link>
                        </button>
                        <button className="signUp">
                            <Link to='/cadastro'>Sign up</Link>
                        </button>
                    </div>
                )
            }
            {
                token && (
                    <button onClick={() => removeToken()} className="signOut">Sign Out</button>
                )
            }
        </div>
    );
};

export default AuthLayout;