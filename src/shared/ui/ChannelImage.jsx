const ChannelImage = ({ channelUrl, channelName, channelImg }) => {
  return (
    <a href={channelUrl}>
      <img
        src={channelImg}
        className="channel-img"
        alt={channelName}
        loading="lazy"
      />
    </a>
  );
};

export default ChannelImage;
