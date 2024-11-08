import Usuario from "../domain/Usuario";
import usuariosRepository from "../domain/usuarios.repository";

export default class usuariosUsecases{

    constructor(private usuariosRepository: usuariosRepository){}


    async getUsuarios() : Promise <Usuario[]>{
        try {
            return this.usuariosRepository.getUsuarios();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async registro(usuario : Usuario) : Promise <Usuario>{
        try {
            return this.usuariosRepository.registro(usuario);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async login(usuario : Usuario) : Promise <Usuario>{
        try {
            return this.usuariosRepository.registro(usuario);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getUsuarioByCorreo(correo : String) : Promise <Usuario>{
        try {
            return this.usuariosRepository.getUsuarioByCorreo(correo);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}