import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-6 bg-black">
      <h1 className="py-2 text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide hover:overflow-x-auto">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;


