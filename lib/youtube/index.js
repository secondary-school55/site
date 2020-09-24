import { useEffect, useState } from "react";

export function useYouTube(playlistId) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`https://api.school55.pp.ua/api/youtube/playlist/${playlistId}`)
      .then((r) => r.json())
      .then(setVideos);
  }, []);

  return videos;
}
