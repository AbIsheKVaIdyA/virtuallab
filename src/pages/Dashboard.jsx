import { Box, Grid, Stack, Typography } from "@mui/material";
import StatCard from "../components/StatCard";
import UiCard from "../components/UiCard";
import PrimaryButton from "../components/PrimaryButton";
import ProgressBar from "../components/ProgressBar";
import { continueLearning, progressTracks, stats } from "../data/mockData";

const Dashboard = ({ onNavigate }) => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Welcome back, Abhi
        </Typography>
        <Typography color="text.secondary">
          Keep building your skills across labs, quizzes, and immersive
          simulations.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} lg={3} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={7}>
          <UiCard sx={{ height: "100%" }}>
            <Stack spacing={2}>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="h6" fontWeight={700}>
                    Continue Learning
                  </Typography>
                  <Typography color="text.secondary">
                    {continueLearning.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {continueLearning.progress}% complete
                </Typography>
              </Box>
              <Typography color="text.secondary">
                {continueLearning.description}
              </Typography>
              <ProgressBar
                label="Lab Progress"
                value={continueLearning.progress}
              />
              <PrimaryButton sx={{ alignSelf: "flex-start" }}>
                {continueLearning.cta}
              </PrimaryButton>
            </Stack>
          </UiCard>
        </Grid>
        <Grid item xs={12} lg={5}>
          <UiCard sx={{ height: "100%" }}>
            <Stack spacing={2.2}>
              <Typography variant="h6" fontWeight={700}>
                Skill Progress
              </Typography>
              {progressTracks.map((track) => (
                <ProgressBar key={track.label} {...track} />
              ))}
              <Box
                sx={{
                  mt: 1,
                  p: 2,
                  borderRadius: 2,
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04))",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Upcoming milestone
                </Typography>
                <Typography fontWeight={600}>
                  AI Threat Intel Bootcamp
                </Typography>
              </Box>
            </Stack>
          </UiCard>
        </Grid>
      </Grid>

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={7}>
          <UiCard>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Activity Pulse
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: 1,
                alignItems: "end",
              }}
            >
              {[40, 55, 30, 70, 62, 80, 52, 66, 45, 72, 58, 90].map(
                (value, index) => (
                  <Box
                    key={`${value}-${index}`}
                    sx={{
                      height: `${value}px`,
                      borderRadius: 1,
                      background:
                        "linear-gradient(180deg, rgba(243, 244, 246, 0.9), rgba(156, 163, 175, 0.5))",
                    }}
                  />
                )
              )}
            </Box>
          </UiCard>
        </Grid>
        <Grid item xs={12} md={5}>
          <UiCard>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Recommended Next Labs
            </Typography>
            <Stack spacing={1.5}>
              {[
                "Cloud Access Governance",
                "Secure API Challenge",
                "Threat Modeling Sprint",
              ].map((item) => (
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
                  <Typography variant="body2" color="text.secondary">
                    45 min · Intermediate
                  </Typography>
                </Box>
              ))}
            </Stack>
          </UiCard>
        </Grid>
      </Grid>

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={6}>
          <UiCard>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={700}>
                Quick Access
              </Typography>
              <Typography color="text.secondary">
                Jump back into quizzes, tutorials, and certification pathways.
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <PrimaryButton onClick={() => onNavigate("Quizzes")}>
                  Take a Quiz
                </PrimaryButton>
                <PrimaryButton onClick={() => onNavigate("Tutorials")}>
                  View Tutorials
                </PrimaryButton>
              </Stack>
            </Stack>
          </UiCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <UiCard>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={700}>
                Community Spotlight
              </Typography>
              <Typography color="text.secondary">
                Join the live incident drill and earn double points.
              </Typography>
              <PrimaryButton
                onClick={() => onNavigate("Community")}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(229, 231, 235, 0.9), rgba(156, 163, 175, 0.9))",
                }}
              >
                Join Challenge
              </PrimaryButton>
            </Stack>
          </UiCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Dashboard;
