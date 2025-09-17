import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import type { PanelConfigParamType, PanelConfigType } from "../../../../types";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default ({ isFolded, selectedTab, onTabClick }: PanelConfigParamType) =>
  ({
    foldTab: {
      id: "fold",
      isActive: isFolded,
      IconIfChecked: FaChevronUp,
      IconIfUnchecked: FaChevronDown,
      onClick: onTabClick,
    },
    contentTabs: [
      {
        id: "add-product",
        label: "Add a product",
        isActive: selectedTab === "add-product",
        IconIfChecked: AiOutlinePlus,
        IconIfUnchecked: AiOutlinePlus,
        onClick: onTabClick,
      },
      {
        id: "edit-product",
        label: "Edit a product",
        isActive: selectedTab === "edit-product",
        IconIfChecked: MdModeEditOutline,
        IconIfUnchecked: MdModeEditOutline,
        onClick: onTabClick,
      },
    ],
    panelContent:
      selectedTab === "add-product" ? "Add a product" : "Edit a product",
  } as PanelConfigType);
