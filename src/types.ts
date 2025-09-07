import type { ChangeEventHandler, ComponentPropsWithoutRef } from "react";
import type { IconType } from "react-icons";

// data types

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
  intent?: IntentType;
  className?: string;
  Icon?: IconType;
};

export type ButtonToggleProps = {
  isChecked: boolean;
  onToggle: () => void;
  labelIfChecked: string;
  labelIfUnchecked: string;
};

export type ImageType = ComponentPropsWithoutRef<"img">;

export type InputTextProps = {
  Icon: IconType;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & ComponentPropsWithoutRef<"input">;

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
  onAddProduct: (newProduct: PanelFormType) => void;
};

export type MenuProps = {
  products: ProductType[];
  onDeleteCard: (idToDelete: number) => void;
};

export type MenuCardProps = {
  id: number;
  src: string;
  title: string;
  price: number;
  onDelete: (idToDelete: number) => void;
} & ComponentPropsWithoutRef<"img">;

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
  handleTabClick: (id: TabIDType) => void;
};

export type PanelConfigType = {
  foldTab: TabProps<FoldTabIDType>;
  contentTabs: TabProps<ContentTabIDType>[];
  panelContent: string;
};

export type PanelContentProps = {
  isFolded: boolean;
  content: string;
  onAddProduct: (newProduct: PanelFormType) => void;
};

export type PanelFormType = Pick<ProductType, "title" | "imageSource"> & {
  price: string;
};

export type ProductDetailProps = {
  title: string;
  price: number;
};

export type TabContainerProps = {
  foldTab: TabProps<FoldTabIDType>;
  contentTabs: TabProps<ContentTabIDType>[];
};
