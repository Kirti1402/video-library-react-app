import { useContext, useState } from "react";
import { VideoListContext } from "../context/videoListContext";
import { useNavigate,Link } from "react-router-dom";


export const WatchLater = () => {
  const { watchLater ,likedVideoID,watched,setLikedVideo,setLikedVideoID,likedVideo,setVideoDetail} = useContext(VideoListContext);
  const navigate = useNavigate()
  const likeBtnHandle = (video, id) => {
    if (!likedVideo.includes(video)) {
      setLikedVideo([...likedVideo, video]);
      setLikedVideoID([...likedVideoID, id]);
    } else{
      navigate("/likedVideos")
    }
  };
  return  <div>
  <div className="content-container">
      {watchLater && watchLater.map((video) => 
     { 
      const { id,
          title,
          description,
          url,
          thumbnail,
          duration} = video
      return <div className="card-container" key={id}>
          <img src={thumbnail} alt={title}/>
          <p>Title:{title}</p>
          <p>Description:{description}</p>
          <Link className="content-link" to='/videoDetail' onClick={()=>setVideoDetail(video)}>video Detail</Link>
          <div className="btn-container">
          <button onClick={() => likeBtnHandle(video, id)} >{likedVideoID.includes(id)?'Liked Video':'Like Video'}</button>
          <button>{watched.includes(id)?"Added to watch later": "Add to watch Later"}</button>
          </div>
      </div>})}
  </div>
</div>;
};
