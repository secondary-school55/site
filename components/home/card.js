import ImgLazy from "components/img-lazy";
import Link from "components/link";
import React from "react";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function Card() {
  return (
    <Grid
      columns={5}
      css={css`
        margin-bottom: 40px;
      `}
    >
      {items.map((item) => (
        <Section key={item.image}>
          <ImgLazy src={`/card/${item.image}.jpg`} width="100%" />
          <MenuContainer>
            <Menu>
              <MenuItem>
                {(item.url && (
                  <Link
                    to={item.url}
                    color="white"
                    hoverColor="yellow"
                    noDecoration
                  >
                    ПЕРЕГЛЯНУТИ
                  </Link>
                )) ||
                  item.items.map((item) => (
                    <React.Fragment key={item.url}>
                      <Link
                        to={item.url}
                        color="white"
                        hoverColor="yellow"
                        noDecoration
                      >
                        {item.text}
                      </Link>
                      <br />
                    </React.Fragment>
                  ))}
              </MenuItem>
            </Menu>
          </MenuContainer>
        </Section>
      ))}
    </Grid>
  );
}

const MenuItem = styled.li`
  text-align: left;
  color: white;
`;

const Menu = styled.ul`
  font-family: "roboto condensed";
  font-size: 1.5vw;
  margin: 0;
  padding: 2vw;
  list-style: none;
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;
`;

const Section = styled(Cell)`
  position: relative;

  &:hover ${MenuContainer} {
    opacity: 1;
  }
`;

const items = [
  {
    url: "/card/instruction.pdf",
    image: "instruction",
  },
];
