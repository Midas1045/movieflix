import React from 'react';
import { Link } from 'react-router-dom';

function Home({ movies }) {

  if (!movies || movies.length === 0) {
    return <h2 style={{ padding: "20px" }}>Loading movies...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Now Showing</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbId} style={{ width: "200px" }}>
            
            <img
              src={movie.posterUrl}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />

            <h3>{movie.title}</h3>

            {movie.ytTrailerId && (
              <Link to={`/Trailer/${movie.ytTrailerId}`}>
                Watch Trailer
              </Link>
            )}

            <br />

            <Link to={`/Reviews/${movie.imdbId}`}>
              Reviews
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;