import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// In-memory store for blog posts (for demonstration purposes)
let blogs = [];
let currentId = 1;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// Home route to display all blogs
app.get("/", (req, res) => {
    res.render("index", { blogs: blogs });
});

// Route to display the form for creating a new blog
app.get("/create", (req, res) => {
    res.render("create");
});

// Route to handle creating a new blog
app.post("/submit-blog", (req, res) => {
    const newBlog = {
        id: currentId++,
        title: req.body.title,
        description: req.body.description
    };
    blogs.push(newBlog);
    res.redirect("/");
});

// Route to display the form for editing a blog
app.get("/edit/:id", (req, res) => {
    const blog = blogs.find(b => b.id == req.params.id);
    res.render("edit", { blog: blog });
});

// Route to handle editing a blog
app.post("/edit-blog/:id", (req, res) => {
    const blog = blogs.find(b => b.id == req.params.id);
    if (blog) {
        blog.title = req.body.title;
        blog.description = req.body.description;
    }
    res.redirect("/");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.post("/delete/:id", (req, res) => {
  const blogId = parseInt(req.params.id);
  blogs = blogs.filter(blog => blog.id !== blogId); // Remove the blog with the given id
  res.redirect("/"); // Redirect back to home after deletion
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
