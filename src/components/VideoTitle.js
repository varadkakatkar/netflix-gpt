const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-12 pt-36">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 py-6 text-lg">{overview}</p>
      <div className="">
        <button className="p-4 px-12 text-xl text-white bg-gray-500 bg-opacity-50 rounded-lg">▶️Play</button>  
        <button className="p-4 px-12 mx-2 text-xl text-white bg-gray-500 bg-opacity-50 rounded-lg">More Info</button>  
      </div>
    </div>
  );
};

export default VideoTitle;
