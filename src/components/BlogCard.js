import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogCard = ({ title, description, image, userName, isUser, id }) => {
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate(`/myBlogs/${id}`);
  };
  const deletRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/routes/api/delete/${id}`)
      .catch((err) => console.log(err));
    const data = res.data;
    return data;
  };
  const handleDelete = () => {
    deletRequest()
      .then(() => alert("Delete suceesfully"))
      .then(() => {
        navigate("/myBlogs");
      });
  };

  return (
    <Card
      sx={{
        width: "40%",
        margin: "auto",
        marginTop: 10,
        padding: 2,
        boxShadow: "5px  5px 10px #ccc",
        ":hover": { boxShadow: "10px  10px 20px #ccc" },
      }}
    >
      {isUser && (
        <Box display="flex">
          <IconButton onClick={handleUpdate} sx={{ marginLeft: "auto" }}>
            <ModeEditOutlineIcon color="warning" />
          </IconButton>
          <IconButton>
            <DeleteForeverIcon onClick={handleDelete} color="error" />
          </IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {userName ? userName.charAt(0) : ""}
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <hr />
        <br />
        <Typography variant="body2" color="text.secondary">
          {userName} {":"} {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
