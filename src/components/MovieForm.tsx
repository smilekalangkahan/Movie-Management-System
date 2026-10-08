import { useState } from "react";
import type { Movie } from "../App";

type MovieFormProps = {
  onAddMovie: (
    movie: Omit<Movie, "id">
  ) => void;
};

function MovieForm({
  onAddMovie,
}: MovieFormProps) {

  const [title, setTitle] =
    useState<string>("");

  const [genre, setGenre] =
    useState<string>("Action");

  const [year, setYear] =
    useState<string>("");

  const [rating, setRating] =
    useState<string>("");

  const [status, setStatus] =
    useState<Movie["status"]>(
      "Plan to Watch"
    );

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      title === "" ||
      year === "" ||
      rating === ""
    ) {
      alert(
        "Lengkapi data film terlebih dahulu."
      );

      return;
    }

    onAddMovie({
      title,
      genre,
      year: Number(year),
      rating: Number(rating),
      status,
    });

    setTitle("");
    setGenre("Action");
    setYear("");
    setRating("");
    setStatus("Plan to Watch");
  };

  return (
    <form
      className="movie-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Judul film"
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
      />

      <select
        value={genre}
        onChange={(event) =>
          setGenre(event.target.value)
        }
      >
        <option>Action</option>
        <option>Animation</option>
        <option>Comedy</option>
        <option>Crime</option>
        <option>Drama</option>
        <option>Horror</option>
        <option>Romance</option>
        <option>Sci-Fi</option>
      </select>

      <input
        type="number"
        placeholder="Tahun"
        value={year}
        onChange={(event) =>
          setYear(event.target.value)
        }
      />

      <input
        type="number"
        placeholder="Rating"
        min="0"
        max="10"
        step="0.1"
        value={rating}
        onChange={(event) =>
          setRating(event.target.value)
        }
      />

      <select
        value={status}
        onChange={(event) =>
          setStatus(
            event.target.value as Movie["status"]
          )
        }
      >
        <option value="Plan to Watch">
          Plan to Watch
        </option>

        <option value="Watching">
          Watching
        </option>

        <option value="Watched">
          Watched
        </option>
      </select>

      <button type="submit">
        + Tambah Film
      </button>

    </form>
  );
}

export default MovieForm;