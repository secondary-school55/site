import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Slideshow(props) {
  const [photos, setPhotos] = useState([]);
  const el = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const id = getId(props.id, router.query);

    getPhotos(id).then((data) => {
      if (data.error) console.log(data.error);
      else setPhotos(data);
    });
  }, [props.id, router.query]);

  useEffect(() => {
    if (el.current === null) return;

    let flickity;

    import("flickity").then(({ default: Flickity }) => {
      flickity = new Flickity(el.current, {
        lazyLoad: 2,
        groupCells: true,
      });
    });

    return () => {
      if (flickity) flickity.destroy();
    };
  });

  return (
    <Root ref={el}>
      {photos.map((photo) => (
        <Content
          key={photo.url}
          height={props.contentHeight}
          aspectRatio={photo.width / photo.height}
        >
          <Img data-flickity-lazyload={photo.preview_url} />
          {!props.disableDownload && (
            <Icon onClick={() => window.open(photo.download_url, "_blank")} />
          )}
        </Content>
      ))}
    </Root>
  );
}

function getId(id, query) {
  let { kind: postType, id: postDate } = query;

  if (id) {
    switch (true) {
      case id.startsWith("*"):
        postDate += "-" + id.slice(1);
        break;

      case id !== undefined:
        return id;
    }
  }

  return `${postType}-${postDate}`;
}

async function getPhotos(folderId) {
  const photos = await fetch(
    `https://api.school55.pp.ua/api/albums/${folderId}`
  ).then((r) => r.json());

  return photos;
}

const Root = styled.div`
  margin-bottom: 55px;
`;

const Icon = styled.img.attrs({ src: "/download-photo.svg" })`
  width: 3.5vw;
  position: absolute;
  right: 1%;
  top: 0;
  display: none;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(0.8);
  }
`;

const Content = styled.div`
  margin-right: 5px;
  position: relative;
  width: ${(props) => props.height * props.aspectRatio}px;

  &:hover ${Icon} {
    display: block;
  }
`;

const Img = styled.img`
  width: 100%;
  opacity: 0;
  transition: opacity 1s;

  &.flickity-lazyloaded,
  &.flickity-lazyerror {
    opacity: 1;
  }
`;

Content.defaultProps = {
  height: 400,
};
