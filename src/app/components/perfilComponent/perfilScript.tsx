import { useEffect, useState } from "react";
import { Usuario } from "../../shared/model/usuario";
import userService from "../../shared/services/userService";
import PerfilLayout from "./perfilLayout";

const PerfilScript = () => {
    
    const [usuario, setUsuario] = useState()
    const [url, setUrl] = useState('')

    const handleUrl = (value: any) => {
        setUrl(value)
    }

    useEffect( () => {
        const token = sessionStorage.getItem('usuario')
        if(token){
            userService.pesquisarPorId(parseInt(token)).then(
                it => {
                    setUsuario(it)
                }
            )
        }
    }, [])

    const handleUserImage = (e: any) => {
        const selectedFile = e.target.files[0];
        const reader = new FileReader();
        try {
            reader.readAsDataURL(selectedFile);
            reader.onload = (_event) => {
                handleUrl(reader.result);
            }
        }
        catch (e){
            console.log(e)
        }
    }

    return (
        <>
            <PerfilLayout usuario={usuario} imageHandler={handleUserImage} url={url} />   
        </>
    );
};

export default PerfilScript;