import { useYouTube } from "lib/youtube";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import YouTube from "react-youtube";

const PER = 6;

export default function YouTubePlaylist({ playlist }) {
  const range = useRef(PER);
  const list = useYouTube(playlist);
  const [ref, inView] = useInView();

  if (inView) {
    if (range.current < list.length) range.current += PER;
  }

  const opts = { width: "400px", height: "225px" };

  return (
    <>
      <div className="root">
        {list.slice(0, range.current).map((item) => (
          <div key={item.thumbnail} className="block">
            <YouTube videoId={item.id} opts={opts} />

            <div className="title">
              <span className="date">
                {item.day}.{item.month}.{item.year}
              </span>{" "}
              {item.title}
            </div>
          </div>
        ))}
        <div className="more" ref={ref} />
      </div>
      <style jsx>
        {`
          .root {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }

          .title {
            font-style: italic;
            font-weight: bold;
            text-align: left;
            margin-bottom: 2vw;
          }

          .date {
            color: blue;
          }

          .more {
            width: 100%;
            height: 1vw;
          }
        `}
      </style>
    </>
  );
}
