import type { ChangeEventHandler, ComponentPropsWithoutRef } from "react";
import type { IconType } from "react-icons";

// data types

export type ButtonVariantType = "primary" | "default";

export type ContentTabIDType = "add-product" | "edit-product";

export type FoldTabIDType = "fold";

export type IntentType = "primary" | "success";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  imageSource: string;
  isAvailable: boolean;
  isAdvertised: boolean;
};

export type TabIDType = FoldTabIDType | ContentTabIDType;

// reusable comp types

export type ButtonProps = {
  label: string;
  variant?: ButtonVariantType;
  intent?: IntentType;
  className?: string;
  Icon?: IconType;
  onClick?: () => void;
};

export type ButtonStyledProps = {
  $intent: IntentType;
  $variant: ButtonVariantType;
};

export type ButtonToggleProps = {
  isChecked: boolean;
  onToggle: () => void;
  labelIfChecked: string;
  labelIfUnchecked: string;
};

export type ImageType = ComponentPropsWithoutRef<"img">;

export type InputTextProps = {
  variant?: "normal" | "minimalist";
  Icon: IconType;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & ComponentPropsWithoutRef<"input">;

export type InputTextStyledProps = {
  $variant: "normal" | "minimalist";
};

export type LogoTitleProps = {
  size: "lg" | "md";
  onClick?: () => void;
  className?: string;
};

export type TabProps<T> = {
  id: T;
  label?: string;
  isActive: boolean;
  IconIfChecked?: IconType;
  IconIfUnchecked?: IconType;
  onClick: (id: T) => void;
};

// unique comp types

export type AdminPanelProps = {
  isFolded: boolean;
  selectedTab: ContentTabIDType;
  editInputs: PanelFormType;
  onEditChange: (name: string, value: string) => void;
  onTabClick: (id: TabIDType) => void;
};

export type FieldConfigParamType = {
  fieldValues: PanelFormType;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type FieldConfigType = {
  variant?: "normal" | "minimalist";
  id: string;
  name: string;
  value: string;
  placeholder: string;
  Icon: IconType;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type FormProductProps = {
  formInputs: PanelFormType;
  handleInputChange: (name: string, value: string) => void;
  handleInputReset: () => void;
};

export type FormProdEditProps = {
  formInputs: PanelFormType;
  onInputChange: (name: string, value: string) => void;
};

export type MenuActionType = {
  type: "add-product" | "delete-product" | "regen-menu" | "";
  prodAdd?: PanelFormType;
  deleteID?: number;
};

export type MenuCardProps = {
  // "id" would conflict with img id prop
  prodID: number;
  src: string;
  title: string;
  price: number;
  isHovered: boolean;
  isSelected: boolean;
  onMouseEnter: (prodID: number) => void;
  onMouseLeave: () => void;
  onSelect: (prodID: number) => void;
} & ComponentPropsWithoutRef<"img">;

export type MenuCardStyledProps = {
  $isHovered: boolean;
  $isSelected: boolean;
};

export type MenuProps = {
  products: ProductType[];
  prodHoveredID: number;
  prodSelectedID: number;
  onCardMouseEnter: (prodID: number) => void;
  onCardMouseLeave: () => void;
  onCardSelect: (prodID: number) => void;
};

export type NavBarProps = {
  labelIfChecked: string;
  labelIfUnchecked: string;
};

export type NavRightProps = {
  labelIfChecked: string;
  labelIfUnchecked: string;
};

export type PanelConfigParamType = {
  isFolded: boolean;
  selectedTab: ContentTabIDType;
  onTabClick: (id: TabIDType) => void;
};

export type PanelConfigType = {
  foldTab: TabProps<FoldTabIDType>;
  contentTabs: TabProps<ContentTabIDType>[];
  panelContent: string;
};

export type PanelContentProps = {
  isFolded: boolean;
  content: string;
  formInputs: PanelFormType;
  handleInputChange: (name: string, value: string) => void;
  handleInputReset: () => void;
  editInputs: PanelFormType;
  onEditChange: (name: string, value: string) => void;
};

export type PanelFormType = Pick<ProductType, "title" | "imageSource"> & {
  price: string;
};

export type ProductDetailProps = {
  title: string;
  price: number;
  isSelected: boolean;
};

export type ProductDetailStyledProps = {
  $isSelected: boolean;
};

export type TabContainerProps = {
  foldTab: TabProps<FoldTabIDType>;
  contentTabs: TabProps<ContentTabIDType>[];
};
