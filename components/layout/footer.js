import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function Footer() {
  const [liveInternet, setLiveInternet] = useState("");
  useEffect(() => {
    setLiveInternet(getLiveInternetUrl());
  }, []);

  return (
    <Grid
      columns="repeat(4, 1fr)"
      rows="auto 1fr"
      gap="0"
      css={css`
        font-family: philosopher;
        text-align: center;
        color: white;
        font-size: 1.2vw;
      `}
    >
      <Cell
        center
        middle
        css={css`
          background-color: rgb(24, 66, 107);
        `}
      >
        <Title>НАША АДРЕСА</Title>
      </Cell>
      <Cell
        top={2}
        center
        middle
        css={css`
          background-color: rgb(24, 66, 107);
        `}
      >
        50047
        <br />
        Україна
        <br />
        Дніпропетровська область
        <br />
        м. Кривий Ріг
        <br />
        вулиця Сергія Колачевського, 108-А
        <br />
        e-mail: reception@school55.pp.ua, kzh55@ukr.net
        <br />
        Телефон: (096) 095-04-11, +38(0564) 94-84-01
      </Cell>
      <Cell
        center
        middle
        css={css`
          background-color: rgb(48, 73, 97);
        `}
      >
        <Title>ЯК НАС ЗНАЙТИ</Title>
      </Cell>
      <Cell
        top={2}
        left={2}
        center
        middle
        css={css`
          background-color: rgb(48, 73, 97);
        `}
      >
        <iframe
          css={css`
            width: 100%;
            height: 100%;
            border-style: none;
          `}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1333.165643700775!2d33.50890899999999!3d48.065248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dae251ed90f41f%3A0xc524d2e0185e7957!2z0JrRgNC40LLQvtGA0ZbQt9GM0LrQsCDQt9Cw0LPQsNC70YzQvdC-0L7RgdCy0ZbRgtC90Y8g0YjQutC-0LvQsCDQhi3QhtCG0IYg0YHRgtGD0L_QtdC90ZbQsiDihJYgNTU!5e0!3m2!1sen!2sua!4v1429875322776"
        />
      </Cell>
      <Cell
        center
        middle
        css={css`
          background-color: rgb(62, 123, 167);
        `}
      >
        <Title>КІЛЬКІСТЬ ВІДВІДУВАНЬ</Title>
      </Cell>
      <Cell
        top={2}
        left={3}
        center
        middle
        css={css`
          background-color: rgb(62, 123, 167);
        `}
      >
        <span>Всього</span>
        <img
          src="https://counter7.wheredoyoucomefrom.ovh/private/freecounterstat.php?c=pe8znttrel5hf4xuamjwwcshmzgxs85x"
          border="0"
          title="free web counter"
          alt="free web counter"
          style={{ width: "50%", margin: "0 auto" }}
        />
        <span>За місяць</span>
        <a
          href="//www.liveinternet.ru/click"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={liveInternet} width="90px" />
        </a>
      </Cell>
      <Cell height={2} center middle>
        <img
          src="/layout/school.webp"
          css={css`
            width: 100%;
          `}
        />
      </Cell>
    </Grid>
  );
}

function getLiveInternetUrl() {
  const url =
    escape(document.referrer) +
    ";s" +
    screen.width +
    "*" +
    screen.height +
    "*" +
    (screen.colorDepth ? screen.colorDepth : screen.pixelDepth) +
    ";u" +
    escape(document.URL) +
    ";h" +
    escape(document.title.substring(0, 150)) +
    ";" +
    Math.random();

  return `//counter.yadro.ru/hit?t29.6;r${url}`;
}

const Title = styled.h1`
  font-size: 1.6vw;
  font-weight: normal;
`;
