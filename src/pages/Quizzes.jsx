import { useState } from "react";
import {
  Alert,
  Box,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import UiCard from "../components/UiCard";
import Badge from "../components/Badge";
import { quizzes } from "../data/mockData";

const Quizzes = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(quizzes[0]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setSelectedOption(null);
  };

  const handleSelectOption = (index) => {
    setSelectedOption(index);
  };

  const isCorrect =
    selectedOption !== null && selectedOption === selectedQuiz.correctIndex;

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Quizzes
        </Typography>
        <Typography color="text.secondary">
          Test your knowledge with quick assessments and instant feedback.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            {quizzes.map((quiz) => (
              <UiCard
                key={quiz.topic}
                onClick={() => handleSelectQuiz(quiz)}
                sx={{
                  cursor: "pointer",
                  border:
                    selectedQuiz.topic === quiz.topic
                      ? "1px solid rgba(255, 255, 255, 0.25)"
                      : "1px solid rgba(148, 163, 184, 0.15)",
                }}
              >
                <Stack spacing={1}>
                  <Typography variant="h6" fontWeight={700}>
                    {quiz.topic}
                  </Typography>
                  <Box display="flex" gap={1} flexWrap="wrap">
                    <Badge label={`${quiz.questions} questions`} />
                    <Badge label={quiz.time} />
                  </Box>
                </Stack>
              </UiCard>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <UiCard>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight={700}>
                {selectedQuiz.topic}
              </Typography>
              <Typography fontWeight={600}>
                {selectedQuiz.question}
              </Typography>
              <Stack spacing={1}>
                {selectedQuiz.options.map((option, index) => (
                  <Button
                    key={option}
                    variant={
                      selectedOption === index ? "contained" : "outlined"
                    }
                    onClick={() => handleSelectOption(index)}
                    sx={{
                      justifyContent: "flex-start",
                      textTransform: "none",
                      borderRadius: 2,
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      backgroundColor:
                        selectedOption === index
                          ? "rgba(255, 255, 255, 0.12)"
                          : "transparent",
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </Stack>
              {selectedOption !== null && (
                <Alert
                  severity={isCorrect ? "success" : "warning"}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    color: "text.primary",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    "& .MuiAlert-icon": {
                      color: "text.secondary",
                    },
                  }}
                >
                  {isCorrect
                    ? "Great choice! You nailed the concept."
                    : "Close one. Review the module and try again."}
                </Alert>
              )}
            </Stack>
          </UiCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Quizzes;
