import {
  Box,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import UiCard from "../components/UiCard";
import Badge from "../components/Badge";
import ProgressBar from "../components/ProgressBar";
import { progressData } from "../data/mockData";

const Progress = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Progress
        </Typography>
        <Typography color="text.secondary">
          Track milestones, completed items, and streak momentum.
        </Typography>
      </Box>

      <UiCard>
        <Stack spacing={3}>
          <Typography variant="h6" fontWeight={700}>
            Learning Journey
          </Typography>
          <Stepper alternativeLabel activeStep={2}>
            {progressData.tracker.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </UiCard>

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={6}>
          <UiCard>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Completed Items
            </Typography>
            <Stack spacing={1.5}>
              {progressData.completed.map((item) => (
                <Box
                  key={item}
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    border: "1px solid rgba(148, 163, 184, 0.12)",
                    backgroundColor: "rgba(17, 17, 21, 0.6)",
                  }}
                >
                  <Typography fontWeight={600}>{item}</Typography>
                </Box>
              ))}
            </Stack>
          </UiCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <UiCard>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={700}>
                Earned Badges
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {progressData.badges.map((badge) => (
                  <Badge key={badge} label={badge} />
                ))}
              </Stack>
              <Box>
                <Typography fontWeight={600} gutterBottom>
                  Learning Streak
                </Typography>
                <ProgressBar
                  label={`Current streak: ${progressData.streak.current} days`}
                  value={(progressData.streak.current / progressData.streak.goal) * 100}
                />
                <Typography variant="caption" color="text.secondary">
                  Longest streak: {progressData.streak.longest} days
                </Typography>
              </Box>
            </Stack>
          </UiCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Progress;
