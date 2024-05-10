import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const GET = async () => {
  try {
    const db = getFirestore(app);
    const blogRef = db.collection("blog");
    const categories = await blogRef.get(category);

    return categories;
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
