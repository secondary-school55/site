import Link from "components/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { css } from "styled-components";

export default function Md({ children }) {
  return (
    <ReactMarkdown
      source={children}
      renderers={{ link: Link, heading: Header }}
    />
  );
}

const Header = (props) => (
  <div
    css={css`
      text-align: center;
      font-weight: bold;
      font-size: 2vw;
    `}
  >
    {props.children}
  </div>
);
