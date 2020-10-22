import Link, { isExternalLink } from "components/link";
import pages from "data/menu.yaml";
import Head from "next/head";
import { useRouter } from "next/router";
import path from "path";
import { IoIosArrowForward } from "react-icons/io";
import styled, { css } from "styled-components";

const schoolTitle = "КЗШ І-ІІІ ст. №55";

export default function Breadcrumbs({ height, posts }) {
  const router = useRouter();
  const data = flatPages().withPosts(posts);
  const breadcrumbs = mapBreadcrumbs(router, data);

  const last = breadcrumbs.length - 1;
  const windowTitle = `${breadcrumbs[last].title} - ${schoolTitle}`;

  return (
    <>
      <Head>
        <title>{windowTitle}</title>
      </Head>
      <div id="SCROLL" />
      <Root height={height}>
        {breadcrumbs.map(({ title, route }, index) => {
          return (
            <Route key={route} isLast={index === last}>
              {index < last ? (
                <div
                  css={css`
                    position: relative;
                  `}
                >
                  <Link to={route === "/" ? route : route.slice(0, -1)}>
                    {title}
                  </Link>
                  <Arrow />
                </div>
              ) : (
                title
              )}
            </Route>
          );
        })}
      </Root>
    </>
  );
}

function flatPages() {
  const f = (data) => {
    let result = [];

    data.forEach((p) => {
      if (p.route && !isExternalLink(p.route)) {
        result.push({
          title: p.title,
          route: !p.route.endsWith("/") ? p.route + "/" : p.route,
        });
      }

      if (p.items) result = result.concat(f(p.items));
    });

    return result;
  };

  const result = f(pages);
  return {
    withPosts(posts) {
      if (posts)
        return result.concat(
          posts.map((p) => ({
            title: p.title,
            route: !p.route.endsWith("/") ? p.route + "/" : p.route,
          }))
        );
      return result;
    },
  };
}

function splitPath(router) {
  const parts = [];
  let p = router.asPath;

  while (p !== "/") {
    parts.push(!p.endsWith("/") ? p + "/" : p);
    p = path.dirname(p);
  }

  parts.push("/");
  parts.reverse();

  if (parts.length > 1 && parts[1].includes("/posts?")) {
    parts[1] = `/posts?kind=${router.query.kind}/`;
  }

  if (parts.length > 1 && parts[1] === "/posts/") {
    parts[1] = `/posts?kind=${router.query.kind}/`;
  }

  return parts;
}

function mapBreadcrumbs(router, data) {
  return splitPath(router)
    .map((part) => data.find((item) => item.route === part))
    .filter((b) => b);
}

const Root = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: "roboto condensed";
  font-style: normal;
  font-weight: normal;
  font-size: 1.1vw;

  background-color: #f0f9ff;
  border-top: 1px solid #aebdc7;
  border-bottom: 1px solid #aebdc7;
  height: 2.5em;
  display: flex;
  align-items: center;
  position: sticky;
  top: ${(props) => props.height}px;
  z-index: 1;
`;

const routeOverflow = css`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Route = styled.li`
  margin-left: 1.5vw;
  ${(props) => props.isLast && routeOverflow}
`;

const Arrow = styled(IoIosArrowForward)`
  position: absolute;
  left: 100%;
  top: 0;
  transform: translateX(32%) translateY(25%);
  font-size: 0.9vw;
`;
