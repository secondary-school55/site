import Link, { isExternalLink } from "components/link";
import menu from "data/menu.yaml";
import { useState } from "react";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";
import SortableTree from "react-sortable-tree";
import { css } from "styled-components";

export default function Map() {
  let [pages, setPages] = useState([]);
  if (pages.length === 0) setPages(process(menu));

  return (
    <div
      css={css`
        height: 100%;

        .rst__rowContents {
          background-color: #f9f9f9;
        }
      `}
    >
      <SortableTree
        treeData={pages}
        onChange={(treeData) => setPages(treeData)}
        canDrag={false}
        isVirtualized={false}
      />
    </div>
  );
}

function process(pages) {
  const f = (items, level = 1) =>
    items.map(({ title, route, items }) => {
      const result = {
        title: (
          <Link to={route}>
            {route && <LinkIcon route={route} />}
            {title}
          </Link>
        ),
      };

      if (items && level < 2) {
        result.children = f(items, level + 1);
        if (level === 1) result.expanded = true;
      }

      return result;
    });

  return f(pages);
}

const LinkIcon = ({ route }) => (
  <span
    css={css`
      transform: translateY(0.1vw);
      margin-right: 5px;
      color: ${isExternalLink(route) ? "red" : "blue"};
    `}
  >
    {isExternalLink(route) ? <FaExternalLinkAlt /> : <FaLink />}
  </span>
);
