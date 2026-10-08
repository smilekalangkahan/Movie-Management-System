import { useState } from "react";
import Header from "./components/Header";
import MovieStats from "./components/MovieStats";
import MovieForm from "./components/MovieForm";
import MovieFilter from "./components/MovieFilter";
import MovieList from "./components/MovieList";

export type Movie = {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  status: "Plan to Watch" | "Watching" | "Watched";
};

const initialMovies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.7,
    status: "Watched",
  },
  {
    id: 2,
    title: "Inception",
    genre: "Action",
    year: 2010,
    rating: 8.8,
    status: "Watched",
  },
  {
    id: 3,
    title: "The Batman",
    genre: "Crime",
    year: 2022,
    rating: 7.8,
    status: "Watching",
  },
  {
    id: 4,
    title: "Inside Out 2",
    genre: "Animation",
    year: 2024,
    rating: 7.5,
    status: "Plan to Watch",
  },
];

function App() {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);

  const [search, setSearch] = useState<string>("");

  const [genre, setGenre] = useState<string>("All");

  const [status, setStatus] = useState<string>("All");

  // Menambahkan film
  const addMovie = (movie: Omit<Movie, "id">) => {
    const newMovie: Movie = {
      ...movie,
      id: Date.now(),
    };

    setMovies((currentMovies) => [
      ...currentMovies,
      newMovie,
    ]);
  };

  // Menghapus film
  const deleteMovie = (id: number) => {
    setMovies((currentMovies) =>
      currentMovies.filter((movie) => movie.id !== id)
    );
  };

  // Mengubah status film
  const changeStatus = (id: number) => {
    const statusList: Movie["status"][] = [
      "Plan to Watch",
      "Watching",
      "Watched",
    ];

    setMovies((currentMovies) =>
      currentMovies.map((movie) => {
        if (movie.id !== id) {
          return movie;
        }

        const currentIndex = statusList.indexOf(
          movie.status
        );

        const nextIndex =
          (currentIndex + 1) % statusList.length;

        return {
          ...movie,
          status: statusList[nextIndex],
        };
      })
    );
  };

  // Search dan filter
  const filteredMovies = movies.filter((movie) => {
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchGenre =
      genre === "All" || movie.genre === genre;

    const matchStatus =
      status === "All" || movie.status === status;

    return (
      matchSearch &&
      matchGenre &&
      matchStatus
    );
  });

  return (
    <div className="app">
      <Header />

      <main className="container">

        <MovieStats movies={movies} />

        <section className="panel">
          <h2>Tambah Film</h2>

          <MovieForm onAddMovie={addMovie} />
        </section>

        <section className="panel">

          <div className="section-title">
            <div>
              <h2>Daftar Film</h2>

              <p>
                Kelola koleksi film dengan mudah.
              </p>
            </div>

            <span className="count">
              {filteredMovies.length} Film
            </span>
          </div>

          <MovieFilter
            search={search}
            setSearch={setSearch}
            genre={genre}
            setGenre={setGenre}
            status={status}
            setStatus={setStatus}
          />

          <MovieList
            movies={filteredMovies}
            onDelete={deleteMovie}
            onChangeStatus={changeStatus}
          />

        </section>

      </main>
    </div>
  );
}

export default App;