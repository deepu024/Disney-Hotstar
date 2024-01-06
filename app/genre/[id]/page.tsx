import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/utils/getMovies";

async function Genre({
    params: { id },
    searchParams: { genre },
}: {
    params: { id: string };
    searchParams: {
        genre: string;
    };
}) {
    const movies = await getDiscoverMovies(id, genre);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
                <MoviesCarousel title={`Genre`} movies={movies} isVertical/>
            </div>
        </div>
    )
}

export default Genre