import { Chip } from "@mui/material";

const Badge = ({ label, color = "primary", sx, ...props }) => {
  return (
    <Chip
      label={label}
      color={color}
      size="small"
      sx={{
        borderRadius: 999,
        fontWeight: 600,
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        color: "#e5e7eb",
        ...sx,
      }}
      {...props}
    />
  );
};

export default Badge;
