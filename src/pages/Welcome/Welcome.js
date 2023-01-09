import React from "react";
import "./Welcome.css";

import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1 className="app-pages">Welcome</h1>
      <Route path={welcomePath + "/new-user"}>
        <h1>New User</h1>
      </Route>
    </>
  );
};

export const welcomePath = "/welcome";
export default Welcome;
