import { useSearchParams } from 'react-router';
import Header from '../../widgets/header';
import { getVideoByIdUrl } from '../../features/api';
import axios from 'axios';
import { useEffect, useState } from 'react';

const WatchPage = () => {
  const [video, setVideo] = useState(null);
  const [searchParams] = useSearchParams();

  const fetchVideo = async () => {
    const response = await axios.get(getVideoByIdUrl(videoId));
    setVideo(response.data);
  };

  const videoId = searchParams.get('v');

  useEffect(() => {
    if (!videoId) return;

    fetchVideo();
  }, []);

  return (
    <>
    <Header />
    <div>
      <iframe className='w-[80vw] h-[80vh]'
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
    </div>
    </>
  );
};

export default WatchPage;
