import express from "express";
import cors from "cors";
import profiles from "./routes/profiles.js";

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", profiles);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})