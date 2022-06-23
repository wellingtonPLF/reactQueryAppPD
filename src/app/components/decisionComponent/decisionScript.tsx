import { useEffect, useState } from "react";
import { Usuario } from "../../shared/model/usuario";
import DecisionLayout from "./decisionLayout";
import usuarioService from "../../shared/services/userService";
import decisionService from "../../shared/services/decisionService";
import { Decision } from "../../shared/model/decision";
import sessionStorage from "../../shared/utils/sessionStorage";

const DecisionScript = () => {
    const [usuario, setUsuario] = useState<Usuario | undefined>()
    const [decisions, setDecisions] = useState<Array<Decision>>()
    const [tokenId, setTokenId] = useState()

    const handleToken = (token: any) => {
      setTokenId(token)
    }

    useEffect( () => {
      const token = sessionStorage.getToken('usuario')
      handleToken(token)
      if(token != undefined){
        usuarioService.pesquisarPorId(parseInt(token)).then(
          it => {
            setUsuario(it)
            if(it.decisions != undefined){
              const dc = new Array<Decision>()
              for(let decisaoID of it.decisions){
                decisionService.pesquisarPorId(decisaoID.toString()).then(
                  result => {
                    dc.push(result)
                    if (dc.length == it.decisions.length){
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