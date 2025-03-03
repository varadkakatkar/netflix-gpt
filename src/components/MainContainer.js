import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return; // early return 
    const oneMainMovie = movies[0];

    const {id,original_title,overview} = oneMainMovie
    console.log('oneMainMovie ',oneMainMovie)
    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;