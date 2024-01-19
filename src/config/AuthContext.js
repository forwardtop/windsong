import { createContext } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  authToken: "",
  authUser: {},
});

export const AuthProvider = ({ children }) => {


  const contextValue = {
   
  };
  return  <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
