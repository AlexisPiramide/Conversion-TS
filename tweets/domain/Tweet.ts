import Usuario from "../../usuarios/domain/Usuario";

export default interface Tweet{
    id?: Number;
    usuario: Usuario;
    texto: String;
    fecha: Date;
    likes: Number;
    publicado: Boolean;
}
