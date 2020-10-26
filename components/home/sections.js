import ImgLazy from "components/img-lazy";
import Link from "components/link";
import sections from "data/external.yaml";
import teachers from "data/teachers.yaml";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function Sections() {
  return (
    <Grid
      columns={5}
      css={css`
        margin-bottom: 40px;
      `}
    >
      {sections.map((section) => (
        <Section key={section.title}>
          <ImgLazy src={`/sections/${section.image}.webp`} width="100%" />
          <Title>{section.title}</Title>
          <MenuContainer>
            <Menu>{renderMenuItems(section.items, teachers)}</Menu>
          </MenuContainer>
        </Section>
      ))}
    </Grid>
  );
}

function renderMenuItems(items, teachers) {
  if (items === undefined) {
    items = teachers
      .filter((teacher) => teacher.blog)
      .map((teacher) => ({
        title: teacher.name,
        url: teacher.blog,
      }));
  }

  return items.map((item, i) => (
    <MenuItem key={i}>
      <Link to={item.url} color="white" noDecoration>
        {item.title}
      </Link>
    </MenuItem>
  ));
}

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
  color: white;
  background-color: black;
  font-size: 1vw;
`;

const MenuItem = styled.li`
  text-align: left;
  color: white;

  &:hover {
    background-color: blue;
  }
`;

const Menu = styled.ul`
  font-family: "roboto condensed";
  font-size: 0.9vw;
  margin: 0;
  padding: 2vw;
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
