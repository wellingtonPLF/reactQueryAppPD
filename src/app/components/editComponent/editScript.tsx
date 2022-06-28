import { ChangeEvent, useEffect, useState } from 'react';
import userService from '../../shared/services/userService';
import EditView from './editView';
import sessionStorage from '../../shared/utils/sessionStorage';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/Action/usuarioAction';

const EditScript = () => {

    const dispatch = useDispatch();
    const usuario = useSelector( (state: any) => state.usuarioRedux)

    const handleUsuarioChange = (obj: any) => {
        dispatch(setUser(obj))
    }

    useEffect( () => {
        const token = sessionStorage.getToken('usuario')
        if (token){
            userService.pesquisarPorId(parseInt(token)).then(
                it => {
                    dispatch(setUser(it))
                }
            )
        }
    }, [])

    const setUsuario = (userAtr: string, event: ChangeEvent<HTMLInputElement>) => {
        
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
            <EditView user={usuario} inputUser={setUsuario} userChange={changeUser}/>
        </>
    );
};

export default EditScript;