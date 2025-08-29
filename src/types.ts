import type { ChangeEventHandler, ComponentPropsWithoutRef } from "react";
import type { IconType } from "react-icons";
import { fakeMenu1 } from "./fakeData/fakeMenu";

export type ProductType = (typeof fakeMenu1)[0];

export type LogoTitleProps = {
  size: "lg" | "md";
  onClick?: () => void;
  className?: string;
};

export type ImageType = ComponentPropsWithoutRef<"img">;

export type InputTextProps = {
  Icon: IconType;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & ComponentPropsWithoutRef<"input">;

export type ButtonPrimaryProps = {
  label: string;
  className?: string;
  Icon?: IconType;
};

export type NavBarProps = {
  userName: string;
};

export type NavRightProps = {
  userName: string;
};

export type ProfileProps = {
  userName: string;
};

export type MenuProps = {
  products: ProductType[];
};

export type MenuCardProps = {
  src: string;
  title: string;
  price: number;
} & ComponentPropsWithoutRef<"img">;

export type ProductDetailProps = {
  title: string;
  price: number;
};
