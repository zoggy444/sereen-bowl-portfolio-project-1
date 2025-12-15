import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import type { ProductType } from "../types";

export const userExists = async (userId: string): Promise<boolean> => {
  const docRef = doc(db, "users", userId);
  const res = await getDoc(docRef);
  return res.exists();
};

export const getUserData = async (userId: string | undefined) => {
  if (!userId) {
    console.error("User ID is undefined");
    return null;
  }
  const docRef = doc(db, "users", userId);

  const res = await getDoc(docRef);
  if (res.exists()) {
    return res.data();
  } else {
    return null;
  }
};

export const createUser = async (userId: string):Promise<boolean> => {
  try {
    const docRef = doc(db, "users", userId);
    const userData = {
      username: userId,
      menu: fakeMenu.MEDIUM,
    };
    await setDoc(docRef, userData);
    console.log("User created successfully");
    return true
  } catch (e) {
    console.error("Error creating user: ", e);
    return false
  }
};

export const createProduct = async (userId: string, menu: ProductType[]):Promise<boolean> => {
  try {
    const docRef = doc(db, "users", userId);
    const userData = {
      username: userId,
      menu: menu,
    };
    await setDoc(docRef, userData);
    console.log("Product created successfully");
    return true
  } catch (e) {
    console.error("Error creating poduct: ", e);
    return false
  }
};
