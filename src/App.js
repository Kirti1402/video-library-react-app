import "./App.css";
import {Routes,Route, Link} from "react-router-dom"
import { HomePage } from "./component/Home";
import { Videos } from "./component/Videos";
import { LikedVideos } from "./component/LikedVideos";
import { WatchLater } from "./component/WatchLater";

import { VideoListContext } from "./context/videoListContext";
import { useContext } from 'react';
import { VideoDetailPage } from "./component/VideoDetailPage";


function App() {
  const {likedVideo,watched} = useContext(VideoListContext);
  return (
    <div className="App">
      
      <nav className="nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/videos">Videos</Link>
            <Link className="nav-link" to="/likedVideos">Liked Videos({likedVideo.length})</Link>
            <Link className="nav-link" to="/watchLater">Watch Later({watched.length})</Link>
        </nav>
      <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/videos" element={<Videos/>}/>
            <Route path="/likedVideos" element={<LikedVideos/>}/>
            <Route path="/watchLater" element={<WatchLater/>}/>
            <Route path="/videoDetail" element={<VideoDetailPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
