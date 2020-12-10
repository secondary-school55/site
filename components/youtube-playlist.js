import Loader from "components/loader";
import { useYouTube } from "lib/youtube";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import YouTube from "react-youtube";

const PER = 8;

export default function YouTubePlaylist({ playlist }) {
  const [player, setPlayer] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const range = useRef(PER);
  const list = useYouTube(playlist);
  const [ref, inView] = useInView();

  if (inView) {
    if (range.current < list.length) range.current += PER;
  }

  const onItemClick = (item) => {
    setPlayer(item.id);
  };

  const onOuterClick = () => {
    setPlayer(false);
    setPlayerReady(false);
  };

  return (
    <>
      <div className="root">
        {list.slice(0, range.current).map((item) => (
          <div
            key={item.thumbnail}
            className="block"
            onClick={() => onItemClick(item)}
          >
            <img src={item.thumbnail} className="thumbnail" />

            <div className="title">
              <span className="date">
                {item.day}.{item.month}.{item.year}
              </span>{" "}
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <div className="more" ref={ref} />
      {player && (
        <div className="player-bg" onClick={() => onOuterClick()}>
          <div className="player">
            <YouTube videoId={player} onReady={() => setPlayerReady(true)} />
          </div>
          {!playerReady && <Loader />}
        </div>
      )}
      <style jsx>
        {`
          .root {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }

          .block {
            margin: 1vw;
            cursor: pointer;
          }

          .thumbnail {
            width: 100%;
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

          .player-bg {
            background-color: rgba(0, 0, 0, 0.8);
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .player {
            display: ${playerReady ? "block" : "none"};
          }
        `}
      </style>
    </>
  );
}
