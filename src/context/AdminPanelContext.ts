import { createContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import type { AdminPanelContextType } from "../types";

const onClickDefault = () => {};

export default createContext<AdminPanelContextType>({
  panelState: {
    foldTab: {
      id: "fold",
      isChecked: false,
      IconIfChecked: FaChevronUp,
      IconIfUnchecked: FaChevronDown,
    },
    contentTabs: [
      {
        id: "add-product",
        label: "Add a product",
        isChecked: true,
        IconIfChecked: AiOutlinePlus,
        IconIfUnchecked: AiOutlinePlus,
        panelContent: "Add a product",
      },
      {
        id: "edit-product",
        label: "Edit a product",
        isChecked: false,
        IconIfChecked: MdModeEditOutline,
        IconIfUnchecked: MdModeEditOutline,
        panelContent: "Edit a product",
      },
    ],
  },
  panelHandlers: {
    toggleFolded: onClickDefault,
    onTabClick: onClickDefault,
  },
});
