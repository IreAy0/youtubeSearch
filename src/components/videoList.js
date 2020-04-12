import React from "react";
import VideoItem from "./videoItem";
const videoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        videoSelect={props.videoSelect}
      />
    );
  });
  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default videoList;
