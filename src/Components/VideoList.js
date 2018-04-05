import React from 'react';

import VideoListItem from './VideoListItem'

const VideoList = ({onVideoSelect, videos}) => {
    const videoItems = videos.map((video)=>{
        return (
            <VideoListItem
                key={video.etag}
                onVideoSelect={onVideoSelect}
                video={video}/>
        )
    });

    return (
        <ul className="list-group" style={{marginLeft: 10}}>
            {videoItems}
        </ul>
    );
};

export default VideoList;