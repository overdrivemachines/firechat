import React from "react";
import { loginWithGoogle } from "../services/firebase";

const AuthContext = React.createContext();

// Creates a <AuthProvider> component
// creates a user state and a login function
// sets the user state once the user has signed in successfully
const AuthProvider = (props) => {
  const [user, setUser] = React.useState(null);

  const login = async () => {
    const user = await loginWithGoogle();

    if (!user) {
      // TODO: Handle failed login
    }

    setUser(user);
  };

  const value = { user, login };

  // user and login function available to context subscribers
  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
