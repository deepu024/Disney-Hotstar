import { getTBDMReadAccessToken } from "./utils";

//https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1
export async function getUpComingMovies() {
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
export async function getPopularMovies() {
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

// https://api.themoviedb.org/3/movie/movie_id?language=en-US
export async function getMovieDetailsById(movie_id: number) {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;

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
    let movie = await res.json();

    return movie;
}

// 'https://api.themoviedb.org/3/search/movie?query=a&include_adult=false&language=en-US&page=1';
export async function getMovieByTerm(term: string) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${term}&include_adult=false&language=en-US&page=1`;

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
    let movie = await res.json();

    return movie.results;
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
    const url = new URL(`https://api.themoviedb.org/3/discover/movie`);

    keywords && url.searchParams.set("with_keywords", keywords);
    id && url.searchParams.set("with_genres", id);

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