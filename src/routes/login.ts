import { NextFunction, Request, Response, Router } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session?.loggedIn) {
    return next();
  }

  res.status(403).send("Not Permitted");
};

router.get("/login", (req: Request, res: Response) => {
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

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (
    email &&
    password &&
    email === "prabin20panta@gmail.com" &&
    password === "ladalam"
  ) {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid credentials!");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
      <div>
      <div> You are logged in</div>
      <a href="/logout">Logout</a>
      </div>
  `);
  } else {
    res.send(`
      <div>
      <div> You are not logged in</div>
      <a href="/login">Login</a>
      </div>
      `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("You are inside protected Route!");
});

export default router;
