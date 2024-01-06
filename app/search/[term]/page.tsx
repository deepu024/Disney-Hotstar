import { getMovieByTerm } from "@/utils/getMovies"
import { notFound } from "next/navigation";

type props = {
    params: {
        term: string
    }
}

async function Search({ params: { term } }: props) {
    if (!term) notFound();

    const movies: Array<Movie> = await getMovieByTerm(term);
    return (
        <div>
            <div>Search {term}</div>
            {
                movies.map((movie:Movie) => (
                    <p>{movie.title}</p>
                ))
            }
        </div>
    )
}

export default Search