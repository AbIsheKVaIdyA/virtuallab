import { Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import UiCard from "../components/UiCard";
import PrimaryButton from "../components/PrimaryButton";
import Badge from "../components/Badge";
import { labs } from "../data/mockData";

const Labs = () => {
  const [tab, setTab] = useState(0);
  const tabs = ["Sandbox", "Scenario"];
  const filteredLabs = useMemo(
    () => labs.filter((lab) => lab.type === tabs[tab]),
    [tab]
  );

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Labs
        </Typography>
        <Typography color="text.secondary">
          Hands-on labs designed for real-world simulation and practice.
        </Typography>
      </Box>

      <Tabs
        value={tab}
        onChange={(_, value) => setTab(value)}
        textColor="inherit"
        indicatorColor="primary"
        sx={{
          "& .MuiTab-root": { textTransform: "none", fontWeight: 600 },
        }}
      >
        <Tab label="Sandbox Environments" />
        <Tab label="Scenario-Based Labs" />
      </Tabs>

      <Grid container spacing={2.5}>
        {filteredLabs.map((lab) => (
          <Grid item xs={12} md={6} key={lab.title}>
            <UiCard>
              <Stack spacing={1.5}>
                <Box display="flex" justifyContent="space-between" gap={2}>
                  <Typography variant="h6" fontWeight={700}>
                    {lab.title}
                  </Typography>
                  <Badge label={lab.difficulty} />
                </Box>
                <Typography color="text.secondary">{lab.description}</Typography>
                <PrimaryButton sx={{ alignSelf: "flex-start" }}>
                  Start Lab
                </PrimaryButton>
              </Stack>
            </UiCard>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Labs;
