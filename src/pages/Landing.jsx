import { Box, Grid, Stack, Typography } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton";
import UiCard from "../components/UiCard";
import Badge from "../components/Badge";

const Landing = ({ onEnter }) => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 3, md: 5 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(circle at top left, rgba(99, 102, 241, 0.4), transparent 45%), radial-gradient(circle at 30% 20%, rgba(14, 165, 233, 0.3), transparent 35%), radial-gradient(circle at 70% 0%, rgba(236, 72, 153, 0.25), transparent 40%), #0b0b0d",
          opacity: 0.9,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1 }}>
      <Box
        sx={{
          mb: { xs: 3, md: 4 },
          px: { xs: 1.5, md: 2.5 },
          py: 0.8,
          borderRadius: 999,
          border: "1px solid rgba(255, 255, 255, 0.12)",
          background:
            "linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(30, 41, 59, 0.6))",
          backdropFilter: "blur(10px)",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr" },
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Stack spacing={0.2} alignItems={{ xs: "center", md: "flex-start" }}>
          <Typography variant="subtitle1" fontWeight={700}>
            VirtuaLab
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Virtual Lab & Learning Platform
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={{ xs: 1.5, md: 2.5 }}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          sx={{
            px: { xs: 1, md: 2 },
            py: 0.5,
            borderRadius: 999,
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
          }}
        >
          {["Labs", "Videos", "Tutorials", "Community"].map((item) => (
            <Typography
              key={item}
              variant="caption"
              color="text.secondary"
              sx={{ letterSpacing: 0.6, textTransform: "uppercase" }}
            >
              {item}
            </Typography>
          ))}
        </Stack>
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          justifyContent={{ xs: "center", md: "flex-end" }}
          flexWrap="wrap"
        >
          <Typography variant="caption" color="text.secondary">
            Live demo
          </Typography>
          <PrimaryButton
            onClick={onEnter}
            sx={{
              py: 0.6,
              px: 2.2,
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(14, 165, 233, 0.9))",
              color: "#f8fafc",
            }}
          >
            Enter Platform
          </PrimaryButton>
        </Stack>
      </Box>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Badge
              label="New · AI-Powered Learning Paths"
              sx={{
                backgroundColor: "rgba(99, 102, 241, 0.2)",
                color: "#c7d2fe",
              }}
            />
            <Typography variant="h3" fontWeight={700}>
              Master hands-on cyber and cloud skills in one immersive platform.
            </Typography>
            <Typography color="text.secondary">
              Interactive labs, scenario drills, and guided projects designed to
              help learners build real-world confidence. Start with curated
              pathways and progress to certifications at your own pace.
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <PrimaryButton
                onClick={onEnter}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(14, 165, 233, 0.95), rgba(59, 130, 246, 0.9))",
                  color: "#f8fafc",
                }}
              >
                Get Started
              </PrimaryButton>
              <PrimaryButton
                onClick={onEnter}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(236, 72, 153, 0.85), rgba(249, 115, 22, 0.85))",
                  color: "#0b0b0d",
                }}
              >
                Explore Labs
              </PrimaryButton>
            </Stack>
            <Stack direction="row" spacing={3} flexWrap="wrap">
              {[
                { label: "120+ Labs", value: "Built for practice" },
                { label: "45+ Quizzes", value: "Instant feedback" },
                { label: "20+ Paths", value: "Career focused" },
              ].map((item) => (
                <Box key={item.label}>
                  <Typography fontWeight={700}>{item.label}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <UiCard
            sx={{
              minHeight: 320,
              background:
                "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.7))",
            }}
          >
            <Stack spacing={2} alignItems="center" justifyContent="center">
              <Typography variant="h6" fontWeight={700}>
                Hero Reel
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Showcase platform walkthrough, dashboard preview, or highlight
                reel.
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: 180,
                  borderRadius: 2,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <video
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  poster="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1000&q=80"
                  muted
                  loop
                  autoPlay
                >
                  <source
                    src="https://cdn.coverr.co/videos/coverr-cyber-technology-9462/1080p.mp4"
                    type="video/mp4"
                  />
                </video>
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(11, 11, 13, 0.2), rgba(11, 11, 13, 0.6))",
                  }}
                />
              </Box>
            </Stack>
          </UiCard>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
        {[
          {
            title: "Immersive Labs",
            description:
              "Real-world scenarios with guided steps and sandbox controls.",
          },
          {
            title: "Guided Paths",
            description:
              "Role-based learning maps with progress tracking and milestones.",
          },
          {
            title: "Team Challenges",
            description:
              "Collaborate, compete, and earn badges in guided challenges.",
          },
        ].map((feature) => (
          <Grid item xs={12} md={4} key={feature.title}>
            <UiCard
              sx={{
                background:
                  "linear-gradient(150deg, rgba(30, 41, 59, 0.85), rgba(17, 24, 39, 0.8))",
              }}
            >
              <Stack spacing={1.5}>
                <Typography variant="h6" fontWeight={700}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                  alt="feature"
                  sx={{
                    width: "100%",
                    height: 140,
                    borderRadius: 2,
                    objectFit: "cover",
                  }}
                />
              </Stack>
            </UiCard>
          </Grid>
        ))}
      </Grid>

      <UiCard
        sx={{
          mt: { xs: 4, md: 6 },
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.7))",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight={700}>
                Platform Walkthrough
              </Typography>
              <Typography color="text.secondary">
                A guided tour of labs, dashboards, and analytics in one clear
                flow.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Sample walkthrough video
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: 220,
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <video
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                muted
                loop
                autoPlay
                poster="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-1573/1080p.mp4"
                  type="video/mp4"
                />
              </video>
            </Box>
          </Grid>
        </Grid>
      </UiCard>

      <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
        {[
          {
            label: "Product Demo Video",
            src: "https://cdn.coverr.co/videos/coverr-server-room-8575/1080p.mp4",
            poster:
              "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=900&q=80",
          },
          {
            label: "Learner Journey Video",
            src: "https://cdn.coverr.co/videos/coverr-working-on-a-laptop-1579/1080p.mp4",
            poster:
              "https://images.unsplash.com/photo-1517142089942-ba376ce32a0c?auto=format&fit=crop&w=900&q=80",
          },
          {
            label: "Scenario Walkthrough Video",
            src: "https://cdn.coverr.co/videos/coverr-circuit-board-technology-1609/1080p.mp4",
            poster:
              "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=900&q=80",
          },
        ].map((label) => (
          <Grid item xs={12} md={4} key={label.label}>
            <UiCard
              sx={{
                background:
                  "linear-gradient(150deg, rgba(17, 24, 39, 0.9), rgba(30, 41, 59, 0.75))",
              }}
            >
              <Stack spacing={1.5}>
                <Box
                  sx={{
                    height: 180,
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <video
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    muted
                    loop
                    autoPlay
                    poster={label.poster}
                  >
                    <source src={label.src} type="video/mp4" />
                  </video>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {label.label}
                </Typography>
              </Stack>
            </UiCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: { xs: 4, md: 6 } }}>
        {[
          {
            label: "Labs Interface",
            src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
          },
          {
            label: "Scenario Timeline",
            src: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=900&q=80",
          },
          {
            label: "Progress Analytics",
            src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
          },
          {
            label: "Community Hub",
            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
          },
        ].map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.label}>
            <UiCard>
              <Stack spacing={2}>
                <Box
                  component="img"
                  src={item.src}
                  alt={item.label}
                  sx={{
                    height: 140,
                    width: "100%",
                    borderRadius: 2,
                    objectFit: "cover",
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  {item.label}
                </Typography>
              </Stack>
            </UiCard>
          </Grid>
        ))}
      </Grid>

      <UiCard
        sx={{
          mt: { xs: 4, md: 6 },
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.7))",
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight={700}>
            Learner Success Stories
          </Typography>
          <Grid container spacing={2.5}>
            {[
              {
                label: "Testimonial",
                src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
              },
              {
                label: "Team",
                src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
              },
              {
                label: "Classroom",
                src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
              },
            ].map((item) => (
              <Grid item xs={12} md={4} key={item.label}>
                <Stack spacing={1.5}>
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.label}
                    sx={{
                      height: 160,
                      width: "100%",
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />
                  <Typography fontWeight={600}>
                    “Instructors made every lab feel like a real incident.”
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.label} story highlight.
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </UiCard>

      <UiCard
        sx={{
          mt: { xs: 4, md: 6 },
          background:
            "linear-gradient(135deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.9))",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={1.5}>
              <Typography variant="h5" fontWeight={700}>
                Ready to launch your virtual lab journey?
              </Typography>
              <Typography color="text.secondary">
                Create a personalized roadmap, explore hands-on labs, and track
                progress across every learning module.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <PrimaryButton
                onClick={onEnter}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(236, 72, 153, 0.85))",
                  color: "#f8fafc",
                }}
              >
                Enter Platform
              </PrimaryButton>
              <PrimaryButton
                onClick={onEnter}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(14, 165, 233, 0.9), rgba(34, 197, 94, 0.85))",
                  color: "#0b0b0d",
                }}
              >
                View Curriculum
              </PrimaryButton>
            </Stack>
          </Grid>
        </Grid>
      </UiCard>

      <Box sx={{ mt: { xs: 4, md: 6 }, textAlign: "center" }}>
        <Typography variant="caption" color="text.secondary">
          Partner logos to be inserted · Press mentions to be inserted ·
          Accreditation badges to be inserted
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default Landing;
