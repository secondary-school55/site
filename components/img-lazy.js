import styled from "styled-components";
import { useInView } from "react-intersection-observer";

export default function ImgLazy(props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [a, b] = props.aspectRatio.split(":");
  const height = 100 / (a / b);
  const { width } = props;

  const imgProps = { ...props };
  delete imgProps.aspectRatio;
  delete imgProps.width;

  return (
    <Wrapper width={width} ref={ref}>
      <Wrapper2 height={height}>
        {inView && <Img {...imgProps} loading="lazy" />}
      </Wrapper2>
    </Wrapper>
  );
}

ImgLazy.defaultProps = { aspectRatio: "1:1", width: "initial" };

const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
`;

const Wrapper2 = styled.div`
  width: 100%;
  padding-top: ${({ height }) => height}%;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
`;