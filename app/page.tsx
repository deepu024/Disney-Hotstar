import { getPopularMovies, getUpComingMovies } from "@/utils/getMovies"

export default async function Home() {

  const upComingMovies: Array<Movie> = await getUpComingMovies();
  const popularMovies: Array<Movie> = await getPopularMovies();

  return (
    <div>
      {
        popularMovies.map((movie: Movie) => (
          <p>{movie.overview}</p>
        ))
      }
    </div>
  )
}
