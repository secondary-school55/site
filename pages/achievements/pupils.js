import TableExcel from "components/table-excel";
import { Tab, Tabs } from "components/tabs";
import contestEducational from "data/achievements/pupils/contest-educational.xlsx";
import contestSports from "data/achievements/pupils/contest-sports.xlsx";
import contestTrainingResearch from "data/achievements/pupils/contest-training-research.xlsx";
import contestTrainingUkrainian from "data/achievements/pupils/contest-training-ukrainian.xlsx";
import olympiads_2015_2016 from "data/achievements/pupils/olympiads-2015-2016.xlsx";
import olympiads_2016_2017 from "data/achievements/pupils/olympiads-2016-2017.xlsx";
import olympiads_2017_2018 from "data/achievements/pupils/olympiads-2017-2018.xlsx";
import olympiads_2018_2019 from "data/achievements/pupils/olympiads-2018-2019.xlsx";
import olympiads_2019_2020 from "data/achievements/pupils/olympiads-2019-2020.xlsx";

export default function Pupils() {
  return (
    <Tabs>
      <Tab title="Конкурси">
        <Tabs>
          <Tab title="Навчальні">
            <Tabs>
              <Tab title="Науково-дослідницькі роботи">
                <TableExcel data={contestTrainingResearch} />
              </Tab>
              <Tab title="Всеукраїнський конкурс">
                <TableExcel data={contestTrainingUkrainian} />
              </Tab>
            </Tabs>
          </Tab>
          <Tab title="Виховні">
            <TableExcel data={contestEducational} />
          </Tab>
          <Tab title="Спортивні">
            <TableExcel data={contestSports} />
          </Tab>
        </Tabs>
      </Tab>
      <Tab title="Олімпіади">
        <Tabs>
          <Tab title="2019-2020 н.р.">
            <TableExcel data={olympiads_2019_2020} />
          </Tab>
          <Tab title="2018-2019 н.р.">
            <TableExcel data={olympiads_2018_2019} />
          </Tab>
          <Tab title="2017-2018 н.р.">
            <TableExcel data={olympiads_2017_2018} />
          </Tab>
          <Tab title="2016-2017 н.р.">
            <TableExcel data={olympiads_2016_2017} />
          </Tab>
          <Tab title="2015-2016 н.р.">
            <TableExcel data={olympiads_2015_2016} />
          </Tab>
        </Tabs>
      </Tab>
    </Tabs>
  );
}
