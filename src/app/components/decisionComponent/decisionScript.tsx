import { useEffect, useState } from "react";
import DecisionLayout from "./decisionLayout";
import usuarioService from "../../shared/services/userService";
import decisionService from "../../shared/services/decisionService";
import { Decision } from "../../shared/model/decision";
import sessionStorage from "../../shared/utils/sessionStorage";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/Action/usuarioAction";
import { setDecisions } from "../../redux/Action/decisionAction";

const DecisionScript = () => {
    const [tokenId, setTokenId] = useState()
    const dispatch = useDispatch();
    const usuario = useSelector( (state: any) => state.usuarioRedux)
    const dcRedux = useSelector( (state: any) => state.decisionRedux)
    const [decisions, changeDecisions] = useState<Array<Decision> | null>()

    const handleToken = (token: any) => {
      setTokenId(token)
    }

    const handleDecision = () => {
      if (decisions != null && decisions != undefined ){
        changeDecisions([...decisions])
      }
    }

    useEffect( () => {
      changeDecisions(dcRedux)
    }, [dcRedux])

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
                      changeDecisions(dc)
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
        changeDecisions(null)
      }
    }, [])

    const editDecision = (e: any, index: number) => {
      decisions![index].name = e.target.value
      handleDecision()
      setTimeout( () => {
        if (e.keyCode != 13){
          executeListing(e.target.value, index)
        }
      }, 200)
    }

    const executeListing = (value: string, index: number) => {
      if(value != '' && decisions != undefined){
        if(decisions.length != 0){
          const decisao = decisions[index]
          if(decisao.idDecision != undefined){
            decisionService.pesquisarPorId(decisao.idDecision).then(
              it => {
                decisionService.atualizar(decisions![index]).then(
                  result => console.log("Decisão Atualizada!")
                )
              }
            )
          }
        }
      }
    }

    const removingDecision = (index: number) => {
      const id = decisions![index].idDecision;
      if(id != undefined){
        decisionService.remover(id).then(
          it =>{
            decisions!.splice(index, 1);
            handleDecision()
          }
        )
      }
    }

    const insertDecision = () => {
      const decision = new Decision()
      decision.name = "New"
      decision.iduser = parseInt(usuario!.iduser)

      decisionService.inserir(decision).then(
        result => {
          decisions!.push(result)
          handleDecision()
        }
      )
    }

    return (
        <>
          <DecisionLayout usuario={usuario} tokenId={tokenId} decisions={decisions}
          saveEdit={editDecision} removeDecision={removingDecision} addDecision={insertDecision} />  
        </>
    );
};

export default DecisionScript;