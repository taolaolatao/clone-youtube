import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components/index';
import youtube from './api/youtube';

class	App extends React.Component{
  state = {
    videos: [],
    selectedVideo: null
  }
  
  componentDidMount(){
    this.handleSubmit("Linux bash");
  }

  handleSubmit = async searchTerm => {
    const response = await youtube.get('search', { params: {
		    part: 'snippet',
		    maxResults: 20,
        q: searchTerm,
		    key: 'AIzaSyAStjcy3cCqGbnS9bGlKOW5G8ejzHNg_7U'
	    }
    });
    
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  onSelectVideo = video => this.setState({ selectedVideo: video })

	render(){
    const { selectedVideo, videos } = this.state;

		return (
			<Grid justify="center" container spacing={10}>
				<Grid item xs={12}>
					<Grid container spacing={10}>
						<Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
						</Grid>
						<Grid item xs={8}>
              <VideoDetail video={selectedVideo}  />
						</Grid>
						<Grid item xs={4}>
              <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		 )
	}
}

export default App;
