'use client'
import Link from 'next/link'
import React from 'react'

type props = {
  movie: Movie
}

function MovieCard({movie}: props) {
  
  return (
    <div>
      <Link href={`/movie/${movie.id}`}>
        {movie.title}
      </Link>

    </div>
  )
}

export default MovieCard