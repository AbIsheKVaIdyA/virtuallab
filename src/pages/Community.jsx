import { Box, Grid, Stack, Typography } from "@mui/material";
import UiCard from "../components/UiCard";
import Badge from "../components/Badge";

const communityItems = [
  {
    title: "Mentor Office Hours",
    status: "Live today",
    description: "Join experts to review labs and career pathways.",
  },
  {
    title: "Study Squad",
    status: "Open",
    description: "Pair with learners to tackle weekly scenario labs.",
  },
  {
    title: "Showcase Projects",
    status: "Trending",
    description: "Explore community-built dashboards and tooling.",
  },
];

const Community = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Community
        </Typography>
        <Typography color="text.secondary">
          Connect with mentors, squads, and shared learning spaces.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {communityItems.map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
            <UiCard>
              <Stack spacing={1.5}>
                <Badge label={item.status} />
                <Typography variant="h6" fontWeight={700}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </Stack>
            </UiCard>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Community;
