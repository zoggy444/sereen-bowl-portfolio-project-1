import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import type { FieldConfigParamType, FieldConfigType } from "../../../../types";

export default ({ fieldValues, onChange }: FieldConfigParamType) =>
  [
    {
      id: "title",
      name: "title",
      value: fieldValues.title,
      placeholder: "Product name",
      Icon: FaHamburger,
      onChange: onChange,
    },
    {
      id: "imageSource",
      name: "imageSource",
      value: fieldValues.imageSource,
      placeholder: "URL link of an image",
      Icon: BsFillCameraFill,
      onChange: onChange,
    },
    {
      id: "price",
      name: "price",
      value: fieldValues.price,
      placeholder: "Price",
      Icon: MdOutlineEuro,
      onChange: onChange,
    },
  ] as FieldConfigType[];
