import ImgLazy from "components/img-lazy";
import Link from "components/link";
import React from "react";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function DistanceLearning() {
  return (
    <Grid
      columns={5}
      css={css`
        margin-bottom: 40px;
      `}
    >
      {items.map((item) => (
        <Section key={item.image}>
          <ImgLazy src={`/distance-learning/${item.image}.jpg`} width="100%" />
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
    image: "schedule",
    items: [
      {
        text: "1-4 класи",
        url: "/distance-learning/schedule 1-4.pdf",
      },
      {
        text: "5-11 класи",
        url: "/distance-learning/schedule 5-11.pdf",
      },
      {
        text: "Графiк пiдсумкових робiт",
        url:
          "https://drive.google.com/open?id=1SKoYQ7X04WGnxRHK2MCETONz1iJI2zIX",
      },
      {
        text: "Графік проведення консультацій до ЗНО",
        url: "/distance-learning/zno.pdf",
      },
    ],
  },
  {
    url: "/distance-learning/#2",
    image: "1",
  },
  {
    url: "/distance-learning/#3",
    image: "2",
  },
  {
    url: "/distance-learning/#4",
    image: "3",
  },
  {
    url: "/distance-learning/#5",
    image: "4",
  },
  {
    url: "/distance-learning/#6",
    image: "5",
  },
  {
    url: "/distance-learning/#7",
    image: "6",
  },
  {
    url: "/distance-learning/#8",
    image: "7",
  },
  {
    url: "/distance-learning/#9",
    image: "8",
  },
  {
    url: "/distance-learning/#10",
    image: "9",
  },
  {
    url: "/distance-learning/#11",
    image: "10",
  },
  {
    url: "/distance-learning/#12",
    image: "11",
  },
  {
    url: "/distance-learning/#13",
    image: "online-lessons",
  },
  {
    url: "/distance-learning/#14",
    image: "contacts",
  },
  {
    url: "http://kreducloud.com/",
    image: "kreducloud",
  },
  {
    url:
      "https://drive.google.com/file/d/1Aw2ny4HFt2jFVY9EhPOHfzwKFzMRDZPo/view?usp=sharing",
    image: "po",
  },
];
