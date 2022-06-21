import React, { ChangeEventHandler } from 'react';
import './authStyle.scss'
import { Usuario } from './../../shared/model/usuario';
import { Link } from 'react-router-dom';

interface Props {
    usuario: Usuario;
    setName: (e: string) => void;
    setPassword: (e: string) => void;
    setEmail: (e: string) => void;
    cadastrarUsuario: (usuario: Usuario) => void;
}

const AuthLayout = ({ usuario, setName, setPassword, setEmail, cadastrarUsuario }: Props) => {
    return (
        <>
            <div className='cadastro'>
                <h1>Cadastro</h1>
                <div>
                    <div>Username: </div>
                    <input value = {usuario.name} 
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='marginPassEmail'>
                    <div>Password: </div>
                    <input value = {usuario.password} 
                    onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
                </div>
                <div className='marginPassEmail'>
                    <div>Email: </div>
                    <input value = {usuario.email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='btns'>
                    <button onChange={ () => cadastrarUsuario(usuario)}>Confirmar</button>
                    <button>
                        <Link to="/" style={{textDecoration: 'none'}}>Cancel</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default AuthLayout;