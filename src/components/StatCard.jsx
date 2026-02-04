import { Stack, Typography } from "@mui/material";
import UiCard from "./UiCard";

const StatCard = ({ title, value, detail }) => {
  return (
    <UiCard>
      <Stack spacing={1}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" fontWeight={700}>
          {value}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {detail}
        </Typography>
      </Stack>
    </UiCard>
  );
};

export default StatCard;
