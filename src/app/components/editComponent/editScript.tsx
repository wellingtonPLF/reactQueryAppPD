import { ChangeEvent, useEffect, useState } from 'react';
import userService from '../../shared/services/userService';
import EditView from './editView';
import UsuarioNull from '../../shared/solid/nullObject/usuarioNull';

const EditScript = () => {

    const [usuario, setUsuario] = useState(new UsuarioNull())

    const handleUsuarioChange = (obj: any) => {
        setUsuario(obj)
    }

    useEffect( () => {
        userService.pesquisarPorId(3).then(
            it => {
                setUsuario(it)
            }
        )
    }, [])

    const setUser = (userAtr: string, event: ChangeEvent<HTMLInputElement>) => {
        
        if(userAtr === 'name') {
            handleUsuarioChange({...usuario, name: event.target.value})
    
        }
        else if (userAtr === 'email'){
            handleUsuarioChange({...usuario, email: event.target.value})
        }
        else if (userAtr === 'password'){
            handleUsuarioChange({...usuario, password: event.target.value})
        }
        else{
            handleUsuarioChange({...usuario});
        }
    }

    const changeUser = () => {
        userService.atualizar(usuario).then(
            it => {}
        )
    }

    return (
        <>
            <EditView user={usuario} inputUser={setUser} userChange={changeUser}/>
        </>
    );
};

export default EditScript;