import Link from "components/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

import Quotes from "./quotes";

export default function Header() {
  return (
    <div>
      <div
        css={css`
          position: relative;
        `}
      >
        <img
          src="/layout/front.webp"
          css={css`
            width: 100%;
            display: block;
          `}
        />
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: center;
            position: absolute;
            bottom: 0;
            text-align: center;
            color: white;
            background-color: #4e59e242;
            padding: 1vw 0;
            font-size: 3vw;
            font-family: "monotype corsiva";
            font-style: italic;
            text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
              2px 2px 0 #000;
          `}
        >
          Криворізька загальноосвітня школа І-ІІІ ступенів №55
          <br />
          Криворізької міської ради Дніпропетровської області
          <Icons>
            <Link to="https://www.facebook.com/SecondarySchool55">
              <Icon src="/facebook.png" />
            </Link>
            <Link to="https://www.youtube.com/channel/UCRr2Junc_lvbqXU1mXoPyoA/videos">
              <Icon src="/youtube.png" />
            </Link>
          </Icons>
        </div>
      </div>
      <div
        css={css`
          background-color: rgb(213, 213, 226);
        `}
      >
        <Grid
          columns="auto"
          gap="0"
          css={css`
            width: 70%;
            margin: 0 auto;
            border: 0.6vw solid white;
          `}
        >
          <Cell
            middle
            css={css`
              box-sizing: border-box;
              padding: 1vw;
              background-color: rgb(62, 62, 132);
              text-align: center;
              color: white;
              font-size: 1.5vw;
              font-family: "times new roman";
            `}
          >
            <span
              css={css`
                font-size: 2.3vw;
                margin-bottom: 0.5em;
              `}
            >
              Наша адреса
            </span>
            50047
            <br /> Україна
            <br /> Дніпропетровська область
            <br /> м. Кривий Ріг
            <br /> вулиця Сергія Колачевського, 108-А
            <br /> e-mail: reception@school55.pp.ua, kzh55@ukr.net
            <br /> Телефон: (096) 095-04-11, +38(0564) 94-84-01
          </Cell>
          <Cell>
            <Video />
          </Cell>
          <Cell
            width={2}
            css={css`
              background-color: #000032;
            `}
          >
            <Quotes />
          </Cell>
        </Grid>
      </div>
    </div>
  );
}

function Video() {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (ref.current) {
      if (inView) ref.current.play().catch(() => {});
      else ref.current.pause();
    }
  }, [inView, ref]);

  return (
    <video
      ref={ref}
      src="/video.mp4"
      type="video/mp4"
      autoPlay
      muted
      loop
      css={css`
        width: 100%;
        display: block;
      `}
    />
  );
}

const Icons = styled.div`
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
`;

const Icon = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  background-color: white;
  border: 1px solid white;
  margin-left: 10px;
`;
