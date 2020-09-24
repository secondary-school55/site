import Link from "components/link";
import teachers from "data/teachers.yaml";
import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function Teachers() {
  return (
    <Grid columns="1fr 1fr">
      <Cell width={2}>
        <All src="/teachers/all.webp" />
        <Text>
          Школа будує кадрову політику таким чином, щоб кожен учасник
          навчального процесу відчував себе дієвою частиною спільної справи. Для
          нас важливо, аби працівники розуміли, що від результатів їхної роботи
          залежить успіх та рух школи вперед. Ми зацікавлені в тому, щоб у нас
          працювали професіонали.
        </Text>
      </Cell>
      {teachers.map((node) => (
        <Teacher key={node.name}>
          <Photo src={`/teachers/${node.shrt}.webp`} />
          <Name>{node.name}</Name>
          <Post>{node.post}</Post>
          <Rank>{node.rank}</Rank>
          {node.blog && (
            <Link to={node.blog}>
              <Blog />
              Блог вчителя
            </Link>
          )}
        </Teacher>
      ))}
    </Grid>
  );
}

const All = styled.img`
  width: 50%;
  margin: 0 auto;
  display: block;
`;

const Text = styled.p`
  color: #a91da9;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Teacher = styled(Cell)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
`;

const Photo = styled.img`
  width: 13vw;
  /*border-radius: 50%;*/
`;

const Name = styled.div`
  font-weight: bold;
`;

const Post = styled.div``;
const Rank = styled.div``;

const Blog = styled.img.attrs({ src: "/blog.svg" })`
  width: 1.4em;
  padding-right: 0.2em;
  transform: translateY(0.3em);
`;
