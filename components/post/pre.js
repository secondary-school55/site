import styled from "styled-components";

export default function Pre({ children }) {
  return <Root>{children}</Root>;
}

const Root = styled.pre`
  font-family: inherit;

  code {
    font-family: inherit;
  }
`;
