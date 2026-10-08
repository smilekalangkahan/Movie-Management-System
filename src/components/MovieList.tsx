import type { Movie } from "../App";

const movieImages: Record<string, string> = {
  Interstellar: "/images/interstellar.jpg",
  Inception: "/images/inception.jpg",
  "The Batman": "/images/batman.jpg",
  "Inside Out 2": "/images/inside-out-2.jpg",
};

type MovieListProps = {
  movies: Movie[];
  onDelete: (id: number) => void;
  onChangeStatus: (id: number) => void;
};

function MovieList({
  movies,
  onDelete,
  onChangeStatus,
}: MovieListProps) {
  if (movies.length === 0) {
    return (
      <div className="empty">
        Tidak ada film yang sesuai.
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <article
          className="movie-card"
          key={movie.id}
        >
          <div className="movie-icon">
            <img
              src={
                movieImages[movie.title]
              }
              alt={movie.title}
            />
          </div>

          <div className="movie-info">
            <div className="movie-top">
              <h3>{movie.title}</h3>

              <span className="rating">
                ⭐ {movie.rating}
              </span>
            </div>

            <p className="meta">
              {movie.genre} • {movie.year}
            </p>

            <span
              className={`status ${movie.status
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              {movie.status}
            </span>

            <div className="actions">
              <button
                onClick={() =>
                  onChangeStatus(movie.id)
                }
              >
                Ubah Status
              </button>

              <button
                className="delete"
                onClick={() =>
                  onDelete(movie.id)
                }
              >
                Hapus
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default MovieList;