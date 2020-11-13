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

  let { page, search = "" } = router.query;

  page = page === undefined ? 1 : parseInt(page);

  const posts = filterPosts(data, page, POSTS_PER_PAGE, router.query);

  const handleSearch = (ev) => {
    const query = { kind: router.query.kind };

    if (ev.target.value.length > 0) query.search = ev.target.value;

    router.replace({ query }, undefined, { shallow: true });
  };

  const RenderPagination = () => (
    <Pagination page={page} count={POSTS_PER_PAGE} total={posts.length} />
  );

  return (
    <>
      <Search
        type="text"
        placeholder="Пошук"
        value={search}
        onChange={handleSearch}
      />
      <RenderPagination />
      <Grid columns="1fr 18vw" gap="1.5vw" style={{ margin: "15px 0" }}>
        <Cell>
          {posts.posts.map((post) => (
            <Post
              columns="10vw 1fr"
              rows={(10 / 4) * 3 + "vw"}
              gap="1vw"
              key={post.route}
            >
              <Cell>
                <Thumbnail src={post.thumbnail} />
              </Cell>
              <Cell
                css={css`
                  position: relative;
                `}
              >
                <Title dangerouslySetInnerHTML={{ __html: post.title }} />
                <Date>{formatDate(post.date)}</Date>
                <Detail>
                  <Link to={post.route} noDecoration>
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

function filterPosts(posts, page, per, { year, month, search }) {
  const from = (page - 1) * POSTS_PER_PAGE;
  let src = posts;

  if (year !== undefined)
    src = src.filter(
      ({ date: { year: yearPost, month: monthPost } }) =>
        yearPost === year && monthPost === month
    );

  if (search !== undefined) {
    const searchLower = search.toLowerCase();

    src = src
      .filter((item) => item.titleLower.includes(searchLower))
      .map((item) => {
        if (searchLower.length === 0) return item;
        const pos = item.titleLower.indexOf(searchLower);

        const begin = item.title.slice(0, pos);
        const middle = item.title.slice(pos, pos + searchLower.length);
        const end = item.title.slice(pos + searchLower.length);

        return {
          ...item,
          title: `${begin}<span class="highlight">${middle}</span>${end}`,
        };
      });
  }

  return { posts: src.slice(from, from + POSTS_PER_PAGE), length: src.length };
}

function formatDate({ year, month, day }) {
  return `${day}/${month}/${year}`;
}

const borderColor = "#d3d3d3";
const backgroundColor = "#fafafa";

const Search = styled.input`
  width: 100%;
  font-family: inherit;
`;

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

const Title = styled.div`
  & > .highlight {
    background-color: yellow;
  }
`;

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
