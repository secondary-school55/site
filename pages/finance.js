import Md from "components/md";
import { css } from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export default function Finance() {
  return (
    <Grid
      columns="1fr 1fr"
      css={css`
        h2 {
          text-align: center;
        }
      `}
    >
      <Cell>
        <Md>{`
## Використання бюджетних коштів

1. Інформація щодо фактичного використання бюджетних коштів
   - 2021 рік:
     - [1021](https://1drv.ms/u/s!AvfPBDS_9g9Mmz0mlk7S1WN3PvXi?e=EuY1V7)
     - [1031](https://1drv.ms/x/s!AvfPBDS_9g9Mnn8jDA989Ei1ceYr?e=ZJdp0c)
     - [1200](https://1drv.ms/x/s!AvfPBDS_9g9Mnn5boPSZ7xLg2pZf?e=y2wqXi)
   - [2020 рік](https://1drv.ms/x/s!AvfPBDS_9g9MnVw77QkrmbWprxD6)
   - [2019 рік](https://1drv.ms/x/s!AvfPBDS_9g9MnH4Bm2fg3WHCTAbf)
   - [2018 рік](https://1drv.ms/x/s!AvfPBDS_9g9MnAQ89jq2QpaAWHVB)
   - [2017 рік](https://1drv.ms/x/s!AvfPBDS_9g9Mmz71ZxJUOMUhLFXs)
   - [2016 рік](https://1drv.ms/x/s!AvfPBDS_9g9Mm0GI-Q_XEbJYP2uF)
1. Коди витрат 2210, 2220
   - [2020 рік](https://1drv.ms/x/s!AvfPBDS_9g9MnUb8SvA5YISAxQWA)
   - [2019 рік](https://1drv.ms/x/s!AvfPBDS_9g9MnQGHJWJcww5cNb-T)
   - [2018 рік](https://1drv.ms/x/s!AvfPBDS_9g9MnCaD8Pvj3fwL3J3Y)
   - [2017 рік](https://1drv.ms/x/s!AvfPBDS_9g9Mmz_2n2fnFQyLRhiq)
1. Отримання матеріальних цінностей (міський, обласний, державний бюджет)
   - [2018 рік](https://1drv.ms/x/s!AvfPBDS_9g9MnE8tgi5QOekE6FBW)
1. Надходження та ремонтні роботи за рахунок коштів міського бюджету
   - [2019 рік](https://1drv.ms/w/s!AvfPBDS_9g9MnRS1kbNailIcznbi)
   - [2017 рік](https://1drv.ms/w/s!AvfPBDS_9g9Mm08sZXff4bIVdRrM)
1. Кошторис на
   - [2020 рік](https://1drv.ms/b/s!AvfPBDS_9g9MnXJfyjaGMkbZMzNi?e=8NmQta)
   - [2019 рік](https://1drv.ms/b/s!AvfPBDS_9g9MnQATCAvIJ8MGJBny)
   - [2018 рік](https://1drv.ms/b/s!AvfPBDS_9g9MnXNsR3gMc6WE1SA0?e=lHFYxr)
`}</Md>
      </Cell>

      <Cell>
        <Md>{`
## Позабюджетні надходження у натуральній формі

1. Звіт про фінансово-господарську діяльність закладу за
   - 2020-2021
     - [2020-2021 н.р. (Звіт загальношкільного батьківського комітету)](https://1drv.ms/w/s!AvfPBDS_9g9Mngr-zfUuYj0U89Fj?e=ti7ReA)
     - [2020-2021 н.р.](https://1drv.ms/w/s!AvfPBDS_9g9MngngmGeU9dSVRLlz?e=FkpvcG)
   - 2019-2020
     - [2019-2020 н.р. (Звіт загальношкільного батьківського комітету)](https://1drv.ms/w/s!AvfPBDS_9g9MnSK6i_hCCoW4CRt4?e=0cq68m)
     - [2019-2020 н.р.](https://1drv.ms/w/s!AvfPBDS_9g9MnSGFjVbDC1QrSNDP?e=ADNYUq)
   - 2018-2019
     - [2018-2019 н.р. (Звіт загальношкільного батьківського комітету)](https://1drv.ms/w/s!AvfPBDS_9g9MnDXUD1TYfdDdeCaN)
     - [2018-2019 н.р.](https://1drv.ms/w/s!AvfPBDS_9g9MnFGtPXTX43LO1UtW)
   - 2017-2018
     - [2017-2018 н.р. (Звіт загальношкільного батьківського комітету)](https://1drv.ms/w/s!AvfPBDS_9g9MmxM3gCyfH5F0mTz7)
     - [2017-2018 н.р](https://1drv.ms/w/s!AvfPBDS_9g9MmxTqvfA2BYxgZwSD)
   - [2016-2017 н.р.](https://1drv.ms/w/s!AvfPBDS_9g9Mm1BDN_WXknK-6GnF)
   - [І семестр (01.09.2016 - 14.12.2016)](https://1drv.ms/w/s!AvfPBDS_9g9Mm1GshLMjjBwF4eOU)
`}</Md>
      </Cell>
    </Grid>
  );
}
