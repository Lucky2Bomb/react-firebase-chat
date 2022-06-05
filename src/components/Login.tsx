import { Button, Container, Grid } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { FirebaseContext } from "..";

function Login() {
  const { auth } = useContext(FirebaseContext);

  const onLogin = async () => {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  }

  return (
    <Container>
      <Grid container direction="row" justifyContent="center" alignItems="center" mt={35}>
        <Button onClick={onLogin} variant="outlined">Login by Google</Button>
      </Grid>
    </Container>
  );
}

export default Login;
