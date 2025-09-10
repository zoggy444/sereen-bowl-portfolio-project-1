import type {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FC,
  FormEvent,
} from "react";
import type { IconType } from "react-icons";

// data types

export type BasketProdType = {
  id: string;
  n: number;
};

export type ButtonVariantType = "primary" | "default";

export type ContentTabIDType = "add-product" | "edit-product";

export type FoldTabIDType = "fold";

export type IntentType = "primary" | "success";

export type ProductType = {
  id: string;
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
  onClick?: (e?: FormEvent) => void;
} & ComponentPropsWithoutRef<"button">;

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

export type FormProductProps = {
  selectedTabID: ContentTabIDType;
  formInputs: PanelFormType;
  Footer: FC<FormFooterProps>;
  onInputChange: (name: string, value: string) => void;
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

export type TitleAndPriceProps = {
  id: string;
  title: string;
  price: number;
  isSelected: boolean;
  className?: string;
  buttonLabel?: string;
  onButtonClick?: (id: string) => void;
};

// unique comp types

export type AdminPanelFormActionType = {
  type: "change" | "reset" | "fill" | "";
  formTarget: "add-product" | "edit-product" | "";
  name?: string;
  value?: string;
  fillDict?: PanelFormType;
};

export type AdminPanelFormType = {
  addInputs: PanelFormType;
  editInputs: PanelFormType;
};

export type BasketBodyProps = {
  products: ProductType[];
  basketProds: BasketProdType[];
  onCardClick: (id: string) => void;
};

export type BasketCardProps = {
  product: ProductType;
  qty: number;
  onClick: (id: string) => void;
};

export type BasketCardRightProps = {
  qty: number;
};

export type BasketProps = {
  products: ProductType[];
  basketProds: BasketProdType[];
  onCardClick: (id: string) => void;
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

export type FormFooterProps = {
  className: string;
};

export type MenuActionType = {
  type: "add-product" | "edit-product" | "delete-product" | "regen-menu" | "";
  prodVals?: PanelFormType;
  prodID?: string;
};

export type MenuCardProps = {
  // "id" would conflict with img id prop
  prodID: string;
  src: string;
  title: string;
  price: number;
  onAdd: (id: string) => void;
} & ComponentPropsWithoutRef<"img">;

export type MenuCardDeleteProps = {
  prodID: string;
  isSelected: boolean;
};

export type MenuCardDeleteStyledProps = {
  $isSelected: boolean;
};

export type MenuCardStyledProps = {
  $isHovered: boolean;
  $isSelected: boolean;
};

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
  selectedTabID: ContentTabIDType;
  addInputs: PanelFormType;
  editInputs: PanelFormType;
};

export type PanelConfigType = {
  foldTab: TabProps<FoldTabIDType>;
  contentTabs: TabProps<ContentTabIDType>[];
  panelContent: string;
};

export type PanelFormType = Pick<ProductType, "title" | "imageSource"> & {
  price: string;
};

export type ProductDetailProps = {
  id: number;
  title: string;
  price: number;
  isSelected: boolean;
  onAdd: (id: number) => void;
};

export type ProductDetailStyledProps = {
  $isSelected: boolean;
};

export type TabConfigParamType = {
  isFolded: boolean;
  selectedTabID: ContentTabIDType;
  onTabClick: (id: TabIDType) => void;
};
