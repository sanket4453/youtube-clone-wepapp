import React from 'react'
import {Paper, Typography} from '@material-ui/core'

const VideoDetails = ({video}) => {
  if(!video){
      return <div>Loading...</div>
  }
    console.log(video);
    // console.log(videos[0]);
    // console.log('hello')
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
   // const VidSrc=`https://www.youtube.com/embed/${videos[0].id.videoId}`;

    return(
       
        <React.Fragment>
            <Paper elevation={6} style={{height:'70%', marginLeft:'40px'}}>
                <iframe frameBorder="0" height='90%' style={{}} width='100%' title="Video Player" src={url}   />
            </Paper>
            <Paper elevation={6} style={{padding:'15', marginLeft:'40px'}}>
                <Typography variant="h4" >
                    {video.snippet.title} - {video.snippet.channelTitle}
                     </Typography>
                <Typography variant="subtitle1">
                     {video.snippet.channelTitle} 
                     </Typography>
                <Typography variant="subtitle2"> 
                {video.snippet.description} 
                </Typography>
            </Paper>
        </React.Fragment>
    );
}

export default VideoDetails;