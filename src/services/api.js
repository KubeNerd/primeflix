import axios from "axios";

//https://sujeitoprogramador.com/r-api/?api=filmes'

//https://api.themoviedb.org/3/movie/now_playing?api_key=f9ca449c9909a070c160ce6cd0856faa

export const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});