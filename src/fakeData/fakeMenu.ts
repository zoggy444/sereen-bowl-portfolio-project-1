import type { ProductType } from "../types";

const EMPTY: ProductType[] = [];

const SMALL: ProductType[] = [
  {
    id: crypto.randomUUID(),
    imageSource: "/images/poke-saumon.png",
    title: "POKE SAUMON",
    price: 8.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: crypto.randomUUID(),
    imageSource: "/images/poke-poulet.png",
    title: "POKE POULET",
    price: 6.556,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
];

const MEDIUM: ProductType[] = [
  {
    id: crypto.randomUUID(),
    imageSource: "/images/poke-saumon.png",
    title: "POKE SAUMON",
    price: 8.598,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: crypto.randomUUID(),
    imageSource: "/images/poke-poulet.png",
    title: "POKE POULET",
    price: 7.4985,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: crypto.randomUUID(),
    imageSource: "/images/poke-veggie.png",
    title: "POKE VEGGIE",
    price: 6.367,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: crypto.randomUUID(),
    imageSource: "/images/the-vert-menthe.png",
    title: "THÉ VERT MENTHE",
    price: 3.568,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: crypto.randomUUID(),
    imageSource: "/images/the-vert-gingembre.png",
    title: "THÉ VERT GINGEMBRE",
    price: 3.487,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
];

export const fakeMenu = {
  EMPTY,
  SMALL,
  MEDIUM,
};
