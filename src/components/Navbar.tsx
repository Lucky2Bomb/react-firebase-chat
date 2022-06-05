import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box, Button, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LOGIN_ROUTE } from "../utils/consts";
import { FirebaseContext } from "..";
import { useAuthState } from "react-firebase-hooks/auth";

function Navbar() {
  const { auth } = useContext(FirebaseContext);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const onLogin = () => {
    navigate(LOGIN_ROUTE);
  };

  const onLogout = () => {
    auth.signOut();
    navigate(LOGIN_ROUTE);
  };

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography> */}
              <Grid item>
                {user ? (
                  <Button color="inherit" onClick={onLogout}>
                    Logout
                  </Button>
                ) : (
                  <Button color="inherit" onClick={onLogin}>
                    Login
                  </Button>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default Navbar;
