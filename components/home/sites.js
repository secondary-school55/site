import Link from "components/link";
import sites from "data/sites.yaml";
import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";
import ImgLazy from "components/img-lazy";

export default function Sites() {
  return (
    <Grid columns={5}>
      {sites.map((site) => (
        <Site key={site.title}>
          <Link to={site.url}>
            <ImgLazy
              src={`/sites/${site.thumbnail}.webp`}
              width="100%"
              aspectRatio="640:400"
            />
          </Link>
          <Title>{site.title}</Title>
        </Site>
      ))}
    </Grid>
  );
}

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 3vw;
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  text-align: center;
`;

const Site = styled(Cell)`
  position: relative;
`;
