import { createContext } from "react";

export default createContext({
  panelState: {
    isFolded: false,
    tabCurrent: "add-product",
    panelContent: "Add a product",
  },
  panelHandlers: {
    toggleFolded: () => {},
    onTabClick: (id: "add-product" | "edit-product" | undefined) => {},
  },
});
