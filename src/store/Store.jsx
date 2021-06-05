import React, { useState } from "react";

export const AppContext = React.createContext();

export default ({ children }) => {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [forgetPassword, setForgetPassword] = useState(false);

  return (
    <AppContext.Provider
      value={{
        signUp,
        setSignUp,
        signIn,
        setSignIn,
        forgetPassword,
        setForgetPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
