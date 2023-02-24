import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const DrawerComp = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setvalue] = useState();

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton>
            <ListItemIcon
              value={value}
              textColor="inherit"
              onChange={(e, val) => setvalue(val)}
            >
              <ListItemText onClick={() => navigate("/blogs")}>
                All blogs
              </ListItemText>
              <ListItemText onClick={() => navigate("/myBlogs")}>
                My Blogs
              </ListItemText>
              <ListItemText onClick={() => navigate("/blogs")}>
                Add a blog
              </ListItemText>
            </ListItemIcon>

            <ListItemIcon
              sx={{
                display: "flex",
              }}
              value={value}
              textColor="inherit"
              onChange={(e, val) => setvalue(val)}
            >
              <ListItemText onClick={() => navigate("/blogs")}>
                All blogs
              </ListItemText>
              <ListItemText onClick={() => navigate("/myBlogs")}>
                My Blogs
              </ListItemText>
              <ListItemText onClick={() => navigate("/blogs")}>
                Add a blog
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
