import Link from "components/link";
import ThumbnailFallback from "components/posts/thumbnail";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

import Archive from "./archive";
import Pagination from "./pagination";

const POSTS_PER_PAGE = 10;

export default function Posts({ data }) {
  const router = useRouter();

  let { page, year } = router.query;

  page = page === undefined ? 1 : parseInt(page);

  const RenderPagination = () => (
    <Pagination
      page={page}
      count={POSTS_PER_PAGE}
      total={year ? 1 : data.length}
    />
  );

  return (
    <>
      <RenderPagination />
      <Grid columns="1fr 18vw" gap="1.5vw" style={{ margin: "15px 0" }}>
        <Cell>
          {filterPosts(data, page, POSTS_PER_PAGE, router.query).map((node) => (
            <Post
              columns="10vw 1fr"
              rows={(10 / 4) * 3 + "vw"}
              gap="1vw"
              key={node.route}
            >
              <Cell>
                <Thumbnail src={node.thumbnail} />
              </Cell>
              <Cell
                css={css`
                  position: relative;
                `}
              >
                <Title>{node.title}</Title>
                <Date>{formatDate(node.date)}</Date>
                <Detail>
                  <Link to={node.route} noDecoration>
                    Детальніше
                  </Link>
                </Detail>
              </Cell>
            </Post>
          ))}
        </Cell>
        <CellArchive>
          <Archive posts={data} />
        </CellArchive>
      </Grid>
      <RenderPagination />
    </>
  );
}

function filterPosts(posts, page, per, { year, month }) {
  const from = (page - 1) * POSTS_PER_PAGE;

  if (year !== undefined)
    return posts.filter(
      ({ date: { year: yearPost, month: monthPost } }) =>
        yearPost === year && monthPost === month
    );

  return posts.slice(from, from + POSTS_PER_PAGE);
}

function formatDate({ year, month, day }) {
  return `${day}/${month}/${year}`;
}

const borderColor = "#d3d3d3";
const backgroundColor = "#fafafa";

const Post = styled(Grid)`
  border: 1px solid ${borderColor};
  border-radius: 1vw;
  padding: 0.6vw;
  margin-bottom: 1vw;
  background-color: ${backgroundColor};
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 2px 2px 3px #dcdcdc;
    transform: translateY(-1px);
  }
`;

const Thumbnail = styled(ThumbnailFallback)`
  width: 100%;
  height: 100%;
  display: block;
  border: 1px solid ${borderColor};
`;

const Title = styled.div``;

const Date = styled.div`
  color: blue;
`;

const Detail = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  border: 1px solid blue;
  border-radius: 0.8vw;
  padding: 0.1vw 0.7vw;
  background-color: #ededff;
`;

const CellArchive = styled(Cell)`
  border: 1px solid ${borderColor};
  padding: 1vw;
  box-sizing: border-box;
  background-color: ${backgroundColor};
`;
