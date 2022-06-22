import { useEffect, useState } from "react";
import { Usuario } from "../../shared/model/usuario";
import DecisionLayout from "./decisionLayout";
import usuarioService from "../../shared/services/userService";
import decisionService from "../../shared/services/decisionService";
import { Decision } from "../../shared/model/decision";

const DecisionScript = () => {
    const [usuario, setUsuario] = useState<Usuario | undefined>()
    const [decisions, setDecisions] = useState<Array<Decision>>()
    const [tokenId, setTokenId] = useState<number | undefined>(4)

    useEffect( () => {
      if(tokenId != undefined){
        usuarioService.pesquisarPorId(tokenId).then(
          it => {
            setUsuario(it)
            if(it.decisions != undefined){
              const dc = new Array<Decision>()
              for(let decisaoID of it.decisions){
                decisionService.pesquisarPorId(decisaoID.toString()).then(
                  result => {
                    dc.push(result)
                    if (dc.length > 0){
                      setDecisions(dc)
                    }
                  }
                )
              }
            }
          }
        );
      }
      else{
        setUsuario(undefined)
        setDecisions(new Array<Decision>())
      }
    }, [])

    const editDecision = () => {
      
    }

    const removingDecision = () => {

    }

    const insertDecision = () => {

    }

    return (
        <>
          <DecisionLayout usuario={usuario} tokenId={tokenId} decisions={decisions}
          saveEdit={editDecision} removeDecision={removingDecision} addDecision={insertDecision} />  
        </>
    );
};

export default DecisionScript;