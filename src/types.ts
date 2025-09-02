import type { ChangeEventHandler, ComponentPropsWithoutRef } from "react";
import type { IconType } from "react-icons";
import { fakeMenu1 } from "./fakeData/fakeMenu";

// data types

export type ProductType = (typeof fakeMenu1)[0];

// reusable comp types

export type ButtonPrimaryProps = {
  label: string;
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

export type TabProps = {
  id: string;
  label?: string;
  isChecked: boolean;
  panelContent?: string;
  IconIfChecked?: IconType;
  IconIfUnchecked?: IconType;
  onClick?: (id?: "add-product" | "edit-product") => void;
};

// unique comp types

export type AdminPanelProps = {
  isVisible: boolean;
};

export type AdminPanelContextType = {
  panelState: PanelStateType;
  panelHandlers: PanelHandlersType;
};

export type MenuProps = {
  products: ProductType[];
};

export type MenuCardProps = {
  src: string;
  title: string;
  price: number;
} & ComponentPropsWithoutRef<"img">;

export type NavBarProps = {
  userName: string;
  isChecked: boolean;
  onToggle: () => void;
  labelIfChecked: string;
  labelIfUnchecked: string;
};

export type NavRightProps = {
  userName: string;
  isChecked: boolean;
  onToggle: () => void;
  labelIfChecked: string;
  labelIfUnchecked: string;
};

export type PanelContentProps = {
  isFolded: boolean;
  content: string;
};

export type PanelHandlersType = {
  toggleFolded: () => void;
  onTabClick: (id?: "add-product" | "edit-product" | undefined) => void;
};

export type PanelStateType = {
  foldTab: TabProps;
  contentTabs: TabProps[];
};

export type ProductDetailProps = {
  title: string;
  price: number;
};

export type ProfileProps = {
  userName: string;
};
