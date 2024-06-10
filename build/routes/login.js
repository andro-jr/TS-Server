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
    if (email &&
        password &&
        email === "prabin20panta@gmail.com" &&
        password === "ladalam") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Invalid credentials!");
    }
});
router.get("/", (req, res) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send(`
      <div>
      <div> You are logged in</div>
      <a href="/logout">Logout</a>
      </div>
  `);
    }
    else {
        res.send(`
      <div>
      <div> You are not logged in</div>
      <a href="/login">Login</a>
      </div>
      `);
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
exports.default = router;
