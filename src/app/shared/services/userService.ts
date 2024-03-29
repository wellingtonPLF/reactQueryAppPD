import axios from "axios";
import { Usuario } from "../model/usuario";

class UsuarioService{
    
    api = axios.create({ baseURL: 'https://auth-service-pd.herokuapp.com/users/'})
    //api = axios.create({ baseURL: 'http://localhost:8081/users'})
    // api = axios.create({ baseURL: 'http://localhost:8088/users'})

    constructor() {
    }

    async listar(){
        const { data } = await this.api.get('/')
        return data;
    }

    async inserir(usuario: Usuario){
        const user = {name: usuario.name, email: usuario.email, password: usuario.password, decisions: []}
        const { data } = await this.api.post('/', user);
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

    async atualizar(usuario: Usuario){
        const { data } = await this.api.put(`/${usuario.iduser}`, usuario);
        return data;
    }

    async getUserByNome(usuario: Usuario) {
        const { data } = await this.api.get('/');
        const result = data.filter( (it: Usuario) => it.name === usuario.name)
        return result;
    }
}

export default new UsuarioService();
