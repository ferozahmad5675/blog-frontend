import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import React, { useEffect } from "react";
import Login from "./components/Login";
import BlogDetails from "./components/BlogDetails";
import Blogs from "./components/Blogs";
import AddBlogs from "./components/AddBlogs";
import Userblogs from "./components/Userblogs";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authAction.login());
    }
  }, [dispatch]);
  return (
    <div>
      <React.Fragment>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            {!isLoggedIn ? (
              <Route path="/login" element={<Login />}></Route>
            ) : (
              <>
                <Route path="/blogs" element={<Blogs />}></Route>
                <Route path="/blogs/add" element={<AddBlogs />}></Route>
                <Route path="/myBlogs" element={<Userblogs />}></Route>
                <Route path="/myBlogs/:id" element={<BlogDetails />}></Route>
              </>
            )}
          </Routes>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
