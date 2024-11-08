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
    postTweet(tweet: Tweet): Promise<Tweet> {
        throw new Error("Method not implemented.");
    }
    putTweet(tweet: Tweet): Promise<Tweet> {
        throw new Error("Method not implemented.");
    }
    
}