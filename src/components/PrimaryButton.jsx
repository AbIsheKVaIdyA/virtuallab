import { Button } from "@mui/material";

const PrimaryButton = ({ children, sx, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: 999,
        px: 3,
        py: 1.1,
        fontWeight: 600,
        background:
          "linear-gradient(135deg, rgba(243, 244, 246, 0.95), rgba(209, 213, 219, 0.9))",
        color: "#0b0b0d",
        boxShadow: "0 10px 24px rgba(0, 0, 0, 0.35)",
        "&:hover": {
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.5)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
