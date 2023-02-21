import React, { useState } from "react";
import { Typography, TextField, Box, Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authAction } from "../store";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type = "login") => {
    const res = await axios
      .post(`https://blogbackened-api.onrender.com/routes/api/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authAction.login()))
        .then(() => navigate("/blogs"));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispatch(authAction.login()))
        .then(() => navigate("/blogs"));
    }
  };
  return (
    <div>
      {" "}
      <div>
        <form onSubmit={handleSubmit}>
          <Box
            maxWidth={400}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin="auto"
            marginTop={5}
            borderRadius={5}
            sx={{
              background:
                "linear-gradient(90deg, rgba(39,36,89,0.7455357142857143) 0%, rgba(11,47,54,0.5046393557422969) 100%, rgba(88,138,222,0.5074404761904762) 100%);",
            }}
          >
            <Typography variant="h2" padding={3} textAlign="center">
              {isSignup ? "Signup" : "Login"}
            </Typography>
            {isSignup && (
              <TextField
                name="name"
                onChange={handleChange}
                value={inputs.name}
                placeholder="Name"
                margin="normal"
                sx={{ color: "white" }}
              />
            )}{" "}
            <TextField
              name="email"
              onChange={handleChange}
              value={inputs.email}
              type={"email"}
              placeholder="Email"
              margin="normal"
            />
            <TextField
              name="password"
              onChange={handleChange}
              value={inputs.password}
              type={"password"}
              placeholder="Password"
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: 3, marginTop: 3 }}
              color="warning"
            >
              Submit
            </Button>
            <Button
              onClick={() => setIsSignup(!isSignup)}
              sx={{ borderRadius: 3, marginTop: 3, color: "white" }}
            >
              Change To {isSignup ? "Login" : "Signup"}
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Login;
