import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());



mongoose
  .connect("mongodb://127.0.0.1:27017/projectsdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// project schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  technologies: { type: [String], default: [] },
  githubLink: { type: String },
  author: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", projectSchema);

// This is for add project
app.post("/api/projects", async (req, res) => {
  const { title, description, technologies, githubLink, author } = req.body;

  if (!title || !description || !author) {
    return res.status(400).json({
      message: "Title, description, and author are required.",
    });
  }

  const newProject = new Project({
    title,
    description,
    technologies,
    githubLink,
    author,
  });

  const savedProject = await newProject.save();
  res.status(201).json(savedProject);
});

//  Get All Projects

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
});

// Get Single Project by ID

app.get("/api/projects/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Error fetching project", error });
  }
});


// --------------------- HERE ADD YOUR SERVER SO IT WILL BE SIEAMLESS ------------------------
// In the formate of
// app.post("<your path>", async(req, res) => {
//    your code for the route
// });

app.get("/", (req, res) => {
  res.send("Welcome to the Projects API");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
