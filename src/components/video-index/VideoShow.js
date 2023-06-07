import "./VideoShow.css";
import YouTube from "react-youtube";

export default function VideoShow({ videoId, thumbnail, title }) {
  const opts = {
    height: "300",
    width: "540",
    playerVars: {
    },
  };

  return (
    <div className="video-img">
      <YouTube videoId={videoId} opts={opts} />
      <div className="video-description">{title}</div>
    </div>
  );
}
