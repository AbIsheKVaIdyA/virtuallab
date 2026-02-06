import { useEffect, useMemo, useState } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScienceIcon from "@mui/icons-material/Science";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ArticleIcon from "@mui/icons-material/Article";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TimelineIcon from "@mui/icons-material/Timeline";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Labs from "./pages/Labs";
import Quizzes from "./pages/Quizzes";
import Videos from "./pages/Videos";
import Tutorials from "./pages/Tutorials";
import Games from "./pages/Games";
import Blogs from "./pages/Blogs";
import Certifications from "./pages/Certifications";
import Community from "./pages/Community";
import Progress from "./pages/Progress";
import Landing from "./pages/Landing";

const drawerWidth = 260;

const navItems = [
  { key: "Dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { key: "Labs", label: "Labs", icon: <ScienceIcon /> },
  { key: "Videos", label: "Videos", icon: <VideoLibraryIcon /> },
  { key: "Tutorials", label: "Tutorials", icon: <MenuBookIcon /> },
  { key: "Games", label: "Games", icon: <SportsEsportsIcon /> },
  { key: "Blogs", label: "Blogs", icon: <ArticleIcon /> },
  { key: "Certifications", label: "Certifications", icon: <WorkspacePremiumIcon /> },
  { key: "Community", label: "Community", icon: <PeopleAltIcon /> },
  { key: "Progress", label: "Progress", icon: <TimelineIcon /> },
];

const App = () => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          primary: {
            main: "#e5e7eb",
            light: "#f3f4f6",
            dark: "#9ca3af",
          },
          secondary: {
            main: "#9ca3af",
          },
          background: {
            default: "#0b0b0d",
            paper: "#111115",
          },
          text: {
            primary: "#f3f4f6",
            secondary: "#9ca3af",
          },
        },
        typography: {
          fontFamily: "Inter, system-ui, sans-serif",
        },
        shape: {
          borderRadius: 16,
        },
      }),
    []
  );

  const [activePage, setActivePage] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(
    () => window.location.hash !== "#app"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setShowLanding(window.location.hash !== "#app");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "Labs":
        return <Labs />;
      case "Quizzes":
        return <Quizzes />;
      case "Videos":
        return <Videos />;
      case "Tutorials":
        return <Tutorials />;
      case "Games":
        return <Games />;
      case "Blogs":
        return <Blogs />;
      case "Certifications":
        return <Certifications />;
      case "Community":
        return <Community />;
      case "Progress":
        return <Progress />;
      case "Dashboard":
      default:
        return <Dashboard onNavigate={setActivePage} />;
    }
  };

  const handleSelect = (page) => {
    setActivePage(page);
    setMobileOpen(false);
  };

  const handleEnterPlatform = () => {
    window.location.hash = "#app";
  };

  const handleGoLanding = () => {
    window.location.hash = "#landing";
  };

  if (showLanding) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Landing onEnter={handleEnterPlatform} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar
          navItems={navItems}
          activePage={activePage}
          onSelect={handleSelect}
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          drawerWidth={drawerWidth}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: { xs: 2, md: 4 },
            py: { xs: 3, md: 4 },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Header
            onMenuClick={() => setMobileOpen(true)}
            onGoLanding={handleGoLanding}
          />
          {renderPage()}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
