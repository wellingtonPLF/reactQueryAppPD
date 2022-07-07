import { useEffect, useState } from "react";
import DecisionLayout from "./decisionLayout";
import decisionService from "../../shared/services/decisionService";
import { Decision } from "../../shared/model/decision";
import { useDispatch, useSelector } from "react-redux";
import { setDecisions } from "../../redux/Action/decisionAction";
import { Usuario } from "../../shared/model/usuario";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../shared/services/queryClient";
import { setUser } from "../../redux/Action/usuarioAction";

interface Props {
  usuario: Usuario | null | undefined;
}

const DecisionScript = ({usuario}: Props) => {
    // ----------------------------------------------- Instancies -----------------------------------------------//
    const navegate = useNavigate();
    const user = useSelector( (state: any) => state.usuarioRedux)
    const dcRedux = useSelector( (state: any) => state.decisionRedux)
    const [decisions, changeDecisions] = useState<Array<Decision> | null>()

    // ------------------------------------------------ Logic ---------------------------------------------------//
    const handleDecision = () => {
      if (decisions != null && decisions != undefined ){
        changeDecisions([...decisions])
      }
    }

    const show = () => {
      console.log("Decisions: ",decisions, "Redux: ", dcRedux)
    }

    const handleUsuario = (decisoes: Array<Decision>) => {
      const mappingDecisions = decisoes!.map( dec => dec.idDecision) 
      user.decisions.length = 0
      const all_decisions = user.decisions
      for (let d of mappingDecisions){
        if (d != undefined){
          all_decisions.push(d)
        }
      }
      setUser(user)
    }

    const navegateToEdit = () => {
      if (decisions){
        handleUsuario(decisions)
      }
      navegate("/edit")
    }
 
    useEffect( () => {
      if(usuario){
        if(usuario.decisions){
          const len = usuario.decisions.length
          const dc = new Array<Decision>()
          if (len != 0){
            for(let decisaoID of usuario.decisions){
              decisionService.pesquisarPorId(decisaoID).then(
                result => {
                  dc.push(result)
                  if (dc.length == len){
                    setDecisions(dc)
                    changeDecisions(dc)
                  }
                }
              )
            }
          }
          else{
            changeDecisions(dc)
          }
        }
      }
    }, [usuario])

    // ---------------------------------------------Edit Insert Delete---------------------------------------------//

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

    const insertDecision = () => {
      const decision = new Decision()
      decision.name = "New"
      if (usuario){
        if (usuario.iduser){
          decision.iduser = parseInt(usuario.iduser)
        }
      }
      decisionService.inserir(decision).then(
        result => {
          decisions!.push(result)
          if(decisions){
            handleUsuario(decisions)
          }
          handleDecision()
        }
      )
    }

    const removingDecision = (index: number) => {
      const id = decisions![index].idDecision;
      if(id != undefined){
        decisionService.remover(id).then(
          it =>{
            decisions!.splice(index, 1);
            if(decisions){
              handleUsuario(decisions)
            }
            handleDecision()
          }
        )
      }
    }
    // ------------------------------------------------ View -------------------------------------------//
    return (
        <>
          <DecisionLayout usuario={usuario} decisions={decisions} goToEdit={navegateToEdit} show={show}
          saveEdit={editDecision} removeDecision={removingDecision} addDecision={insertDecision} />  
        </>
    );
    // ---------------------------------------------------------------------------------------------------//
};

export default DecisionScript;