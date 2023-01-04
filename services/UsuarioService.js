import axios from 'axios';


class UsuarioService{

    async cadastrar(data){
       return axios ({
        url: "http://192.168.0.29:3000/usuario/cadastrar",
        method: "POST",
        timeout: 5000,
        data: data,
        headers: {
            Accept: 'application/json', 
            
        }
       }).then((response) => {
        return Promise.resolve(response)
       }).catch((error) => {
        return Promise.reject(error)
       })
        
    }
}
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) 

const usuarioService = new UsuarioService()
export default usuarioService