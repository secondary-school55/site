import Link from "components/link";
import styled from "styled-components";

export default function Administration() {
  return (
    <>
      <Person
        photo="gorevich_l_v"
        name="Горевич Людмила Володимирівна - директор школи"
        exp="спеціаліст вищої кваліфікаційної категорії, учитель-методист"
      />

      <Person
        photo="furt_s_v"
        name="Фурт Світлана Володимирівна - заступник директора з навчально-виховної роботи"
        exp="спеціаліст вищої кваліфікаційної категорії"
      />

      <Person
        photo="livak_v_v"
        name="Лівак Вікторія Вікторівна - заступник директора з навчально-виховної роботи"
        exp="спеціаліст вищої кваліфікаційної категорії"
      />

      <Person
        photo="altinbaeva_l_m"
        name="Алтинбаєва Лариса Миколаївна - заступник директора з виховної роботи"
        exp="спеціаліст вищої кваліфікаційної категорії"
      />

      <Person
        photo="chernyavska_a_a"
        name="Чернявська Алла Анатоліївна - соціальний педагог"
        exp="спеціаліст другої кваліфікаційної категорії"
      />

      <Person
        photo="hrustaleva_o_v"
        name="Хрустальова Оксана Валентинівна - практичний психолог"
        exp="спеціаліст другої кваліфікаційної категорії"
      />

      <Person
        photo="petrushevska_l_g"
        name="Петрушевська Людмила Григорівна - завідувач господарства"
      />
    </>
  );
}

const Person = (props) => (
  <>
    <Root>
      <Photo src={`/teachers/${props.photo}.jpg`} />
      <Name>{props.name}</Name>
      {props.exp && <Exp>{props.exp}</Exp>}
      <Email>e-mail:</Email>
      <Link to="mailto:reception@school55.pp.ua">reception@school55.pp.ua</Link>
      <br />
      <Link to="mailto:kzh55@ukr.net">kzh55@ukr.net</Link>
    </Root>
    <Separator />
  </>
);

const highlight = "blue";

const Root = styled.div`
  font-family: "roboto condensed";
`;

const Photo = styled.img`
  width: 15vw;
  float: left;
  margin-right: 30px;
`;

const Name = styled.div`
  color: ${highlight};
  font-size: 1.6em;
  font-weight: bold;
  margin-bottom: 0.25em;
`;

const Exp = styled.div`
  font-weight: bold;
`;

const Email = styled.div`
  margin-top: 20px;
`;

const Separator = styled.div`
  clear: both;
  height: 40px;
  width: 100%;
`;
