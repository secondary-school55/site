import Link from "components/link";
import Table from "components/table";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Mon() {
  return <Table columns={columns} data={data} />;
}

const columns = [
  {
    Header: "Номер",
    id: "number",
    accessor: (d) => d[0],
  },
  {
    Header: "Дата",
    id: "date",
    accessor: (d) => d[1],
  },
  {
    Header: "Переглянути",
    id: "load",
    // eslint-disable-next-line react/display-name
    accessor: (d) => (
      <Link to={d[2]}>
        <FaExternalLinkAlt />
      </Link>
    ),
  },
];

const data = [
  [
    1,
    "від 07.09.2015",
    "http://us11.campaign-archive2.com/?u=aa712a75e3e776f4101137606&id=1f2a3dba9b&e=c1e89178c6",
  ],
  [
    2,
    "від 06.10.2015",
    "http://us11.campaign-archive2.com/?u=aa712a75e3e776f4101137606&id=8676e3cf1e&e=ed60c3ce9b",
  ],
  [
    3,
    "від 09.11.2015",
    "http://us11.campaign-archive2.com/?u=aa712a75e3e776f4101137606&id=f7142e706d",
  ],
  [
    4,
    "від 07.12.2015",
    "http://us11.campaign-archive2.com/?u=aa712a75e3e776f4101137606&id=b87d3b995a",
  ],
  [
    5,
    "від 25.12.2015",
    "http://us11.campaign-archive2.com/?u=aa712a75e3e776f4101137606&id=771d3677e9&e=c1e89178c6",
  ],
  [
    6,
    "від 02.02.2016",
    "http://us11.campaign-archive1.com/?u=aa712a75e3e776f4101137606&id=b2e92a2e90&e=c1e89178c6",
  ],
  [
    7,
    "від 04.03.2016",
    "http://us11.campaign-archive2.com/?u=aa712a75e3e776f4101137606&id=e7d3186871&e=c1e89178c6",
  ],
  [
    8,
    "від 06.04.2016",
    "https://us11.campaign-archive.com/?u=aa712a75e3e776f4101137606&id=1963e3215c",
  ],
  [
    9,
    "від 16.05.2016",
    "http://us11.campaign-archive1.com/?u=aa712a75e3e776f4101137606&id=8e2b43b951&e=c1e89178c6",
  ],
  [
    10,
    "від 16.05.2016",
    "http://us11.campaign-archive2.com/?u=aa712a75e3e776f4101137606&id=7d7926779d&e=c1e89178c6",
  ],
  [
    11,
    "від 16.06.2016",
    "http://us11.campaign-archive2.com/?u=aa712a75e3e776f4101137606&id=7d7926779d&e=c1e89178c6",
  ],
  [
    12,
    "від 13.07.2016",
    "http://us11.campaign-archive1.com/?u=aa712a75e3e776f4101137606&id=512cc12ff0&e=c1e89178c6",
  ],
  [
    13,
    "від 16.08.2016",
    "http://us11.campaign-archive2.com/?u=aa712a75e3e776f4101137606&id=eeee3d9b5f&e=c1e89178c6",
  ],
  [
    14,
    "від 14.09.2016",
    "http://us11.campaign-archive1.com/?u=aa712a75e3e776f4101137606&id=47782f15ea&e=c1e89178c6",
  ],
  [
    15,
    "від 15.10.2016",
    "http://us11.campaign-archive1.com/?u=aa712a75e3e776f4101137606&id=04e75a2385&e=e20ac3bf7a",
  ],
  [
    16,
    "від 16.11.2016",
    "http://us11.campaign-archive1.com/?u=aa712a75e3e776f4101137606&id=605e6d6a0a&e=071def9808",
  ],
  [
    17,
    "від 16.12.2016",
    "http://us11.campaign-archive1.com/?u=aa712a75e3e776f4101137606&amp;id=ccd0dd8e6a",
  ],
  [
    18,
    "від 16.12.2017",
    "http://us11.campaign-archive2.com/?u=aa712a75e3e776f4101137606&id=6350ac813f&e=c1e89178c6",
  ],
].reverse();
