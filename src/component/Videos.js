import { useContext, useState } from "react";
import { VideoListContext } from "../context/videoListContext";
import {Link, useNavigate} from "react-router-dom"
export const Videos = () => {
  const {
    videoList,
    likedVideo,
    setLikedVideo,
    likedVideoID,
    setLikedVideoID,
    setWatchLater,
    watched,
    watchLater,
    setWatched,
    setVideoDetail
  } = useContext(VideoListContext);

  const navigate = useNavigate()

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

  const videoDetail = (video) =>{
    setVideoDetail(video)
  }

  console.log("likedvideos", likedVideoID, likedVideo);
  return (
    <div>
      <h1 className="heading">All Videos</h1>
      <div className="content-container">
        {videoList &&
          videoList.map((video) => {
            const { id, title, description, url, thumbnail, duration } = video;
            return (
              <div className="card-container" key={id}>
                <img src={thumbnail} alt={title} />
                <p>Title:{title}</p>


                <Link className="content-link" to='/videoDetail' onClick={()=>videoDetail(video)}>video Detail</Link>
                <div className="btn-container">
                  <button onClick={() => likeBtnHandle(video, id)}>
                    {likedVideoID.includes(id) ? "Liked Video" : "Like Video"}
                  </button>
                  <button onClick={() => watchLaterBtnHandle(video, id)}>
                    {watched.includes(id)?"Added to watch later": "Add to watch Later"}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
