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
        <div>

        </div>
    )
}

export default Genre