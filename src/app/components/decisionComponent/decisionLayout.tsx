import { Link } from 'react-router-dom'
import { Decision } from '../../shared/model/decision'
import { Usuario } from '../../shared/model/usuario'
import './decisionStyle.scss'

interface Props {
    usuario: Usuario | null | undefined
    goToEdit: () => void;
    decisions: Array<Decision> | null | undefined
    saveEdit: (e: any, index: number) => void;
    addDecision: () => void;
    removeDecision: (index: number) => void;
    show: () => void;
}

const DecisionLayout = ({ usuario, decisions, saveEdit, removeDecision, addDecision, goToEdit, show } : Props) => {

    return (
        <> 
            <div className="userName">
                <div style={{width: '200px', marginLeft: '2px'}}>
                    {
                        usuario?.iduser && (<div style={{backgroundColor: "#2b2114"}}>{usuario.name}</div>)
                    }
                </div>
                <div>
                    { usuario?.iduser ? 
                        (
                            <button style={{paddingBottom: '4px'}} onClick={goToEdit}>edit</button>
                        ) : 
                        (
                            <div style={{backgroundColor: "#2b2114"}}>.&nbsp;&nbsp;.&nbsp;&nbsp;.</div>
                        )
                    }
                </div>
            </div>
            <div className='decisoes' style={{overflowY:"scroll"}}>
                <div className='noDecision'>
                    <div>Decisions</div>
                </div>
                <div>
                    { usuario?.iduser && 
                        (
                            <>
                                { decisions && (
                                    
                                    <>
                                        <div>
                                            { 
                                                decisions.map( (el, index) => (
                                                    <div key={el.idDecision} className="decisao">
                                                        <div style={{marginBottom: '4px'}}>
                                                            <b>-</b>&nbsp;&nbsp;&nbsp;
                                                            <input onChange={ (e) => saveEdit(e, index)} spellCheck="false" value={el.name} />
                                                        </div>
                                                        <div onClick={() => removeDecision(index)} className="removeDecision">x</div>
                                                    </div> 
                                                ))
                                            } 
                                        </div>
                                        <button onClick={() => addDecision()} className='addDecisionBtn'>+</button>
                                    </>
                                )}
                            </>
                        )
                    }   
                </div>
            </div>
            {/*<button onClick={ () => show()}>clique</button>*/}
        </>
    );
};

export default DecisionLayout;