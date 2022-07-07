import { ChangeEvent, useEffect, useState } from 'react';
import userService from '../../shared/services/userService';
import EditView from './editView';
import sessionStorage from '../../shared/utils/sessionStorage';
import { Usuario } from '../../shared/model/usuario';
import { useQuery } from 'react-query';
import { queryClient } from '../../shared/services/queryClient';
import { useNavigate } from 'react-router-dom';

const EditScript = () => {

    const navegate = useNavigate()
    const [user, putUser] = useState<Usuario>()
    
    useQuery('usuario', () => {
        const token = sessionStorage.getToken('usuario')
        if (token){
            userService.pesquisarPorId(parseInt(token)).then(
                it => {
                    putUser(it)
                }
            )
        }
    }, {
        refetchOnWindowFocus: false
    })


    const handleUsuarioChange = (obj: any) => {
        putUser(obj)
    }

    const setUsuario = (userAtr: string, event: ChangeEvent<HTMLInputElement>) => {
        
        if(userAtr === 'name') {
            handleUsuarioChange({...user, name: event.target.value})
    
        }
        else if (userAtr === 'email'){
            handleUsuarioChange({...user, email: event.target.value})
        }
        else if (userAtr === 'password'){
            handleUsuarioChange({...user, password: event.target.value})
        }
        else{
            handleUsuarioChange({...user});
        }
    }

    const changeUser = () => {
        if(user){
            userService.atualizar(user).then(
                it => {
                    queryClient.invalidateQueries("user")
                    navegate("/")
                }
            )
        }
    }

    return (
        <>
            { user && (<EditView user={user} inputUser={setUsuario} userChange={changeUser}/>)}
        </>
    );
};

export default EditScript;