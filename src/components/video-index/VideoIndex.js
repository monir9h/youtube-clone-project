import "./VideoIndex.css";
import VideoShow from "./VideoShow";

export default function VideoIndex({ videos }) {
  return (
    <div className="video-index">
      {videos.length > 0 ? (
        videos.map((video) => {
          let videoId = video.id.videoId;
          let thumbnail = video.snippet.thumbnails.high.url;
          let title = video.snippet.title;

          return (
            <div key={videoId} className="video-item">
              <VideoShow videoId={videoId} thumbnail={thumbnail} title={title} />
            </div>
          );
        })
      ) : (
        <div>Some type of message</div>
      )}
    </div>
  );
}
