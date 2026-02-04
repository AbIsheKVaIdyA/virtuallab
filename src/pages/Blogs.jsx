import { Box, Grid, Stack, Typography } from "@mui/material";
import UiCard from "../components/UiCard";
import Badge from "../components/Badge";
import { blogs } from "../data/mockData";

const BlogGroup = ({ title, items }) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight={700}>
        {title}
      </Typography>
      <Grid container spacing={2.5}>
        {items.map((article) => (
          <Grid item xs={12} md={6} key={article.title}>
            <UiCard>
              <Stack spacing={1.5}>
                <Badge label={title} />
                <Typography variant="h6" fontWeight={700}>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.readTime}
                </Typography>
              </Stack>
            </UiCard>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

const Blogs = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Blogs & Articles
        </Typography>
        <Typography color="text.secondary">
          Thought leadership, how-to guides, and expert opinions.
        </Typography>
      </Box>

      <BlogGroup title="How-To Guides" items={blogs.howto} />
      <BlogGroup title="Industry Insights" items={blogs.insights} />
      <BlogGroup title="Expert Opinions" items={blogs.opinions} />
    </Stack>
  );
};

export default Blogs;
