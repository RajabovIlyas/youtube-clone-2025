import VideoCard from '../../shared/ui/video-card/VideoCard';

const VideoContainer = () => {
  return (
    <main className="pb-5 mx-auto px-4 max-w-screen-2xl">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-3">
        <VideoCard
          title="Video 1"
          channelName="Channel 1"
          views={100}
          image="https://via.placeholder.com/150"
          createdAt="2021-01-01"
          time="10:00"
        />
        <VideoCard
          title="Video 1"
          channelName="Channel 1"
          views={100}
          image="https://via.placeholder.com/150"
          createdAt="2021-01-01"
          time="10:00"
        />
        <VideoCard
          title="Video 1"
          channelName="Channel 1"
          views={100}
          image="https://via.placeholder.com/150"
          createdAt="2021-01-01"
          time="10:00"
        />
        <VideoCard
          title="Video 1"
          channelName="Channel 1"
          views={100}
          image="https://via.placeholder.com/150"
          createdAt="2021-01-01"
          time="10:00"
        />
        <VideoCard
          title="Video 1"
          channelName="Channel 1"
          views={100}
          image="https://via.placeholder.com/150"
          createdAt="2021-01-01"
          time="10:00"
        />
      </div>
    </main>
  );
};

export default VideoContainer;
