import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import type { FieldConfigParamType, FieldConfigType, PanelFormType } from "../../../../types";

export const defaultFormInputs: PanelFormType = {
  title: "",
  imageSource: "",
  price: "",
};

export default ({ fieldValues, onChange }: FieldConfigParamType) =>
  [
    {
      variant: "minimalist",
      id: "title",
      name: "title",
      value: fieldValues.title,
      placeholder: "Product name",
      Icon: FaHamburger,
      onChange: onChange,
    },
    {
      variant: "minimalist",
      id: "imageSource",
      name: "imageSource",
      value: fieldValues.imageSource,
      placeholder: "URL link of an image",
      Icon: BsFillCameraFill,
      onChange: onChange,
    },
    {
      variant: "minimalist",
      id: "price",
      name: "price",
      value: fieldValues.price,
      placeholder: "Price",
      Icon: MdOutlineEuro,
      onChange: onChange,
    },
  ] as FieldConfigType[];
