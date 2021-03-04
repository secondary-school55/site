import DistanceLearning from "components/home/distance-learning";
import Posts from "components/home/posts";
import Sections from "components/home/sections";
import Sites from "components/home/sites";
import Link from "components/link";
import usePosts from "lib/posts/use";
import { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";
import Card from "components/home/card";

export default function Main() {
  const posts = usePosts();

  return (
    <>
      <Grid columns="20vw 1fr">
        <Cell center>
          <img
            src="/teachers/gorevich_l_v_2.jpg"
            css={css`
              width: 50%;
            `}
          />
          <br />
          <span
            css={css`
              font-size: 0.9em;
            `}
          >
            <strong>Горевич Людмила Володимирівна</strong>
            <br />
            директор школи
          </span>
        </Cell>
        <Cell
          css={css`
            font-family: philosopher;
          `}
        >
          <p>
            Вітаємо на офіційному веб-сайті навчального закладу – Криворізької
            загальноосвітньої школи І-ІІІ ступенів № 55. Створюючи веб-сайт,
            намагалися дбати про його своєчасне та змістовне наповнення,
            зручність використання, забезпечення участі всіх учасників
            навчально-виховного процесу у діяльності закладу освіти.
          </p>
          <p>
            Наповнюючи сайт інформативними матеріалами, прагнули консолідації
            експертно-аналітичного, інтелектуального, організаційного,
            професійного педагогічного потенціалів та багаторічного практичного
            досвіду української педагогічної еліти, учителів навчального
            закладу, кращих педагогів-новаторів. Крім того, на веб-сайті
            використані матеріали українських Інтернет - сервісів,
            контент-провайдерів, електронних і традиційних засобів масової
            інформації.
          </p>
          <p>
            Намагаємося вчасно і систематично знайомити постійних відвідувачів
            веб-сайту з новинами в освітньому просторі школи, району, міста,
            України; систематично поновлюємо та поповнюємо нормативні документи;
            ділимося власними досягненнями у професійній діяльності закладу.
            Інформуємо, пропагуємо, висвітлюємо…
          </p>
          <p>
            На сторінках веб-сайту школи можна дізнатися про всі події, які
            відбуваються у нашій школі.
          </p>
          <p>
            Постійно осучаснюємо та змінюємо такі категорії: контент, зручність,
            динаміку, дизайн та технічні показники.
          </p>
          <p>
            Розміщуємо інформацію, яка може бути корисною та цікавою учням,
            батькам, учителям, громадським та професійним об’єднанням.
          </p>
          <p>
            Учителі нашого закладу не лише користуються передовим педагогічним
            досвідом, але й мають чим поділитися з власної педагогічної
            скарбниці. Мріємо, щоб наша школа була не лише кращою у Тернівському
            районі, але однією з кращих у рідному місті.
          </p>
          <p>
            Ми все робимо для того, щоб школа осучаснювалася, щоб з&#39;являлися
            нові можливості розвитку учнів, підвищувалася якість освіти, щоб
            шкільне життя в школі було цікавим і яскравим. Це можливо, якщо ми
            об&#39;єднаємо свої зусилля і будемо відкриті для обговорення всіх
            проблем.
          </p>
          <p>
            Ми бажаємо Вам успіхів в дуже складній і важливій справі – навчанні,
            вихованні та освіті дітей!
          </p>
          <p>
            З найкращими побажаннями педагогічний колектив Криворізької
            загальноосвітньої школи І – ІІІ ст. № 55.
          </p>
        </Cell>
      </Grid>
      <Header>РОЗДІЛИ САЙТУ</Header>
      <Sections />
      <Header>КАРТКА КРИВОРІЖЦЯ</Header>
      <Card />
      <Header>ДИСТАНЦІЙНЕ НАВЧАННЯ</Header>
      <DistanceLearning />
      {/* <Header to="/camp">ТАБІР "ВЕСЕЛКА"</Header> */}
      {/* <Posts kind='camp' data={posts}/> */}
      <Header to="/news">НОВИНИ</Header>
      <Posts kind="news" data={posts} />
      <Header to="/announcements">ОГОЛОШЕННЯ</Header>
      <Posts kind="announcements" data={posts} />
      <Header to="/useful">КОРИСНА ТА АКТУАЛЬНА ІНФОРМАЦІЯ</Header>
      <Posts kind="useful" data={posts} />
      <Header to="/zno">ЗНО</Header>
      <Posts kind="zno" data={posts} />
      <Header to="/dpa">ДПА</Header>
      <Posts kind="dpa" data={posts} />
      <Header to="https://www.youtube.com/playlist?list=PLRRIw-HYRJOpzrWlpb8GywybT26k1kMLR">
        СТОРІНКАМИ ДИТЯЧОЇ ТВОРЧОСТІ
      </Header>
      <Posts youtube="PLRRIw-HYRJOpzrWlpb8GywybT26k1kMLR" />
      <Header to="https://www.youtube.com/playlist?list=PLRRIw-HYRJOr2XVPRWJTTHpGPV_C4pwiv">
        Л. ГРИНЕВИЧ ПРО ШКОЛУ
      </Header>
      <Posts youtube="PLRRIw-HYRJOr2XVPRWJTTHpGPV_C4pwiv" />
      <Header to="https://www.youtube.com/playlist?list=PLEoEWGEBriPCTBIOQbXIIDzFFakriePu-">
        УРОКИ АВРАМЕНКА
      </Header>
      <Posts youtube="PLEoEWGEBriPCTBIOQbXIIDzFFakriePu-" />
      <Header to="https://www.youtube.com/playlist?list=PLWEafJlvXzDcDQZvycaKzxJ7J-p56KMzH">
        АКТУАЛЬНО ПРО ОСВІТУ
      </Header>
      <Posts
        youtube="PLWEafJlvXzDcDQZvycaKzxJ7J-p56KMzH"
        filter="Актуально про освіту"
      />
      <Header>КОРИСНІ САЙТИ</Header>
      <Sites />
    </>
  );
}

const Header = (props) => (
  <h1
    css={css`
      font-family: "open sans";
      font-weight: lighter;
      font-size: 2.5em;
      margin: 0 auto;
      text-align: center;
    `}
  >
    <Link to={props.to} color="black" noDecoration>
      {props.children}
    </Link>
  </h1>
);
