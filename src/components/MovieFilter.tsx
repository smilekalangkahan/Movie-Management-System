type MovieFilterProps = {
  search: string;
  setSearch: (value: string) => void;

  genre: string;
  setGenre: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;
};

function MovieFilter({
  search,
  setSearch,
  genre,
  setGenre,
  status,
  setStatus,
}: MovieFilterProps) {

  return (
    <div className="filters">

      <input
        type="text"
        placeholder="🔎 Cari judul film..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <select
        value={genre}
        onChange={(event) =>
          setGenre(event.target.value)
        }
      >
        <option value="All">
          Semua Genre
        </option>

        <option>Action</option>
        <option>Animation</option>
        <option>Comedy</option>
        <option>Crime</option>
        <option>Drama</option>
        <option>Horror</option>
        <option>Romance</option>
        <option>Sci-Fi</option>
      </select>

      <select
        value={status}
        onChange={(event) =>
          setStatus(event.target.value)
        }
      >
        <option value="All">
          Semua Status
        </option>

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

    </div>
  );
}

export default MovieFilter;