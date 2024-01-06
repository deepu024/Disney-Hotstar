import MoviesCarousel from "@/components/MoviesCarousel";
import { getMovieByTerm, getPopularMovies } from "@/utils/getMovies"
import { notFound } from "next/navigation";

type props = {
    params: {
        term: string
    }
}

async function Search({ params: { term } }: props) {
    if (!term) notFound();

    const movies: Array<Movie> = await getMovieByTerm(term);
    const popularMovies: Array<Movie> = await getPopularMovies();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className="text-6xl font-bold px-10">Results for {decodeURIComponent(term)}</h1>
                <MoviesCarousel title={`Genre`} movies={movies} isVertical />
                <MoviesCarousel title={`Popular Movies`} movies={popularMovies} />
            </div>
        </div>
    )
}

export default Search