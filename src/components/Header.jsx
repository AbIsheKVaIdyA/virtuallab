import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ onMenuClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        mb: 4,
        flexWrap: "wrap",
      }}
    >
      <Box display="flex" alignItems="center" gap={1.5}>
        <IconButton
          onClick={onMenuClick}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Virtual Lab & Learning
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Explore labs, tutorials, and immersive experiences
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
        <TextField
          size="small"
          placeholder="Search labs, videos, tutorials"
          sx={{
            minWidth: { xs: "100%", sm: 320 },
            "& .MuiOutlinedInput-root": {
              borderRadius: 999,
              backgroundColor: "rgba(17, 17, 21, 0.7)",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <Avatar sx={{ bgcolor: "primary.main" }}>AV</Avatar>
      </Box>
    </Box>
  );
};

export default Header;
