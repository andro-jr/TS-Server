import express, { Request, Response } from "express";

import loginRoute from "./routes/login";

const app = express();

app.use(loginRoute);

app.listen(3000, () => {
  console.log("Server started!!");
});
