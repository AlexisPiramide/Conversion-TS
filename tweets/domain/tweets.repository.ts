import Tweet from "./Tweet";

export default interface tweetsRepository{
    getTweets(): Promise<Tweet[]>;
    getTweetsByLikes(): Promise<Tweet[]>;
    getTweetsFiltrados(filtroUsuario : String ,filtroTexto : String , filtroFecha : Date): Promise<Tweet[]>;
    postTweet(tweet : Tweet) : Promise <Tweet>;
    putTweet(tweet : Tweet) : Promise <Tweet>;
}