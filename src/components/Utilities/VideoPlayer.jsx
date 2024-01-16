"use client";

import Youtube from "react-youtube";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";

export default function VideoPlayer({ youtube_id }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };
  return isOpen ? (
    <div className="fixed bottom-2 right-2">
      <button
        onClick={handleVideoPlayer}
        className="float-right text-color-primary"
      >
        <XCircle size={32} />
      </button>
      <Youtube
        videoId={youtube_id}
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
        onError={() => alert("video not found")}
      ></Youtube>
    </div>
  ) : null;
}
