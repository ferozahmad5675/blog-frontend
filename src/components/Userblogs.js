import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Userblogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/routes/api/getbyid/${id}`)
      .catch((e) => console.log(e));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
    <div>
      {" "}
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <BlogCard
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            userName={user.name}
          />
        ))}
    </div>
  );
};

export default Userblogs;
