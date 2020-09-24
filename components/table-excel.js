import styled from "styled-components";

export default function TableExcel({ data: { headers, table } }) {
  return (
    <Table>
      <tbody>
        <Row>
          {headers.map((header) => (
            <Header key={header}>{header}</Header>
          ))}
        </Row>
        {table.map((row, i) => (
          <Row key={i}>
            {row.map((col, i) => (
              <Cell
                key={i}
                colSpan={col.colspan}
                rowSpan={col.rowspan}
                highlight={col.colspan === headers.length}
                dangerouslySetInnerHTML={{ __html: col.text }}
              />
            ))}
          </Row>
        ))}
      </tbody>
    </Table>
  );
}

const borderColor = "#a2a2a2";

const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${borderColor};
`;

const Row = styled.tr`
  border-bottom: 1px solid ${borderColor};
`;

const Header = styled.th`
  font-weight: bold;
  background-color: #c6c6fd;
  border: 1px solid ${borderColor};
`;

const Cell = styled.td`
  border: 1px solid ${borderColor};
  ${(props) => props.highlight && "background-color: #f3eeb0"}
`;
