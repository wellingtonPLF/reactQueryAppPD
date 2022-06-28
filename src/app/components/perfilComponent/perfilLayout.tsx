import './perfilStyle.scss'
import { Usuario } from './../../shared/model/usuario'

interface Props {
    usuario: Usuario | undefined
    url: string
    imageHandler: (e: any) => void;
}

const PerfilLayout = ({ usuario, imageHandler, url} : Props ) => {

    const handleRef = () => {
        document.getElementById('takePic')?.click();
    }

    return (
        <>       
            <input id="takePic" type="file" style={{display: 'none'}} 
            onChange={ (e) => imageHandler(e)}/>
            { usuario?.iduser ? 
                (
                <div onClick={ () => handleRef()} className='imagemUser'>
                    {
                        url ? (<img src={url} style={{width: "200px", height: "180px"}}></img>) :
                        (<div>+</div>)
                    }
                </div>
                ) : 
                (<div className='imagemUser'>+</div>)
            }
        </>
    );
};

export default PerfilLayout;