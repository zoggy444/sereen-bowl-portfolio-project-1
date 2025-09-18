import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import type { PanelConfigParamType, PanelConfigType } from "../../../../types";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default ({
  isFolded,
  selectedTabID,
  onTabClick,
}: PanelConfigParamType) =>
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
        isActive: selectedTabID === "add-product",
        IconIfChecked: AiOutlinePlus,
        IconIfUnchecked: AiOutlinePlus,
        onClick: onTabClick,
      },
      {
        id: "edit-product",
        label: "Edit a product",
        isActive: selectedTabID === "edit-product",
        IconIfChecked: MdModeEditOutline,
        IconIfUnchecked: MdModeEditOutline,
        onClick: onTabClick,
      },
    ],
  } as PanelConfigType);

export const getPanelConfig = (
  selectedTabID,
  addInputs,
  editInputs,
  onAddChange,
  onEditChange,
  onAddReset
) => {
  if (selectedTabID === "add-product") {
    return {
      formInputs: addInputs,
      onInputChange: onAddChange,
      onInputReset: onAddReset,
    };
  }
  return {
    formInputs: editInputs,
    onInputChange: onEditChange,
    onInputReset: undefined,
  };
};
