import { Box, Grid, Stack, Typography } from "@mui/material";
import UiCard from "../components/UiCard";
import Badge from "../components/Badge";
import { videos } from "../data/mockData";

const VideoSection = ({ title, items }) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight={700}>
        {title}
      </Typography>
      <Grid container spacing={2.5}>
        {items.map((video) => (
          <Grid item xs={12} sm={6} lg={4} key={video.title}>
            <UiCard>
              <Stack spacing={1.5}>
                <Box
                  sx={{
                    height: 140,
                    borderRadius: 2,
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04))",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 12,
                      right: 12,
                    }}
                  >
                    <Badge label={video.duration} />
                  </Box>
                </Box>
                <Typography fontWeight={600}>{video.title}</Typography>
                <Badge label={video.level} />
              </Stack>
            </UiCard>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

const Videos = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Videos
        </Typography>
        <Typography color="text.secondary">
          Learn quickly with visual walkthroughs and gamified series.
        </Typography>
      </Box>

      <VideoSection title="Quick Tutorials" items={videos.quick} />
      <VideoSection title="Gamified Video Series" items={videos.gamified} />
    </Stack>
  );
};

export default Videos;
