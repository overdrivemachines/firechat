// Implementing a simple hook that calls useContext to consume
// the context value that we created in src/context/auth.js

import React from "react";
import { AuthContext } from "../context/auth";

function useAuth() {
  const value = React.useContext(AuthContext);

  if (!value) {
    throw new Error("AuthContext's value is undefined.");
  }

  return value;
}

export { useAuth };
