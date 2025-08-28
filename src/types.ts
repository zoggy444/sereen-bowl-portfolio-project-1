import type { ChangeEventHandler, ComponentPropsWithoutRef } from "react";
import type { IconType } from "react-icons";

export type LogoTitleProps = {
  size: "lg" | "md";
  onClick?: () => void;
  className?: string;
};

export type InputTextProps = {
  Icon: IconType;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & ComponentPropsWithoutRef<"input">;

export type ButtonPrimaryProps = {
  label: string;
  Icon: IconType;
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
