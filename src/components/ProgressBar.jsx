import { Box, LinearProgress, Typography } from "@mui/material";

const ProgressBar = ({ label, value }) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="body2" fontWeight={600}>
          {value}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 999,
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          "& .MuiLinearProgress-bar": {
            borderRadius: 999,
            background:
              "linear-gradient(90deg, rgba(243, 244, 246, 0.95), rgba(156, 163, 175, 0.9))",
          },
        }}
      />
    </Box>
  );
};

export default ProgressBar;
