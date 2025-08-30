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

// unique comp types

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
};

export type NavRightProps = {
  userName: string;
};

export type ProductDetailProps = {
  title: string;
  price: number;
};

export type ProfileProps = {
  userName: string;
};
