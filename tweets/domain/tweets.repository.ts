import Usuario from "../../usuarios/domain/Usuario";
import Tweet from "./Tweet";

export default interface tweetsRepository{
    
    /*Recibir tweets con diferentes, parametros */
    getTweets(): Promise<Tweet[]>;
    getTweetsByLikes(): Promise<Tweet[]>;
    getTweetsFiltrados(filtroUsuario : String ,filtroTexto : String , filtroFecha : Date): Promise<Tweet[]>;
    getBorradrores(usuario : Usuario): Promise<Tweet[]>;

    /*Guarda como borrador*/
    guardarTweet(tweet : Tweet) : Promise <Tweet>;

    /*Guarda como tweet*/
    postTweet(tweet : Tweet) : Promise <Tweet>;

    /*Pasa de borrador a Tweet */
    publicarTweet(tweet : Tweet) : Promise <Tweet>;

    
}