import React, { useState } from "react";

type Props = {
  title: string;
}

export const Counter: React.FC<Props> = ({title}) => {
  const [count, setCount] = useState(0);

  return (
    <button id="counter" type="button" onClick={() => setCount(count + 1)}>
      {title} {count}
    </button>
  );
};
