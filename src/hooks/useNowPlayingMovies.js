import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
      console.log("json ", json.results);
    } catch (error) {
      console.log("error---- ", error);
      // Fall back to mock data
      const mockData = await import("@/utils/nowPlayingMock.json");
      dispatch(addNowPlayingMovies(mockData.default.results));
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
