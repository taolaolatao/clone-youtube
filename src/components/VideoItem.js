import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "center", cursor: 'pointer' }} onClick={() => onSelectVideo(video)}>
        <img style={{ marginRight: "20px", width: '150px', objectFit: 'cover' }} src={video.snippet.thumbnails.medium.url} alt="Thumbnail Video" />
        <Typography variant="subtitle1"><b> {video.snippet.title} </b></Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
