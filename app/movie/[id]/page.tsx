import { getMovieDetailsById } from '@/utils/getMovies'
import React from 'react'

type props = {
    params: {
        id: number
    }
}

async function MovieDetails({params: {id}}: props) {
   const movieDetails: MovieDetails =  await getMovieDetailsById(id);
  return (
    <div>Movie Details {id}</div>
  )
}

export default MovieDetails