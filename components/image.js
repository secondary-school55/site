import styled from "styled-components";

const Image = (props) => <Img src={props.src} />;

const Img = styled.img`
  display: block;
  width: 50%;
  margin: 0 auto;
`;

export default Image;
