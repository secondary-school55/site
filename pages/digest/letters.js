import Link from "components/link";
import Table from "components/table";
import { useEffect, useState } from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function Letters() {
  const [letters, setLetters] = useState({
    ternvo: [],
    imc: [],
  });

  useEffect(() => {
    fetch("https://api.school55.pp.ua/letters.json")
      .then((r) => r.json())
      .then((r) => setLetters(r));
  }, []);

  return (
    <Grid columns="50% 50%">
      <Cell>{renderLetters(letters.ternvo, "Відділ освіти")}</Cell>
      <Cell>{renderLetters(letters.imc, "КЗ ЦПРПП")}</Cell>
    </Grid>
  );
}

function renderLetters(data, title) {
  const columns = [
    {
      Header: "Номер",
      accessor: "number",
    },
    {
      Header: "Дата",
      id: "date",
      accessor: (d) => `${d.day}.${d.month}.${d.year}`,
    },
    {
      Header: "Лист-інформатор",
      id: "letter",
      // eslint-disable-next-line react/display-name
      accessor: (d) => (
        <>
          <Link to={`https://api.school55.pp.ua/api/box/open/${d.main}`}>
            <FaExternalLinkAlt />
          </Link>
          /
          <Link
            to={`https://api.school55.pp.ua/api/box/download/${d.main}`}
          >
            <FaDownload />
          </Link>
        </>
      ),
    },
    {
      Header: "Додатки",
      id: "apps",
      // eslint-disable-next-line react/display-name
      accessor: (d) =>
        d.apps ? (
          <Link
            to={`https://api.school55.pp.ua/api/box/download/${d.apps}`}
          >
            <FaDownload />
          </Link>
        ) : (
          ""
        ),
    },
  ];

  return (
    <>
      <h1
        css={css`
          text-align: center;
        `}
      >
        {title}
      </h1>
      <Table columns={columns} data={data} />
    </>
  );
}
