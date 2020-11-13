import NextLink from "next/link";
import styled from "styled-components";

const Link = (props) => {
  const { children, href, className } = props;
  let { to, color, hoverColor, noDecoration } = props;

  if (href !== undefined) to = href;

  let render;

  switch (true) {
    case to === undefined || to === null:
      return <span>{children}</span>;

    case isExternalLink(to):
    case isFileLink(to):
      render = (
        <a href={to} target="_blank" rel="noopener noreferrer nofollow">
          {children}
        </a>
      );
      break;

    default:
      render = (
        <NextLink href={to} scroll={false} shallow={true}>
          <a className={className}>{children}</a>
        </NextLink>
      );
  }

  return (
    <LinkStyle
      color={color}
      hoverColor={hoverColor}
      noDecoration={noDecoration}
    >
      {render}
    </LinkStyle>
  );
};

Link.defaultProps = {
  color: "blue",
};

const LinkStyle = styled.span`
  a {
    text-decoration: none;
    color: ${(props) => props.color};

    &:hover {
      text-decoration: underline;
      ${(props) => props.hoverColor && { color: props.hoverColor }};
      ${(props) => props.noDecoration && "text-decoration: none;"}
    }
  }
`;

export function isExternalLink(url) {
  if (typeof url === "object") return false;

  return url.startsWith("http") || url.startsWith("mailto");
}

export function isFileLink(url) {
  if (typeof url === "object") return false;

  return /\.[a-zA-Z]*$/.test(url);
}

export default Link;
