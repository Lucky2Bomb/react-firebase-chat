import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./Navbar";
import { FirebaseContext } from "..";

function AppRouter() {
  const { auth } = useContext(FirebaseContext);
  const [user] = useAuthState(auth);

  if (user)
    return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          {privateRoutes.map(({ path, Component }) => (
            <Route path={path} element={Component()} caseSensitive key={path} />
          ))}
        </Route>
        <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
      </Routes>
    );
  else
    return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          {publicRoutes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} caseSensitive key={path} />
          ))}
        </Route>
        <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
      </Routes>
    );
}

export default AppRouter;
