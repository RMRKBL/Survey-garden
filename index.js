const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const { cookieKey } = require("./config/keys");
require("./models/user");
require("./services/passport");
mongoose.set("strictQuery", true);
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(keys.mongoURI);
}

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App is serving!");
});
