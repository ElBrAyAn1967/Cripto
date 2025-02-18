import React from "react";

const FloatingVideo = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 h-44 bg-black shadow-lg rounded-lg overflow-hidden border border-gray-600">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
        title={video.title}
        allowFullScreen
      ></iframe>
      <button
        className="absolute top-2 right-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

export default FloatingVideo;
