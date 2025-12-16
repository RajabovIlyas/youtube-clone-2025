const VideoCard = ({title, channelName, viwes, image, createdAt, time, }) => {
    return (
        <div>
            <img src={image} alt={title} />
        </div>
    )
}

export default VideoCard;