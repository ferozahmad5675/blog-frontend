import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setvalue] = useState();
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background:
            "linear-gradient(90deg, rgba(11,1,171,1) 0%, rgba(0,159,191,1) 30%, rgba(0,79,212,1) 73%)",
        }}
      >
        <Toolbar>
          <Typography variant="h4">BlogApp</Typography>

          {isLoggedIn && (
            <Box marginLeft="auto" marginRight="auto">
              <Tabs
                value={value}
                textColor="inherit"
                onChange={(e, val) => setvalue(val)}
              >
                <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                <Tab LinkComponent={Link} to="/myBlogs" label="My blogs" />
                <Tab LinkComponent={Link} to="/blogs/add" label="Add blogs" />
              </Tabs>
            </Box>
          )}

          <Box display="flex" marginLeft="auto">
            {!isLoggedIn && (
              <>
                {" "}
                <Button
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10 }}
                  color="warning"
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10 }}
                  color="warning"
                  LinkComponent={Link}
                  to="/login"
                >
                  Signup
                </Button>{" "}
              </>
            )}

            {isLoggedIn && (
              <Button
                onClick={() => dispatch(authAction.logout())}
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
                LinkComponent={Link}
                to="/login"
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
