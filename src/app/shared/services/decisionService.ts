import axios from "axios";
import { Decision } from "../model/decision";

export class DecisaoService {

    //api = axios.create({ baseURL: 'http://localhost:8088/decisions/' });
    //api = axios.create({ baseURL: 'http://localhost:8082/decisions/' });
    api = axios.create({ baseURL: 'https://decision-service-pd.herokuapp.com/decisions/' });

    constructor() {
    }

    async listar(){
        const { data } = await this.api.get('/')
        return data;
    }

    async inserir(decision: Decision){
        const dc = {idDecision: undefined, name: decision.name, iduser: decision.iduser}
        const { data } = await this.api.post('/', dc);
        return data;
    }

    async remover(id: number){
        const { data } = await this.api.delete(`/${id}`);
        return data;
    }

    async pesquisarPorId(id: number){
        const { data } = await this.api.get(`/${id}`);
        return data;
    }

    async atualizar(decision: Decision){
        const { data } = await this.api.put(`/${decision.idDecision}`, decision);
        return data;
    }
}

export default new DecisaoService();