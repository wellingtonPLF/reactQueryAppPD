import './cadastroStyle.scss'
import { Usuario } from './../../shared/model/usuario';
import { Link } from 'react-router-dom';

interface Props {
    usuario: Usuario;
    fine: boolean;
    setName: (e: string) => void;
    setPassword: (e: string) => void;
    setEmail: (e: string) => void;
    counting: number;
    cadastrarUsuario: () => void;
}

const CadastroLayout = ({ usuario, setName, setPassword, setEmail, cadastrarUsuario, fine, counting }: Props) => {

    return (
        <div className='cadastroLayout'>
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
                    <button>
                        <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Cancel</Link>
                    </button>
                    <button onClick={ () => cadastrarUsuario()}  style={{textDecoration: 'none', color: 'black'}}>
                        Confirmar
                    </button>
                </div>
                { fine && (
                    <div style={{color: 'red', width: '220px'}}>
                        Um usuario com o mesmo nome já existe! [Tentativa: {counting}]
                    </div>
                )}
            </div>
        </div>
    );
};

export default CadastroLayout;