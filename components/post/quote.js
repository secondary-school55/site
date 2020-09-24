import styled from "styled-components";

export default function Quote({ children, author }) {
  return (
    <Root>
      {children[0].slice(1)}
      <Author>{author}</Author>
    </Root>
  );
}

const Root = styled.div`
  white-space: pre;
  text-align: right;
`;

const Author = styled.div`
  font-weight: bold;
`;
