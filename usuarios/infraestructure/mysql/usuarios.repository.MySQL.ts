import Usuario from "../../domain/Usuario";
import usuariosRepository from "../../domain/usuarios.repository";

export default class usuariosRepositoryMySQL implements usuariosRepository{
    
    getUsuarios(): Promise<Usuario[]> {
        throw new Error("Method not implemented.");
    }
    registro(usuario: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    login(usuario: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    getUsuarioByCorreo(correo: String): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    
}