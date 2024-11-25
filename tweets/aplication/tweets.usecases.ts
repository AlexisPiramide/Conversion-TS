import Usuario from "../../usuarios/domain/Usuario";
import Tweet from "../domain/Tweet";
import tweetsRepository from "../domain/tweets.repository";

export default class tweetsUsecases{

    constructor(private tweetsRepository: tweetsRepository){}

    async getTweets(): Promise<Tweet[]>{
        try {
            return this.tweetsRepository.getTweets();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getTweetsByLikes(): Promise<Tweet[]>{
        try {
            return this.tweetsRepository.getTweetsByLikes();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getTweetsFiltrados(filtroUsuario : String ,filtroTexto : String , filtroFecha : Date): Promise<Tweet[]>{
        try {
            return this.tweetsRepository.getTweetsFiltrados(filtroUsuario,filtroTexto,filtroFecha);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async  getBorradrores(usuario : Usuario): Promise<Tweet[]> {
        try {
            return this.tweetsRepository.getBorradrores(usuario);
        } catch (error) {
            throw error;
        }
    }

    guardarTweet(tweet: Tweet): Promise<Tweet> {
        try {
            return this.tweetsRepository.guardarTweet(tweet);
        } catch (error) {
            throw error
        }
    }
    postTweet(tweet: Tweet): Promise<Tweet> {
        try {
            return this.tweetsRepository.postTweet(tweet);
        } catch (error) {
            throw error
        }
    }
    publicarTweet(tweet: Tweet): Promise<Tweet> {
        try {
            return this.tweetsRepository.publicarTweet(tweet);
        } catch (error) {
            throw error
        }
    }

}
