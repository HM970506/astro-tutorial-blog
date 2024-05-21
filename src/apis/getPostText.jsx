import { app } from "../firebase/server";
import { getStorage, getDownloadURL } from "firebase-admin/firestore";

export const GET = async (url) => {
  try {
    const storage = getStorage(app);
    const pathReference = ref(storage, url);
    const downloadURL = await getDownloadURL(pathReference);
    const text = (await fetch(downloadURL)).text();

    console.log(text);

    return text;
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
