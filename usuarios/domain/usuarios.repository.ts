import Usuario from "./Usuario";

export default interface usuariosRepository{
    getUsuarios() : Promise <Usuario[]>;
    registro(usuario : Usuario) : Promise <Usuario>;
    login(usuario : Usuario) : Promise <Usuario>;
    getUsuarioByCorreo(correo : String) : Promise <Usuario>;
}

