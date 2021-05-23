import React from 'react';
import '../App.css'
import youtube from '../api/youtube'
import VideoDetails from './VideoDetails'
import SearchBar from './SearchBar'
import {Grid} from '@material-ui/core';
import VideoList from './VideoList';

class App extends React.Component{

    state = {
        videos: [],
        selectedVideo:null
    }
    

    handleSubmit = async (searchTerm) =>{
        const response = await youtube.get('/search', {
            params:{
                part: 'snippet',
                type:' video',
                maxResults:5,
                key: 'AIzaSyBJ-gZwIARvOeNfxmu5H1ocmvC9aMOo2d8',
                q: searchTerm
            }
        });
        //console.log(response);
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0] });
         //console.log(this.state.videos);
    }

    render(){
        // const {selectedVideo} = this.state;
        return(
            <Grid justify="center container" container spacing={5} >
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                           <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}  className="videodetails" style={{}}>
                           <VideoDetails video={this.state.selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video List */}
                            <VideoList
                            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                            videos={this.state.videos}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
      
}
export default App;