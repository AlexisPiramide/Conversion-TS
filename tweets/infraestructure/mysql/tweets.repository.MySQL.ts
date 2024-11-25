import Usuario from "../../../usuarios/domain/Usuario";
import Tweet from "../../domain/Tweet";
import tweetsRepository from "../../domain/tweets.repository";

export default class tweetsRepositoryMySQL implements tweetsRepository{

    getTweets(): Promise<Tweet[]> {
        throw new Error("Method not implemented.");
    }
    getTweetsByLikes(): Promise<Tweet[]> {
        throw new Error("Method not implemented.");
    }
    getTweetsFiltrados(filtroUsuario: String, filtroTexto: String, filtroFecha: Date): Promise<Tweet[]> {
        throw new Error("Method not implemented.");
    }

    getBorradrores(usuario : Usuario): Promise<Tweet[]> {
        throw new Error("Method not implemented.");
    }

    guardarTweet(tweet: Tweet): Promise<Tweet> {
        throw new Error("Method not implemented.");
    }
    postTweet(tweet: Tweet): Promise<Tweet> {
        throw new Error("Method not implemented.");
    }
    publicarTweet(tweet: Tweet): Promise<Tweet> {
        throw new Error("Method not implemented.");
    }
    
}