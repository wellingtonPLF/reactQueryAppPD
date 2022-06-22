import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Decision } from '../../shared/model/decision'
import { Usuario } from '../../shared/model/usuario'
import './decisionStyle.scss'

interface Props {
    usuario: Usuario | undefined
    tokenId: number | undefined
    decisions: Array<Decision> | undefined
    saveEdit: (e: any, index: number) => void;
    addDecision: () => void;
    removeDecision: (index: number) => void;
}

const DecisionLayout = ({ usuario, tokenId, decisions, saveEdit, removeDecision, addDecision } : Props) => {

    return (
        <>
            <div className="userName">
                <div style={{width: '200px', marginLeft: '2px'}}>
                    {
                        usuario && (<div style={{backgroundColor: "#2b2114"}}>{usuario.name}</div>)
                    }
                </div>
                <div style={{marginTop: "7px"}}>
                    { tokenId ? (<Link style={{paddingBottom: '4px'}} to="/edit">edit</Link>) : 
                        (<div style={{backgroundColor: "#2b2114"}}>.&nbsp;&nbsp;.&nbsp;&nbsp;.</div>)
                    }
                </div>
            </div>
            <div className='decisoes' style={{overflowY:"scroll"}}>
                <div className='noDecision'>
                    <div>Decisions</div>
                </div>
                <div>
                    { decisions && (
                        <div>
                            { 
                                decisions.map( (el, index) => (
                                    <div key={el.idDecision} className="decisao">
                                        <div>
                                            <b>-</b>&nbsp;&nbsp;&nbsp;
                                            <input onChange={ (e) => saveEdit(e, index)} spellCheck="false" value={el.name} />
                                        </div>
                                        <div onClick={() => removeDecision(index)} className="removeDecision">x</div>
                                    </div> 
                                ))
                            } 
                        </div>
                    )}
                </div>
                {
                    usuario && (
                        <button onClick={() => addDecision()} className='addDecisionBtn'>+</button>
                    )
                }
            </div>
        </>
    );
};

export default DecisionLayout;