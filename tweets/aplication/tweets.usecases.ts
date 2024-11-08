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

    async postTweet(tweet : Tweet) : Promise <Tweet>{
        try {
            return this.tweetsRepository.postTweet(tweet);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async putTweet(tweet : Tweet) : Promise <Tweet>{
        try {
            return this.tweetsRepository.postTweet(tweet);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}
