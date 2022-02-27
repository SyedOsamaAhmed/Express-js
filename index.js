const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "public");
//Url with extension:
//app.use(express.static(publicPath));

/* app.get("/home", (req, resp) => {
  resp.send(`
  <h1>This is home page</h1>
  <a href="/about">Go to About page </a>
  `);
});

app.get("/about", (req, resp) => {
  resp.send(`
  <input type="text' placeholder="Username"/>
  <button>Click</button>
  `);
}); */

//Url without extension:
/* app.get('/about', (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get('*', (_, res) => {
  res.sendFile(`${publicPath}/nopage.html`);
});
 */
//EJS template
app.set("view engine", "ejs");

const user = {
  name: "Osama",
  email: "osama123@test.com",
  skills:['php','laravel','C#']
};
app.get("/profile", (_, res) => {
  res.render("profile", { user });
});
app.get("/login", (_, res) => {
  res.render("login");
});

app.listen(5000);
