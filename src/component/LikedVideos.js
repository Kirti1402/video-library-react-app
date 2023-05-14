
import { useContext ,useState} from "react";
import { VideoListContext } from "../context/videoListContext";
import { Link, useNavigate } from "react-router-dom";
export const LikedVideos = () => {
    const {likedVideo, likedVideoID,watchLater,setWatchLater,watched,setWatched,setVideoDetail} = useContext(VideoListContext);
    const navigate = useNavigate()

    const watchLaterBtnHandle = (video, id) => {
        if (!watchLater.includes(video)) {
          setWatchLater([...watchLater, video]);
          setWatched([...watched, id]);
        }else{
            navigate("/watchLater")
        }
      };
    return (
        <div>

        <div className="content-container">
            {likedVideo && likedVideo.map((video) => 
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
                <Link className="content-link" to='/videoDetail' onClick={()=>setVideoDetail(video)}>video Detail</Link>
                <div className="btn-container">
                <button >{likedVideoID.includes(id)?'Liked Video':'Like Video'}</button>
                <button onClick={() => watchLaterBtnHandle(video, id)}>{watched.includes(id)?"Added to watch later": "Add to watch Later"}</button>
                </div>
            </div>})}
        </div>
    </div>
    );
}