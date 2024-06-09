import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("hid there");
});

export default router;
