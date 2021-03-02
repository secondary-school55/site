import Md from "components/md";
import { useRouter } from "next/router";
import React, { Children } from "react";

export default function PublicInfo() {
  return (
    <Md renderers={{ listItem: ListItem }}>{`
1. @0 [Статут закладу освіти](https://drive.google.com/open?id=1xl8bUSU9XcB6i3aWb66PB9GdtE1dze9I)
1. @1 Ліцензії на впровадження освітньої діяльності
   - [ліцензія](/public-info/license.jpg)
   - [свідотство про атестацію закладу](/public-info/attestation.jpg)
1. @0 [Структура та органи управління закладу освіти](/public-info/structure-and-organization)
1. @2 Кадровий склад
   - [на момент ліцензування](/public-info/cadre.pdf)
1. @3 Освітні програми
   - [освітня програма школи на 2020-2021 н. р.](/public-info/educational-program/2020-2021.pdf)
   - [освітня програма школи на 2019-2020 н. р.](/public-info/educational-program/2019-2020.pdf)
   - [освітня програма школи на 2018-2019 н. р.](/public-info/educational-program/2018-2019.pdf)
   - [відомості про навчально-методичне та інформаційне забезпечення освітньої діяльності](/public-info/educational-and-methodical-support.pdf)
1. @0 [Територія обслуговування](/public-info/territory-of-service)   
1. @0 [Ліцензований обсяг та фактична кількість осіб, які навчаються у закладі освіти](/public-info/license)
1. @4 Наявність вакантних посад, порядок і умови проведення конкурсу на їх заміщення:
   - вихователь ГПД  - 0,5 ст.
1. @0 [Матеріально-технічне забезпечення закладу освіти](/public-info/material-and-technical-support.pdf)
1. @5 Результати моніторингу якості освіти:
   - [2019-2020 н.р.](/public-info/monitoring-the-quality-of-education/2019-2020.pdf)
   - [2018-2019 н.р.](/public-info/monitoring-the-quality-of-education/2018-2019.pdf)
   - [2017-2018 н.р.](/public-info/monitoring-the-quality-of-education/2017-2018.pdf)
1. @6 Річний звіт про діяльність закладу освіти:
   - [2019-2020 н.р.](/public-info/annual-report/2019-2020.pdf) ([презентація](https://www.slideshare.net/kzhkzh/20192020-237362489))
   - [2018-2019 н.р.](/public-info/annual-report/2018-2019.pdf) ([презентація](https://drive.google.com/open?id=1vTFjujO0svPmltoqXhvGsqBtLBnXD5H6))
   - [2017-2018 н.р.](/public-info/annual-report/2017-2018.pdf) ([презентація](https://drive.google.com/open?id=1LhsCU9SV8oY1ZHGkhkaP7S1rVSFY3N1U))
   - [2016-2017 н.р.](/public-info/annual-report/2016-2017.pdf) ([презентація](https://drive.google.com/open?id=156j7FFLHIt0v_8QEbIx97DufTQfX7jjj))
   - [2015-2016 н.р.](/public-info/annual-report/2015-2016.pdf) ([презентація](https://drive.google.com/open?id=1R9010IqeDb0-PFTMnNTpZzymrg4-UYJ_))
   - [2014-2015 н.р.](/public-info/annual-report/2014-2015.pdf)
1. @7 Благоустрій та ремонт школи:
   - [2019-2020 н.р.](https://youtu.be/aiY5HHIYowU)
1. @8 Пропозиції до проекту бюджету:
   - [2021р.](/public-info/project-budget/2021.pdf)
1. @0 [Штатний розпис](https://drive.google.com/file/d/1b_DOIUY_xRqDNPm6gK3JaajGYTs22Ft4/view?usp=sharing)
1. @0 [Правила прийому](/public-info/rules-of-admission)
1. @0 [Умови доступності закладу освіти для навчання осіб з особливими освітніми потребами](/public-info/conditions-of-availability)
1. @9 Буллінг. Безпечне освітнє середовище:
   - **Алтинбаєва Лариса Миколаївна** - відповідальна особа за оперативне реагування у випадку звернення щодо фактів булінгу (цькування) в КЗШ №55 КМР ДО
   - [Відповідальна особа за оперативне реагування у випадку щодо факту булінгу у КЗШ №55 КМР ДО](/public-info/bullying/responsible-person.pdf)
   - [Зразок заяви щодо повідомлення про булінг (цькування)](/public-info/bullying/sample-statement-report.pdf)
   - [Інформація про відповідальність осіб, причетних до булінгу](/public-info/bullying/information-responsibility-persons.pdf)
   - [План заходів, спрямованих на запобігання та протидію булінгу (цькуванню) в КЗШ №55 КМР ДО на 2020-2021 н.р.](/public-info/bullying/plan-actions-preventing.pdf)
   - [Порядок подання та розгляду (з дотриманням конфіденційності) заяв про випадки булінгу (цькування) в закладі освіти](/public-info/bullying/submitting-and-reviewing.pdf)
   - [Порядок реагування на доведені випадки булінгу (цькування) в закладі освіти та відповідальність осіб, причетних до булінгу (цькування)](/public-info/bullying/responding-to-proven-cases-of-bullying.pdf)
   - [Правила поведінки здобувачів освіти в КЗШ №55 КМР ДО](/public-info/bullying/rules-of-conduct.pdf)
1. @0 [Перелік додаткових освітніх та інших послуг](/public-info/additional-services)
1. @0 [Про створення постійно діючої комісії з превентивних питань та раннього виявлення неповнолітніх, схильних до вживання психоактивних речовин, алкоголю та тютюнових виробів  і розподіл функціональних обов’язків між членами комісії](/public-info/standing-committee.pdf)
1. @10 Мова освітнього процесу:
   - згідно зі Статутом школи мовою викладання навчальних предметів є українська мова. В закладі освіти як іноземна мова вивчаються англійська мова
1. @11 Установчі документи:
   - [Свідотство про державну реєстрацію юридичної особи](/public-info/founding-documents/certificate-state-registration.jpg)
   - [Свідотство про право власності на нерухоме майно](/public-info/founding-documents/certificate-ownership-right.jpg)   
   - [Правила внутрішнього розпорядку](/public-info/founding-documents/rules-internal-order.pdf)
   - [Колективний договір](/public-info/founding-documents/collective-agreement.pdf)
1. @0 [Рішення колегії відділу освіти від 28.11.2019 - "Про проведення у відповідність до чинного законодавства України мережі закладів загальної середньої освіти Тернівського району м. Кривого Рогу на 2020-2023 роки"](/public-info/ternvo/28.11.2019.zip)
1. @0 [Наказ відділу освіти від 29.11.2019 №319](/public-info/ternvo/29.11.2019_319.zip)
`}</Md>
  );
}

function ListItem({ children }) {
  const c = children[0].props.children;
  if (typeof c === "string" && c.startsWith("@")) {
    const childrenModified = Children.map(children, (c) => {
      return React.cloneElement(c, {
        children: Children.map(c.props.children, (c) => {
          if (typeof c === "string" && c.startsWith("@")) {
            return c.split(" ").slice(1).join(" ");
          }

          return c;
        }),
      });
    });

    const n = c.split(" ")[0].slice(1);

    return (
      <Filter value={Number.parseInt(n)}>
        <li>{childrenModified}</li>
      </Filter>
    );
  }

  return <li>{children}</li>;
}

function Filter({ children, value }) {
  const router = useRouter();
  let { n } = router.query;

  if (n === undefined) return <>{children}</>;

  n = Number.parseInt(n);

  if (n === value) return <>{children}</>;
  return <></>;
}
