import styled from "styled-components";

export default function Gallery({ children }) {
  if (children.length === 1 && children[0].props.children)
    children = children[0].props.children;

  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    margin: 0.2vw;
    height: 15vw;
    width: auto;
  }
`;
