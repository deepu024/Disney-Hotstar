import { getTBDMReadAccessToken } from "./utils";

//https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1
export async function getUpComingMovies(){
    const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

    let options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ` + getTBDMReadAccessToken()
        },
        next: { 
            revalidate: 60 * 60 * 24 // 24 Hours
        }
    }

    let res = await fetch(url, options);
    let movies = await res.json();

    return movies.results;
}

// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
export async function getPopularMovies(){
    const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

    let options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ` + getTBDMReadAccessToken()
        },
        next: { 
            revalidate: 60 * 60 * 24 // 24 Hours
        }
    }

    let res = await fetch(url, options);
    let movies = await res.json();

    return movies.results;
}

