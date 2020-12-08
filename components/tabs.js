import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";

let keyId = 0;

export const Tabs = (props) => {
  const [index, setIndex] = useState(0);
  const gridProps = props.vertical
    ? { columns: "auto 1fr" }
    : {
        columns: "auto",
        rows: "auto 1fr",
      };

  useEffect(() => {
    if (location.hash) setIndex(location.hash.slice(1) - 1);
  }, []);

  if (keyId > 5) keyId = 0;

  return (
    <Grid {...gridProps}>
      <Titles vertical={props.vertical}>
        {React.Children.map(props.children, (child, i) => (
          <Title
            onClick={() => setIndex(i)}
            current={i === index}
            vertical={props.vertical}
          >
            {child.props.title}
          </Title>
        ))}
      </Titles>
      <Content key={keyId++} vertical={props.vertical}>
        {content(props, index, setIndex)}
      </Content>
    </Grid>
  );
};

export const Tab = (props) => <div>{props.children}</div>;

function content(props, index, setIndex) {
  const childs = props.children[index];
  if (childs === undefined) {
    setIndex(0);
    return null;
  }
  return childs.props.children;
}

const Title = styled.div`
  padding: 5px;
  border-radius: 5px;

  ${(props) =>
    props.current && {
      backgroundColor: "blue",
      color: "white",
      borderRadius: "5px",
    }}

  ${(props) =>
    props.vertical ? { marginBottom: "5px" } : { marginRight: "5px" }}

  &:hover {
    ${(props) =>
      !props.current && {
        backgroundColor: "#d0d0ff",
        cursor: "pointer",
      }}
  }
`;

const Content = styled(Cell)`
  ${(props) =>
    props.vertical
      ? { borderLeft: "1px solid #9a9a9a" }
      : { borderTop: "1px solid #9a9a9a", paddingTop: "20px" }};

  height: auto;
  position: relative;

  ol:first-of-type,
  ul:first-of-type,
  p:first-of-type {
    margin-top: 0;
  }
`;

const Titles = styled(Cell)((props) =>
  props.vertical ? {} : { display: "flex", flexWrap: "wrap" }
);
