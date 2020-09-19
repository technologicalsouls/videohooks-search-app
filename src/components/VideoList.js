import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({ videos, onVideoSelect }) => {
    //map over videos, for each video, render out a VideoItem
    const renderedList = videos.map(video => {
        return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
    }); //returns array of videoItems list


    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default VideoList;