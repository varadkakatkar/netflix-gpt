import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies ", movies);
  
  return (
    <div className="px-6 bg-black">
      <h1 className="py-2 text-3xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
