import Link from "components/link";
import { filterByKind } from "lib/posts/utils";
import { useYouTube } from "lib/youtube";
import React from "react";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Posts({ data: posts, kind, youtube, filter }) {
  if (youtube !== undefined) {
    let videos = useYouTube(youtube);
    if (filter) videos = videos.filter((video) => video.title.includes(filter));

    return render(
      videos.map((video) => ({ ...video, path: video.route })).slice(0, 5)
    );
  }

  return render(
    filterByKind(posts, kind)
      .map((post) => ({
        path: post.route,
        title: post.title,
        thumbnail: post.thumbnail,
        year: post.date.year,
        month: post.date.month,
        day: post.date.day,
      }))
      .slice(0, 5)
  );
}

function render(posts) {
  return (
    <Grid
      columns={5}
      css={css`
        margin-bottom: 40px;
      `}
    >
      {posts.map((data, i) => {
        const { title, path, thumbnail, year, month, day } = data;

        return (
          <Cell key={i}>
            <Block>
              <Thumbnail src={thumbnail} />
              <Date>{`${day}.${month}.${year}`}</Date>
              <Link to={path} color="white">
                <View>Переглянути</View>
              </Link>
            </Block>
            <Title>{title}</Title>
          </Cell>
        );
      })}
    </Grid>
  );
}

const Thumbnail = styled(LazyLoadImage)`
  width: 100%;
  display: block;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1vw;
`;

const Date = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000ab;
  color: white;
  padding: 0.2vw;
  font-size: 1vw;
`;

const View = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transition: all 100ms ease;
`;

const Block = styled.div`
  position: relative;

  &:hover {
    ${View} {
      opacity: 1;
      cursor: pointer;
    }
  }
`;
