import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from "@/utils/getMovies"

export default async function Home() {

  const upComingMovies: Array<Movie> = await getUpComingMovies();
  const popularMovies: Array<Movie> = await getPopularMovies();
  const topRatedMovies: Array<Movie> = await getTopRatedMovies();

  return (
    <div>
      <CarouselBannerWrapper/>
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upComingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </div>
  )
}
