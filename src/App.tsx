import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./App.css";
import { FirebaseContext } from ".";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/Loader";
import { Box } from "@mui/material";

function App() {
  const { auth } = useContext(FirebaseContext);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Box>
  );
}

export default App;
