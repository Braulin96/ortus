import React, { useState, useEffect } from "react";

const VideoAPI = () => {
  const [randomImage, setRandomImage] = useState("");

  const fetchRandomImage = async () => {
    try {
      const response = await fetch("https://source.unsplash.com/random");
      // Get the final URL after any redirects (actual image URL)
      const imageUrl = response.url;
      setRandomImage(imageUrl);
    } catch (error) {
      console.error("Error fetching random image:", error);
    }
  };
  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div>
      <div>Video API</div>
      <div>
        <img src={randomImage} />
      </div>
    </div>
  );
};

export default VideoAPI;
