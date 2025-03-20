import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};


ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {ThemeContext, ThemeProvider};
