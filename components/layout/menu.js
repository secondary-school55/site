import Link from "components/link";
import menu from "data/menu.yaml";
import { MdArrowDropDown } from "react-icons/md";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function Menu({ height }) {
  return (
    <Grid
      columns="auto 13% 1fr"
      css={css`
        background-color: #25254e;
        height: ${height}px;
        font-family: philosopher;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 2;
      `}
    >
      <Cell>
        <img
          src="/layout/emblem.png"
          css={css`
            height: ${height}px;
            position: relative;
          `}
        />
      </Cell>
      <Cell middle>
        <img
          src="/layout/title.png"
          css={css`
            width: 100%;
          `}
        />
      </Cell>
      <Cell>{renderMenu(menu, FirstLevel, height, [30, 0, 50])}</Cell>
    </Grid>
  );
}

function renderMenu(items, Level, height, positions = []) {
  if (positions.length > 0)
    positions = Array(items.length - positions.length)
      .fill(0)
      .concat(positions);

  return (
    <Level height={height}>
      {items.map((node, i) => (
        <Item
          key={i}
          firstLevel={Level === FirstLevel}
          moveLeft={positions[i]}
          height={height}
        >
          {node.route ? (
            <Link
              to={node.route}
              color="white"
              hoverColor="yellow"
              noDecoration
            >
              {node.title}
              {renderArrow(node)}
            </Link>
          ) : (
            <span
              css={css`
                color: white;
              `}
            >
              {node.title}
              {renderArrow(node)}
            </span>
          )}

          {node.items && renderMenu(node.items, SecondLevel, height)}
        </Item>
      ))}
    </Level>
  );
}

function renderArrow({ items }) {
  return (
    items && (
      <MdArrowDropDown
        css={css`
          position: absolute;
          transform: translateX(-3px) translateY(1px);
        `}
      />
    )
  );
}

const common = css`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9vw;
`;

const FirstLevel = styled.ul`
  ${common};

  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  height: ${(props) => props.height}px;
`;

const SecondLevel = styled.ul`
  ${common};

  z-index: 2;
  background-color: #25254e;
  position: absolute;
  top: ${(props) => props.height}px;
  display: none;
  padding: 3px;
  white-space: nowrap;
`;

const Item = styled.li`
  padding-right: 1vw;
  display: flex;
  align-items: center;

  ${(props) => props.firstLevel && `height: ${props.height}px;`}

  &:hover span {
    color: yellow;
  }

  &:hover ${SecondLevel} {
    display: block;

    ${({ moveLeft }) => moveLeft && `transform: translateX(-${moveLeft}px)`}
  }
`;
