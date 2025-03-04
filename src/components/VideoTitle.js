const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full px-24 text-white aspect-video pt-[20%] bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 py-6 text-lg">{overview}</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg hover:bg-opacity-80 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span className="font-semibold">Play</span>
        </button>
        <button className="flex items-center gap-2 bg-gray-600 bg-opacity-70 text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          <span className="font-semibold">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
