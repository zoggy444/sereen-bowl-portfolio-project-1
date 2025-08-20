import type { ChangeEvent } from "react";

export type LoginInputProps = {
  userName: string;
  onChange: (e: ChangeEvent) => void;
}