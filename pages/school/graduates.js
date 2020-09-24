import { Fragment } from "react";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function Graduates() {
  return (
    <Grid columns="13% 1fr">
      {persons.map((person) => (
        <Fragment key={person.name}>
          <Cell>
            <Photo src={person.image} />
          </Cell>
          <Cell
            css={css`
              padding-top: 15px;
            `}
          >
            <div>
              <strong>{person.name}</strong>
            </div>
            <div>{person.info}</div>
          </Cell>
        </Fragment>
      ))}
    </Grid>
  );
}

const Photo = styled.img`
  width: 100%;
`;

const persons = [
  {
    image: "/graduates/gorevich_s_o.png",
    name: "Горевич Сергій Олександрович",
    info:
      "Випускник 1983 року. Начальник відділу освіти виконкому Тернівської районної у місті ради",
  },
  {
    image: "/graduates/fedin_o_v.png",
    name: "Фєдін Олександр Валерійович",
    info:
      "Випускник 1983 року. Начальник державної інспекції по надзору в гірничо-добувній та хімічній промисловості",
  },
  {
    image: "/graduates/naumov_s_o.png",
    name: "Наумов Олександр Семенович",
    info:
      "Випускник 1975 року Директор Дніпропетровського відділення Приватбанку",
  },
  {
    image: "/graduates/litvinova_t_e.png",
    name: "Литвинова Тетяна Валеріївна",
    info: "Випускниця 1989 року Доцент кафедри педіатрії, лікар ЦПМСД №2",
  },
  {
    image: "/graduates/kolesnikov_d_v.png",
    name: "Колєсніков Дмитро Валерійович",
    info:
      "Випускник 1989 року Народний депутат України 6-го скликання Голова Дніпропетровської обласної державної адміністрації (2012-2014р.)",
  },
  {
    image: "/graduates/kachan_r_v.png",
    name: "Качан Руслан Васильович",
    info:
      "Випускник 1986 року Начальник відділу внутрішнього аудиту апарату міської ради і виконкому",
  },
  {
    image: "/graduates/dyomina_o_i.png",
    name: "Дьоміна Олена Іванівна",
    info:
      "Випускниця 1975 року Директор Криворізької загальноосвітньої школи І-ІІІ ступенів № 78",
  },
  {
    image: "/graduates/darmostuk_a_s.png",
    name: "Дармостук Андрій Станіславович",
    info:
      "Випускник 1991 року Заступник виконавчого директора Московської будівельної компанії",
  },
  {
    image: "/graduates/ambrosiak_v_d.png",
    name: "Амброзяк Володимир Дмитрович",
    info:
      "Випускник 1988 року Генеральний директор Криворізької універсальної товарної біржі",
  },
  {
    image: "/graduates/darmostuk_l_s.png",
    name: "Дармостук Леонід Станіславович",
    info:
      "Випускник 1985 року Ведучий саксафоніст джазового оркестру «Фонограф»",
  },
  {
    image: "/graduates/chirka_n_u.png",
    name: "Чирка Назар Юрійович",
    info:
      "Випускник 1997 року Директор Криворізького академічного міського театру драми та музичної комедії імені Тараса Шевченка",
  },
];
