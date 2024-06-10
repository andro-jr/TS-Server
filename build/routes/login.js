"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/login", (req, res) => {
    res.send(`
      <form method="POST" action="/login">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    res.json({ email: email && email.toUpperCase(), password });
});
exports.default = router;
