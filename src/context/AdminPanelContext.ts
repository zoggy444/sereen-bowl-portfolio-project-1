import { createContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import type { AdminPanelContextType } from "../types";
import { dummyOnClick } from "../utils/props";

export default createContext<AdminPanelContextType>({
  foldTab: {
    id: "fold",
    isChecked: false,
    IconIfChecked: FaChevronUp,
    IconIfUnchecked: FaChevronDown,
    onClick: dummyOnClick,
  },
  contentTabs: [
    {
      id: "add-product",
      label: "Add a product",
      isChecked: true,
      IconIfChecked: AiOutlinePlus,
      IconIfUnchecked: AiOutlinePlus,
      panelContent: "Add a product",
      onClick: dummyOnClick,
    },
    {
      id: "edit-product",
      label: "Edit a product",
      isChecked: false,
      IconIfChecked: MdModeEditOutline,
      IconIfUnchecked: MdModeEditOutline,
      panelContent: "Edit a product",
      onClick: dummyOnClick,
    },
  ],
});
