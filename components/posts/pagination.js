import Link from "components/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Pagination({ page, count, total }) {
  const router = useRouter();
  const totalPages = parseInt(Math.ceil(total / count));

  return (
    <Root>
      <PageLink to={buildLink(1, router)} isCurrent={page === 1}>
        {"<<"}
      </PageLink>
      {buildChunks(page, count, totalPages).map((c) => (
        <PageLink key={c} to={buildLink(c, router)} isCurrent={c === page}>
          {c}
        </PageLink>
      ))}
      <PageLink
        to={buildLink(totalPages, router)}
        isCurrent={page === totalPages}
      >
        {">>"}
      </PageLink>
    </Root>
  );
}

function buildChunks(page, count, totalPages) {
  page -= 1;

  const middle = count / 2;
  const from = page - middle < 0 ? 0 : page - middle;
  const to = page + middle;

  return Array.from(Array(totalPages), (_, i) => i + 1).slice(from, to);
}

function buildLink(page, router) {
  const href = {
    pathname: router.pathname,
    query: { ...router.query },
  };
  if (page === 1) {
    delete href.query.page;
    return href;
  }

  href.query.page = page;

  return href;
}

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const PageLink = styled(Link).attrs((props) => ({
  noDecoration: true,
  color: props.isCurrent ? "white" : "black",
}))`
  border: 1px solid lightgray;
  border-radius: 50%;
  width: 2vw;
  height: 2vw;
  margin: 0.2vw;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isCurrent && {
      backgroundColor: "#1c5ad7",
      color: "white",
      pointerEvents: "none",
    }}

  &:hover {
    border-color: grey;
    background-color: lightgray;
  }
`;
