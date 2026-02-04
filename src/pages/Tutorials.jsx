import { Box, Grid, Stack, Typography } from "@mui/material";
import UiCard from "../components/UiCard";
import ProgressBar from "../components/ProgressBar";
import Badge from "../components/Badge";
import { tutorials } from "../data/mockData";

const Tutorials = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Tutorials
        </Typography>
        <Typography color="text.secondary">
          Project-based learning and challenge series to advance your skills.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {tutorials.projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <UiCard>
              <Stack spacing={1.5}>
                <Typography variant="h6" fontWeight={700}>
                  {project.title}
                </Typography>
                <Typography color="text.secondary">
                  {project.description}
                </Typography>
                <ProgressBar label="Progress" value={project.progress} />
              </Stack>
            </UiCard>
          </Grid>
        ))}
      </Grid>

      <UiCard>
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={700}>
            Challenge Series
          </Typography>
          <Grid container spacing={2}>
            {tutorials.challenges.map((challenge) => (
              <Grid item xs={12} md={4} key={challenge.title}>
                <Stack spacing={1.5}>
                  <Badge label={challenge.level} />
                  <Typography fontWeight={600}>{challenge.title}</Typography>
                  <ProgressBar label="Completion" value={challenge.progress} />
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </UiCard>
    </Stack>
  );
};

export default Tutorials;
