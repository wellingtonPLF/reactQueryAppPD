import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Usuario } from '../../shared/model/usuario';
import './editStyle.scss'

interface EditProps {
    user: Usuario;
    userChange: () => void;
    inputUser: (attribute: string, e: ChangeEvent<HTMLInputElement>) => void;
}

const EditView = ({user, userChange, inputUser}: EditProps) => {
    return (
        <>
            <div className={'main'}>
                <h2 className={'edit'}>Edit</h2>
                <div className={'userUpdate'}>
                    <div className={'inputChange'}>
                        <span>
                            <div>Name: </div>
                        </span>
                        <input placeholder="userName"
                               spellCheck="false"
                               value={user.name}
                               onChange={(event) =>
                               {inputUser('name', event)}}/>
                        <span>
                            <div>Email: </div>
                        </span>
                        <input placeholder="userEmail"
                               spellCheck="false"
                               value={user.email}
                               onChange={(event) =>
                               {inputUser('email', event)}}/>
                        <span>
                            <div>Password: </div>
                        </span>
                        <input placeholder="userPassword"
                               spellCheck="false"
                               value={user.password}
                               onChange={(event) =>
                               {inputUser('password', event)}}/>
                    </div>
                    <div className={'bntConfirm'}>
                        <button>
                            <Link to='/'>cancel</Link>
                        </button>
                        <button onClick={userChange}>
                            <Link to='/'>confirm</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditView;