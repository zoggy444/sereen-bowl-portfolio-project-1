import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import type { ProductType } from "../types";

export const createUser = async (userId: string): Promise<ProductType[]> => {
  try {
    const docRef = doc(db, "users", userId);
    const menu = fakeMenu.MEDIUM;
    const userData = {
      username: userId,
      menu: menu,
    };
    await setDoc(docRef, userData);
    console.log("User created successfully");
    return menu;
  } catch (e) {
    console.error("Error creating user: ", e);
    return [];
  }
};

export const authenticateUser = async (userId: string): Promise<ProductType[]> => {
  try {
    const docRef = doc(db, "users", userId);
    const res = await getDoc(docRef);
    if (res.exists()) {
      console.log("User authenticated successfully");
      return res.data()["menu"] as ProductType[];
    } else {
      return createUser(userId);
    }
  } catch (e) {
    console.error("Error authenticating user: ", e);
    return [];
  }
};

export const updateMenu = async (
  userId: string,
  menu: ProductType[]
): Promise<boolean> => {
  try {
    const docRef = doc(db, "users", userId);
    const userData = {
      username: userId,
      menu: menu,
    };
    await setDoc(docRef, userData);
    console.log("Menu updated successfully");
    return true;
  } catch (e) {
    console.error("Error creating product: ", e);
    return false;
  }
};
