import { createContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

const onClickDefault = () => {};

export default createContext({
  panelState: {
    isFolded: false,
    tabCurrent: "add-product",
    tabs: [
      {
        id: "fold",
        isChecked: false,
        IconIfChecked: FaChevronUp,
        IconIfUnchecked: FaChevronDown,
        onClick: onClickDefault,
      },
      {
        id: "add-product",
        label: "Add a product",
        isChecked: true,
        IconIfChecked: AiOutlinePlus,
        IconIfUnchecked: AiOutlinePlus,
        onClick: onClickDefault,
      },
      {
        id: "edit-product",
        label: "Edit a product",
        isChecked: false,
        IconIfChecked: MdModeEditOutline,
        IconIfUnchecked: MdModeEditOutline,
        onClick: onClickDefault,
      },
    ],
    panelContent: "Add a product",
  },
  panelHandlers: {
    toggleFolded: () => {},
    onTabClick: onClickDefault,
  },
});
