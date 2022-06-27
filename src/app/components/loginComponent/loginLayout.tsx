import './loginStyle.scss'
import { Usuario } from './../../shared/model/usuario';
import { Link } from 'react-router-dom';

interface Props {
    usuario: Usuario | undefined;
    setName: (e: string) => void;
    setPassword: (e: string) => void;
    logarUsuario: () => void;
    setUser: () => void;
    countFails: number;
    loginAccepted: boolean;
}

const LoginLayout = ({ usuario, setName, setPassword, logarUsuario, setUser, countFails, loginAccepted }: Props) => {

    return (
        <>
            { usuario && (
                <div className='loginLayout'>  
                    <div className='login'> 
                        <h1>Login</h1>
                        <div>
                            <div>Username: </div>
                            <input type='text' value = {usuario.name} 
                            onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='marginPassEmail'>
                            <div>Password: </div>
                            <input type='text' value = {usuario.password} 
                            onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
                        </div>
                        { loginAccepted && (
                            <div className='wrongUser'>Usuario incorreto {countFails}</div>
                        )}
                        <div className='btnsLogin'>
                            <button>
                                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Cancel</Link>
                            </button>
                            <button onClick={ () => logarUsuario()} style={{textDecoration: 'none', color: 'black'}}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginLayout;