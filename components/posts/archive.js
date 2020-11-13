import Link from "components/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function Archive({ posts }) {
  const router = useRouter();
  const counts = countPosts(posts);
  let prevYear = counts[Object.keys(counts)[0]].date.year;

  const { year: yearFilter, month: monthFilter, kind } = router.query;

  return (
    <>
      <Title>Архів</Title>
      {Object.keys(counts).map((k, i) => {
        const {
          date: { year, month },
          count,
        } = counts[k];

        let isNeedSeparator = prevYear !== year;
        if (isNeedSeparator) prevYear = year;

        const isCurrent = yearFilter === year && monthFilter === month;

        return (
          <Fragment key={i}>
            {isNeedSeparator && <br />}
            <DateItem isCurrent={isCurrent}>
              <Link
                href={buildLink(kind, year, month, router, isCurrent)}
                color="inherit"
                noDecoration
              >
                <Grid columns={3} gap="0">
                  <Cell>{getMonth(month)}</Cell>
                  <Cell center>{year}</Cell>
                  <Cell
                    center
                    css={css`
                      color: blue;
                    `}
                  >
                    ({count})
                  </Cell>
                </Grid>
              </Link>
            </DateItem>
          </Fragment>
        );
      })}
    </>
  );
}

function buildLink(kind, year, month, router, isCurrent) {
  if (isCurrent) return { query: { kind } };
  return {
    query: {
      year,
      month,
      kind,
    },
  };
}

function countPosts(posts) {
  const counts = {};

  for (const post of posts) {
    const { month, year } = post.date;
    const id = `${getMonth(month)} ${year}`;

    if (counts[id] === undefined) counts[id] = { count: 1, date: post.date };
    else counts[id].count++;
  }
  return counts;
}

function getMonth(month) {
  return monthNames[parseInt(month - 1)];
}

const monthNames = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1.5vw;
  margin-bottom: 1vw;
`;

const DateItem = styled.div`
  ${(props) => (props.isCurrent ? { backgroundColor: "lightgray" } : "")};

  &:hover {
    background-color: lightgray;
  }
`;
