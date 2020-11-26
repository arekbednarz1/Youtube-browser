import React from 'react';
import VideoItem from "./videoItem";

const VideoList = ({videos, onVideoSelect}) =>{
    const list = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });

    return <div className="ui relaxed divided list">{list}</div>
};
export default VideoList;