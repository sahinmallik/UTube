import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="start">
      {videos.map((video, id) => (
        <Box key={id}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
