import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";


const Browse = () => {
useNowPlayingMovies()  

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer />
      {
        /**
         * MainContainer
         *  -Videobackground
         *  -VideoTitle
         * SecondaryContainer
         *  -MovieList *n
         *  - Cards *n
         */
      }
    </div>
  );
};

export default Browse;
