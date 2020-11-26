import Loader from "components/loader";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import useSWR from "swr";

export default function Slideshow(props) {
  const el = useRef(null);
  const router = useRouter();
  const { data: photos } = useSWR(
    `https://api.school55.pp.ua/api/albums/${getId(props.id, router.query)}`
  );

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
  }, [photos?.length]);

  if (!photos) return <Loader />;

  // const cloudinaryUrl = `https://cloudinary.com/console/c-81b9425168b20591f37bcd71187ea1/media_library/folders/${getId(
  //   props.id,
  //   router.query
  // )}`;

  return (
    <>
      {/* <Cloudinary onClick={() => window.open(cloudinaryUrl, "_blank")} /> */}
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
    </>
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

// const Cloudinary = styled.img.attrs({ src: "/cloudinary.png" })`
//   cursor: pointer;
//   width: 4vw;
//   position: relative;
//   left: 50%;
//   transform: translateX(-50%);
// `;

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
