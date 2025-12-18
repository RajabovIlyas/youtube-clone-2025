import ChannelImage from "../ChannelImage";

const VideoCard = ({videoWatchUrl, img, title, channelName, views, publishedAt, time, channelId, channelImg }) => {
    return (
        <div className="video-card-container">
      <div className="video-card_img-box">
        <a href={videoWatchUrl}>
          <img
            src={img}
            className="video-card_img"
            alt={title}
            loading="lazy"
          />
          <div className="video-card_img-time-box">
            <span className="video-card_img-time">{time}</span>
          </div>
        </a>
      </div>
      <div className="flex gap-2">
        <div className="min-w-10">
          <ChannelImage
            channelId={channelId}
            channelName={channelName}
            channelImg={channelImg}
          />
        </div>
        <a href={videoWatchUrl}>
          <div className="video-card_description">
            <p className="line-clamp-2 font-bold">{title}</p>
            <p className="video-card_channel-title">{channelName}</p>
            <div className="text-zinc-700 dark:text-gray-400 flex gap-1 items-center">
              <span className="text-sm">{views} views</span>
              <span>•</span>
              <span className="video-card_publish">{publishedAt}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    )
}

export default VideoCard;