import styled from "styled-components";

export default function YouTube(props) {
  return (
    <AspectRatio {...props}>
      <iframe src={`https://www.youtube.com/embed/${props.id}`} />
    </AspectRatio>
  );
}

const AspectRatio = styled.div`
  position: relative;
  width: ${(props) => props.width}%;
  height: 0;
  padding-bottom: ${(props) => `calc(${props.width}%/(${props.aspect}))`};
  margin: 10px auto;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

AspectRatio.defaultProps = {
  width: "50",
  aspect: "16/9",
};
