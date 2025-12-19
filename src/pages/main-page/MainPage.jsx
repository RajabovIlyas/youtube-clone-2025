import { useEffect, useState } from 'react';
import VideoCard from '../../shared/ui/video-card/VideoCard';
import axios from 'axios';
import { getVideoUrl } from '../../features/api';
import { formatVideoData } from '../../features/converters/format-video';
import Button from '../../shared/ui/button';
import Header from '../../widgets/header';

const MainPage = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');

  const fetchVideos = async () => {
    const response = await axios.get(getVideoUrl(nextPageToken));

    setNextPageToken(response.data.nextPageToken);

    setVideos((prevVideos) => [
      ...prevVideos,
      ...response.data.items.map(formatVideoData),
    ]);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
    <Header />
    <main className="pb-5 mx-auto px-4 max-w-screen-2xl">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-3">
        {videos.map((video) => (
          <VideoCard key={video.videoWatchUrl} {...video} />
        ))}
      </div>
      <Button onClick={fetchVideos}>Load more</Button>
    </main>
    </>
  );
};

export default MainPage;
