import { useState, useEffect } from "react";
import { marked } from "marked";

export default function Doc({ postList }) {
  const [nowPostData, setNowPostData] = useState(postList[0]);

  useEffect(() => {
    const test = marked.parse(nowPostData?.text);
    console.log("test", test);
  }, [nowPostData]);

  return (
    <div>
      <ul>
        {postList.map((post) => {
          return (
            <li
              onClick={() => {
                setNowPostData(post);
              }}
              key={post.id}
            >
              {post.title}
            </li>
          );
        })}
      </ul>

      <div>
        <h2>{nowPostData?.title}</h2>
      </div>

      <div>{marked(nowPostData?.text)}</div>
    </div>
  );
}
