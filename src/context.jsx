import React, { useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value=" Value ">
    {children}
    </AppContext.Provider>;
};
//global custom hook 

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
