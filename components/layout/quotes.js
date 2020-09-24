import quotes from "data/quotes.yaml";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Quotes() {
  const [current, setCurrent] = useState(0);

  const nextQuote = () => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      let next = Math.floor(Math.random() * quotes.length);
      if (next !== current) {
        setCurrent(next);
        break;
      }
    }
  };

  useEffect(() => {
    const id = setInterval(nextQuote, 4000);
    return () => clearInterval(id);
  }, []);

  const { text, author } = quotes[current];

  return (
    <Root>
      {text}
      <Author>{author}</Author>
    </Root>
  );
}

const Root = styled.div`
  color: white;
  font-family: philosopher;
  font-size: 1vw;
  min-height: 2.5vw;
  white-space: pre;
  text-align: center;
`;

const Author = styled.div`
  color: yellow;
`;
