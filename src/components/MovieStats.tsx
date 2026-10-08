import type { Movie } from "../App";

type MovieStatsProps = {
  movies: Movie[];
};

function MovieStats({
  movies,
}: MovieStatsProps) {

  const watched = movies.filter(
    (movie) => movie.status === "Watched"
  ).length;

  const watching = movies.filter(
    (movie) => movie.status === "Watching"
  ).length;

  const average =
    movies.length > 0
      ? (
          movies.reduce(
            (total, movie) =>
              total + movie.rating,
            0
          ) / movies.length
        ).toFixed(1)
      : "0.0";

  return (
    <div className="stats">

      <div className="stat-card">
        <span>Total Film</span>

        <strong>
          {movies.length}
        </strong>
      </div>

      <div className="stat-card">
        <span>Sudah Ditonton</span>

        <strong>
          {watched}
        </strong>
      </div>

      <div className="stat-card">
        <span>Sedang Ditonton</span>

        <strong>
          {watching}
        </strong>
      </div>

      <div className="stat-card">
        <span>Rating Rata-rata</span>

        <strong>
          ⭐ {average}
        </strong>
      </div>

    </div>
  );
}

export default MovieStats;