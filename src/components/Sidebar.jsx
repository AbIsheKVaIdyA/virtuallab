import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const Sidebar = ({
  navItems,
  activePage,
  onSelect,
  mobileOpen,
  onClose,
  drawerWidth = 260,
}) => {
  const content = (
    <Box sx={{ px: 2.5, py: 3 }}>
      <Typography variant="h6" fontWeight={700} letterSpacing={0.5}>
        VirtuaLab
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Virtual Lab Ecosystem
      </Typography>
      <List sx={{ mt: 3 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            selected={activePage === item.key}
            onClick={() => onSelect(item.key)}
            sx={{
              borderRadius: 2,
              mb: 1,
              "&.Mui-selected": {
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "text.primary",
              },
              "&:hover": {
                backgroundColor: "rgba(148, 163, 184, 0.12)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: 38 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontWeight: 600 }}
              primary={item.label}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#111115",
          },
        }}
      >
        {content}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: "1px solid rgba(148, 163, 184, 0.12)",
            backgroundColor: "#111115",
          },
        }}
      >
        {content}
      </Drawer>
    </>
  );
};

export default Sidebar;
