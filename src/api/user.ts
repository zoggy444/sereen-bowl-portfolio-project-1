import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUserData = async (userId: string) => {
  const docRef = doc(db, "users", userId);

  const res = await getDoc(docRef);
  if (res.exists()) {
    return res.data();
  } else {
    console.error("No such document!");
    return null;
  }
};

export const createUser = async (userId: string) => {
  try {
    const docRef = doc(db, "users", userId);
    const userData = {
      username: userId,
      menu: fakeMenu.MEDIUM,
    };
    await setDoc(docRef, userData);
    console.log("User created successfully");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
