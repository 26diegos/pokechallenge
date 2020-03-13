import React, { useState } from "react";

const OffsetContext = React.createContext([{}, () => {}]);

const OffsetContextProvider = props => {
  const [state, setState] = useState({
    offset: 0,
    pokemonList: []
  });
  return (
    <OffsetContext.Provider value={[state, setState]}>
      {props.children}
    </OffsetContext.Provider>
  );
};

export { OffsetContext, OffsetContextProvider };
