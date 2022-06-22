import { useState } from "react";
import { Usuario } from "../../shared/model/usuario";
import PerfilLayout from "./perfilLayout";

const PerfilScript = () => {
    
    const [usuario] = useState(new Usuario())
    const [url, setUrl] = useState('')

    const handleUrl = (value: any) => {
        setUrl(value)
    }

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