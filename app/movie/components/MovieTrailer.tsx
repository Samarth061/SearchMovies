import React from "react";
import ReactPlayer from "react-player";

interface MovieTrailerProps {
  trailerKey?: string;
}

export default function MovieTrailer({ trailerKey }: MovieTrailerProps) {
  return (
    <>
      {trailerKey && (
        <div className="w-full">
          <div className="aspect-video w-full">
            <ReactPlayer
              src={`https://www.youtube.com/watch?v=${trailerKey}`}
              playing={false}
              controls
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </>
  );
}
