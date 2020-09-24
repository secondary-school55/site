import TableExcel from "components/table-excel";
import { Tab, Tabs } from "components/tabs";
import bestBlog from "data/achievements/teachers/best-blog.xlsx";
import digitalResources from "data/achievements/teachers/digital-resources.xlsx";
import teacherOfTheYear from "data/achievements/teachers/teacher-of-the-year.xlsx";

export default function Teachers() {
  return (
    <Tabs>
      <Tab title="Конкурс «Учитель року»">
        <TableExcel data={teacherOfTheYear} />
      </Tab>
      <Tab title="Конкурс на кращий освітянський блог">
        <TableExcel data={bestBlog} />
      </Tab>
      <Tab title="Конкурс на кращі освітні цифрові ресурси">
        <TableExcel data={digitalResources} />
      </Tab>
    </Tabs>
  );
}
