import "./VideoIndex.css";
import VideoShow from "./VideoShow";

export default function VideoIndex({ videos }) {

  return (
    <div>
      <h1>Video List</h1>
      {videos.length > 0 ? (
        videos.map((video) => {
          let videoId = video.id.videoId;
          let thumbnail = video.snippet.thumbnails.medium.url;
          let title = video.snippet.title;
          
          return (
            <div className="container">
              <div className="video-index">
                <div className="video-img">
                  <VideoShow videoId={videoId} thumbnail={thumbnail} title={title} />
                  {/* <img src={thumbnail} alt="" /> */}
                {/* <div className="video-item"></div>
                <div className="video-description">{title}</div> */}
                </div>
              </div>
            </div>
          );
        })

      ) : ("some type of message")}
    </div>
  );
}