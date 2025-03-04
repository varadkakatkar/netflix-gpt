import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log("trailer ", trailer);
      console.log("json movie data", json);
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.log("API call failed, falling back to mock data...");
      try {
        const mockData = await import("../utils/movieVideoDataMock.json");
        const filterData = mockData.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : mockData.results[0];
        dispatch(addTrailerVideo(trailer));
        console.log("trailer (from mock)", trailer);
      } catch (mockError) {
        console.log("Error loading mock data:", mockError);
      }
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
