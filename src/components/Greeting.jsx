import { useState } from "react";

export default function Greeting() {
  const [randomNumber, setRandomNumber] = useState(0);

  return (
    <div>
      react test: {randomNumber}
      <button
        onClick={() => {
          setRandomNumber((x) => x + 1);
        }}
      >
        random
      </button>
    </div>
  );
}
