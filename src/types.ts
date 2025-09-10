import type {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  MouseEventHandler,
} from "react";
import type { IconType } from "react-icons";
import { fakeMenu1 } from "./fakeData/fakeMenu";

// data types

export type BasketProdType = {
  id: number;
  n: number;
};

export type ProductType = (typeof fakeMenu1)[0];

export type FoldTabIDType = "fold";

export type ContentTabIDType = "add-product" | "edit-product";

export type TabIDType = FoldTabIDType | ContentTabIDType;

// reusable comp types

export type ButtonPrimaryProps = {
  label: string;
  className?: string;
  Icon?: IconType;
  onClick?: () => void;
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

export type TitleAndPriceProps = {
  id: number;
  title: string;
  price: number;
  className?: string;
  buttonLabel?: string;
  onButtonClick?: (id: number) => void;
};

// unique comp types

export type BasketCardProps = {
  product: ProductType;
  qty: number;
  onClick: (id: number) => void;
};

export type BasketCardRightProps = {
  qty: number;
  isHovered: boolean;
  onDelClick: MouseEventHandler<HTMLButtonElement>;
};

export type BasketMainProps = {
  products: ProductType[];
  basketProds: BasketProdType[];
  onCardClick: (id: number) => void;
};

export type BasketProps = {
  products: ProductType[];
  basketProds: BasketProdType[];
  onCardClick: (id: number) => void;
};

export type MenuProps = {
  products: ProductType[];
  onAdd: (id: number) => void;
};

export type MenuCardProps = {
  id: number;
  src: string;
  title: string;
  price: number;
  onAdd: (id: number) => void;
} & ComponentPropsWithoutRef<"img">;

export type NavBarProps = {
  labelIfChecked: string;
  labelIfUnchecked: string;
};

export type NavRightProps = {
  labelIfChecked: string;
  labelIfUnchecked: string;
};

export type PanelContentProps = {
  isFolded: boolean;
  content: string;
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

export type TabContainerProps = {
  foldTab: TabProps<FoldTabIDType>;
  contentTabs: TabProps<ContentTabIDType>[];
};
