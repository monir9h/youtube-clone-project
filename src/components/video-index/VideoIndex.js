import "./VideoIndex.css";


export default function VideoIndex({videos}) {

  return (
    <div className="container">
      <ul className="video-index">
        <li className="video-item">
          <span>Video Image</span>
          <span>video 1</span>
        </li>
        <li className="video-item">Video 2</li>
        <li className="video-item">Video 3</li>
        <li className="video-item">Video 4</li>
        <li className="video-item">video 5</li>
      </ul>
    </div>
  );
}