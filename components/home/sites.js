import Link from "components/link";
import sites from "data/sites.yaml";
import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function Sites() {
  return (
    <Grid columns={5}>
      {sites.map((site) => (
        <Site key={site.title}>
          <Link to={site.url}>
            <Thumbnail src={`/sites/${site.thumbnail}.webp`} />
          </Link>
          <Title>{site.title}</Title>
        </Site>
      ))}
    </Grid>
  );
}

const Thumbnail = styled.img`
  width: 100%;
`;

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
