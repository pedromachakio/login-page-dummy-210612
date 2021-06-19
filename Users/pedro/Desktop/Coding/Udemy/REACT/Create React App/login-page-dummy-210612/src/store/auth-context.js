import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  //onLogout: console.log("Function did'nt work and is using default value"), //this doesnt work
});

export default AuthContext;
