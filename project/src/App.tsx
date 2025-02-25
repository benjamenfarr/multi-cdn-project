import React from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const videoUrl = 'https://cdn.benfarr.com/carson_luke_farr+(1).mp4';

  return (
    <div className="min-h-screen bg-[#1A1D29] flex flex-col items-center p-4 sm:p-6">
      <div className="w-full max-w-6xl">
        <h1 className="text-[#f9f9f9] text-2xl font-semibold mb-4 font-[Avenir-Heavy]">
          Carson Luke Farr
        </h1>
        <VideoPlayer src={videoUrl} />
      </div>
    </div>
  );
}

export default App;