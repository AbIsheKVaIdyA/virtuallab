import { Card, CardContent } from "@mui/material";

const UiCard = ({ children, sx, contentSx, ...props }) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid rgba(148, 163, 184, 0.15)",
        background:
          "linear-gradient(140deg, rgba(17, 17, 21, 0.95), rgba(12, 12, 15, 0.9))",
        boxShadow: "0px 18px 40px rgba(0, 0, 0, 0.45)",
        ...sx,
      }}
      {...props}
    >
      <CardContent sx={{ p: 3, "&:last-child": { pb: 3 }, ...contentSx }}>
        {children}
      </CardContent>
    </Card>
  );
};

export default UiCard;
