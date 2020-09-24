import Pdf from "components/pdf";
import styled, { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function TerritoryOfService() {
  return (
    <>
      <Header>
        Відповідно до рішення виконкому Тернівської районної у місті ради від
        20.02.2019 №40 &#34;Про закріплення територій обслуговування за
        загальноосвітніми навчальними закладами Тернівського району міста
        Кривого Рогу для ведення обліку дітей шкільного віку та учнів&#34; за
        Криворізькою загальноосвітньою школою І-ІІІ ступенів № 55 Криворізької
        міської ради Дніпропетровської області (вул. Сергія Колачевскього,
        108-А) закріплено наступну територію обслуговування:
      </Header>
      <p>
        Вулиця <strong>Володимира Михайличенка</strong>
      </p>
      <p>
        Вулиця <strong>Сергія Колачевського:</strong>
      </p>
      <Grid
        columns={6}
        rows={10}
        css={css`
          margin-bottom: 20px;
        `}
      >
        <Cell top={1} left={1}>
          будинок № 52
        </Cell>
        <Cell top={2} left={1}>
          будинок № 54
        </Cell>
        <Cell top={3} left={1}>
          будинок № 56
        </Cell>
        <Cell top={4} left={1}>
          будинок № 58
        </Cell>
        <Cell top={5} left={1}>
          будинок № 60
        </Cell>
        <Cell top={6} left={1}>
          будинок № 62
        </Cell>
        <Cell top={7} left={1}>
          будинок № 64
        </Cell>
        <Cell top={8} left={1}>
          будинок № 66
        </Cell>
        <Cell top={9} left={1}>
          будинок № 68
        </Cell>
        <Cell top={10} left={1}>
          будинок № 70
        </Cell>

        <Cell top={1} left={2}>
          будинок № 72
        </Cell>
        <Cell top={2} left={2}>
          будинок № 74
        </Cell>
        <Cell top={3} left={2}>
          будинок № 76
        </Cell>
        <Cell top={4} left={2}>
          будинок № 78
        </Cell>
        <Cell top={5} left={2}>
          будинок № 80
        </Cell>
        <Cell top={6} left={2}>
          будинок № 82
        </Cell>
        <Cell top={7} left={2}>
          будинок № 84
        </Cell>
        <Cell top={8} left={2}>
          будинок № 86
        </Cell>
        <Cell top={9} left={2}>
          будинок № 88
        </Cell>
        <Cell top={10} left={2}>
          будинок № 90
        </Cell>

        <Cell top={1} left={3}>
          будинок № 92
        </Cell>
        <Cell top={2} left={3}>
          будинок № 94
        </Cell>
        <Cell top={3} left={3}>
          будинок № 96
        </Cell>
        <Cell top={4} left={3}>
          будинок № 98
        </Cell>
        <Cell top={5} left={3}>
          будинок № 100
        </Cell>
        <Cell top={6} left={3}>
          будинок № 102
        </Cell>
        <Cell top={7} left={3}>
          будинок № 104
        </Cell>
        <Cell top={8} left={3}>
          будинок № 106
        </Cell>
        <Cell top={9} left={3}>
          будинок № 108
        </Cell>
        <Cell top={10} left={3}>
          будинок № 110
        </Cell>

        <Cell top={1} left={4}>
          будинок № 112
        </Cell>
        <Cell top={2} left={4}>
          будинок № 114
        </Cell>
        <Cell top={3} left={4}>
          будинок № 116
        </Cell>
        <Cell top={4} left={4}>
          будинок № 118
        </Cell>
        <Cell top={5} left={4}>
          будинок № 120
        </Cell>
        <Cell top={6} left={4}>
          будинок № 122
        </Cell>
        <Cell top={7} left={4}>
          будинок № 124
        </Cell>
        <Cell top={8} left={4}>
          будинок № 126
        </Cell>
        <Cell top={9} left={4}>
          будинок № 128
        </Cell>
        <Cell top={10} left={4}>
          будинок № 130
        </Cell>

        <Cell top={1} left={5}>
          будинок № 132
        </Cell>
        <Cell top={2} left={5}>
          будинок № 134
        </Cell>
        <Cell top={3} left={5}>
          будинок № 136
        </Cell>
        <Cell top={4} left={5}>
          будинок № 138
        </Cell>
        <Cell top={5} left={5}>
          будинок № 140
        </Cell>
        <Cell top={6} left={5}>
          будинок № 142
        </Cell>
        <Cell top={7} left={5}>
          будинок № 144 (1-4)
        </Cell>
        <Cell top={8} left={5}>
          будинок № 144 (5-8)
        </Cell>
        <Cell top={9} left={5}>
          будинок № 144 (9-12)
        </Cell>
        <Cell top={10} left={5}>
          будинок № 146
        </Cell>

        <Cell top={1} left={6}>
          будинок № 148 (1-4)
        </Cell>
        <Cell top={2} left={6}>
          будинок № 148 (5-8)
        </Cell>
        <Cell top={3} left={6}>
          будинок № 150
        </Cell>
        <Cell top={4} left={6}>
          будинок № 152
        </Cell>
        <Cell top={5} left={6}>
          будинок № 154
        </Cell>
        <Cell top={6} left={6}>
          будинок № 156
        </Cell>
        <Cell top={7} left={6}>
          будинок № 158
        </Cell>
        <Cell top={8} left={6}>
          будинок № 160
        </Cell>
        <Cell top={9} left={6}>
          будинок № 162
        </Cell>
      </Grid>
      <Pdf src="/public-info/territory-of-service.pdf" />
    </>
  );
}

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
