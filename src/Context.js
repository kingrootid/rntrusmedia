import React from 'react';
export const Context = React.createContext();

const AppStateProvider = props => {
  const contextValue = {...yourContext};

  return (
    <AppStateContext.Provider value={contextValue}>
      {props.children}
    </AppStateContext.Provider>
  );
};
