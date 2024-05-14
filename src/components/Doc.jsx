import { useState, useEffect } from "react";
import { getDownloadURL, getStorage } from "firebase/storage";

export default function Doc({ category, postList }) {
  const [nowPostData, setNowPostData] = useState(postList[0]);
  const storage = getStorage();

  useEffect(() => {
    getText();
  }, [nowPostData]);

  const getText = async () => {
    const pathReference = ref(
      storage,
      `blog/category/${category}/${nowPostData.id}`
    );
    const url = await getDownloadURL(pathReference);
    const text = (await fetch(url)).text();
    console.log(text);
  };

  return (
    <div>
      <ul>
        {postList.map((post) => {
          return (
            <li
              onClick={() => {
                setNowPostData(post);
              }}
            >
              {post.title}
            </li>
          );
        })}
      </ul>

      <div>
        <h2>
          {
            postList.find((post) => {
              return post.id === nowPostData.id;
            })?.title
          }
        </h2>
      </div>
    </div>
  );
}
