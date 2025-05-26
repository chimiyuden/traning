const express = require("express");
const PORT = 4000;

// grouped the http status code
const STATUS_CODES = {
  BAD_REQUEST: 400,
  OK: 200,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

const app = express(); //body parser  to accees the body
app.use(express.json());

const users = [
  {
    name: "Oizys",
    email: "oizys19@gmail.com",
    password: "199905",
  },

  {
    name: "yuelha",
    email: "yuelha19@gmail.com",
    password: "200512",
  },

  {
    name: "euthro",
    email: "euthro19@gmail.com",
    password: "202512",
  },
];

let loggedInUser = null;
const checkLoggedIn = (req, res, next) => {
  if (loggedInUser) {
    return next();
  }
  res
    .status(STATUS_CODES.UNAUTHORIZED)
    .json({ message: "Please login to acces this route" });
};

// accessed to everyone
app.get("/", (req, res) => {
  res.send("Welcome everyone has access to this");
});

app.get("/protected", checkLoggedIn, (req, res) => {
  res.send(`The current  loggedin user is ${JSON.stringify(loggedInUser)}`);
});

app.post("/login", (req, res) => {
  // check the body if its valid
  if (!req.body) {
    return res.status(STATUS_CODES.BAD_REQUEST).json({
      message: "Body cannont be empty! Please provide email and password",
    });
  }
  const { email, password } = req.body; //destructuring
  if (!email || !password) {
    res.status(STATUS_CODES.BAD_REQUEST).json({
      message: "Please provide email and password",
    });
  }

  //   check the email is present in the user list
  const user =  users.find((item) => item.email === email);
  if (!user) {
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ message: `the provided ${email} doesn't exist` });
  }
  // compare the password
  if (user.password !== password) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: `the provided password is incorrect` });
  }

  loggedInUser = user;
  res.status(STATUS_CODES.OK).json({ message: "succesfully loggedin" });
});

app.delete("/logout", (req, res) => {
    loggedInUser = null
    res.status(200).json({message:"logged out successfully"})
});

app.listen(PORT, () => {
  console.log(`server is running in http://localhost:${PORT}`);
});
