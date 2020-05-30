import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {
  const listOfVideos = videos.map((video, index) => <VideoItem key={index} video={video} onSelectVideo={onSelectVideo} />);

  return (
    <Grid container spacing={8}>
      {listOfVideos}
    </Grid>
  )
}

export default VideoList;

