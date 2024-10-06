const express = require("express");
const { quiz } = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your React app's URL
  })
);

app.get("/quiz-get", async (req, res) => {
  const data = await quiz.find({});

  res.json(data);
});

app.post("/create", async(req, res) => {
  console.log(req.body);
  const question = req.body.question;
  const option1 = req.body.option1;
  const option2 = req.body.option2;
  const option3 = req.body.option3;
  const option4 = req.body.option4;
  const ans = req.body.answer;
  const index = req.body.index;

  await quiz.create({
    question: question,
    option1: option1,
    option2: option2,
    option3: option3,
    option4: option4,
    answer: ans,
    index: index,
  });

  res.status(200).send('added!');
});

app.listen(3000, () => {
  console.log("website is live on http://localhost:3000/");
});
