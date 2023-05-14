import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../fakeFetch";

export const VideoListContext = createContext();

export const VideoContextProvider = ({ children }) => {
  // fetching all video list
  const [videoList, setVideoList] = useState([]);
  // setting liked video
  const [likedVideo, setLikedVideo] = useState([]);
  const [likedVideoID, setLikedVideoID] = useState([]);
  // setting watch later video
  const [watchLater, setWatchLater] = useState([]);
  const [watched, setWatched] = useState([]);
  // setting individual detail of video
  const [videoDetail, setVideoDetail] = useState();

  const [loader, setLoader] = useState(true)
  const fakeData = async () => {
    try {
      const {
        data: { videos },
      } = await fakeFetch("https://example.com/api/videos");
      setVideoList(videos);
      setLoader(false)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fakeData();
  }, []);
  return (
    <>
      <VideoListContext.Provider
        value={{
          videoList,
          likedVideo,
          setLikedVideo,
          likedVideoID,
          setLikedVideoID,
          watchLater,
          setWatchLater,
          watched,
          setWatched,
          setVideoDetail,
          videoDetail,
          loader
        }}
      >
        {children}
      </VideoListContext.Provider>
    </>
  );
};
