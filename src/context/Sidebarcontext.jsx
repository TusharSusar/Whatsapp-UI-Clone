import { createContext, useReducer } from "react";

export const SidebarContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHAT":
      return "CHAT";

    case "STATUS":
      return "STATUS";

    case "CHANNELS":
      return "CHANNELS";

    case "COMMUNITY":
      return "COMMUNITY";

    case "SETTINGS":
      return "SETTINGS";

    case "PROFILE":
      return "PROFILE";

    default:
      return state;
  }
};

export const SidebarProvider = ({ children }) => {
  const [sidebarItem, dispatch] = useReducer(reducer, "CHAT");

  return (
    <SidebarContext.Provider value={{ sidebarItem, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};
