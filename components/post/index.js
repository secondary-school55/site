import Embed from "components/embed";
import Gallery from "components/gallery";
import Link from "components/link";
import Loader from "components/loader";
import ThumbnailFallback from "components/posts/thumbnail";
import Slideshow from "components/slideshow";
import YouTube from "components/you-tube";
import { markdownToReact } from "lib/posts/md";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";
import useSWR from "swr";

import Image from "./image";
import LinkPost from "./link";
import Pre from "./pre";
import Quote from "./quote";
import Paragraph from "./paragraph";

export default function Post({ data: post }) {
  const { data: content } = useSWR(post.md, (...args) =>
    fetch(...args).then((r) => r.text())
  );

  const options = {
    createElement: React.createElement,
    components: {
      gallery: Gallery,
      slideshow: Slideshow,
      pre: Pre,
      quote: Quote,
      youtube: YouTube,
      img: Image,
      a: LinkPost,
      p: Paragraph,
      embed: Embed,
    },
  };

  if (!content) return <Loader />;

  return (
    <>
      <Thumbnail src={post.thumbnail} />
      <Grid columns="auto">
        <Cell>
          <Icon src="/calendar.svg" />
          <Date>
            {post.date.day}.{post.date.month}.{post.date.year}
          </Date>
        </Cell>
      </Grid>
      <Border />
      <div>{markdownToReact(content, options)}</div>
      <WidgetsShare>
        <Link to={shareFacebook()}>
          <FaFacebookF size={18} />
        </Link>
      </WidgetsShare>
    </>
  );
}

function shareFacebook() {
  if (typeof window === "undefined") return "";

  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    document.URL
  )}&t=${encodeURIComponent(document.URL)}`;
}

const Thumbnail = styled(ThumbnailFallback)`
  width: 20%;
  display: block;
  margin: 0 auto;
  margin-bottom: 17px;
  border: 1px solid lightgrey;
`;

const Date = styled.span`
  font-family: philosopher;
  font-weight: bold;
  font-size: 1.4vw;
`;

const Icon = styled.img`
  height: 24px;
  margin-right: 3px;
  transform: translateY(25%);
`;

// const Title = styled.span`
//   font-family: philosopher;
//   font-weight: bold;
//   font-size: 1.4vw;
// `;

const Border = styled.hr`
  border: none;
  height: 1px;
  background-color: lightgrey;
`;

const WidgetsShare = styled.div`
  margin-top: 15px;
  text-align: right;
  * {
    color: black;
  }
`;
