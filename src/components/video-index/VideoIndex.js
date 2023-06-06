import "./VideoIndex.css";
import YouTube from "react-youtube";

export default function VideoIndex({ videos }) {
  return (
    <div>
      <h1>Video List</h1>
      {videos.map((video) => {
        let videoId = video.id.videoId;
        let thumbnail = video.snippet.thumbnails.high.url;
        let title = video.snippet.title;

        return (
          <div className="container">
            <div className="video-index">
              <div className="video-item">
                <div className="video-img">
                  <img src={thumbnail} alt="" />
                </div>
                <div className="video-description">{title}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


// import "./VideoIndex.css";
// import YouTube from "react-youtube"

// export default function VideoIndex({ videos }) {
//   return (
//    <div>
//     <h1>Video List</h1>
//      {/* { if (videos.length>0){ */}
//           {videos.map((video) => {
//             let videoId = "https://www.youtube.com/watch?v=" + video.id.videoId 
//             // let thumbnail = video.snippet.thumbnails.high
//             // let title = video.snippet.title
//             <div className="container">
//             <div className="video-index">
//               <div className="video-item">
//                 <div className="video-img">{ videoId}</div>
//                 {/* <img src={video.snippet.thumbnails.high} alt="" /> */}
//                 <div className="video-description">video 1</div>
//               </div>
//             </div>
//           </div>
//           })}
//         {/* }
//       } */}
  
//   </div>
//   );
    
// }