// https://www.youtube.com/watch?v=(videoId)
import "./VideoShow.css";
import VideoIndex from "./VideoIndex";
import YouTube from "react-youtube";

export default function VideoShow( { videoId, thumbnail, title }) {
  return (
    <div>
      <div className="container">
        <div className="video-index">
          <div className="video-img">
            <img src={thumbnail} alt="" />
          <div className="video-item"></div>
          <div className="video-description">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}