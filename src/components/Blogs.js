import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blog, setblog] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("https://blogbackened-api.onrender.com/routes/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setblog(data.blog));
  }, []);
  console.log(blog);
  return (
    <div>
      {blog &&
        blog.map((blog, index) => (
          <BlogCard
            isUser={localStorage.getItem("userId") === blog.user._id}
            id={blog._id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
};

export default Blogs;
