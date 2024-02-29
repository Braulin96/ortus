import React, { useState, useEffect } from "react";

const VideoAPI = () => {
  const [cameraFeed, setCameraFeed] = useState("");
  const [fetchError, setFetchError] = useState(null);

  const fetchCameraFeed = async () => {
    try {
      const response = await fetch(
        "https://s3-eu-west-1.amazonaws.com/jamcams.tfl.gov.uk/00001.03603.mp4"
      );
      //   const response = await fetch("js/earthcam/ecnplayerhtml5/assets/black.mp4");
      if (response.ok) {
        const cameraFeedUrl = response.url;
        setCameraFeed(cameraFeedUrl);
      } else {
        throw new Error("Failed to fetch camera feed");
      }
    } catch (error) {
      console.error("Error fetching camera feed:", error);
      setFetchError(error.message);
    }
  };

  useEffect(() => {
    fetchCameraFeed();
  }, []);

  return (
    <div className="w-full">
      {/* Display the camera feed */}
      {fetchError ? (
        <p>Error fetching camera feed: {fetchError}</p>
      ) : (
        <video
          className="w-full rounded-xl shadow-lg h-80"
          loop={true}
          controls
          src={cameraFeed}
        />
      )}
    </div>
  );
};

export default VideoAPI;
