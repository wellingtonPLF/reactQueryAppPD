import { useEffect, useState } from "react";
import DecisionLayout from "./decisionLayout";
import usuarioService from "../../shared/services/userService";
import decisionService from "../../shared/services/decisionService";
import { Decision } from "../../shared/model/decision";
import sessionStorage from "../../shared/utils/sessionStorage";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/Action/usuarioAction";
import { setDecisions } from "../../redux/Action/decisionAction";
import DecisionNull from "../../shared/solid/nullObject/decisionNull";

const DecisionScript = () => {
    const [tokenId, setTokenId] = useState()
    const dispatch = useDispatch();
    const usuario = useSelector( (state: any) => state.usuarioRedux)
    const decisions = useSelector( (state: any) => state.decisionRedux)

    const handleToken = (token: any) => {
      setTokenId(token)
    }

    useEffect( () => {
      const token = sessionStorage.getToken('usuario')
      handleToken(token)
      if(token != undefined){
        usuarioService.pesquisarPorId(parseInt(token)).then(
          it => {
            dispatch(setUser(it))
            if(it.decisions != undefined){
              const dc = new Array<Decision>()
              for(let decisaoID of it.decisions){
                decisionService.pesquisarPorId(decisaoID.toString()).then(
                  result => {
                    dc.push(result)
                    if (dc.length == it.decisions.length){
                      dispatch(setDecisions(dc))
                    }
                  }
                )
              }
            }
          }
        );
      }
      else{
        dispatch(setUser(null))
        dispatch(setDecisions(null))
      }
    }, [])

    const editDecision = () => {

    }

    const removingDecision = () => {

    }

    const insertDecision = () => {
      const decisao = new Array<Decision>()
      let df = new Decision()
      df.name = "New"
      df.iduser = parseInt(usuario!.iduser)
      decisao.push(...decisions)
      decisao.push(df)

      /*
      decisionService.inserir(df).then(
        result => {
          decisions.push(result)
          df = result
        }
      )
      */
      dispatch(setDecisions(decisao))
    }

    return (
        <>
          <DecisionLayout usuario={usuario} tokenId={tokenId} decisions={decisions}
          saveEdit={editDecision} removeDecision={removingDecision} addDecision={insertDecision} />  
        </>
    );
};

export default DecisionScript;