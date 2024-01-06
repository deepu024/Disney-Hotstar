import GenreDropDown from "@/components/GenreDropDown";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { getPopularMovies, getUpComingMovies } from "@/utils/getMovies"

export default async function Home() {

  const upComingMovies: Array<Movie> = await getUpComingMovies();
  const popularMovies: Array<Movie> = await getPopularMovies();

  return (
    <div>
      {
        popularMovies.map((movie: Movie) => (
          <MovieCard movie={movie} />
        ))
      }
      <SearchBar />
      <GenreDropDown/>

    </div>
  )
}
