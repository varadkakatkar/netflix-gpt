import { IMG_CDN_URL } from "../utils/constants"


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4">
      <div className="transition-all duration-300 hover:scale-110 hover:z-20">
        <img 
          alt="Movie Card" 
          src={`${IMG_CDN_URL}/${posterPath}`}
          className="rounded-lg shadow-lg hover:shadow-2xl cursor-pointer object-cover w-full h-[300px]"
        />
      </div>
    </div>
  )
}

export default MovieCard