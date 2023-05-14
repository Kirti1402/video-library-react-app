import { useContext } from "react";
import { VideoListContext } from "../context/videoListContext";
import {useNavigate} from "react-router-dom"
import {Link} from "react"
export const VideoDetailPage =() => {
    const {
        videoDetail,
        likedVideoID,
        watched,
        likedVideo,
        setLikedVideo,
        setLikedVideoID,
        watchLater,
        setWatchLater,
        setWatched
      } = useContext(VideoListContext);

      const navigate = useNavigate();
    //   const {  title, description, url, thumbnail, duration } = videoDetail;

    const likeBtnHandle = (video, id) => {
        if (!likedVideo.includes(video)) {
          setLikedVideo([...likedVideo, video]);
          setLikedVideoID([...likedVideoID, id]);
        }else{
            navigate("/likedVideos")
        }
      };
      const watchLaterBtnHandle = (video, id) => {
        if (!watchLater.includes(video)) {
          setWatchLater([...watchLater, video]);
          setWatched([...watched, id]);
        }else{
            navigate("/watchLater")
        }
      };
    return (
        <div className="videoDetail">
            <h1 >Video Detail</h1>
            <div className="detail-card-container" >
                <img src={videoDetail.thumbnail} alt={videoDetail.title} />
                <div className="detail-container">
                <p>Title:{videoDetail.title}</p>
                <p>Description:{videoDetail.description}</p>
                <p>Duration:{videoDetail.duration}</p>
                    <a href={videoDetail.url} target="_blank">Watch Video</a>
                <div className="btn-container">
                  <button onClick={() => likeBtnHandle(videoDetail, videoDetail.id)}>
                    {likedVideoID.includes(videoDetail.id) ? "Liked Video" : "Like Video"}
                  </button>
                  <button onClick={() => watchLaterBtnHandle(videoDetail, videoDetail.id)}>
                    {watched.includes(videoDetail.id)?"Added to watch later": "Add to watch Later"}
                  </button>
                </div>
                </div>
              </div>
        </div>
    )
}