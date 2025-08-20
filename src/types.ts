import type { ChangeEventHandler, ComponentPropsWithoutRef } from "react";
import type { IconType } from "react-icons";

export type InputTextProps = {
  Icon: IconType;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & ComponentPropsWithoutRef<"input">;

export type ButtonPrimaryProps = {
  label: string;
  Icon: IconType;
}