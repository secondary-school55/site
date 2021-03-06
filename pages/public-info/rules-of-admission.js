import Md from "components/md";
import Pdf from "components/pdf";
import { Cell, Grid } from "styled-css-grid";

export default function RulesOfAdmission() {
  return (
    <>
      <Md>{`
# ШАНОВНІ БАТЬКИ

У зв’язку зі змінами Порядку обліку дітей шкільного віку та учнів (Постанова Кабінету Міністрів України від 13 вересня 2017 №684). ПРИЙОМ ДО ПЕРШИХ КЛАСІВ ЗДІЙСНЮЄТЬСЯ БЕЗ КОНКУРСНОГО ВІДБОРУ. ПРАВО НА ПЕРШОЧЕРГОВЕ ЗАРАХУВАННЯ МАЮТЬ ДІТИ, ЯКІ ПРОЖИВАЮТЬ НА ЗАКРІПЛЕНІЙ ТЕРИТОРІЇ ОБСЛУГОВУВАННЯ. (Згідно з рішенням Виконкому Тернівської районної у місті ради від 16.08.2017 р. №279 «Про затвердження мікрорайонів шкіл та дошкільних навчальних закладів» до мікрорайону КЗШ І-ІІІ ст. №55 належить  вулиця С.Колачевського буд. 52-162.),ТОМУ ПРИЙОМ ВІДБУВАТИМЕТЬСЯ У ДВА ЕТАПИ.

# I етап (23.04 – 30.05.2019) ГАРАНТОВАНЕ ПРАВО

Дізнайтесь до якого мікрорайону відноситься ваша вулиця, та за якою школою закріплено ваш будинок. Для цього зверніться до школи чи скористайтесь сайтом відділу освіти чи закладу.

Попередній запис дітей, які проживають на закріпленій за школою території здійснюється секретарем школи. 

Телефон для довідок: **(096) 095-04-11 (з 10:00 год. — 16:00 год.)**.

Запишіться на прийом до директора та віддайте всі необхідні документи для зарахування в школу.

Документи:
- заява батьків + паспорт;
- копія свідоцтва про народження дитини;
- оригінал медичної довідки;
- документ, що підтверджує місце проживання.

# II етап (01.06 – 14.06.2019) ПРАВО ВИБОРУ на вільні місця

Якщо ви бажаєте відвідувати школу закріплену не за вашою територією, то потрібно залишити заявку в цьому закладі та очікувати вільного місця.

Заявки до шкіл подають всі бажаючі з іншої території проживання чи іншого району, чи навіть іншого міста.

У разі, якщо кількість заяв перевищить кількість наявних вільних місць педагогічна рада школи самостійно прийматиме рішення яким чином здійснити відбір заяв.

Для зарахування дитини до 2-11 класу батькам чи особам, які їх замінюють, слід 
подати такі документи:

- заяву від батьків (осіб, що їх замінюють);
- копію свідоцтва про народження або паспорта (паспорт одного з батьків із зазначенням місця проживання);
- медичну картку;
- особова справа (виписка оцінок, якщо дитина переходить з іншого навчального закладу після початку навчального року);
- атестат про базову загальну середню освіту (при зарахуванні  до 10,11 класів).
 
Документи, необхідні при переведені учня з однієї школи в іншу:

- Заяву на ім'я директора школи;
- Особиста справа учня;
- Виписка поточних оцінок з усіх предметів, завірена печаткою школи (при перекладі протягом навчального року);
- Медична карта учня;
- Паспорт одного з батьків із зазначенням місця проживання.

Документи, необхідні при вступі в 10 клас учня, який закінчив 9 класів нашої школи:

- Заяву на ім'я директора школи;
- Атестат про закінчення 9 класів.

Документи, необхідні при вступі в 10 клас учня, який закінчив іншу школу:

- Заяву на ім'я директора школи;
- Атестат про закінчення 9 класів;
- Особова справа (або його копія, завірена директором школи);
- Медична карта;
- Паспорт одного з батьків.
`}</Md>
      <Grid columns="60% 1fr">
        <Cell>
          <Pdf src="https://mon.gov.ua/storage/app/media/news/%D0%9D%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8/2019/04/09/1-9-227.pdf" />
        </Cell>
        <Cell>
          <Md>{`
**Закон України "Про загальну середню освіту"**

*Стаття 18. Зарахування учнів*

1. Місцеві органи виконавчої влади або органи місцевого самоврядування закріплюють за закладами загальної середньої освіти відповідні території обслуговування і до початку навчального року обліковують учнів, які мають їх відвідувати.
1. **Зарахування учнів до закладу загальної середньої освіти проводиться наказом директора, що видається на підставі заяви, копії свідоцтва про народження дитини, за наявності медичної довідки встановленого зразка і відповідного документа про освіту (крім учнів першого класу).**
1. Зарахування учнів до ліцеїв, приватних закладів загальної середньої освіти і закладів спеціалізованої освіти дозволяється проводити на конкурсних засадах.

[Відповіді на напоширеніші питання](https://mon.gov.ua/ua/news/poryadok-zarahuvannya-u-1-j-klas-u-2018-roci-vidpovidi-na-najposhirenishi-zapitannya)
`}</Md>
        </Cell>
      </Grid>
    </>
  );
}
