import React from 'react'
import VideoListItem from './VideoListItem'

function VideoList(props) {
   const VideoItem= props.videos.map((video) => {
        return <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
         video={video}/>
    })
    return (
        <ul className="col-md-8 list-group">
            {VideoItem}
        </ul>
    )
}

export default VideoList
