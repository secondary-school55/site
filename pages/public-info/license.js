import styled from "styled-components";

export default function License() {
  return (
    <>
      <p>
        Ліцензований обсяг закладу <strong>895</strong> осіб. Початкова освіта,
        базова середня освіта та повна загальна середня освіта.
      </p>
      <Image src="/public-info/license.jpg" />
      <Header>Фактична кількість осіб, мова навчання</Header>
      <Image src="/public-info/classes.png" />
    </>
  );
}

const Image = styled.img`
  width: 50%;
  display: block;
  margin: 0 auto;
`;

const Header = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 1.6vw;
`;
