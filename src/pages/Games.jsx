import { Box, Grid, Stack, Typography } from "@mui/material";
import UiCard from "../components/UiCard";
import Badge from "../components/Badge";
import PrimaryButton from "../components/PrimaryButton";
import { games } from "../data/mockData";

const Games = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Games
        </Typography>
        <Typography color="text.secondary">
          Gamified learning paths, badges, and collaborative challenges.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {games.paths.map((path) => (
          <Grid item xs={12} md={6} key={path.title}>
            <UiCard>
              <Stack spacing={1.5}>
                <Typography variant="h6" fontWeight={700}>
                  {path.title}
                </Typography>
                <Typography color="text.secondary">{path.description}</Typography>
                <Typography fontWeight={600}>
                  {path.points} points earned
                </Typography>
                <PrimaryButton sx={{ alignSelf: "flex-start" }}>
                  Continue Path
                </PrimaryButton>
              </Stack>
            </UiCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={5}>
          <UiCard>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={700}>
                Badge Vault
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {games.badges.map((badge) => (
                  <Badge
                    key={badge.label}
                    label={`${badge.label} +${badge.points}`}
                  />
                ))}
              </Stack>
            </Stack>
          </UiCard>
        </Grid>
        <Grid item xs={12} md={7}>
          <UiCard>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={700}>
                Collaborative Challenges
              </Typography>
              {games.challenges.map((challenge) => (
                <Box
                  key={challenge.title}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid rgba(148, 163, 184, 0.12)",
                    backgroundColor: "rgba(17, 17, 21, 0.6)",
                  }}
                >
                  <Typography fontWeight={600}>{challenge.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {challenge.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {challenge.status}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </UiCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Games;
