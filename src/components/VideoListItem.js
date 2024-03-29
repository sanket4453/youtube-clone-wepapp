import React from 'react'

function VideoListItem({video, onVideoSelect}) {
    console.log(video);
    const imageURL = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
           <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL}  />
                </div>
                <div className="media-right">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
           </div>
        </li>
    )
}

export default VideoListItem
