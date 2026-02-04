import { Box, Grid, Stack, Typography } from "@mui/material";
import UiCard from "../components/UiCard";
import Badge from "../components/Badge";
import PrimaryButton from "../components/PrimaryButton";

const certifications = [
  {
    title: "Cloud Security Specialist",
    level: "Intermediate",
    duration: "4 weeks",
  },
  {
    title: "SOC Analyst Professional",
    level: "Advanced",
    duration: "6 weeks",
  },
  {
    title: "AI Threat Intelligence",
    level: "Beginner",
    duration: "3 weeks",
  },
];

const Certifications = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Certifications
        </Typography>
        <Typography color="text.secondary">
          Curated pathways with labs, projects, and assessments.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {certifications.map((cert) => (
          <Grid item xs={12} md={4} key={cert.title}>
            <UiCard>
              <Stack spacing={1.5}>
                <Badge label={cert.level} />
                <Typography variant="h6" fontWeight={700}>
                  {cert.title}
                </Typography>
                <Typography color="text.secondary">
                  Estimated duration: {cert.duration}
                </Typography>
                <PrimaryButton sx={{ alignSelf: "flex-start" }}>
                  View Pathway
                </PrimaryButton>
              </Stack>
            </UiCard>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Certifications;
