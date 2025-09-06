import React from 'react';
import '../assets/css/Blogs.css';
import { FaJava, FaPython, FaGitAlt, FaReact, FaCode } from "react-icons/fa";

const blogData = [
  {
    title: "How to Crack Coding Interviews",
    date: "July 28, 2025",
    summary: "Tips and resources to help you prepare for technical interviews effectively.",
    icon: <FaCode />,
  },
  {
    title: "Top 5 Programming Languages in 2025",
    date: "July 15, 2025",
    summary: "An overview of the most popular programming languages this year and why they matter.",
    icon: <FaJava />,
  },
  {
    title: "React vs Angular: Which to Choose?",
    date: "July 2, 2025",
    summary: "A detailed comparison of the two popular frontend frameworks with use cases.",
    icon: <FaReact />,
  },
  {
    title: "Mastering Git and GitHub",
    date: "June 18, 2025",
    summary: "Learn how to version control your projects like a pro with Git and GitHub.",
    icon: <FaGitAlt />,
  },
  {
    title: "Why Data Structures Matter",
    date: "June 5, 2025",
    summary: "Understanding the importance of DSA in real-world problem-solving and coding interviews.",
    icon: <FaPython />,
  },
];

const Blogs = () => {
  return (
    <>
      <div className="blogs-container">
        <h1>Our Latest Blogs</h1>
        <div className="blogs-grid">
          {blogData.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-icon-bg">{blog.icon}</div>
              <h2>{blog.title}</h2>
              <p className="blog-date">{blog.date}</p>
              <p>{blog.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
