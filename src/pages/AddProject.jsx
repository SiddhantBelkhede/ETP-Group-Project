import React, { useState } from "react";
import "../addProject.css";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    author: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

      const techArray = formData.technologies
        .split(",")
        .map((ele) => ele.trim())

      const newProject = {
        title: formData.title,
        description: formData.description,
        technologies: techArray,
        githubLink: formData.githubLink,
        author: formData.author,
      };

      const response = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      if (response.ok) {
        setMessage("Project added successfully!");
        setFormData({
          title: "",
          description: "",
          technologies: "",
          githubLink: "",
          author: "",
        });
      } else {
        const errorData = await response.json();
        setMessage(`Failed: ${errorData.message}`);
      }

  };

  return (
    <div className="add-project-container">
      <h2 className="heading">Add New Project</h2>

      <form onSubmit={handleSubmit} className="project-form">
        <label>Author ID</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          placeholder="Enter your User ID"
        />

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Technologies (comma separated)</label>
        <input
          type="text"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          placeholder="React, Node.js, MongoDB"
        />

        <label>GitHub Link</label>
        <input
          type="url"
          name="githubLink"
          value={formData.githubLink}
          onChange={handleChange}
          placeholder="https://github.com/username/project"
        />

        <button type="submit">Add Project</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddProject;
