import { createContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import type { AdminPanelContextType } from "../types";
import { dummyOnClick } from "../utils/props";

export default createContext<AdminPanelContextType>({
  foldTab: {
    id: "fold",
    isActive: false,
    IconIfChecked: FaChevronUp,
    IconIfUnchecked: FaChevronDown,
    onClick: dummyOnClick,
  },
  contentTabs: [
    {
      id: "add-product",
      label: "Add a product",
      isActive: true,
      IconIfChecked: AiOutlinePlus,
      IconIfUnchecked: AiOutlinePlus,
      panelContent: "Add a product",
      onClick: dummyOnClick,
    },
    {
      id: "edit-product",
      label: "Edit a product",
      isActive: false,
      IconIfChecked: MdModeEditOutline,
      IconIfUnchecked: MdModeEditOutline,
      panelContent: "Edit a product",
      onClick: dummyOnClick,
    },
  ],
});
