/* eslint-disable no-useless-escape */
/* eslint-disable no-irregular-whitespace */

import Md from "components/md";
import Pdf from "components/pdf";
import Link from "components/link";
import { Tab, Tabs } from "components/tabs";

export default function DistanceLearning() {
  return (
    <Tabs>
      <Tab title="Карантин. Нормативна база">
        <Md>{`
1.  [Щодо організації дістанційного навчання під час карантину](https://drive.google.com/open?id=1OJ5lMUHVveQi3lfCmWCwqdigSoGFovNQ)
1.  [Щодо організації освітнього процесу в закладах середньої освіти під час карантину](https://drive.google.com/open?id=1ZWDPmnGw2D4j8MWHgtSvWu__l_5LaDnG)
1.  [Про посилення заходів безпеки щодо запобігання поширенню коронавірусу COVID-19 серед учасників освітнього процесу](https://drive.google.com/open?id=1vgncbyQQqmj_wBwv68y2eqotOSh0r2jh)
1.  [Про затвердження методичних рекомендацій щодо встановлення гнучкого режиму робочого часу](https://drive.google.com/open?id=1HOHg4VKCOyqkZ6WBT4Z878CJNu8o2EAl)
1.  [Про попередження виробничого травматизму, дотримання пожежної безпеки під час впровадження карантину](https://drive.google.com/open?id=1wF18E0ORFxjOuuLywWYW9nyzPZtP2Xy_)
1.  [Про припинення освітнього процесу у закладах освіти міста](https://drive.google.com/open?id=1VCZQqAVFZUrVVcEsuEITYK5PoPzcStwa)
1.  [Про організаційні заходи для запобігання поширенню коронаврусу COVID-19](https://drive.google.com/open?id=1934WxL6ORUPTVtnAq5LR39JXSDby9uq_)
1.  [КЗШ №55. Щодо підсумків проведення педагогічної ради в режимі он-лайн 05.05.2020](https://drive.google.com/open?id=1lnZyuw83arjcgVPYOcvhTMOtgol7a1V9)
1.  [КЗШ №55. Про внесення змін до наказу від 26.03.2020 № 80](https://drive.google.com/open?id=1WdM9hlwzAn0PbQSK6hjBOkolF8zpO8L5)
1.  [КЗШ №55. Про зміни до наказу від 12.03.2020 № 70 «Про припинення освітнього процесу у КЗШ № 55 КМР ДО»](https://drive.google.com/open?id=14ytFnV5WE1uhneCdCBOeap25PtfAfbDn)
1.  [КЗШ №55. Про зміни до наказу від 24.04.2020 № 93 «Про припинення освітнього процесу у КЗШ № 55 КМР ДО»](https://drive.google.com/open?id=1tjVvkXrHKYea3B36crwGNRg2ThKvu56k)
1.  [КЗШ №55. Про припинення освітнього процесу у КЗШ № 55 КМР ДО](https://drive.google.com/open?id=1ZvFdsbJlbDqmSBwJtIUk-cbLFxoZDin0)
1.  [КЗШ №55. Про посилення обмежувальних заходів щодо попередження коронавірусу COVID-19](https://drive.google.com/open?id=19umBcxvtDJzIq2oHf8QOHqowhHtQjD89)
1.  [КЗШ №55. Про організацію роботи у період карантину](https://drive.google.com/open?id=1Zt4emdrBndvi97EuQbsxMcpa6hQ-F0vA)
1.  [КЗШ №55. Про попередження виробничого травматизму, дотримання пожежної безпеки під час впровадження карантину](https://drive.google.com/open?id=1irhf0sCZ53aZxLRZNgigFba1xa4JS85x)
1.  [КЗШ №55. Про посилення обмежувальних заходів щодо попередження розповсюдження коронавірусу COVID – 19](https://drive.google.com/open?id=1EZ3Yb-kpKZYLfYGb2p48u6GTOeoyHIzC)
1.  [КЗШ №55. Про припинення освітнього процесу у КЗШ № 55 КМР ДО](https://drive.google.com/open?id=1nk_UyMHAUVHDpVSqhI_n3zfRGP3-WBF7)
1.  [КЗШ №55. Щодо організації освітнього процесу в закладі освіти під час карантину](https://drive.google.com/open?id=1P4sQSohSlPALa6_sUXeCeM_P302JA4Xc)
1.  [КЗШ №55. Щодо організації дистанційного навчання в освітньому закладі під час карантину](https://drive.google.com/open?id=16ff8k1lHQ-MKmHbyOv07o5cbyZaOa3FD)
1.  [Лист МОН України від 02.11.2020 №1/9-609 «Щодо організації дистанційного навчання»](https://drive.google.com/file/d/1ei69FDSF89YL5R2KP5bLrtJLVhR_-nLP/view?usp=sharing)
1.  [Положення про дистанційну форму здобуття повної загальної середньої освіти, затверджено наказом Міністерства освіти і науки України 08 вересня 2020 року №1115](https://drive.google.com/file/d/1SLtfII6MvdD4a4HW6LT0EbbwmFTw2H49/view?usp=sharing)
1.  [Лист МОН України №1/9-420 від 05.08.2020 "Про організацію роботи закладів загальної середньої освіти у 2020-2021 навчальному році"](https://drive.google.com/file/d/1mveToIsMmbbCMJqua-lxHCpAWTVi0_Yz/view?usp=sharing)
1.  [Лист МОН України №1/9-419 від 04.08.2020 "Щодо необхідності створення безпечних умов для організованого початку 2020-2021 навчального року"](https://drive.google.com/file/d/1YhU2uM4yKSmlNK3Cd_5yzw0mugp2_-Iz/view?usp=sharing)
1.  [Лист МОН України №1/9-406 від 29.07.2020 "Про підготовку закладів освіти до нового навч.року та опалювального сезону в умовах карантину"](https://drive.google.com/file/d/1TRH9iGDMxTknSX2ptYRJd6DJANPEi6EA/view?usp=sharing)
1.  [Деякі питання захисту дітей в умовах боротьби з наслідками гострої респіраторної хвороби COVID-19, спричиненої коронавірусом SARS-CoV-2 (Постанова КМУ 01.06.2020 №586)](https://drive.google.com/file/d/1LVkOHVXFNITVfURxOEm9cqCm6Pwy7hLB/view?usp=sharing)
1.  [КЗШ №55. Про організацію дистанційного навчання в освітньому закладі під час нокдауну з 11.01.2021р](https://drive.google.com/file/d/1uNy48stXlzjLSZktg9walyBT3w-BVm2E/view?usp=sharing)
1.  [Положення про дистанційне навчання](https://drive.google.com/file/d/1kZ93fjRC0NNuyqYM1XtbvCrm3UTHOcRr/view?usp=sharing)
1.  [КЗШ №55. Положення про дистанційну форму здобуття (повної)  загальної середньої освіти в КЗШ № 55 КМР ДО](https://drive.google.com/file/d/1_NYrMvjnVHFkAzyToO1oPkllvfq4mR2M/view?usp=sharing)
`}</Md>
      </Tab>
      <Tab title="1 клас">
        <Tabs>
          <Tab title="1 клас">
            <Md>{`
** Англійська мова **  
**04.12** [Тема: Школа](https://drive.google.com/file/d/1dVzlit8c58ztKuqNk70e7sNuMCzAQzqZ/view?usp=sharing)  
**11.01** [Тема: Я можу стрибати](https://drive.google.com/file/d/1BpN_3Xx64mdrL7dXNoi-XJmxhACiZSM9/view?usp=sharing)  
**13.01** [Тема: Я можу стрибати](https://drive.google.com/file/d/18mrFTChsBRXWs_rlI1xa6msZVvDZdebB/view?usp=sharing)  

** Музичне мистецтво **  
**08.12** [Тема: Казкові пригоди](https://drive.google.com/file/d/1MdrGUQErQR9z4-v2mhl98pkNzoyjjcTv/view?usp=sharing)  
**12.01** [Тема: Музика розповідає про людину](https://drive.google.com/file/d/1IDBGPlGC99GoOMpWx7NFZ-nsH4QRmR2H/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="1-А">
            <Md>{`
** Я досліджую світ **  
**03.12** [Тема: Вода та її властивості. Демонстрація властивостей води](https://drive.google.com/file/d/1koK1E1cpGKmCrjKFO1RHf4_HVJOPHgsO/view?usp=sharing)  
**04.12** [Тема: Властивості грунту](https://drive.google.com/file/d/1R4YdWalufPdylwvMLfy2LqOxv5eHkW8T/view?usp=sharing)  
**07.12** [Тема: Значення грунту для живоi природи](https://drive.google.com/file/d/1fgUN4HIFVeZ2t7ohdyHD2MQTEpaGvGk_/view?usp=sharing)  
**11.01** [Тема: Різноманітність рослин. Їх будова](https://drive.google.com/file/d/1kHLkzM1v4EWkM66jIAf06hNIviTqWQ3o/view?usp=sharing)  
**14.01** [Тема: Дерева, кущі, трав'янисті рослини. Листяні та хвойні рослини](https://drive.google.com/file/d/1m43GaJ8E_aM7IVdiIw1lxFO5EUg534mw/view?usp=sharing)  

** Математика **  
**03.12** [Тема: Переставний закон додавання](https://drive.google.com/file/d/1BLi2UtjK2pNwLTdsbZBZQpQnam1ixVsV/view?usp=sharing)  
**04.12** [Тема: Вимірювання довжини відрізків. Сантиметр](https://drive.google.com/file/d/1ybdLJpQ2ujp_B50mgaW0wNd3j-Ya3-jd/view?usp=sharing)  
**12.01** [Тема: Відкриваємо правило знаходження невідомого доданка](https://drive.google.com/file/d/1rKJ2AOVBSJuECbt_09Oq6-QoHNRotcsY/view?usp=sharing)  
**13.01** [Тема: Називаємо компоненти та результат дії віднімання](https://drive.google.com/file/d/1qOf5iXa7MsSFTWx79Tnr_ATlJnCMarh8/view?usp=sharing)  
**14.01** [Тема: Додаємо і віднімаємо числа. Обчислення значень виразів двома способами](https://drive.google.com/file/d/1lUk4ycfmRWhwlDHZAwiDlKFlaOWf94lk/view?usp=sharing)  

** Читання **  
**03.12** [Тема: Переглянути відео](https://drive.google.com/file/d/1D2aar6UzW4Tfu4bdRX5yZWNcV_PluYtf/view?usp=sharing)  
**11.01** [Тема: Ознайомлення з 2 частиною букваря. Закріплення звукових значень вивчених букв](https://drive.google.com/file/d/1M42xbopBlUqfoF7kDyyt2uig0oJKtekH/view?usp=sharing)  
**12.01** [Тема: Звуки г, г', позначення їх буквою ге](https://drive.google.com/file/d/1Tfgh0_GvPEilEJReJ2faBaWeZ8UHK36R/view?usp=sharing)  
**13.01** [Тема: Закріплення звукових значень букви г](https://drive.google.com/file/d/1XEqZIjINZblPsGOn5A5_RomiPOQHHuwW/view?usp=sharing)  
**14.01** [Тема: Читання Звук ґ, позначеня його буквою ґе](https://drive.google.com/file/d/1qH8vagA0iXgFMd8xEeJEg51Ko-sooPRQ/view?usp=sharing)  

** Англійська мова **  
**07.12** [Тема: Моя родина](https://drive.google.com/file/d/1tHi4PcA9O7IS2KKBnV2xnGPoD9KJ7ESr/view?usp=sharing)  

** Навчання грамоти **  
**04.12** [Тема: Звуки д, д’, позначення їх буквою «де». Практичне засвоєння дзвін-кої вимови звуків у кінці складів і слів. Словниково-логічні вправи](https://drive.google.com/file/d/1ZAOClYQ8HSOzVHbQ4qSlFuvsrc27sgkS/view?usp=sharing)  
**07.12** [Тема: Письмо великої букви Т («те»)](https://drive.google.com/file/d/18W00N1ReiIh331-RUeCaRTs0nlzzX2Gg/view?usp=sharing)  
**11.01** [Тема: Закріплення знань писати вивчені букви, слова і речення з ними](https://drive.google.com/file/d/1VwaqVEl9dT-ePiBA7Ng6bUPaKXT4kWCU/view?usp=sharing)  
**12.01** [Тема: Письмо малої букви г](https://drive.google.com/file/d/1OCs882gQeau-4rCbcHVvIIPpQva7zYiO/view?usp=sharing)  
**13.01** [Тема: Письмо великої букви Г](https://drive.google.com/file/d/1qneFmbWtfiHe-OUiMc7e9zs2hZ7f3Mcp/view?usp=sharing)  

** Фізична культура **  
**13.01** [Тема: Home Workout](https://drive.google.com/file/d/12zgnhoZ-Yxfez8Ih5vqLk-uVHlUvZcS8/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="1-Б">
            <Md>{`
** Математика **  
**03.12** [Тема: Досліджуємо таблиці додавання і віднімання числа 1](https://drive.google.com/file/d/1GMRjfOoX8kQHz1CnDqad7zKREO7hd8iM/view?usp=sharing)  
**04.12** [Тема: Переставна властивість додавання](https://drive.google.com/file/d/13-xyT94x5uFpIGxJcmwHee3b_0Y5-J1F/view?usp=sharing)  
**07.12** [Тема: Вимірюємо довжини відрізків](https://drive.google.com/file/d/1OV81adXAyqBvgktML8N-lac3hQK9xlCc/view?usp=sharing)  
**08.12** [Тема: Досліджуємо взаємозв’язок додавання і віднімання](https://drive.google.com/file/d/1v__wqM9AjuRO1SQlpZQC_2E377hLHblN/view?usp=sharing)  
**11.01** [Тема: Відкриваємо правило знаходження невідомого доданка](https://drive.google.com/file/d/1TXTvGC1zLdt6rbB0GeJbz6mjqsEvOQU2/view?usp=sharing)  
**12.01** [Тема: Називаємо компоненти та результат дії віднімання](https://drive.google.com/file/d/177l3cKYaBKwtQRuo92p_Wa0ALaEVSaKt/view?usp=sharing)  
**14.01** [Тема: Додаємо і віднімаємо числа](https://drive.google.com/file/d/11FZP6LeGetyPmQ8Xs_fCuKvDcSJhK8Vu/view?usp=sharing)  

** Письмо **  
**03.12** [Тема: Написання рядкової букви "т" (те), складів, слів з нею](https://drive.google.com/file/d/1gsIdnoi5dQYR7EUT3bzl3PpepuFbdQXk/view?usp=sharing)  
**07.12** [Тема: Написання великої букви т](https://drive.google.com/file/d/1uAGCYvyMSTRVlXw8drZ8RAerh1UesUdL/view?usp=sharing)  
**08.12** [Тема: Написання малої букви д, складів, слів і речень з вивченими буквами](https://drive.google.com/file/d/1Q1xk7FNj-EbjL_uWfY5gBlXKRTbAQGa4/view?usp=sharing)  
**12.01** [Тема: Удосконалення вміння писати вивчені букви слова і речення з ними](https://drive.google.com/file/d/1MmVege0nQVfVRoi73izO_UmLKvDSfjJG/view?usp=sharing)  
**13.01** [Тема: Письмо малої букви г. Підготовчі графічні вправи.  Написання складів, слів  із буквою г. списування речень, поданого друкованим шрифтом](https://drive.google.com/file/d/1f4gyJiwBHoQfm5LxVvqLWiWwN0UnkD8B/view?usp=sharing)  
**14.01** [Тема: Написання великої букви Г, складів, слів і речень з вивченими буквами](https://drive.google.com/file/d/1Dh6k8IrtPVoQiWWfu__hWBIV7VVbpaGY/view?usp=sharing)  

** Фізична культура **  
**03.12** [Тема: Постава як основа здоров’я. Танцювальеі кроки.](https://drive.google.com/file/d/1YmlLjjEr2r51vorkocbZ1-mCm6zB9eKs/view?usp=sharing)  
**07.12** [Тема: Зарядка](https://drive.google.com/file/d/1lMcr7-6BkyTXHrHSHyRy59NDZesMKr3j/view?usp=sharing)  
**14.01** [Тема: Загально-розвивальні вправи](https://drive.google.com/file/d/1crDAVt7RUgm4gZ41SaAnn0yDoCRqcvop/view?usp=sharing)  

** Читання **  
**04.12** [Тема: Велика буква т. Читання слів, речень і тексту з вивченими літерами](https://drive.google.com/file/d/1-j7zPCcPLUsNpLGKPI9Z91e5oTld9ob8/view?usp=sharing)  
**08.12** [Тема: Звуки [д], [д']. мала буква д. Читання складів, слів, речень і тексту з вивченими літерами](https://drive.google.com/file/d/1Kt1cTsouFGQBsrP_vPr9GJPx1B2SWC_m/view?usp=sharing)  
**11.01** [Тема: Читаю і розповідаю. Закріплення звукових значень вивчених букв. Читання складів, слів. Опрацювання тексту](https://drive.google.com/file/d/1Zb7pRHOpoOoEPtpGHAOk8OLZRXSUG4mY/view?usp=sharing)  
**12.01** [Тема: Читання слів, речень і тексту з вивченими літерами](https://drive.google.com/file/d/1R7_tJY5BTQBmpYJ-RiDYF_Ui_cQvZIbc/view?usp=sharing)  
**13.01** [Тема: Велика буква г. Читання слів, речень і тексту з вивченими літерами](https://drive.google.com/file/d/1jcTL3toDDq5XM-jaRDkHr_1pRc8TtVNU/view?usp=sharing)  

** Праця **  
**07.12** [Тема: Зимова мозаїка. «Сипле,сипле сніг…»](https://drive.google.com/file/d/1AERA7DfM5Lc708yBsknO2y1BMta2evIW/view?usp=sharing)  
**11.01** [Тема: Розумна сова. Робота з пластиліном. Виготовлення із пластиліну плоских зображень. Ліплення сови за зразком](https://drive.google.com/file/d/1gGmVSNx13vkIb_HuIgeGzgX226uj706_/view?usp=sharing)  
**13.01** [Тема: Мандри Країною Мистецтв. Цирк. Циркова афіша. Створення аплікації веселого циркового клоуна](https://drive.google.com/file/d/1vkFJEZU4JQNAwMC1H6mOrM9_nqpVGufL/view?usp=sharing)  

** Я досліджую світ **  
**08.12** [Тема: Властивості грунту](https://drive.google.com/file/d/1Xl5mQJ5IJvUtov2BDrAGZ1jhm2OaDm3k/view?usp=sharing)  
**12.01** [Тема: Рослини, їх будова. Практична робота. Вивчення будови рослин](https://drive.google.com/file/d/18egbgGekns05rX8eSDCzuhaDtm1EwdrU/view?usp=sharing)  
**13.01** [Тема: Дерева, кущі, трав'янисті рослини. Листяні і хвойні дерева](https://drive.google.com/file/d/1FdXdStUpRG_tzdYpxdJQuG95OJDJhJV3/view?usp=sharing)  
**14.01** [Тема: Дикорослі та культурні рослини](https://drive.google.com/file/d/1qRhS4_KR3lm8sIiJbZWJWldrTMa8BNVV/view?usp=sharing)  

** Фізична культура **  
**11.01** [Тема: Перегляд відео](https://drive.google.com/file/d/1B2Wpovo6YBxECDsKgjZmw8b9dJMWldZt/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="1-В">
            <Md>{`
** Мистецтво **  
**03.12** [Тема: Святкові перетворення. Малювання композиції «Сніговик».](https://drive.google.com/file/d/1rlUqnf0AgrfiqQwAQPdXXIJ3NZeyQoPc/view?usp=sharing)

** Фізична культура **  
**03.12** [Тема: Вправи для опанування навичок пересувань](https://drive.google.com/file/d/1tJ12GuU1ETqGGV3dHiag95-YTGcWnvkT/view?usp=sharing)

** Я досліджую світ **  
**03.12** [Тема: Досліджуємо властивості води](https://drive.google.com/file/d/1zSrcxlsg-qgp2oEBI4mKsxRWZ8TGzIxn/view?usp=sharing)  
**07.12** [Тема: Дослiджуeмо властивостi води](https://drive.google.com/file/d/1UrWSVX3VyelYCB-UF8EGO-bTU_Rul64_/view?usp=sharing)  
**08.12** [Тема: Досліджуємо властивості грунту](https://drive.google.com/file/d/13e_IReBjj1fOIHzMhxkc31fHh4vHjN6d/view?usp=sharing)  
**11.01** [Тема: Рiзноманiтнiсть рослин. Iх будова](https://drive.google.com/file/d/1J1qQW0jJz4cBuxr4VkoozbLMHI4ebtKU/view?usp=sharing)  
**12.01** [Тема: Дерева, кущі, трав’янисті рослини. Листяні та хвойні рослини](https://drive.google.com/file/d/1D4Zkqwwd1adIH7KFDOnjlGs3jrZlA6ag/view?usp=sharing)  

** Навчання грамоти **  
**04.12** [Тема: Закріплення звукових значень букви «те». Велика буква Т. Читання слів, речень. Опрацювання тексту](https://drive.google.com/file/d/19GvR-lVr91Ryt02ABFtcoQRKSqGXcuo8/view?usp=sharing)  
**04.12** [Тема: Письмо великої букви Т. Написання складів, слів і речень з вивченими буквами](https://drive.google.com/file/d/1GO6OKOq5Q-ETqifZcaFNu8TLR7z6Bw7s/view?usp=sharing)  
**07.12** [Тема: Звуки д, д', позначення їх буквою «де». Практичне засвоєння дзвінкої вимови звуків у кінці складів і слів. Зіставляння звуків д - т. Опрацювання тексту](https://drive.google.com/file/d/1RxmUi_xW24nxJfE5qOgPBgAKJ7Kizmg9/view?usp=sharing)  
**08.12** [Тема: Закріплення звукових значень букви де](https://drive.google.com/file/d/1mmJiAx8fCd7kRhS6DaUCp_5QRsKq43XV/view?usp=sharing)  
**08.12** [Тема: Письмо малої та великої букви д](https://drive.google.com/file/d/1nJEWRjum9A5-2Lhe-hSVImj-Foi9t3Z7/view?usp=sharing)  
**11.01** [Тема: Закрiплення вмiнь писати вивченi букви, слова i речення з ними](https://drive.google.com/file/d/1SVcIPcz0OxVrKzKvRCYcqA0dKn4qNYML/view?usp=sharing)  
**11.01** [Тема: Ознайомлення з 2 частиною Букваря](https://drive.google.com/file/d/1NWZhavvgqxFca4kiW6FrY8nLN16iwB4g/view?usp=sharing)  
**12.01** [Тема: Звук г, г, позначення їх буквою «ге». Звуковий аналіз слів](https://drive.google.com/file/d/1ECvvLzGt6oE8fUKF75du1J2om8n81PJY/view?usp=sharing)  
**12.01** [Тема: Письмо малої букви г. Підготовчі графічні вправи](https://drive.google.com/file/d/1762TI35B6JgKz1UvEeE1zBPI1GMjfNiL/view?usp=sharing)  
**13.01** [Тема: Закрiплення звукових значень букви ге. Дiалог. Читання в особах. Опрацювання тексту. На городi](https://drive.google.com/file/d/1zBPs1HD-bmz9M6BtjkD_CoTF1E5SmvsQ/view?usp=sharing)  
**13.01** [Тема: Письмо малої букви г. Пiдготовчi графiчнi вправи](https://drive.google.com/file/d/133vA4q6qCD28VvyDjdAjW6lvAPeIc5B1/view?usp=sharing)  

** Математика **  
**04.12** [Тема: Досліджуємо таблиці додавання і віднімання числа 1](https://drive.google.com/file/d/1ske1rUW84RPzp16ulCeQlJJ8dPDdYZWf/view?usp=sharing)  
**07.12** [Тема: Переставний закон додавання](https://drive.google.com/file/d/1lwGJmF1wsfl12PLsIcbSW7V3FiOXVp6H/view?usp=sharing)  
**08.12** [Тема: Вимірюємо довжини відрізків. Сантиметр](https://drive.google.com/file/d/1M3kSuDwFunXFfMLnOsbU92f1gCnZ9j8I/view?usp=sharing)  
**11.01** [Тема: Правило знаходження невiдомого доданка](https://drive.google.com/file/d/13t99T2jx1JNJWrjxUVAmtODJQ8CqrV22/view?usp=sharing)  
**12.01** [Тема: Називаємо компоненти та результат дії віднімання](https://drive.google.com/file/d/1MxNcjkRNg9anYsCL4EQhbrWLfHr0lC0-/view?usp=sharing)  
**13.01** [Тема: Додаeмо i вiднiмаeмо числа](https://drive.google.com/file/d/1x7XGgkrZ4WLgx8wmFvx-f8SVVN9DP2aQ/view?usp=sharing)  

** Фізична культура **  
**04.12** [Тема: Руханка](https://drive.google.com/file/d/1RkX4RdRjUCfWP_g6BVHXam7oKvMP7jS2/view?usp=sharing)  
**08.12** [Тема: Руханка](https://drive.google.com/file/d/1PPRQqUPMy3j6GrSJpCcIL7hNOF7C7cJ5/view?usp=sharing)  
**12.01** [Тема: Руханка](https://drive.google.com/file/d/1c6HC2tJuzr2pAdKSf5HJhx-1EfaBG0Lo/view?usp=sharing)  

** Англійська мова **  
**03.12** [Тема: Школа](https://drive.google.com/file/d/1ioY_Y8l-j2E4qXlL4MVnyRt9Z5ND_f4z/view?usp=sharing)  
**07.12** [Тема: Моя родина](https://drive.google.com/file/d/1tHi4PcA9O7IS2KKBnV2xnGPoD9KJ7ESr/view?usp=sharing)  
**14.01** [Тема: Я можу читати](https://drive.google.com/file/d/15FtlYh_MLY_vk6T369trmLK5p8jYw6cO/view?usp=sharing)  

** Дизайн і технології **  
**13.01** [Тема: Розумна сова](https://drive.google.com/file/d/19FWahGX0oRWdtGQ4MSksjVWrnhEIDgeu/view?usp=sharing)  
`}</Md>
          </Tab>
        </Tabs>
      </Tab>
      <Tab title="2 клас">
        <Tabs>
          <Tab title="2 клас">
            <Md>{`
** Інформатика **  
**07.12** [Тема: Об'єднання предметів у групи за певними заданими ознаками](https://drive.google.com/file/d/1hPMEftUxG-fvOsntosBqqromIb1i4J6E/view?usp=sharing)  

** Музичне мистецтво **  
**08.12** [Тема: Подорожі із маршем](https://drive.google.com/file/d/1tCfYmFlsRDZ5Mlz1JXjzM1K9QWUg3VVR/view?usp=sharing)  
**12.01** [Тема: Подорожі із маршем](https://drive.google.com/file/d/1LO3q12EXj-QD7eMxvLgvzG1xrOtFsiQ5/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="2-А">
            <Md>{`
** Українська мова **  
**03.12** [Тема: Ознайомлення з походженням деяких жіночих і чоловічих імен та прізвищ](https://drive.google.com/file/d/1cdMTQM2Iac_prYeaQwbhpST7qVUtsrm-/view?usp=sharing)  
**11.01** [Тема: Досліджую прикметники. Розпізнаю слова – назви ознак](https://drive.google.com/file/d/1Rbv2ekF_6ya8yEzY3rRdcSgQee9BvIH8/view?usp=sharing)  
**13.01** [Тема: Добираю прикметники](https://drive.google.com/file/d/1l1roeb8eJ0wws1f4iGfRe1xUM0vf6crT/view?usp=sharing)  
**14.01** [Тема: Утворюю прикметники](https://drive.google.com/file/d/1_IYYKV3vaRkXFxd2vKuFbLAGB5zizks1/view?usp=sharing)  

** Образотворче мистецтво **  
**03.12** [Тема: Витинанка як вид народних ремесел України. Створення декоративних образів.« Паперовий янгол»](https://drive.google.com/file/d/1AyUivaWXvXaVhOjzNywr4df9LnY1BqsK/view?usp=sharing)  
**14.01** [Тема: Малювання композиції «Зимова казка» у  художніх техніках](https://drive.google.com/file/d/1I8MUg8VNUDnbWgDj-JNQrc653tYZZx16/view?usp=sharing)  

** Фізична культура **  
**03.12** [Тема: Організовуючі вправи. Загальнорозвивальні вправи для формування правильної постави. Підтягування у висі тта увисі лежачи (хлопці). Танцювальні кроки. Рухлива гра](https://drive.google.com/file/d/1rKgpV07GqvgZd17tYjA0P9Ayeami6TO8/view?usp=sharing)  
**13.01** [Тема: Уроки фізичної культури онлайн](https://drive.google.com/file/d/1R3HLRRRi6cJ6UVSWUNP_boBIz8WcxfI6/view?usp=sharing)  

** Читання **  
**03.12** [Тема: Досліджуємо текст. Василь Чухліб «Зимова казка» Зачарувала все зима...](https://drive.google.com/file/d/1lO76PM1u99sp3Ey7vKjtOBd5_zP2NEEX/view?usp=sharing)  
**11.01** [Тема: Вступ до розділу. Тамара Коломієць «Як на білих сторінках». Платон Воронько «На кораблику»](https://drive.google.com/file/d/1Tz8osZM1vkY0oqLIqYWsbAJZWLN_lVU9/view?usp=sharing)  
**12.01** [Тема: Небилиці-небувалиці. Платон Воронько «Картина» (вірш-небилиця)](https://drive.google.com/file/d/1VAUHgR3aqoUxwyBsfbi0jTObf6wMj5gh/view?usp=sharing)  
**14.01** [Тема: Світ доброти Тамари Коломієць. Тамара Коломієць «Хиталочка-гойдалочка»](https://drive.google.com/file/d/1424-PoyqXgHc0GuCB9-ozj4sch8JJB-m/view?usp=sharing)  

** Я досліджую світ **  
**03.12** [Тема: Які ознаки в зими. Зимові місяці. Природа взимку](https://drive.google.com/file/d/11KQTK4SiuGeuN6_TPKJE_ZUvAUNohijr/view?usp=sharing)  
**12.01** [Тема: Як утворюється лід на водоймах](https://drive.google.com/file/d/1k7CY147uyNx8kolwpn4iQQEc2bmyqnf1/view?usp=sharing)  
**13.01** [Тема: Безпека взимку](https://drive.google.com/file/d/1zAWE1B6AprES8BjJHuORaGRiyDxnRTe2/view?usp=sharing)  
**14.01** [Тема: Хто такий споживач. Реклама. Корисна і шкідлива реклама. Як розповсюджується реклама? Створення реклами продукту, товару](https://drive.google.com/file/d/1nmCDJoBRf8sd2iUyeoa1vqp3WWeWBjlg/view?usp=sharing)  

** Англійська мова **  
**04.12** [Тема: Пори року](https://drive.google.com/file/d/1km6oHMaL5aPtsb5vpLoEVftKb8SYvoBa/view?usp=sharing)  
**04.12** [Тема: Seasons](https://drive.google.com/file/d/1N-iYLAIp11JvEbOFczQz4OV_YEv4nzvF/view?usp=sharing)  
**08.12** [Тема: Весна](https://drive.google.com/file/d/1zvxx9wn5s9iY8vppDTbAO9ZVhro086N4/view?usp=sharing)  
**12.01** [Тема: Годинник](https://drive.google.com/file/d/1awoIHmfcx6r2AbHV6es2XQixV0OKa2Ym/view?usp=sharing)  
**12.01** [Тема: My morning](https://drive.google.com/file/d/1bRleKAxJIWcETJwyNY6N5GWo-sp1gnR9/view?usp=sharing)  
**13.01** [Тема: Що я роблю зранку](https://drive.google.com/file/d/1-Wlmdc4V1mcnO3DtiS6H-0qaH8SHD53Y/view?usp=sharing)  
**13.01** [Тема: My morning](https://drive.google.com/file/d/1vpbyTwi6FC9IfW1Sasq_FZDKZLfMtt1g/view?usp=sharing)  

** Математика **  
**11.01** [Тема: Задачі і вирази на дії різного ступеня для засвоєння опрацьованих таблиць](https://drive.google.com/file/d/1VwNtfF7VLfGyvNSDziU_iCztBpKSa4aZ/view?usp=sharing)  
**12.01** [Тема: Коло і круг та їх елементи. Порівняння задач на множення  і додавання. Доповнення умов задач запитаннями](https://drive.google.com/file/d/1aXndEuFfl1p8usF-4-nZg72xvRUAc1MI/view?usp=sharing)  
**13.01** [Тема: Вправи і задачі на засвоєння опрацьованих таблиць](https://drive.google.com/file/d/108mV6_atz8cF7tYbBNTyQATe0wGjTevN/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="2-Б">
            <Md>{`
** Математика **  
**03.12** [Тема: Таблиця множення числа 2. Розв'язування задач на множення](https://drive.google.com/file/d/1Xn7bUU4tJuylgxedhpJCHq5iMu2Jpc6l/view?usp=sharing)  
**11.01** [Тема: Таблиця множення числа 3. Задачі на вивчені таблиці](https://drive.google.com/file/d/1DeVeA9-6utk7WjALrgxJ4ZNOcMAVDpOx/view?usp=sharing)  
**13.01** [Тема: Вправи і задачі на засвоєння таблиці множення числа 3](https://drive.google.com/file/d/1sBJdh3RmGVbwhkmOnYmU2Y_Rd_DZNPGl/view?usp=sharing)  
**14.01** [Тема: Вправи і задачі на засвоєння таблиць множення на 2 і 3](https://drive.google.com/file/d/1oJVEXCEoqAKIutDsMRdDs04-ww_ezoas/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Ставлю питання до назв предметів. Розпізнаю слова — назви предметів за питаннями хто? що?](https://drive.google.com/file/d/1x-mt1ERC1wF1vB7K6oGvzZ8HFU79x8MZ/view?usp=sharing)  
**11.01** [Тема: Досліджую прикметники. Розпізнаю слова – назви ознак](https://drive.google.com/file/d/1LeSCFzAqxiBoTuYpKa2b4KewOU6ni1jP/view?usp=sharing)  
**11.01** [Тема: Добираю прикметники](https://drive.google.com/file/d/1vHaygY39MZbkl421hxq3BxjmtcTLHrgi/view?usp=sharing)  
**14.01** [Тема: Утворюю прикметники. Складання речень](https://drive.google.com/file/d/1jUj-Zan45G7RYmwXgER99CjJw5GBaKrc/view?usp=sharing)  

** Читання **  
**03.12** [Тема: Щастя. М. Морозенко «Мій тато повернувся із війни»](https://drive.google.com/file/d/1IohkwNNl7ln_Lo29wlZgDCzqGnIG84Iy/view?usp=sharing)  
**11.01** [Тема: Вступ до розділу «Світ дитинства у творах українських письменників». Вірші. П. Воронько «На кораблику», «Картина»](https://drive.google.com/file/d/1Cxg6dRQ7srujJrcDllsszz6RZF_gYiRF/view?usp=sharing)  
**13.01** [Тема: Ознайомлення з життям і творчістю  Тамари Коломієць. Т. Коломієць «Хиталочка-гойдалочка», «Біле поле полотняне..»](https://drive.google.com/file/d/1MPInbt3fQLQqJ58EDK1DTcsHD4Bs33vs/view?usp=sharing)  
**14.01** [Тема: Ознайомлення з життям і творчістю Ліни Костенко. Л. Костенко «Пряля», «Польові дзвіночки». Прислів'я](https://drive.google.com/file/d/1NJrLIS7KKM4rjJIrPFVrkpEp6UfWMqoK/view?usp=sharing)  

** Я досліджую світ **  
**03.12** [Тема: Які ознаки в зими. Зимові місяці. Дослідження сніжинок](https://drive.google.com/file/d/1iwAU41FzR28Lcm4x5twjg4NwG-tufv1g/view?usp=sharing)  
**12.01** [Тема: Як утворюється лід на водоймах. Дослідження властивостей льоду](https://drive.google.com/file/d/1gRQEGcS5X-DJClQp2KqTBnk4jWfZ60MU/view?usp=sharing)  
**13.01** [Тема: Правила безпечної поведінки взимку. Створення малюнку – плаката «Зимові застереження»](https://drive.google.com/file/d/1xo2XWck7_Y1V7Ni2l9RsKjjpINnzMnt9/view?usp=sharing)  
**14.01** [Тема: Хто такий споживач](https://drive.google.com/file/d/1ADmhjMrM7-fNC1805vLiEBiNKg9ZCbDN/view?usp=sharing)  

** Образотворче мистецтво **  
**13.01** [Тема: Чарівні дерева](https://drive.google.com/file/d/1Z7wrkKXFdjqb0_uRZVY4BqOopNlNk1OD/view?usp=sharing)  

** Англійська мова **  
**13.01** [Тема: My morning](https://drive.google.com/file/d/1vpbyTwi6FC9IfW1Sasq_FZDKZLfMtt1g/view?usp=sharing)  

`}</Md>
          </Tab>
        </Tabs>
      </Tab>
      <Tab title="3 клас">
        <Tabs>
          <Tab title="3 клас">
            <Md>{`
** Музичне мистецтво **  
**03.12** [Тема: Найдорожча у світі](https://drive.google.com/file/d/1i1gUjCiN0vKPL8XrNsCkVmbBWdbUVxog/view?usp=sharing)
**14.01** [Тема: Динамічний та темповий розвиток музики](https://drive.google.com/file/d/1hRmyRD4pelKdlBecjJN1BnWyLFTD3oLk/view?usp=sharing)  

** Англійська мова **  
**04.12** [Тема: Контроль читання](https://drive.google.com/file/d/1BWaOtRFsi4XEkt7bSQcm16ChwMRt0qs1/view?usp=sharing)  
**13.01** [Тема: Мій дім](https://drive.google.com/file/d/1Ci7BcvbSEmri48cHad4FkDtVvwrQkcgB/view?usp=sharing)  

** Математика **  
**08.12** [Тема: Порівняння способів додавання круглих трицифрових чисел](https://drive.google.com/file/d/1llI5Tp_nB7ogU7BPV0qtPGootAEvYHsu/view?usp=sharing)  

** Фізична культура **  
**08.12** [Тема: Вправи з великим м'ячем (елементи баскетболу)](https://drive.google.com/file/d/1oZVaXtm8nClPDCbJ1AsjSdLWt-eN31qK/view?usp=sharing)  

** Інформатика **  
**08.12** [Тема: Середовище програмування для дітей](https://drive.google.com/file/d/1uWRppF2xxQ-fRm8eOpPrtzKZjXKt3q5k/view?usp=sharing)  
**12.01** [Тема: Ключові слова для пошуку](https://drive.google.com/file/d/1QlGE5KvyZa31pzE4sfqWeFZfbYDxUTQE/view?usp=drive_web)  
`}</Md>
          </Tab>
          <Tab title="3-А">
            <Md>{`
** Математика **  
**03.12** [Тема: Усне додавання трицифрових круглих чисел. Розв’язування ускладнених задач на четверте пропорційне (№589-599)](https://drive.google.com/file/d/1GS3V8-DSXnKSJ1V4G9jYQnCU4fN5ZYiQ/view?usp=sharing)  
**04.12** [Тема: Віднімання круглих чисел двома способами. Розв'язування задач та рівнянь (№600 – 610)](https://drive.google.com/file/d/14PN0awBuaJNbs9B1_0tfjzE0SX992XCy/view?usp=sharing)  
**07.12** [Тема: Додавання та віднімання круглих чиселу межах 1000](https://drive.google.com/file/d/1tJ6-V7Y8Ebx8TLaYjd_3JMDt9gxmp9UF/view?usp=sharing)  
**11.01** [Тема: Додавання та вiднiмання трицифрових чисел](https://drive.google.com/file/d/1h0Y6jxmWCCyUvcoEgOxFrg-_AuV000SP/view?usp=sharing)  
**12.01** [Тема: Письмове додавання двоцифрових чисел. (№12 - 21)](https://drive.google.com/file/d/1acH9xHtZwZ85oRV5h1q5Lg7D4yR05SVX/view?usp=sharing)  
**13.01** [Тема: Письмове додавання двоцифрових чисел](https://drive.google.com/file/d/1e77y9Yi7n24DU_v0aoDEF2wLU8KGMuop/view?usp=sharing)  
**13.01** [Презентація. Тема: Письмове додавання двоцифрових чисел](https://drive.google.com/file/d/1Dn2U_8NcxOh-nGslmJ3CVUSMZJ4p7gC0/view?usp=sharing)  
**14.01** [Тема: Письмове додавання трицифрових чисел](https://drive.google.com/file/d/192x6CIG08q6a__3sqzc0GRcXXu9rnAKv/view?usp=sharing)  
**14.01** [Презентація. Тема: Письмове додавання трицифрових чисел](https://drive.google.com/file/d/1Nih_Rm9c8ANIX1AI9tf1j-P16sQpu5jh/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Визначаю будову слова. Написання тексту про свої вподобання (с. 67 – 68)](https://drive.google.com/file/d/1CbxkNJHRP-O8TfHLE4mA0__Mu-56Ovd3/view?usp=sharing)  
**04.12** [Тема: Розбираю слова за будовою. Написання розгорнутої відповіді на запитання (с.69-70)](https://drive.google.com/file/d/16_6Ij1Yc7d1SGifm2jkPij2prkgHWPoQ/view?usp=sharing)  
**13.01** [Тема: Власні і загальні назви](https://drive.google.com/file/d/1LsFG2UyWn_yMVmtq4-TU1E5ATvdSSvEQ/view?usp=drive_web)  
**13.01** [Тема: Назви істот, неістот](https://drive.google.com/file/d/1y8gWgHhxirlZ-vYV0TVOsH6n-bBjML1k/view?usp=sharing)  
**14.01** [Тема: Власні і загальні назви](https://drive.google.com/file/d/1TOxVV0MkrKphWBwUsWNzD_Ac7CGvW3gU/view?usp=drive_web)  
**14.01** [Тема: Власні і загальні іменники](https://drive.google.com/file/d/1VptiTesOLhtBzEJVVLOxPKMiqieU2lTn/view?usp=sharing)  

** Я досліджую світ **  
**03.12** [Тема: Різноманітність культурних рослин. Значення рослин. (ст.139 – 141)](https://drive.google.com/file/d/1ObgOvkNELCuD7z2EJDMIhYqQQ8LbObDi/view?usp=sharing)  
**07.12** [Тема: Яке значення грибів для природи](https://drive.google.com/file/d/19X379rXlpztRdWndiGDOrJdgXY1dF28F/view?usp=sharing)  
**13.01** [Тема: Яка роль шкіри в організмі людини](https://drive.google.com/file/d/1o8OmbWDD6WpVk_jSiaiqMTa9Cz_Cjst2/view?usp=sharing)  

** Англійська мова **  
**04.12** [Тема: День мого друга](https://drive.google.com/file/d/1yU9sYPWGtUCczw7fgugLg-4SLhC0rBqE/view?usp=sharing)  
**08.12** [Тема: Мiй день у школi i вдома](https://drive.google.com/file/d/1gDuh6H768mH1RgxTd43dAYDGuvXS-5FU/view?usp=sharing)  
**12.01** [Тема: Мандрівка у великий будинок](https://drive.google.com/file/d/1u1lv25RXL2fDVIZTj_8D1_8vw6MeN0-J/view?usp=sharing)  
**12.01** [Тема: Мандрівка у великому домі](https://drive.google.com/file/d/1FJhkoBkr1Wo96Sm9cEtAcpfCGZLy2xNz/view?usp=sharing)  
**13.01** [І підгрупа. Тема: Що знаходиться всередині будинку](https://drive.google.com/file/d/1a_xhvqRrMsLjNRzElbRQjQOerc2ERGuM/view?usp=sharing)  
**13.01** [ІІ підгрупа. Тема: Що знаходиться всередині будинку](https://drive.google.com/file/d/1Tq_XsrByQbEfL3_gYf1aAfikeVvbLNqa/view?usp=sharing)  

** Літературне читання **  
**04.12** [Тема: Різдвяне чудо. Найкращий песик на світі. Досліджуємо текст. М.Морозенко "Руде цуценятко і різдвяний ангел" (продовження). Словесне малювання епізоду казки. Придумування продовження казки (с.72-74)](https://drive.google.com/file/d/1P9PYRpe3MujbYrASGAAjP1QHwFm3ZpU7/view?usp=sharing)  
**07.12** [Тема: Робота з дитячою книжкою. Григорій Фалькович Щедрий комар](https://drive.google.com/file/d/1FlnlvXHTd676ksklKfJcIybvINZ-VVAI/view?usp=sharing)  
**08.12** [Тема: Святкові запахи. Робота з картиною художниці Світлани Косенко "Святвечір". Як "прочитати" картину? Настрій. Кольори. Композиція. Розповідь про враження від побаченого. (с.75)](https://drive.google.com/file/d/1v9rZGVdqcx8QjOlkHnz_aq6TO4BEDrOs/view?usp=sharing)  
**11.01** [Тема: Робота з рiзними джерелами iнформацii](https://drive.google.com/file/d/15MB--TNyROHh7Nyt4cHBIHHl38mK9F6Y/view?usp=sharing)  
**12.01** [Тема: Як не любить свій край](https://drive.google.com/file/d/1fyvy3vyBDoh0-mQM2gF4SIGEag3_AY8t/view?usp=sharing)  
**14.01** [Тема: Вірші вихованців Павлиської школи. Д. Телкова «Героям». М. Малолітко «Воїнові, який захищає Вітчизну»](https://drive.google.com/file/d/1KcAOfGQO32LdRrc4E7Dtmp37uh3JymRn/view?usp=sharing)  

** Фізична культура **  
**04.12** [Тема: Загально-розвивальні вправи](https://drive.google.com/file/d/1JgQ4VPp15hH2Rg_XeTkgB2WMHAKD-_Je/view?usp=sharing)  
**11.01** [Тема: Бесiда "Режим дня". Правила рухливих вправ](https://drive.google.com/file/d/1dpXjU3C0zkfVkRpK7S3EQksti2P-sVKV/view?usp=sharing)  

** Я досліджую світ **  
**11.01** [Тема: Яку будову маe наше тiло.](https://drive.google.com/file/d/1D0TeQq-w0Ea1azUtzFCuxxrCqubx3ran/view?usp=sharing)  
**14.01** [Тема: Надання першої домедичної допомоги собі та іншим при незначних ушкодження шкіри](https://drive.google.com/file/d/1PvEpPjngAk-yOJt0A1P6aVHJE56A_vcE/view?usp=sharing)  
**14.01** [Презентація. Тема: Надання першої домедичної допомоги собі та іншим при незначних ушкодження шкіри](https://drive.google.com/file/d/1DuJBLzPrEz1Tk4B3gwe-QugcZhB8aqfb/view?usp=sharing)  

** Образотворче мистецтво **  
**11.01** [Тема: Композицiя "Полiт Карлсона над мiстом"](https://drive.google.com/file/d/1dhQA_ZrWUo6aZiE1XqG-YzOCjyXhezeo/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="3-Б">
            <Md>{`
** Я досліджую світ **  
**03.12** [Тема: Різноманітність культурних рослин. Значення рослин. (ст.139 – 141)](https://drive.google.com/file/d/1aMckvGtRntg_f6p15jt_-ws3qUiS-4DC/view?usp=sharing)  
**07.12** [Тема: Значення грибів для природи](https://drive.google.com/file/d/1Z87OcfgT8kpP-vnBcQgqIdGmF5Q3yotj/view?usp=sharing)  
**11.01** [Тема: Яку будову маe наше тiло](https://drive.google.com/file/d/1IK6Sfs52ilvhYjSJ259JRnlNvGMARzsr/view?usp=sharing)  
**13.01** [Тема: Яка роль шкіри в організмі людини](https://drive.google.com/file/d/1BAanqDO3-hFhvdH9p5qrRc5gVE3HNNZl/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Визначаю будову слова. Написання тексту про свої вподобання (с. 67 – 68)](https://drive.google.com/file/d/1xXi1QIpOVQ295yrr8H3iHctB9Z8m8Wsv/view?usp=sharing)  
**04.12** [Тема: Розбираю слова за будовою. Написання розгорнутої відповіді на запитання (с.69-70)](https://drive.google.com/file/d/16_6Ij1Yc7d1SGifm2jkPij2prkgHWPoQ/view?usp=sharing)  
**13.01** [Тема: Назви істот, неістот](https://drive.google.com/file/d/1uEJCwjDuA7r9rHIpg2qXO6G7PHJJRHAp/view?usp=sharing)  

** Математика **  
**03.12** [Тема: Усне додавання трицифрових круглих чисел. Розв’язування ускладнених задач на четверте пропорційне (№589-599)](https://drive.google.com/file/d/1xsCI0XQlmD11tPhs-8qVLr2WRYYXOtIv/view?usp=sharing)  
**04.12** [Тема: Віднімання круглих чисел двома способами. Розв'язування задач та рівнянь (№600 – 610)](https://drive.google.com/file/d/14PN0awBuaJNbs9B1_0tfjzE0SX992XCy/view?usp=sharing)  
**07.12** [Тема: Додавання та віднімання круглих чисел у межах 1000. Розв’язування задач з буквеними даними](https://drive.google.com/file/d/1rS172j5TrnzlRRiyFYcC9yx78z0KrIBy/view?usp=sharing)  
**11.01** [Тема: Додавання та вiднiмання трицифрових чисел](https://drive.google.com/file/d/1Cs6HRVm1qZQf8mcrJFNYXBwqeQjIBMKu/view?usp=sharing)  
**12.01** [Тема: Письмове додавання двоцифрових чисел. (№12 - 21)](https://drive.google.com/file/d/1IxvI05Io3QIfhPhtAVbsxFPjGh9qJWwO/view?usp=sharing)  
**13.01** [Тема: Письмове додавання двоцифрових чисел](https://drive.google.com/file/d/1qz_aJQ76kexZE9T6hCnjBRRa18J2JnYS/view?usp=sharing)  
**13.01** [Презентація. Тема: Письмове додавання двоцифрових чисел](https://drive.google.com/file/d/1ZWTleK37hyC2uI-pAh8MXerOcZi08AWN/view?usp=sharing)  

** Фізична культура **  
**04.12** [Тема: Загально-розвивальні вправи](https://drive.google.com/file/d/1JgQ4VPp15hH2Rg_XeTkgB2WMHAKD-_Je/view?usp=sharing)  
**11.01** [Тема: Бесiда "Режим дня". Правила рухливих вправ.](https://drive.google.com/file/d/18kxrIqQ2I0Q5VxtDf3KnNoA_kGn7MGVf/view?usp=sharing)  

** Літературне читання **  
**04.12** [Тема: Різдвяне чудо. Найкращий песик на світі. Досліджуємо текст. М.Морозенко "Руде цуценятко і різдвяний ангел" (продовження). Словесне малювання епізоду казки. Придумування продовження казки (с.72-74)](https://drive.google.com/file/d/1P9PYRpe3MujbYrASGAAjP1QHwFm3ZpU7/view?usp=sharing)  
**07.12** [Тема: Різдвяне чудо. Найкращий песик на світі. Досліджуємо текст. М.Морозенко "Руде цуценятко і різдвяний ангел" (продовження)](https://drive.google.com/file/d/1bPvztu-Na0eZkYCKqXfPHqowqZ_5Vj8e/view?usp=sharing)  
**08.12** [Тема: Робота з дитячою книжкою. Григорій Фалькович Щедрий комар](https://drive.google.com/file/d/12XfDi8NrKlTWoyvenOm9zGeNjAIZy4Mr/view?usp=sharing)  
**11.01** [Тема: Робота з рiзними джерелами iнформацiї](https://drive.google.com/file/d/1995wPMnPsYhmPVIA0JaBYNlH4yFLhkwJ/view?usp=sharing)  
**12.01** [Тема: Як не любить свій край](https://drive.google.com/file/d/1fJTtljffcbD6o8M6q8Pa2AagteO25NG_/view?usp=sharing)  

** Англійська мова **  
**11.01** [Тема: Мандрівка у великий будинок](https://drive.google.com/file/d/1mDmTRC20f27VBAhPwomQs6pzHS9MPezV/view?usp=sharing)  
**13.01** [І підгрупа. Тема: Що знаходиться всередині будинку](https://drive.google.com/file/d/1a_xhvqRrMsLjNRzElbRQjQOerc2ERGuM/view?usp=sharing)  
`}</Md>
          </Tab>
        </Tabs>
      </Tab>
      <Tab title="4 клас">
        <Tabs>
          <Tab title="4 клас">
            <Md>{`
** Музичне мистецтво **  
**03.12** [Тема: «Мистецтво крізь віки»](https://drive.google.com/file/d/1YubWV5rzabVC6jdwvG8rPKUiyjm-OUkj/view?usp=sharing)  
**14.01** [Тема: Крокуємо з піснями рідного краю](https://drive.google.com/file/d/11K_FCj2isa46YdR7TcD1-ky6MDWKbkzo/view?usp=sharing)  

** Англійська мова **  
**03.12** [Тема: Покупки](https://drive.google.com/file/d/1lhOUMYkO4FOvR9kvfydfM19Z81zXLVs1/view?usp=sharing)  
**08.12** [Тема: Новий Рік](https://drive.google.com/file/d/1-ldhQ9GyILrJ4HyNQL74GXcXklK6a7-J/view?usp=sharing)  

** Літературне читання **  
**11.01** [Горевич Л. В. Тема: Вступ до розділу. Т.Шевченко. Про себе](https://drive.google.com/file/d/18gp7SS7XMB2mTTqtUg6lb_B440vyruDz/view?usp=sharing)  
**12.01** [Горевич Л. В. Тема: Т. Шевченко. Вітер віє-повіває](https://drive.google.com/file/d/1ASZjzysh6riXA87oo98MFpGX_5OexTsb/view?usp=sharing)  
**13.01** [Горевич Л. В. Тема: Т.Шевченко. Реве та стогне Дніпр широкий](https://drive.google.com/file/d/1f0uqai6p7R-AvwZ0oad36TCocKStAgdN/view?usp=sharing)  

** Образотворче мистецтво **  
**12.01** [Горевич Л. В. Тема: Невідома планета](https://drive.google.com/file/d/1eEBEMuWkGd9yEa6BiHlvDiag95QBekMp/view?usp=sharing)  

** Інформатика **  
**13.01** [Тема: Електронна пошта](https://drive.google.com/file/d/1KyFCawBMzLggZl_i87HzBarHmFnhAAoK/view?usp=drive_web)  
`}</Md>
          </Tab>
          <Tab title="4-А">
            <Md>{`
** Математика **  
**03.12** [Презентація](https://drive.google.com/file/d/1BKMnkoHMcau09nXlsOo9ppuFX_jwqs7R/view?usp=sharing)  
**04.12** [Тема: Додавання і віднімання іменованих чисел. Розв'язування задач](https://drive.google.com/file/d/1bbD5QaCFp7DONB11hI3Jb2U2ZNXcgxZQ/view?usp=sharing)  
**07.12** [Тема: Дії з іменованими числами. Розв'язування задач на визначення тривалості подій](https://drive.google.com/file/d/1TFFSmhXaVHLoDKMVwoFgXuUMKMzIu1mW/view?usp=sharing)  
**11.01** [Тема: Множення у випадку кількох нулів у першому множнику. Розв'язування задач із двома буквеними даними](https://drive.google.com/file/d/1E3LB2O5ubudymM9Bralf90JOfgUx2buE/view?usp=sharing)  
**13.01** [Тема: Множення багатоцифрових чисел, що закінчуються нуля¬ми. Задачі на спільну роботу](https://drive.google.com/file/d/15BIHK6LSAdUn1Owwvp1-8lIvuxpQAPp-/view?usp=sharing)  
**14.01** [Тема: Множення одноцифрових чисел на багатоцифрові. Знахо¬дження значень виразів на сумісні дії різного ступеня. Задачі на спільну роботу](https://drive.google.com/file/d/1zWYT1UP6Bdd9E2jNqQBOiOjnB-4LB3Ar/view?usp=sharing)  

** Основи здоров’я **  
**03.12** [Тема: Профілактика порушень зору, слуху, опорно-рухового апарату у школярів. Вправи для профілактики плоскостопості](https://drive.google.com/file/d/1qcNOK9BdFA-j7Fyo2JrNI_GEvJJfZ-46/view?usp=sharing)
**14.01** [Тема: Звички і здоров'я. Практична робота виконання проєкту з формування корисної звички](https://drive.google.com/file/d/1xEd-tGuSGbtz4h8z3_0ZxZRI4Iy5hmoQ/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Спостереження за вживанням прикметників у текстах різних стилів: науковому і художньому](https://drive.google.com/file/d/1zxmnnFCg8sk7b3GKFYGAdGdevlCnU8Ph/view?usp=sharing)  
**04.12** [Тема: Змінювання прикметників за родами та числами у сполученні з іменниками. Родові закінчення прикметників](https://drive.google.com/file/d/1HylTHma9uCpPG01X7M4w3scD7l2NZg1v/view?usp=sharing)  
**07.12** [Тема: Вiдмiнювання прикметникiв у сполученнi з iменниками в однинi та множинi](https://drive.google.com/file/d/1ikqCNKAa13tzSpHz2mHTK32XN_cRgUcA/view?usp=sharing)  
**08.12** [Тема: Зіставлення закінчень прикметників з основою на твердий та м’який приголосний в однині і множині](https://drive.google.com/file/d/1cVNaVJgTH328DxQd2XE-6f03MqZZ1OHm/view?usp=sharing)  
**11.01** [Тема: Закріплення знань про правопис прикметників у множині](https://drive.google.com/file/d/11h-wGePdXFhvZHdp8oNjT1preTJAPl-l/view?usp=sharing)  
**12.01** [Тема: Побудова сполучень слів і речень із прикметниками, уведення їх у текст](https://drive.google.com/file/d/14o18tm2HqXl1qf9ffXA458-RGfKYdZLT/view?usp=sharing)  
**14.01** [Тема: Закріплення вивченого про прикметник](https://drive.google.com/file/d/1ptbzNmJ-eUTbkfiII5PmjWEIJqR9BisR/view?usp=sharing)  
**14.01** [І підгрупа. Тема: Закріплення вивченого про прикметник](https://drive.google.com/file/d/1HZIO56ibMKJZKxOVpu7m5X6xbsJqtRkS/view?usp=sharing)  

** Фізична культура **  
**04.12** [Завдання](https://drive.google.com/file/d/13py1-ZctKCGOs4nnf8wgTevIB_Fvh90v/view?usp=sharing)  
**11.01** [Тема: Підготовчі вправи](https://drive.google.com/file/d/1uFyQO3IgVCvKHzi8oubTdQul_2H2ugKE/view?usp=sharing)  
**12.01** [Тема: Руханка](https://drive.google.com/file/d/1Q3TKRNkP8pvx1Iw51N1sCrpdo5A6CvLF/view?usp=sharing)  

** Я у світі **  
**04.12** [Тема: Культура поведінки учня](https://drive.google.com/file/d/1VflWdiAssdcz5PqI46YjcYwF-ewod2FQ/view?usp=sharing)  

** Літературне читання **  
**07.12** [Тема: Марко Вовчок «Літній ранок», Михайло Коцюбинський «Літній день»](https://drive.google.com/file/d/1Hcug_znkMSO2DtbPp1V1SVFXCAeuL6PJ/view?usp=sharing)  
**08.12** [Тема: Г. Тютюнник Ласочка](https://drive.google.com/file/d/1Gq1aM952H2hFwxYpQWESf9wuZVwo-v3I/view?usp=sharing)  
**11.01** [Тема: Вступ до розділу. Т. Шевченко «Про себе»](https://drive.google.com/file/d/14SItJIPS8y-xNf5CrlzGGycZwhEQPBjR/view?usp=sharing)  
**12.01** [Тема: Вітер віє-повіває» Т. Шевченко «Вітер з гаєм розмовляє»](https://drive.google.com/file/d/1xwYMgR8EI1TGQ_di1Z4eYcc4Hp6JrmEv/view?usp=sharing)  
**13.01** [Тема: Т. Шевченко «Реве та стогне Дніпр широкий»](https://drive.google.com/file/d/1jdBuZZhKcYhJqVXI2F2OqNQV_tGwlUx0/view?usp=sharing)  

** Природознавство **  
**08.12** [Тема: Рослинний та тваринний світ Євразії](https://drive.google.com/file/d/12dq2cy7xWbmzcqgIBieKcuquvoJs3jDe/view?usp=sharing)  
**12.01** [Тема: Особливості природи Північної Америки](https://drive.google.com/file/d/1G94Zq0SGjxwYDH0TmQi2CU7RCPxgB0mM/view?usp=sharing)  
**13.01** [Тема: Рослинний і тваринний світ Північної Америки](https://drive.google.com/file/d/1ZPoiXNeJFJrgwkP02wzEBLjzjeGKXKzr/view?usp=sharing)  

** Трудове навчання **  
**11.01** [Тема: Поглиблення знань про аплікацію. Послідовність виготовлення об’ємної аплікації на тканині з використанням ґудзиків, леліток та бісеру](https://drive.google.com/file/d/1q_ewBpSabhe2sThmRxF7JLvWEzjL_RAd/view?usp=sharing)  

** Англійська мова **  
**11.01** [Тема: Закріплення знань про правопис прикметників у множині](https://drive.google.com/file/d/14qbPNoQu9_vL5B8d9KpV6EnGGNuWFx1o/view?usp=sharing)  
**12.01** [Тема: Моя улюблена пора року](https://drive.google.com/file/d/1PDsqIBOFsVc7KKQH2w1znaOqBAhOa3HH/view?usp=sharing)  
**12.01** [Тема: Улюблена пора року](https://drive.google.com/file/d/13wF_z37_jA6pDq5U6QmdB-mvuMSjxZ7I/view?usp=sharing)  
**14.01** [Тема: Погода учора](https://drive.google.com/file/d/1izpL-TiXEgFA2fkYzNC5GAdFng5tYXBj/view?usp=sharing)  
**14.01** [І підгрупа. Тема: Погода учора](https://drive.google.com/file/d/1OcLRtbZuRZBWhMeWwFGTWOwLCWN0BzO8/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="4-Б">
            <Md>{`
** Математика **  
**03.12** [Тема: Круглі числа.Складання виразів за задачами з буквеними даними.Периметр прямокутної ділянки.](https://drive.google.com/file/d/1z_JEo9XL_hgqyII0JYc9G2B0n2ui4m9z/view?usp=sharing)  
**04.12** [Тема: Додавання і віднімання іменованих чисел. Розв'язування задач](https://drive.google.com/file/d/1p6NmCkJs7I06ZFszWV09CTa43lTQjayZ/view?usp=sharing)  
**08.12** [Тема: Дії з іменованими числами. Розв'язування задач на визначення тривалості подій](https://drive.google.com/file/d/1mAA0ZPexYqipo6qwLHmKryPYK9ENwrhq/view?usp=sharing)  
**11.01** [Тема: Множення у випадку кількох нулів у першому множнику. Розв'язування задач із двома буквеними даними](https://drive.google.com/file/d/1Ndk9K6TbYfUcRk8DXsKY_26okR5-T9qx/view?usp=sharing)  
**13.01** [Тема: Множення багатоцифрових чисел, що закінчуються нулями. Задачі на спільну роботу](https://drive.google.com/file/d/10kc67ej04CgihVsMUF8hxTqekjxFW5mP/view?usp=sharing)  
**14.01** [Тема: Множення одноцифрових чисел на багатоцифрові. Знахо¬дження значень виразів на сумісні дії різного ступеня. Задачі на спільну роботу](https://drive.google.com/file/d/1hcNuZJsrJ9Q5HT2qzadWW3ShO3UyTI17/view?usp=sharing)  

** Природознавство **  
**03.12** [Тема: Рослинний і тваринний світ Євразії](https://drive.google.com/file/d/19B5F0TdlKF4LUvAQpcxKbDVSHyyTeqsP/view?usp=sharing)  
**08.12** [Тема: Найбільші країни Євразії. Діяльність людей і охорона природи](https://drive.google.com/file/d/1-ZbQm2ELGZLCuiCAegkDazL-kYFKc3FL/view?usp=sharing)  
**12.01** [Тема: Особливості природи Північної Америки](https://drive.google.com/file/d/1eA4jM4nlw23Fdoq3S26XnI1TMMbST8gJ/view?usp=sharing)  
**14.01** [Тема: Рослинний і тваринний світ Північної Америки](https://drive.google.com/file/d/1-BVJOltDc5MFjelOkqXwRBMy6w8UKBAC/view?usp=sharing)  

** Українська мова **  
**04.12** [Тема: Змінювання прикметників за родами та числами у сполученні з іменниками. Родові закінчення прикметників](https://drive.google.com/file/d/1k2OS5tmdSqS9U0ESF0N_D7h9kb-thQbt/view?usp=sharing)  
**07.12** [Тема: Відмінювання прикметників у сполученні з іменниками в олнині та множині](https://drive.google.com/file/d/1EuPEWhVuPf8n8BGEe1ILALq1uzZm8W81/view?usp=sharing)  
**08.12** [Тема: Зіставлення закінчень прикметників з основою на твердий та м'який приголосний в однині і множині](https://drive.google.com/file/d/1fxO-bXRnNAx7on3XH9tJs3pXCu3VvgLM/view?usp=sharing)  
**11.01** [Тема: Закріплення знань про правопис прикметників у множині](https://drive.google.com/file/d/17ZPnL2xTbr37Zcka30jzUsW_ZyvtYjs7/view?usp=sharing)  
**12.01** [Тема: Побудова сполучень слів і речень із прикметниками, уведення їх у текст](https://drive.google.com/file/d/1PTQfBwJkXFd3YtEKPTqNs_zR9mZxoVMg/view?usp=sharing)  
**13.01** [Тема: Закріплення вивченого про прикметник](https://drive.google.com/file/d/1UWeDPMNkgo7Y8P4qWCn5xYL1SoVTitZD/view?usp=sharing)  
**14.01** [Тема: Погода учора](https://drive.google.com/file/d/1OlcQQthTb5hS1m5olV3hmRV9Krme1g0o/view?usp=sharing)  

** Я у світі **  
**04.12** [Тема: Культура поведінки учня](https://drive.google.com/file/d/1uW5654jU6K1rkEnbTDFy_8sCJ2kafQLS/view?usp=sharing)

** Англійська мова **  
**03.12** [Тема: Покупки](https://drive.google.com/file/d/1vJe5h3cSMsODOLKX_hlLazFw6AvQAr-L/view?usp=sharing)  
**12.01** [Тема: Улюблена пора року](https://drive.google.com/file/d/1_kfoGwLBw19Ll9VlO4Fjwk8Ny3Mh4Hdw/view?usp=sharing)  
**14.01** [Тема: Погода учора](https://drive.google.com/file/d/15wSaQmW5zZoUMHk0RxXdNIasTtRAvwwt/view?usp=sharing)  

** Літературне читання **  
**07.12** [Тема: Марко Вовчок «Літній ранок», Михайло Коцюбинський «Літній день»](https://drive.google.com/file/d/1XgJrjALeSBPNQ_Qy5nIsx0yLyZXI39WL/view?usp=sharing)  
**08.12** [Тема: Григір Тютюнник «Ласочка»](https://drive.google.com/file/d/1FfR9kqe3b1y5wSfqJ84ugJLaPfL0Pjgw/view?usp=sharing)  
**11.01** [Тема: Вступ до розділу. Т. Шевченко «Про себе»](https://drive.google.com/file/d/17QzW4_chVoqozQ6JbXJuLD-TEHOOuWB4/view?usp=sharing)  
**12.01** [Тема: Т. Шевченко «Вітер віє-повіває» Т. Шевченко «Вітер з гаєм розмовляє»](https://drive.google.com/file/d/1V45WvxGyQOCPdbBJZm46s_Yf2Z3gwNDi/view?usp=sharing)  
**13.01** [Тема: Т. Шевченко «Реве та стогне Дніпр широкий»](https://drive.google.com/file/d/1Ckj9KfRUmEQ00aLHDw196PtxikJzKi_T/view?usp=sharing)  

** Образотворче мистецтво **  
**08.12** [Тема: Дизайн годинника](https://drive.google.com/file/d/1gMGKFcVJS20q8y2uKGv8Y2kvwBbrkVJB/view?usp=sharing)  
**08.12** [Презентація: Дизайн годинника](https://drive.google.com/file/d/12gYiiJa404TLX0Yq4d4pUZr3L5eo2Fjq/view?usp=sharing)  

** Основи здоров’я **  
**11.01** [Тема: Звички і здоров'я. Практична робота: виконання проєкту з формування корисної звички](https://drive.google.com/file/d/1hEFNVYpZOEiC_Q8FM2xIroBvJI9HgWwE/view?usp=sharing)  

** Трудове навчання **  
**11.01** [Тема: Поглиблення знань про аплікацію. Послідовність виготовлення об’ємної аплікації на тканині з використанням ґудзиків, леліток та бісеру](https://drive.google.com/file/d/1Z76yAY3HR8JXXfmbai_0Mai2x20r1GY0/view?usp=sharing)  

** Фізична культура **  
**13.01** [Тема: Підготовчі вправи. ЗРВ зі скакалкою. Рухлива гра](https://drive.google.com/file/d/1kenzSxobJ8YO5eDSGzqAUSZ_R-_FTPsr/view?usp=sharing)  
**14.01** [Тема: Комплекс ранкової гімнастики зі скакалкою. Визначення динаміки змін показників розвитку фізичних якостей учнів. Рухливі ігри](https://drive.google.com/file/d/1NTOa7Bd7emw5GwL8xzzoMLcVegC1VQIs/view?usp=sharing)  
`}</Md>
          </Tab>
        </Tabs>
      </Tab>
      <Tab title="5 клас">
        <Md>{`
** Природознавство **  
**03.12** [5-Б. Тема: Поняття про сузір’я. Зорі.](https://drive.google.com/file/d/1R7UCQIPSK5QBTiTtfQ6qKkuGD4RD3D5G/view?usp=sharing)  
**07.12** [5-Б. Тема: Планети. Сонячна система. Відмінності між планетами](https://drive.google.com/file/d/19GFMmi7yCI24Cm4kS8cYlhJLU6BNtJcj/view?usp=sharing)  
**11.01** [Тема: Будова Землi](https://drive.google.com/file/d/1AHmg1RAPP8z-jAJEepqDTf6qckrexjiR/view?usp=sharing)  

** Українська мова **  
**03.12** [5-А. Тема: Склад. Наголос. Орфоепічний словник і словник наголосів](https://drive.google.com/file/d/11q7FSrqVxan8Y0BJ1_Xj9DnInzEiyFwU/view?usp=sharing)  
**03.12** [5-А. Тема: Есе (розмірковування в довільній формі) про красу й молозвучність української мови](https://drive.google.com/file/d/1_iDvQLwccro5qew0XzXPU9S6B_Sr_o5T/view?usp=sharing)  
**03.12** [5-Б. Тема: Приголосні тверді, м’які (повторення). Співвідношення звуків і букв. Звукове значення букв я, ю, є, ї .](https://drive.google.com/file/d/14VBVYgk0nTv9ga2twnBFYXtfg_bGpaCL/view?usp=sharing)  
**08.12** [5-Б. Тема: Позначення звуків мовлення на письмі](https://drive.google.com/file/d/1vM1_QZpP-S97Il4twyMPXw-4JFLgMgbT/view?usp=sharing)  
**11.01** [Тема: Орфограма (практично). Орфографічний словник. Орфографічна помилка (практично), її умовне позначення](https://drive.google.com/file/d/1nLndxOwyxsLIOYxd4AegEb0juBr6tUwb/view?usp=sharing)  
**13.01** [5-А. Тема: Орфографічна помилка, її умовне позначення](https://drive.google.com/file/d/11xzrGBklVhP2Q2zGwkGwxitKeQd64wRT/view?usp=sharing)  
**13.01** [Тема: Орфографічна помилка](https://drive.google.com/file/d/1RliCOJtjWwzjEfFRtFzJpHfBc0_J9r23/view?usp=sharing)  
**13.01** [Тема: Префікси роз-, без-](https://drive.google.com/file/d/1csKSMUqi1pBQgHzn9-cPLSltQQ9a4ug5/view?usp=sharing)  

** Трудове навчання **  
**03.12** [Тема: Виконання ялинкової прикраси з паперу (техніка торцювання)](https://drive.google.com/file/d/160AecYyYSB489pv8RIwh7WzL1zbmSA9t/view?usp=sharing)  
**03.12** [Інструкційна картка: Виготовлення ялинкової прикраси «Ялинка»](https://drive.google.com/file/d/1VbeV1DMe1MoR72-cbMHZVGjvG8fhxlXJ/view?usp=sharing)  
**03.12** [Інструкційна картка: Виготовлення ялинкової прикраси «Різдвяна зірка»](https://drive.google.com/file/d/1AsMT40FxyVqGHoI16liGMkmSY3w7pzxj/view?usp=sharing)  
**11.01** [Тема: Проведення міні-маркетингового дослідження для обґрунтування вибору виробу](https://drive.google.com/file/d/1ONQ0pIyeNHm0nYcdo8an_okGGNtYnVdW/view?usp=sharing)  
**13.01** [5-Б. Тема: М’яка іграшка як невід’ємний атрибут у побуті та мистецтві українців. Види м’яких іграшок](https://drive.google.com/file/d/1DiMmWvcbu04Dnn7At5RRBeBgydUQ5jVk/view?usp=sharing)  
**13.01** [5-Б. Тема: Інструктаж з БЖД та ОП. Визначення алгоритму  взаємодії в майстерні. Вибір об’єкта праці](https://drive.google.com/file/d/1uX142Rbfhq27LHQjts627PH2KZkdaUxr/view?usp=sharing)  
**14.01** [5-А. Тема: Технологія виготовлення м’якої пласкої іграшки. Етапи проєктування. Планування роботи. Шаблони деталей іграшки](https://drive.google.com/file/d/1nRhq0AYT63HUDkBHY6zqDS2wR9uLfpR2/view?usp=sharing)  

** Інформатика **  
**03.12** [Тема: Середовище описання і виконання алгоритмів](https://drive.google.com/file/d/1v4UkLcIBNjYTNAmYwho0KhV6vbkT7CCs/view?usp=sharing)  
**04.12** [Тема: Середовище описання і виконання алгоритмів](https://drive.google.com/file/d/1q0xiG0DzjVzhH_uJxaHAUIu8-fawm6LK/view?usp=drive_web)  

** Музичне мистецтво **  
**04.12** [Тема: Музика і хореографія](https://drive.google.com/file/d/1PBuwP5xPJCP1aZy49dCWZpE4B5NvjRSX/view?usp=sharing)  
**12.01** [Тема: Світ вокальної музики](https://drive.google.com/file/d/109qgig0UxPqVL5zyP7xqGcaLkE4U_kYc/view?usp=sharing)  
**14.01** [Тема: Тема: Алгоритмічна структура розгалуження](https://drive.google.com/file/d/1jBQsWtaU5zGcXpFe7L1TfMOdNnPuDkBn/view?usp=drive_web)  

** Математика **  
**04.12** [Тема: Аналіз контрольної роботи. Види кутів. Вимірювання кутів](https://drive.google.com/file/d/1d8YTI_NUHB38Jtw7fLmJ7ZvtROh6ltEi/view?usp=sharing)  
**07.12** [Тема: Величина кута. Вимірювання та побудова кутів](https://drive.google.com/file/d/1S-jvWe03UfILGtbRhqqWJjSjTwlo8Fm0/view?usp=sharing)  
**08.12** [Тема: Величина кута. Вимірювання та побудова кутів](https://drive.google.com/file/d/1fM_JZHlzjYUsp9fmJKv_FQvwTYRaGFCu/view?usp=sharing)  
**12.01** [Тема: Уявлення про звичайні дроби](https://drive.google.com/file/d/15TW2iX6PdzFOQlI9kIhhov_wwiGd9eFY/view?usp=sharing)  
**12.01** [Тема: Дроби і ділення натуральних чисел](https://drive.google.com/file/d/1iq9PeQcl8FHCpHrsXCO1vw7ir-GkAN5k/view?usp=sharing)  
**13.01** [Тема: Порівняння звичайних дробів](https://drive.google.com/file/d/1T3PXdjQWXS-2itvWkz51NW6iKlGctOVG/view?usp=sharing)  

** Основи здоров’я **  
**07.12** [Тема: Принципи й методи загартовування. Рухова активність](https://drive.google.com/file/d/1V1D_tWdTDdtnDAvlQCNpFvMNngl0j9gZ/view?usp=sharing)  
**11.01** [Тема: Попередження травм під час рухливих ігор. Правила безпечної поведінки в басейні та на льоду](https://drive.google.com/file/d/1dAALP8mt62Hpr92U2kwKr2iAXyzH5xqa/view?usp=sharing)  

** Астрономія **  
**08.12** [5-А. Тема: Астрономія як наука](https://drive.google.com/file/d/17ou9n3HZoSLpPQGQzsl4kZLQpwa_3ZRx/view?usp=sharing)  

** Англійська мова **  
**11.01** [Тема: Особливі дні](https://drive.google.com/file/d/1JWLFqKvZ8MmH-ISBimbICHoGNIvdTYP4/view?usp=sharing)  
**11.01** [Тема: Особливі дні](https://drive.google.com/file/d/1orExTKQz_YKfCTcCdNcqXnxC00DgbnD7/view?usp=sharing)  
**12.01** [5-А. Тема: Улюблені свята](https://drive.google.com/file/d/1YWpoSU90bkwsqOSU62oiVVIigLOlPUES/view?usp=sharing)  
**12.01** [5-Б. Тема: Особливі дні](https://drive.google.com/file/d/14JfQyOgUcyd0xkaVBx97AbACdv-s0atU/view?usp=sharing)  
**14.01** [5-А. Тема: Улюблені свята](https://drive.google.com/file/d/1wORNI1dxFz-SkAEN1L00kX6lsJPTfrwn/view?usp=sharing)  
**14.01** [5-Б. Тема: Улюблені свята](https://drive.google.com/file/d/171sZweJ38OBYTpM7eE4JfrY6_SeXx8gZ/view?usp=sharing)  

** Фізична культура **  
**11.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1XhCtlyYjAKVl9AIRPem4FPnj3raJbyH6/view?usp=sharing)  
**12.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/19JpbGmIRyTMoW5R2LWURakA-bIZX3U6_/view?usp=sharing)  
**14.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/12aDjzZNcQ5pIg84_LJOowtmnEJbU-jGD/view?usp=sharing)  

** Образотворче мистецтво **  
**11.01** [Тема: Скульптура космонавт](https://drive.google.com/file/d/1mvaqrrkGEY-U7MTH9WrLW-q_fnGKRq6A/view?usp=sharing)  
**13.01** [Тема: Скульптура космонавт](https://drive.google.com/file/d/1uE_G_RJH4nHcJ1QfM06A98ien9RVb-Xh/view?usp=sharing)  

** Біологія **  
**12.01** [Тема: Форма і розміри землі. Внутрішня будова Землі](https://drive.google.com/file/d/1IluFsIaDapgGVLVl60xD23aY7q968SNU/view?usp=sharing)  

** Українська література **  
**13.01** [Тема: Особливості поетичних загадок. Л. Глібов, роль у них казкових елементів, фольклорної основи, гумору, пестливих слів](https://drive.google.com/file/d/1O8kDBu5GJo2wRO4Mtwcx0srs_KQ43xy-/view?usp=sharing)  

** Зарубіжна література **  
**14.01** [Тема: Провідні ідеї твору](https://drive.google.com/file/d/1fBCYM8AhXrIkc3c6sZDM8Z3YrdTy9EMS/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="6 клас">
        <Md>{`
** Українська література **  
**03.12** [Тема: Образ мужньої, сильної духом дівчинки, її життєрадісний погляд на світ, вільнолюбство, впевненість, розвинена уява у вірші «Як дитиною бувало…»](https://drive.google.com/file/d/19t3ni434ZVtcao03dVgQwqiPwhptSfah/view?usp=sharing)  
**08.12** [Тема: Леся Українка «Тиша морська» - пейзажно-мариністичний малюнок](https://drive.google.com/file/d/1jLtotObpy3WYFFF6a7CDAg6nAf61sHIF/view?usp=sharing)  
**12.01** [Тема: Дитинство письменника. Федько-халамидник](https://drive.google.com/file/d/1TPmdXHROH0TZNiX3SOC5qabHfbIepGDA/view?usp=sharing)  

** Інформатика **  
**03.12** [Тема: Редагування програмних об’єктів](https://drive.google.com/file/d/14u2a-Fbfs2UVhKlYPdZQYEyak9uKZs1T/view?usp=sharing)  
**04.12** [Тема: Редагування програмних об’єктів](https://drive.google.com/file/d/16uK94BEboljVzcud-sfI-BgczQk6SqYY/view?usp=drive_web)  
**07.12** [Тема: Редагування програмних об'єктів](https://drive.google.com/file/d/1RzBoVhxIdkGA3AiAq--IJcpcYBwjob8I/view?usp=sharing)  
**12.01** [Тема: Керування об'єктами у середовищі виконання алгоритмів](https://drive.google.com/file/d/1I2pUzuDHIVqSBS0UQ4XmlVyR54vsPxH9/view?usp=sharing)  
**14.01** [6-В. Тема: Редагування програмних об’єктів.](https://drive.google.com/file/d/16uK94BEboljVzcud-sfI-BgczQk6SqYY/view?usp=drive_web)  

** Музичне мистецтво **  
**04.12** [Тема: Українська симфонічна поема](https://drive.google.com/file/d/1HIqvp7YHpcBXXhV9D5TZGJ86eHBwwJxu/view?usp=sharing)  
**12.01** [Тема: Камерно-інструментальна музика](https://drive.google.com/file/d/1f3sF5UGPjrOw2R3C4ldPBl5A3mBu81Ly/view?usp=sharing)  

** Математика **  
**04.12** [Тема: Пряма та обернена пропорційна залежність](https://drive.google.com/file/d/1wvfb4nJOgeV9QnldpeYtGn2_kDzpbtmu/view?usp=sharing)  
**04.12** [Тема: Обернена пропорційна залежність](https://drive.google.com/file/d/1wHUa4yGSdK192MjZ5YKUIWoZcVUin7AV/view?usp=sharing)  
**07.12** [Тема: Відсоткове відношення двох чисел](https://drive.google.com/file/d/1iYwL_pzThDE3eDVWtiq4tqNG4VfV6I4Q/view?usp=sharing)  
**07.12** [Тема: Коло і круг](https://drive.google.com/file/d/11XLOszKBM3EPjpsUE9-kjuBm-VknuNNh/view?usp=sharing)  
**08.12** [Тема: Кругові діаграми](https://drive.google.com/file/d/19LSENrV3FXVR2jmo-d-1vpJw-wMGGJ-B/view?usp=sharing)  
**08.12** [Тема: Відсоткові розрахунки](https://drive.google.com/file/d/1R7T_knhcfnSJK-SUJhbyMBMbN2reVCCL/view?usp=sharing)  
**11.01** [Тема: Додатні та від'ємні числа. Число нуль](https://drive.google.com/file/d/1gOKmuC88hemTuFmWTczbbKmy0ARznYe7/view?usp=sharing)  
**11.01** [Тема: Відсоткові розрахунки](https://drive.google.com/file/d/1Zfytcvvdeup5d3a0lOcHbHt69x-OkZnS/view?usp=sharing)  
**12.01** [Тема: Координатна пряма](https://drive.google.com/file/d/1YflD_mgVismDEdHMBSHlleHy_YUiuRjp/view?usp=sharing)  
**12.01** [Тема: Коло і круг](https://drive.google.com/file/d/1A4aNKpPgWQcl3V_iheHpKRaUf-svqYDz/view?usp=sharing)  
**13.01** [6-А,В. Тема: Координатна пряма](https://drive.google.com/file/d/1jhgoyy_vxgcS0cfRKdpu0zzOCydH5biD/view?usp=sharing)  
**13.01** [6-Б. Тема: Кругові та стовпчасті діаграми](https://drive.google.com/file/d/1tYxB-pYC32fSWaIUQzrFiX8mTA1ti22s/view?usp=sharing)  
**13.01** [6-Б. Презентація. Тема: Кругові та стовпчасті діаграми](https://drive.google.com/file/d/1XnTl3NwsLlBSJnPNDF9oMJhcatT2XI40/view?usp=sharing)  

** Українська мова **  
**04.12** [Тема: Відмінки іменників. Кличний відмінок](https://drive.google.com/file/d/1qknJdLvX6BUZIvZNErt0V8oxq7MI5UO3/view?usp=sharing)  
**07.12** [Тема: Відмінювання іменників І відміни](https://drive.google.com/file/d/1Do8nVvddTJkf7IVS5Bl3IyIBvMrIa-bW/view?usp=sharing)  
**08.12** [Тема: Відмінювання іменників. Поділ іменників на відміни та групи](https://drive.google.com/file/d/11Z8CMcTG0Na1MCpTit6W-bFskR3yWmmi/view?usp=sharing)  
**11.01** [Тема: Незмінювані іменники. Рід незмінюваних іменників](https://drive.google.com/file/d/1OBVjvoJZIoN2VNdEep2uBRAnBVQd79ON/view?usp=sharing)  
**12.01** [Тема: Відмінювання іменників, що мають форму лише множини](https://drive.google.com/file/d/161iSi4nJJNJfV7ew9v4cJNA9E6olCzsO/view?usp=sharing)  
**13.01** [Тема: Написання й відмінювання чоловічих і жіночих прізвищ, імен по батькові](https://drive.google.com/file/d/1p0ee-aDkqsmnKQwgG5HzR3cUNAGQygeu/view?usp=sharing)  

** Геометрія **  
**04.12** [Тема: Властивості та ознаки паралельних прямих](https://drive.google.com/file/d/1HNWgOmuryqTAgAijrgyBQ3k_E7c_gKyK/view?usp=sharing)  

** Біологія **  
**11.01** [Тема: Різноманітність та видозміни пагона](https://drive.google.com/file/d/1-QyLP9rc_OE-yPg9YZ7I6EDa7FmKktvz/view?usp=sharing)  
**14.01** [Тема: Будова листка у звязку з функціями](https://drive.google.com/file/d/1SgqVRONZ5bItfVbpccloSGkG56VB6dxb/view?usp=sharing)  

** Англійська мова **  
**11.01** [Тема: Продукти харчування](https://drive.google.com/file/d/1d3TbAEysdcGIIGHnMnE1Pt-076Fx2xcB/view?usp=sharing)  
**13.01** [Тема: Овочі та фрукти](https://drive.google.com/file/d/1r0WmGmylVGkm43cUXuqTWMPGN2IrSJt0/view?usp=sharing)  
**14.01** [6-Б,В. Тема: Солодощі](https://drive.google.com/file/d/102hYRqIEZuy0EOMGMUGgs6wLuvBgMl88/view?usp=sharing)  

** Трудове навчання **  
**11.01** [Тема: Правила БЖД та ОП Короткі історичні відомості про розвиток мистецтва штучних декоративних квітів. Види декоративних квітів](https://drive.google.com/file/d/16YUkvI89A0BiQETZdytpt_jrfWkzfgT8/view?usp=sharing)  
**11.01** [Тема: Конструкційні матеріали для виготовлення декоративних квітів. Інструменти та пристосування](https://drive.google.com/file/d/1Blc1bZu3BLlIkWK4Kxi99RRurtEUTVK0/view?usp=sharing)  
**12.01** [Тема: Конструкційні матеріали для виготовлення декоративних квітів. Інструменти та пристосування](https://drive.google.com/file/d/1M4lEkElBCBg_eVHu2RzYUMMRo6Swfev9/view?usp=sharing)  
**12.01** [Тема: Правила БЖД та ОП Короткі історичні відомості про розвиток мистецтва штучних декоративних квітів. Види декоративних квітів](https://drive.google.com/file/d/17_WWzKgBKOEKvrDGA5hjMlRhNI_WREWm/view?usp=sharing)  

** Географія **  
**12.01** [Тема: Кліматична карта. Теплові пояси землі практичне значення вимірювання температури повітря](https://drive.google.com/file/d/1MeFviw1kCIDcwHIRPY2YtcA80_L4Q7pQ/view?usp=sharing)  
**14.01** [Тема: Атмосферний тиск](https://drive.google.com/file/d/1u9nZSjAC2oCx31K_5venZlJt142B94GB/view?usp=sharing)  

** Історія **  
**13.01** [6-В. Тема: Битва при Херонеї](https://drive.google.com/file/d/1W16nIfrwv-_tLQfCSm2Q2u-nSoX-EbsY/view?usp=sharing)  

** Основи здоров’я **  
**13.01** [Тема: Види рішень](https://drive.google.com/file/d/1Ic241cRLf0OHQiJDlEFwiHeGkWpJTBc9/view?usp=sharing)  

** Образотворче мистецтво **  
**14.01** [Тема: Побутовий жанр. Історія виникнення та розвитку](https://drive.google.com/file/d/1XYvXwACQ4PgoG10yrkiNui7Ho97oaw35/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="7 клас">
        <Md>{`
** Фізика **  
**03.12** [Тема: Коливальний рух. Амплітуда коливань. Період і частота коливань. Маятники.](https://drive.google.com/file/d/1qvwaKnFReAwoJV2QDkk4CS5k-MpwJtrd/view?usp=sharing)  
**07.12** [Тема: Розв’язування задач. Повторення](https://drive.google.com/file/d/1GqmdTYb1tvgWkB_hP-_i1tTMCatd2TqE/view?usp=sharing)  
**11.01** [Тема: Iнертнiсть. Маса](https://drive.google.com/file/d/1DeS0Ba5UNJ0cDpKHxos2kV3tVpUA1nG9/view?usp=sharing)  

** Музичне мистецтво **  
**03.12** [Тема: «Електронна музика та її інструменти. Жанри і напрями електронної музики»](https://drive.google.com/file/d/1ZNwUMDGIqB9I96Nj55TvWZmcg5LEIKc9/view?usp=sharing)  
**04.12** [Тема: «Електронна музика та її інструменти. Жанри і напрями електронної музики»](https://drive.google.com/file/d/1VUTZhWnbIARa3D69NKg3qvHvC8ygPxq3/view?usp=sharing)  
**14.01** [Тема: Джаз](https://drive.google.com/file/d/1W0UAHGeBr3Cta9iKU2OVkSyi71kZxW-2/view?usp=sharing)  

** Історія України. Всесвітня історія **  
**03.12** [Тема: Походи вікінгів та їх завоювання](https://drive.google.com/file/d/10SKWwFRat3yT2mp-XidaaXIqylc7hV62/view?usp=sharing)  
**11.01** [Тема: Правління Ярославичів](https://drive.google.com/file/d/1KblQ7S0ICu_ekaXFnVFyVI7uDohlUwY-/view?usp=sharing)  
**14.01** [Тема: Правління В. Мономаха](https://drive.google.com/file/d/1TF74sWB5fZZ2558syT__C8ChMlBN0D8D/view?usp=sharing)  

** Геометрія **  
**03.12** [Тема: Кути, утворені при перетині двох паралельних прямих січною. Властивості кутів, утворених при перетині паралельних прямих січною.](https://drive.google.com/file/d/1fFJnhdfAIKT66YiMKbNvDSv4onIhFgb3/view?usp=sharing)  
**03.12** [Презентація: Кути при січній](https://drive.google.com/file/d/14HC1AtZFrH7uzWDvLnEClidQ-lvEiuWB/view?usp=sharing)

** Англійська мова **  
**03.12** [Тема: Страви](https://drive.google.com/file/d/1yC2uOR3TM0u3iNRhyux5e6-eVAAwOQei/view?usp=sharing)  
**07.12** [Тема: Хатня робота](https://drive.google.com/file/d/12RjLjjkx7VsGOdMvqr8EN0xwZwFRlhId/view?usp=sharing)  
**07.12** [Тема: Виконання хатньої роботи](https://drive.google.com/file/d/1_M8zNX8T00sWs-Gq6L5w-PnqrLRydaLx/view?usp=sharing)  
**11.01** [Тема: Види спорту](https://drive.google.com/file/d/1lXlyXV3JL9qobds-FKnWTTr4FsiYJy11/view?usp=sharing)  
**11.01** [Тема: Види спорту](https://drive.google.com/file/d/1YmKwSsqFSKvmuN3AhWT-v_x02tsLR5gx/view?usp=sharing)  
**13.01** [7-А. Тема: Сучасні Олімпійські ігри](https://drive.google.com/file/d/1JyUfXX-AaMdtz8mZPIwQHPQO9yVEwJdn/view?usp=sharing)  
**13.01** [7-А,Б. Тема: Олімпійські ігри](https://drive.google.com/file/d/1G78pEW6ZTCqRljyOq7AtIXrugOFAmkTD/view?usp=sharing)  
**14.01** [7-А. Тема: Символіка олімпійських ігор](https://drive.google.com/file/d/1UaFF3KYrmmJXmXIGxSwZsHvnPF4N2DLB/view?usp=sharing)  

** Інформатика **  
**04.12** [Тема: Створення моделей для розв’язування задач](https://drive.google.com/file/d/129xZiYVeZFgltMSzdCWdQEco6wnXtbuw/view?usp=drive_web)  
**13.01** [Тема: Створення комп'ютерної моделі рівномірного прямолінійного руху](https://drive.google.com/file/d/1eEhezYQyhBuwJkm7r1QrzZF_b1rQ0hBC/view?usp=drive_web)  

** Біологія **  
**04.12** [Тема: Різноманітність птахів, їх роль у природі та значення в житті людини](https://drive.google.com/file/d/1yE8Ay4YmvkBD_Dh23t4NCf8q2Jox4_Ou/view?usp=sharing)  
**08.12** [Тема: Ссавці. Особливості будови, способу життя](https://drive.google.com/file/d/1rOLn1IUWVoWF-pVz3KegQbQu8D3hsJ6C/view?usp=sharing)  
**12.01** [Тема: Живлення і травлення](https://drive.google.com/file/d/1p12j3GV8HdauDarVJmqtLZYzNj6msmaG/view?usp=sharing)  

** Основи здоров’я **  
**04.12** [Тема: Показники фізичного розвитку підлітків. Способи покращення фізичної форми](https://drive.google.com/file/d/1RLib8JRvGgB4ChCpFRIzK3r3e9lClYCL/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Безособові дієслівні форми на -но, -то. Перехід дієприкметників у прикметники та іменники](https://drive.google.com/file/d/1hGi6SV1EOVml1ZQiq7HCV3iPyEyUI5em/view?usp=sharing)  
**04.12** [Тема: Михайло Стельмах. „Гуси-лебеді летять”. Єдність світу природи і світу дитячої душі](https://drive.google.com/file/d/16f8K3tfl64X6YPtW-QA9HcYiBUrorDP2/view?usp=sharing)  
**11.01** [Тема: Дієприслівник як особлива форма дієслова](https://drive.google.com/file/d/1tY7xYqFrYmmDStV1_-5VY8TG7mt2Z7p-/view?usp=sharing)  
**11.01** [7-А (ІІ підгрупа), 7-Б. Тема: Дієприслівник як особлива форма дієслова: загальне значення, морфологічні ознаки, синтаксична роль](https://drive.google.com/file/d/1wPUmizPfvrk8xvxlFnAR8ZaVzBONigsU/view?usp=sharing)  
**13.01** [7-Б. Тема: Дієприслівниковий зворот. Розділові знаки при дієприслівниковому звороті й одиничному дієприслівникові](https://drive.google.com/file/d/1FVGnicieGXVOTeJ_XWiD9Y-VfmPokNuN/view?usp=sharing)  
**14.01** [7-А (ІІ підгрупа). Тема: Дієприслівниковий зворот. Розділові знаки при дієприслівниковому звороті й одиничному дієприслівникові](https://drive.google.com/file/d/1Mq_8VvHeAosR-u4f10lV055P09CFZpiv/view?usp=sharing)  
**14.01** [7-Б. Тема: Дієприслівниковий зворот. Розділові знаки при дієприслівниковому звороті й одиничному дієприслівникові](https://drive.google.com/file/d/1VgKvWkZNIO6CZ6_ajIX05r7kqVzo1oRV/view?usp=sharing)  

** Хімія **  
**07.12** [Тема: Фізичні та хімічні явища](https://drive.google.com/file/d/1vDn2GcA1M_iqktbjVpByURwMEJyEv4vQ/view?usp=sharing)  
**11.01** [Тема: Оксиген і кисень](https://drive.google.com/file/d/1UsZBg4YupwyGd3rBFYBn0gww1kJZSJi0/view?usp=sharing)  
**13.01** [7-А. Тема: Склад повітря](https://drive.google.com/file/d/17cqStc7d5zs3scW7i90zEuZ8nNGdkc6q/view?usp=sharing)  
**13.01** [7-Б. Тема: Закон збереження маси](https://drive.google.com/file/d/1cDg4l_tzfwOAXsy1ZXACo_IQSk7c6PRQ/view?usp=sharing)  

** Алгебра **  
**07.12** [Тема: Формули квадрата двочлена, різниці квадратів, суми і різниці кубів](https://drive.google.com/file/d/1rZfpPfzYKlR_3eqiRpZImyPSKsHghooO/view?usp=sharing)  
**08.12** [7-Б. Тема: Формули суми і різниці кубів](https://drive.google.com/file/d/1Oy_lN7IVHkAP8efaDlTwDTtYg4lRSczR/view?usp=sharing)  
**11.01** [Тема: Розкладання многочлена на множники винесенням спільного множника за дужки](https://drive.google.com/file/d/15Ks4kkI-K7biOkyD3OHBw3XxxecwUq1S/view?usp=sharing)  
**12.01** [7-А. Тема: Розкладання многочлена на множники способом группування](https://drive.google.com/file/d/1D4MCUIOU1zUx4AJTxJD47fPeY_RFL5Bh/view?usp=sharing)  
**13.01** [7-А. Тема: Розкладання многочлена на множники способом группування](https://drive.google.com/file/d/1D4MCUIOU1zUx4AJTxJD47fPeY_RFL5Bh/view?usp=sharing)  

** Географія **  
**11.01** [Тема: Географічне положення. Відкриття і дослідження антарктиди](https://drive.google.com/file/d/1lIgDyXiWc38CJRLGqbQqjvOiuHOlwgot/view?usp=sharing)  
**13.01** [Тема: Антарктида](https://drive.google.com/file/d/1c7ccaM1aL5k9X7_SGzQAfkuLUaxCawYd/view?usp=sharing)  

** Трудове навчання **  
**11.01** [Тема: Вибір об'єкта проєктування. Планування проєктної діяльності. Комбінування композиції для панно з мозаїки](https://drive.google.com/file/d/1fIqDduVTMiUAkkrR67T8l5GJk7whp_vs/view?usp=sharing)  
**11.01** [Тема: Блокнот](https://drive.google.com/file/d/1JVhwmqntdVZW0QbF_xxWBLJMmbw16wd_/view?usp=sharing)  

** Зарубіжна література **  
**11.01** [Тема: Уславлення дружби й вірності у вірші](https://drive.google.com/file/d/1q_z-piiacmGpZ4P54I9aoZJtOZp1NpwI/view?usp=sharing)  

** Фізична культура **  
**12.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1LYMqo8lKOm-bCK_MHTKKwk0WLaRKPTEK/view?usp=sharing)  
**13.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1jm9dPqtOM5-L1OzB0IOBkJ_1pKbsG4oz/view?usp=sharing)  
**14.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1JQ0c8HoeaLvHCuU0gmXQVOHdVBRvmzj5/view?usp=sharing)  

** Образотворче мистецтво **  
**12.01** [Тема: Види дизайну. Промисловий дизайн. Проектування предметів побуту](https://drive.google.com/file/d/1E2YpfNEiT7Pc2NJucY1Ljco3On99jjva/view?usp=sharing)  

** Українська література **  
**13.01** [7-А,Б. Тема: Григір Тютюнник. Коротко про дитинство письменника. «Климко» - автобіографічна основа твору](https://drive.google.com/file/d/1FVGnicieGXVOTeJ_XWiD9Y-VfmPokNuN/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="8 клас">
        <Md>{`
** Українська мова **  
**03.12** [Тема: Односкладні прості речення з одним головним членом підметом. Називні речення](https://drive.google.com/file/d/1VuUQRDDL4JHv2u27c3eGMZbOwm5faErV/view?usp=sharing)  
**04.12** [Тема: Односкладне речення як частина складного речення](https://drive.google.com/file/d/1VyJSxhNK75LaOybr6mJM4lCo-yHHyHQw/view?usp=sharing)  
**07.12** [Тема: Односкладне речення як частина складного](https://drive.google.com/file/d/1uIqBK7oZ3BYbhNXTSmrOXh-3YNaOuYRq/view?usp=sharing)  
**08.12** [Тема: Називні речення](https://drive.google.com/file/d/1ZokPMYgrJV-ISFFQUDuzyvlpJtrMwqFh/view?usp=sharing)  
**11.01** [Тема: Однорідні члени речення зі сполучниковим, безсполучниковим і змішаним зв’язком](https://drive.google.com/file/d/1Bp29kHYOhrerlDFekSr2kvVE3hWG7fPw/view?usp=sharing)  
**11.01** [Тема: Однорідні члени речення (зі сполучниковим, безсполучниковим і змішаним зв’язком). Кома  між однорідними членами речення](https://drive.google.com/file/d/1TsVOAgxWjc_s6rbM2q4eBq5mYd5ldOjo/view?usp=sharing)  
**14.01** [Тема: Урок розвитку комунікативних умінь. Конспект прочитаного науково-навчального тексту, тематичні виписки](https://drive.google.com/file/d/1sCfFfHavQGG-lYq_jWTvjKmmvDfZ2nlY/view?usp=sharing)  

** Українська література **  
**03.12** [Тема: Володимир Підпалий. «Бачиш: між трав зелених…» Ідея людяності, бережливого ставлення до природи](https://drive.google.com/file/d/1Q8mIXGFf9Qrm1fqus0UoNSE-0gA4qN9q/view?usp=sharing)  
**04.12** [Тема: Володимир Підпалий. «Бачиш: між трав зелених…» Ідея людяності, бережливого ставлення до природи](https://drive.google.com/file/d/1zwbcYCFqTCQ_VpTTmIfyBXEmkuzFEkTq/view?usp=sharing)  
**08.12** [Тема: В. Голобородько. Самобутня постать поета в українській літературі. Вірш «з дитинства: дощ» («я вплетений ...»). Вільний вірш](https://drive.google.com/file/d/1kH8xW5IXr5JrcJe5ABKwdTlprQCsOWxf/view?usp=sharing)  
**11.01** [Тема: І. Малкович «З янголом на плечі», «З нічних молитов»](https://drive.google.com/file/d/1wkMchPjM5IxHFp_Vh0wnVPWkuCv75aFD/view?usp=sharing)  
**12.01** [Тема: І. Малкович «З янголом на плечі», «З нічних молитов»](https://drive.google.com/file/d/1f3ckGzhIJtucoOuLQZeTF9BbUkw1DmkP/view?usp=sharing)  

** Хімія **  
**03.12** [Тема: Кількість речовини. Моль – одиниця кількості речовини. Число Авогадро.](https://drive.google.com/file/d/1Xza-GsZgxJa88JxRQB42fENhbGkA2hPj/view?usp=sharing)  
**07.12** [Тема: Кількість речовини. Моль – одиниця кількості речовини. Число Авогадро](https://drive.google.com/file/d/1ClT-RpO5-Fb9UmgW8t6_jCoMkGIPosu2/view?usp=sharing)  
**07.12** [Тема: Молярна маса речовини](https://drive.google.com/file/d/1em4zvfuwmaW3e2k5LEzgm8Z0QNCxu39i/view?usp=sharing)  
**11.01** [Тема: Відносна густина газів](https://drive.google.com/file/d/1ZN-Oxll5hhJorsC4EEgdQzuVXaOS44lB/view?usp=sharing)  
**13.01** [Тема: Узагальнення знань з теми](https://drive.google.com/file/d/1V9TH_kS1OI3-q-VWjeMBggTIfS4L0Pp6/view?usp=sharing)  

** Історія України. Всесвітня історія **  
**03.12** [Тема: Абсолютизм і громадянські війни у Франції](https://drive.google.com/file/d/1LjHnyvIvkFpsROshHXQx8bzKyHRS6yRz/view?usp=sharing)  
**04.12** [Тема: Англія в 16 ст.](https://drive.google.com/file/d/18cLnwgnsymixuJAGVpq_VXA4NuAMLyXL/view?usp=sharing)  
**11.01** [Тема: Початок Національно-визвольної війни](https://drive.google.com/file/d/1V23KI3K7tR9HpqFg8gC3ZOfhVoxW-yXt/view?usp=sharing)  
**14.01** [Тема: Українська козацька держава](https://drive.google.com/file/d/1VC_qj6xu4bO5FLWC1yqwZuQQXGJnBxxK/view?usp=sharing)  

** Англійська мова **  
**03.12** [Тема: Музика в нашому житті. Відомі українські виконавці.](https://drive.google.com/file/d/1vZrqAEL9AOaGZyKMNjDM_F2so579-b7m/view?usp=sharing)  
**07.12** [Тема: Музичні стилі](https://drive.google.com/file/d/1E29fXAu4YeuLL9SJEhFSQpTMnBPpl6eR/view?usp=sharing)  
**08.12** [Тема: Контроль письма](https://drive.google.com/file/d/1Mtr3VOv_jK9HV4uAjHEkvRY5IKCnIiBM/view?usp=sharing)  
**11.01** [Тема: Засоби масової інформації](https://drive.google.com/file/d/136W2jAuyhX9m2W0DwW6CCuhywkrx2Llw/view?usp=sharing)  
**12.01** [8-А. Тема: Преса у житті людини](https://drive.google.com/file/d/1VIKe0ChnQHLEJ7fANcVOWs6cZ2Za3b_y/view?usp=sharing)  
**12.01** [8-А,В. Тема: Ukrainian press](https://drive.google.com/file/d/1sNb3tvMXXMQpgWoHJL7SpiE7OR-aEqei/view?usp=sharing)  
**14.01** [8-А. Тема: Активізація граматичних навичок](https://drive.google.com/file/d/1wYjzr1m_qWett4OTBJ2_7ibjKEaLUumG/view?usp=sharing)  

** Алгебра **  
**03.12** [Тема: Степінь із цілим показником](https://drive.google.com/file/d/1bTPiJE5il-PKaAeDk_o2SmSDULHcrHSZ/view?usp=sharing)  
**12.01** [8-Б. Тема: Арифметичний корінь](https://drive.google.com/file/d/111JNeChYNr9ccJKOwYv_E0JvDNlebSHP/view?usp=sharing)  
**13.01** [8-А. Тема: Функція у=х2, її графік і властитвості](https://drive.google.com/file/d/1a1CBk2F9c0dwjajS5bSjf5mVTANkQP8g/view?usp=sharing)  

** Географія **  
**04.12** [Тема: Вплив погодно-кліматичних умов на здоров'я і господарську діяльність людини. Охорона атмосферного повітря. Кліматичні особливості своєї місцевості](https://drive.google.com/file/d/1vYAwfOrYGHF59NtP26e4W9X-6BdlSoxY/view?usp=sharing)
**13.01** [Тема: Різноманітність рослинності](https://drive.google.com/file/d/190SjQ3t2NADxqxF6-V5mlS3-Q1dWrfwF/view?usp=sharing)

** Фізична культура **  
**04.12** [Тема: Розвиток сили та силової витривалості учнів.](https://drive.google.com/file/d/1_7s0JREx_prAAOorgG0U9tFW_D6w5mlE/view?usp=sharing)  
**07.12** [Тема: Розвиток сили та силової витривалості учнів](https://drive.google.com/file/d/157g18UgHRVX1WUAJEuvJFVW_Ij2SQQVz/view?usp=sharing)  
**11.01** [Тема: Розвиток спритності та швидкісно-силових якостей учнів](https://drive.google.com/file/d/16XPh-b-LCDLvnnLrJ_IB0wDfmPWAGX-F/view?usp=sharing)  
**11.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1Eochp0AGgZTCZaGcJ9EtaA1d-jKhKO2d/view?usp=sharing)  
**13.01** [Тема: Удосконалення та закріплення елементів гри з баскетболу](https://drive.google.com/file/d/1op1q0EuhTO25dfx7ukJRMRWJuUoqhpSq/view?usp=sharing)  
**13.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/12vrsqqoPhoEa-2J0Z4tp0UUQu2ib30Yo/view?usp=sharing)  

** Біологія **  
**04.12** [Тема: Значення дихання. Будови і функції органів дихання](https://drive.google.com/file/d/1h8oxnpA9mSto58NfYV2yjRUNRFcB1z3B/view?usp=sharing)  
**11.01** [Тема: Еритроцити. Групи крові. Правила переливання крові](https://drive.google.com/file/d/1ttuNGyNu7XmVYVPYm4ERtRxs7BloGj8d/view?usp=sharing)  

** Основи здоров’я **  
**07.12** [Тема: Становлення особистості](https://drive.google.com/file/d/1XiqqH2rvbGD9PSbehbUFOjgN9d6ssUI8/view?usp=sharing)  

** Геометрія **  
**08.12** [Тема: Подібність прямокутних трикутників. Властивість бісектриси. Метричні співвідношення](https://drive.google.com/file/d/1P4n2CeJ0hOGemlmT2Z8di8FAmWrYIIhI/view?usp=sharing)  
**12.01** [8-А. Тема: Теорема Піфагора. Розв'язування задач](https://drive.google.com/file/d/1UEMLd_yzP8g0PgmQvwv6Zh3v2_CpgQ1G/view?usp=sharing)  
**12.01** [8-Б. Тема: Теорема Піфагора](https://drive.google.com/file/d/1UqIOb1Yck4KipmrXn1L2m21aCcPdsoQC/view?usp=sharing)  
**13.01** [8-Б. Тема: Раціональні числа. Ірраціональні числа](https://drive.google.com/file/d/1qbzY_IkBq86ERmeYM-n2CFZQWNjVlMKq/view?usp=sharing)  

** Інформатика **  
**08.12** [Тема: Логічні вирази. Оператори розгалуження. Вкладені розгалуження](https://drive.google.com/file/d/1UIkiDcQ0uWpgiOSN8HPQe0On15gl7hh0/view?usp=sharing)  
**12.01** [Тема: Графічні побудови](https://drive.google.com/file/d/1tl_MXuI4EZtqUfnMDEYHdtpT0tzGpUN_/view?usp=drive_web)  

** Мистецтво **  
**03.12** [Тема: Ідеали й образи Ренесансу](https://drive.google.com/file/d/1biA9w5C0Tq2_npKhtO7uwph7Jpz5Q6-g/view?usp=sharing)  
**13.01** [Тема: Бароко](https://drive.google.com/file/d/1vSmu-ezDNaD-gyqWA9aIGJ34CVkJ3ZvS/view?usp=sharing)  
**14.01** [Тема: Бароко](https://drive.google.com/file/d/1_VBKRJCQ4-GeVhiRdasRq86zeqppDQ6b/view?usp=sharing)  

** Російська мова **  
**13.01** [Тема: Параллельная связь между предложениями в тексте](https://drive.google.com/file/d/1kI1EqW4xoE3j_M4DUEWxgqBji3bQfjXp/view?usp=sharing)  

** Фізика **  
**13.01** [Тема: Електризація. Електричний заряд](https://drive.google.com/file/d/1jgAI2QMnq0wL6_T1Qc5G4e1Op7hPX_RP/view?usp=sharing)  

** Фізика **  
**14.01** [Тема: Франческо Петрарка – видатний італійський поет – гуманіст. Багатство](https://drive.google.com/file/d/12MAcf2F1hiRml9oSUVzZizGeYKy_Nt1V/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="9 клас">
        <Md>{`
** Географія **  
**03.12** [Тема: Видобування металічних руд](https://drive.google.com/file/d/1nLsYYlfSAhh_c-YzVUL8iJaKDekY1NXc/view?usp=sharing)  
**12.01** [Тема: Значення металургійного виробництва](https://drive.google.com/file/d/1GCcuhzaV9QvOaSJ6EoyfV0d1YywlEzZK/view?usp=sharing)
**14.01** [Тема: Виробництво чавуну, сталі, прокату](https://drive.google.com/file/d/18jyFjfipbqmj_b8KXq9glkjIG57rcYCN/view?usp=sharing)  

** Хімія **  
**03.12** [Тема: Реакції оборотні й необоротні](https://drive.google.com/file/d/1J2DYha0BrqewRn0sm7Yn2UbvM5hr7tu0/view?usp=sharing)  
**07.12** [Тема: Винаходи та винахідники](https://drive.google.com/file/d/1nZmcjJQ_nrd_c52_FH-uuyn8NjG5mwVq/view?usp=sharing)  
**08.12** [Тема: Класифікація хімічних реакцій. Реакції сполучення, розкладу, заміщення, обміну](https://drive.google.com/file/d/1tfQyElQnK1SBSHg-jwM8HbxB1pdGYWaP/view?usp=sharing)  
**12.01** [Тема: Вступ до органічної хімії](https://drive.google.com/file/d/1QhyD_QZTlrWJ69b4zgRBD2efL1V3LOWx/view?usp=sharing)  

** Правознавство **  
**03.12** [Тема: Конституційні права і свободи людини і громадянина](https://drive.google.com/file/d/15aef0Tzl_ip_KxMQal1xDjVIK8mWwNyg/view?usp=sharing)  
**12.01** [Тема: Неповнолітні в цивільних правовідносинах](https://drive.google.com/file/d/1mkKrkJBESGcP4uahN5398wU37m9WLJwk/view?usp=sharing)  
**14.01** [Тема: Неповнолітні в цивільних правовідносинах](https://drive.google.com/file/d/1vkk7Xp8pTOkE-PJMm4FWrN9DQ6rKfpAl/view?usp=sharing)  

** Трудове навчання **  
**03.12** [Тема: Технологічний процес виготовлення обраного об’єкта проєктування. Самоконтроль якості виконання технологічних операцій](https://drive.google.com/file/d/1qgNcVbtUgtnpbvFGkulfNExXQBMM8zsC/view?usp=sharing)  
**03.12** [Презентація: Вироби в етнічному стилі](https://drive.google.com/file/d/1FJS9VMTsfPY1UJL0EZaSOYGiBlLzxwUs/view?usp=sharing)  
**14.01** [Тема: Проєкт «Нове життя старим речам»](https://drive.google.com/file/d/1_dYxvYKyftsuKH-eQv6Ky6DkzNwSo3b5/view?usp=drive_web)  
**14.01** [Тема: Ниткографія](https://drive.google.com/file/d/1bvsmvNVymCoYQZ6xZGUbcYQ2MCdzgzcU/view?usp=sharing)  
**14.01** [Тема: Визначення завдань для виконання проєкту. Основи біоніки в проєктуванні. Вибір об’єкта проєктування](https://drive.google.com/file/d/13y4Fm0kHftZtxTMAcjrrjCakCdnptoLu/view?usp=sharing)  

** Історія України. Всесвітня історія **  
**03.12** [Тема: Повсякденне життя та побут українців у 19 ст.](https://drive.google.com/file/d/1I_2vKC2eCScwYuNW-zNiV13rTHkryuUI/view?usp=sharing)  
**12.01** [Тема: Україна і Східна війна. Ліквідація кріпацтва](https://drive.google.com/file/d/15iKyTOJqD_JsqQpYjl-1d21tDMiRFU59/view?usp=sharing)  
**14.01** [9-А. Тема: Україна і Східна війна. Ліквідація кріпацтва](https://drive.google.com/file/d/1PO5TGAAbHBieaJkKeWaqXLf7jumYfAvF/view?usp=sharing)  
**14.01** [9-Б. Тема: Ліквідація кріпацтва. Реформи 1860-1870рр](https://drive.google.com/file/d/129GBaXSaThZbYXwCrv2ESVZMDPt1KKuu/view?usp=sharing)  

** Геометрія **  
**03.12** [9-Б. Тема: Вектори. Розв’язування задач](https://drive.google.com/file/d/1ykrS5YhJf-ggic_8ad1LHgVjfAVZtKBF/view?usp=sharing)  
**03.12** [9-Б. Тема: Вектори на площині](https://drive.google.com/file/d/1RjV9PuGkr7pomGzkRf1IxFZqe38f5fHj/view?usp=sharing)  
**13.01** [9-Б. Тема: Теорема косинусів. Наслідки з теореми косинусів](https://drive.google.com/file/d/1YpfdHsbBPwSUCuEzPakkc47ODIzI6NMS/view?usp=sharing)  
**13.01** [9-А. Тема: Розв'язування трикутників](https://drive.google.com/file/d/1Y5WUNQHrr86e5dR0fjLd9nCYzCup6n0-/view?usp=sharing)  

** Англійська мова **  
**03.12** [Тема: Винаходи та винахідники](https://drive.google.com/file/d/1_YPlRDOzxWAHMorqZAt9hTRsefrTjAo4/view?usp=sharing)  
**03.12** [Тема: Досягнення вчених](https://drive.google.com/file/d/19XeV2VuNy_amH9X5aWZLrydwz0Jng_xO/view?usp=sharing)  
**07.12** [Тема: Наука i технiчний прогрес](https://drive.google.com/file/d/1yGjt52TT5Ja68IoYE-iQhc5U-vj5TDZN/view?usp=sharing)  
**11.01** [Тема: Організації захисту тварин](https://drive.google.com/file/d/1l_By8gK3RGLDsJL_cOjUvOG2hPpIFA7Y/view?usp=sharing)  
**11.01** [Тема: Захист навколишнього середовища](https://drive.google.com/file/d/1ILYfBJ6IzDIwuM9Gp1aYOK1Atvnf7KT9/view?usp=sharing)  
**13.01** [9-А. Тема: Майбутнє у наших руках](https://drive.google.com/file/d/1nExAnW2sGIZNY-YcjZU-VrvxUzhgEiLp/view?usp=sharing)  
**13.01** [Тема: Майбутнє у наших руках](https://drive.google.com/file/d/1RQ-Ma6rgOg1rLoWxmBrVVPGzAFZlzyvU/view?usp=sharing)  
**14.01** [ІІ група. Тема: Тварини в небезпеці](https://drive.google.com/file/d/1tuTnvhxgYkqvSWILFxeMwLlyyEcC_JGC/view?usp=sharing)  

** Українська література **  
**04.12** [Тема: Григорій Квітка-Основ’яненко. Соціально-побутова сентиментально-реалістична повість «Маруся» - перший прозовий твір в українській літературі](https://drive.google.com/file/d/1IctRSEVhbQKuR7w9WLmBvh9_H6rR7KY7/view?usp=sharing)  
**08.12** [Тема: Утілення морального й естетичного ідеалів в образі головної героїні твору «Маруся» Григорія Квітки-Основ’яненка](https://drive.google.com/file/d/1R5BQK_Ak3rXkgxnO5eNc1QfvOqFMB6zF/view?usp=sharing)  
**08.12** [Тема: Григорій Квітка – Основ’яненко. «Маруся» - перша українська повість нової української літератури](https://drive.google.com/file/d/16ez0tik2MYfC2up6itnSEkdXbaLHB7ub/view?usp=sharing)  
**12.01** [Тема: Література українського романтизму](https://drive.google.com/file/d/1mOgP6dWvVXwPSawELx4m3cn-rAybOybG/view?usp=sharing)  
**12.01** [Тема: Романтизм](https://drive.google.com/file/d/1k0j1k6Gq5-mJ0o6xnUM0hwBAQDBfUZ0E/view?usp=sharing)  

** Фізична культура **  
**04.12** [Тема: Розвиток сили та силової витривалості учнів.](https://drive.google.com/file/d/10ODZR-UG7C9YAJv3bPb-eKqe7kwsjJA4/view?usp=sharing)  
**07.12** [Тема: Розвиток сили та силової витривалості учнів](https://drive.google.com/file/d/12k27PIaN2ZzIUK3lutBO1zOTVn6UWo2s/view?usp=sharing)  
**11.01** [Тема: Розвиток спритності та швидкісно-силових якостей учнів](https://drive.google.com/file/d/1WTy3mT3CjJ4sdcOuh6bBKbXIxEsMY4uD/view?usp=sharing)  
**12.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1YICGzoCACuWwxD_o5BlATFzE7rF5BhFy/view?usp=sharing)  
**13.01** [Тема: Удосконалення та закріплення елементів гри з баскетболу](https://drive.google.com/file/d/1yXSdD8La-0ZbP6xy3uYyL9KkldKupl5e/view?usp=sharing)  
**13.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1GDiGGV6CEt1dKN9to9EufjKydZ_hxn-p/view?usp=sharing)  

** Інформатика **  
**04.12** [Тема: Розроблення програми. Виконання арифметичних обчислень. Уведення, виконання й налагодження програм](https://drive.google.com/file/d/1dpekkJgkf59EosU2y6jtD_cr9PnqzdpZ/view?usp=drive_web)  
**13.01** [Тема: Виконання індивідуальних і групових навчальних проектів із дослідження предметної галузі.](https://drive.google.com/file/d/1OvX1LpPoxgOfNDojztLYgVV3OOs7Vjz3/view?usp=drive_web)  

** Біологія **  
**04.12** [Тема: Фотосинтез: світлова та темнова фази](https://drive.google.com/file/d/1AP4SBbE-Wl8PoIH4LiQXBqO2b-ri70gl/view?usp=sharing)  
**08.12** [Тема: Фотосинтез: світлова та темнова фази](https://drive.google.com/file/d/1S6_jcCPsO5FX4L2cLg4SQky7qNgKGoY5/view?usp=sharing)  
**12.01** [Тема: Біосинтез білка](https://drive.google.com/file/d/1YQLcAEpKdZdHWzeHDsiRbuX5SOuAPHYQ/view?usp=sharing)  
**13.01** [9-А. Тема: Біосинтез білка](https://drive.google.com/file/d/1CMP1DhawEZ9rW1RfhSNG79JhazjcsDlj/view?usp=sharing)  
**13.01** [9-Б. Тема: Біосинтез білка](https://drive.google.com/file/d/1IvcZ6lohy5m0b28pvc0rRmOkad4MkB4o/view?usp=sharing)  

** Українська мова **  
**07.12** [Тема: Усний твір-роздум у публіцистичному стилі мовлення на суспільну тему](https://drive.google.com/file/d/1B1Pj9K4LkO41bylzM2_PTvUpGMqRtovG/view?usp=sharing)  
**07.12** [Тема: Складнопідрядні речення з підрядними обставинними](https://drive.google.com/file/d/1fVWf5gP_b0DCFPvrb2zxgnuf5uoBXjEK/view?usp=sharing)  
**11.01** [Тема: Складнопідрядні речення з кількома підрядними](https://drive.google.com/file/d/1yJCHo9URB20FC9XfzvvW89iZ66s4ira9/view?usp=sharing)  
**13.01** [Тема: Стислий усний переказ тексту публіцистичного стилю](https://drive.google.com/file/d/1-DHsHbSTpEuQ412tstPEzrnv1nLCz9mE/view?usp=sharing)  
**13.01** [Тема: Стислий усний переказ тексту публіцистичного стилю](https://drive.google.com/file/d/119DO-0LnY3dxpYHlGpQ0eLCuXWmcZ7Zn/view?usp=sharing)  

** Фізика **  
**04.12** [Тема: Механічні хвилі](https://drive.google.com/file/d/1gFUenJvZoiJfbG2dXxl35x6LtqAUs2RB/view?usp=sharing)  
**08.12** [Тема: Електромагнітне поле](https://drive.google.com/file/d/1EfXMUGu05I7gJxeY_VOnUyFSvDNKXFWi/view?usp=sharing)  
**08.12** [Тема: Звукові хвилі](https://drive.google.com/file/d/126g0uZowIP3iR08iTKfkKfQ_HqjU3VHf/view?usp=sharing)  
**12.01** [Тема: Модель атома](https://drive.google.com/file/d/1qUzWy-DnK5zTjgJ5rWTaCWiqCLd54CrA/view?usp=sharing)  

** Мистецтво **  
**04.12** [Тема: Сюрреалізм](https://drive.google.com/file/d/1NifrDQX_ktjFsE6qmEyUdO5CkcjpReOn/view?usp=sharing)  

** Алгебра **  
**11.01** [Тема: Квадратні нерівності](https://drive.google.com/file/d/19Gm5ymTCuqJGr9_ikFVp8-WzoFccQtwD/view?usp=sharing)  
**12.01** [9-А. Тема: Квадратні нерівності](https://drive.google.com/file/d/1wA9BKwoKXWPgwQgDQcOQVkvRB8w4_JkE/view?usp=sharing)  

** Основи здоров'я **  
**11.01** [Тема: Емоційна саморегуляція](https://drive.google.com/file/d/11Rz5-2DvjMIYc5RphYWrrLeAr6mJ3TVv/view?usp=sharing)  

** Зарубіжна література **  
**14.01** [Тема: Порівняння образів Євгенія Онєгіна і Печоріна](https://drive.google.com/file/d/1pJyFbhj2u9Dv-3F78b4JEwnI0wb89CYr/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="10 клас">
        <Md>{`
** Українська мова **  
**03.12** [Тема: Лексичні норми української мови](https://drive.google.com/file/d/1XT-saYAg8GwSe8t6S7x7aldPogbaVAMc/view?usp=sharing)  
**04.12** [Тема: Мовна надмірність, уникнення тавтології, плеоназму та мовної недостатності](https://drive.google.com/file/d/1hrAqRLD8lJfa4tLUULSvdeHLwtmxaVu2/view?usp=sharing)  
**04.12** [Тема: Розмовна, просторічна, емоційно забарвлена лексика. Сленг. Екзотизми. Пуризми. Стилістичні можливості розмовної, просторічної лексики](https://drive.google.com/file/d/1EQAzk0Jp_hxAi9YKNzo5NfBpEXW5Ga_Z/view?usp=sharing)  
**08.12** [Тема: Лексика української мови за походженням](https://drive.google.com/file/d/1O0Ba-JtVOJVgg2QA_yQnJqK5hJr7Ut2h/view?usp=sharing)  
**12.01** [Тема: Фразеологічні одиниці української мови. Основні ознаки фразеологізмів. Основні групи фразеологізмів](https://drive.google.com/file/d/1DCFJyJyqINXzaCZp-2S93IiZUjW1crQ7/view?usp=sharing)  
**12.01** [Тема: Фразеологічні одиниці української мови](https://drive.google.com/file/d/12Gg5S1uZiL_BMtWqhjqycUxbHLE-AUXB/view?usp=sharing)  
**13.01** [Стрембицька Л.А. Тема: Стилістична система української мови](https://drive.google.com/file/d/1Q1zBK4NY0K616pLOemT_3nVGop_JrVve/view?usp=sharing)  
**14.01** [Стрембицька Л.А. Тема: Джерела формування фразеологізмів української мови. Використання фразеологізмів у різних стилях мови](https://drive.google.com/file/d/1Uc8ivagU7hWMI6UuVO8Txfk3QaMsqBl1/view?usp=sharing)  

** Українська література **  
**03.12** [Тема: Лексична помилка. Найпоширеніші випадки порушення лексичної норми. Кальки з інших мов, недоречне вживання  українських слів у невластивому їм значенні](https://drive.google.com/file/d/1CfxzHg5xSZsuiWSIreHnKZphpaHdrocv/view?usp=sharing)  
**04.12** [Тема: Комедія «Мартин Боруля». Психологічна переконливість і трагікомічне звучання образу Мартина Борулі. Інші образи у творі. Значення творчості І. Тобілевича для української драматургії](https://drive.google.com/file/d/1egMwZ_m44RercI_fJaz74USyVzLiUEDJ/view?usp=sharing)  
**07.12** [Тема: Урок виразного читання .І.Я Франко - розум і серце українського народу](https://drive.google.com/file/d/1mZUh-mMlj84-ySBLKaVOKjicN2-T0-vK/view?usp=sharing)  
**08.12** [Тема: Іван Франко – поет, прозаїк, драматург, громадський діяч, перекладач, літературний критик і перший галицький учений](https://drive.google.com/file/d/1oFaxSgiWeTF2tujmFmmQXHikcq8JnCLA/view?usp=sharing)  
**11.01** [Тема: Михайло Коцюбинський – людина високої духовної культури](https://drive.google.com/file/d/1HY0h7_QuCjBkNgvGKLzpz38AEtvkhiQm/view?usp=sharing)  
**12.01** [Тема: Психологічна новела «Іntermezzo»](https://drive.google.com/file/d/1o8IzH3YhH87CT0SZTHm8yJBt2_N-f0_x/view?usp=sharing)  
**13.01** [Тема: Зіставлення двох світів. «Психологічно переконливе розкриття внутрішнього стану людини в новелі М. Коцюбинського «Intermezzo». Символічні образи. Поетика імпресіонізму](https://drive.google.com/file/d/1e7EddY4g5DcGMUuCCJR6ICPUTmxVwTdP/view?usp=sharing)  

** Фізика **  
**03.12** [Тема: Механічна робота. Потужність. Кінетична енергія.](https://drive.google.com/file/d/13ktDbpkU-YGMFOs3KRcYIqKot5LfswUQ/view?usp=sharing)  
**08.12** [Тема: Закон збереження енергії](https://drive.google.com/file/d/1XmDNvbUoT_A-Kxyv3hLzAEV86kFrSjHR/view?usp=sharing)  
**08.12** [Тема: Імпульс.Реактивний рух](https://drive.google.com/file/d/1c_MGIN_B14rayQ-AG2VHjGcWjTZaSSNg/view?usp=sharing)  
**12.01** [Тема: Механічні коливання](https://drive.google.com/file/d/1D_PrdzvuncDuJY0hpPy2A8SMK1Vi5Vwu/view?usp=sharing)  

** Інформатика **  
**03.12** [Тема: Введення і редагування даних різних типів. Впорядкування, пошук і фільтрування даних. Робота з запитами на вибірку](https://drive.google.com/file/d/1qwSHNz8AwKcfXYKGDlvibJ_amV3Qd4KE/view?usp=drive_web)
**14.01** [Тема: Проектування та створення об&#39;єктів мультимедіа. Системи керування вмістом для веб-ресурсів](https://drive.google.com/file/d/1TUh59OvfXa2-OyOCefAftOHTBf9rN_hJ/view?usp=drive_web)  

** Фізична культура **  
**04.12** [Тема: Розвиток сили та силової витривалості учнів.](https://drive.google.com/file/d/1SBvvvI6L7-usEP0lkbxvVs85UtZqhjpJ/view?usp=sharing)  
**07.12** [Тема: Розвиток сили та силової витривалості учнів.](https://drive.google.com/file/d/1bVDhnNBqQ35HurKBFbklf2gkmX5fxABN/view?usp=sharing)  
**11.01** [Тема: Розвиток спритності та швидкісно-силових якостей учнів](https://drive.google.com/file/d/1rZFJfznJNx8mZNT-cfDQDT3LpAEMvpIe/view?usp=sharing)  
**11.01** [Тема: Комплекс ранкової гігієнічної гімнастики](https://drive.google.com/file/d/1ULJ_VGIr9_kERv7sVpw3JX_j2349NwRY/view?usp=sharing)  
**13.01** [Тема: Удосконалення та закріплення елементів гри з баскетболу](https://drive.google.com/file/d/111Xat5coKa7CDGGxIcQAyOW-k9MpLult/view?usp=sharing)  
**13.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1BIgERmEclZSLLns6pGJmR79UQvuahvx6/view?usp=sharing)  

** Історія України. Всесвітня історія **  
**04.12** [Тема: Західноукраїнська Народна Республіка.](https://drive.google.com/file/d/1UX5pzPnYGVUlJs01kyXsn3UxARYrvB_5/view?usp=sharing)  
**11.01** [Тема: Поява демократії](https://drive.google.com/file/d/1YA97w93ZHBb5qcSDRkOUixfJySWwWlCo/view?usp=sharing)  
**12.01** [Тема: Утворення Радянського Союзу. Запровадження нової економічної політики](https://drive.google.com/file/d/198gM5KftrRB-qm_6-x-cMHKym0YSwwkJ/view?usp=sharing)  

** Англійська мова **  
**04.12** [Тема: Reading](https://drive.google.com/file/d/1ks5tAkLDNz6WXJjOfcN97bWqpuTajWmp/view?usp=sharing)  
**13.01** [Тема: Комунікаційні технології](https://drive.google.com/file/d/1lMDro9_nrNQROhmbxxwvxtkCw_xfette/view?usp=sharing)  
**13.01** [Тема: Communication technologies](https://drive.google.com/file/d/1JnKfi4N11v4Jc5Fey5IMmp3lZE30yeMy/view?usp=sharing)  

** Захист України**  
**07.12** [Хлопці. Тема: Статути Збройних Сил України. Військові звання військовослужбовців Збройних Сил України](https://drive.google.com/file/d/1OzU2dwv875YIu-Owskc3Irad1zmIoqE9/view?usp=sharing)
**11.01** [Хлопці. Тема: Вогнева підготовка](https://drive.google.com/file/d/190Hpb8Hc2f1DXFKG1XJdIfRWQKXTefWM/view?usp=sharing)  
**11.01** [Дівчата. Тема: Потенційно небезпечні місця. Вибухонебезпечні предмети](https://drive.google.com/file/d/1onH0OCXfhI6qW2YA2RZo6xsNgkVifZKR/view?usp=sharing)  

** Хімія **  
**07.12** [Тема: Насичені одноатомні спирти](https://drive.google.com/file/d/1IfJ4cpMktmfYg7JKuCp4G7s1HGHH3NaY/view?usp=sharing)  
**11.01** [Тема: Фенол](https://drive.google.com/file/d/1GBj55S5WQcQ1tAkfGdVC6YBTIiYejAmR/view?usp=sharing)  

** Географія **  
**11.01** [Тема: Третинний сектор економіки. Нерівномірність економічного розвитку субрегіонів азії та особливості їх участі в міжнародному поділі праці. Зв’язки україни з країнами Азії.](https://drive.google.com/file/d/1uEjvyC_mFoXDQP-tFUQKQ63GqB7vXnQg/view?usp=sharing)  
**14.01** [Тема: Японія. Загальна характеристика](https://drive.google.com/file/d/1hGCt-38PBv_vBJ4KSf-N3A7_sd9VEuzJ/view?usp=sharing)  

** Алгебра **  
**11.01** [Тема: Радіанне вимірювання кутів](https://drive.google.com/file/d/19KcVgym3kZyvIV-SMlDCUuvdZCjmINU4/view?usp=sharing)  

** Технології **  
**12.01** [Тема: Український суванір](https://drive.google.com/file/d/1Qjysoxx4CbkF3hvpoWE8jhs9EKJ-HX7j/view?usp=sharing)  
**12.01** [Тема: Розробка ескізного малюнка виробу](https://drive.google.com/file/d/1njz_ZQeiVuTzj43N9avAHsd-U5nEqNQ3/view?usp=sharing)  

** Громадянська освіта **  
**12.01** [Тема: Вибори. Референдум](https://drive.google.com/file/d/1p44UiEvXNtX23HI7yctZKF41JCkohMMb/view?usp=sharing)  

** Зарубіжна література **  
**13.01** [Тема: Особливості роману 19 століття](https://drive.google.com/file/d/1a-QzVjMDxjhOfN9iYQ16Xrv7kaxMQ2w5/view?usp=sharing)  

** Геометрія **  
**13.01** [Тема: Кути в просторі](https://drive.google.com/file/d/1rjbEKlAjKW4xBCtlEmyQmD8MwGznJaZO/view?usp=sharing)  

** Біологія **  
**14.01** [Тема: Закономірності спадковості. Гібридологічний аналіз](https://drive.google.com/file/d/1FVlYRcqxhNy-PpceFMNbZ9fESAcJfw-m/view?usp=sharing)  
**14.01** [Тема: Основні поняття генетики. Закономірності спадковості](https://drive.google.com/file/d/1Dabm66R9SdlouoWc1auZZiMT7diXBhjM/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="11 клас">
        <Md>{`
** Українська література **  
**03.12** [Тема: «Патетична соната» - драматична опозиція високої мрії і потворної дійсності](https://drive.google.com/file/d/1-l7D_zFg1QA_-aGbH1lADDCULEBgChgc/view?usp=sharing)  
**03.12** [Тема: Микола Гурович Куліш](https://drive.google.com/file/d/1FMV2UWTFbPSAjYr4Gwhv4lIHsEnHucaA/view?usp=sharing)  
**04.12** [Тема: Іван Багряний. Життєвий і творчий шлях письменника. Багряний — публіцист.](https://drive.google.com/file/d/1KjKOrRrOI3epjzcnILvSqcldr4Xbf5XZ/view?usp=sharing)  

** Інформатика **  
**03.12** [Тема: Поняття про мови веб-скриптів та спосіб використання скриптів у гіпертекстових документах](https://drive.google.com/file/d/1jMc7DGcKCgnaUjGwBOw1DKgZov0jVr9k/view?usp=drive_web)
**14.01** [Тема: Поняття про мови веб-скриптів та спосіб використання скриптів у гіпертекстових документах](https://drive.google.com/file/d/1jMc7DGcKCgnaUjGwBOw1DKgZov0jVr9k/view?usp=drive_web)  

** Історія України. Всесвітня історія **  
**04.12** [Тема: Опозиційний рух в Україні 60-80-х рр. ХХ ст.](https://drive.google.com/file/d/1BRFbeZezM4EQBXfjdEyCgfPXCTltDMaR/view?usp=sharing)  
**11.01** [Тема: Початок перебудови](https://drive.google.com/file/d/1ApC9AoA8ydI10AeYp7Uv3LOdbhKO0h8L/view?usp=sharing)  
**14.01** [Тема: «Шістдесятництво» як суспільне і мистецьке явище](https://drive.google.com/file/d/1d3wjMUig-15_zO-1fwZmkhF1edP_lBuJ/view?usp=sharing)  

** Англійська мова **  
**04.12** [Тема: Reading](https://drive.google.com/file/d/1clNCU8I-QMXLumrUeVrrPFrlUHCobR-z/view?usp=sharing)  
**08.12** [Тема: Writing](https://drive.google.com/file/d/1c275FUb4T5R-xkotqqn08tbq5HkvdXX-/view?usp=sharing)  
**12.01** [Тема: Винаходи та винахідники](https://drive.google.com/file/d/1Rm3Gy6W61WhXkbSMFLrPTydEMecqV7F9/view?usp=sharing)  

** Українська мова **  
**07.12** [Тема: Есе «Що робить мене щасливим (щасливою)»](https://drive.google.com/file/d/1xZaYEjnfrn1_BhqFqRKVKQHtugYFExs6/view?usp=sharing)  
**08.12** [Тема: Розділові знаки в простому ускладненому реченні](https://drive.google.com/file/d/1Y4mGclReJDaXcHw6xqFtGXOIANhIcrdP/view?usp=sharing)  
**11.01** [Тема: Пряма і непряма мова, її призначення і граматично смислові особливості](https://drive.google.com/file/d/1y2TTkiq2-8unZ0sfG9PDyv_l7IVRIIhv/view?usp=sharing)  
**12.01** [Тема: Інтонування речень із прямою мовою, діалогом. Цитування](https://drive.google.com/file/d/1UTUZTJzfvGP_ol-XjjKdZOKBqwGMzbsr/view?usp=sharing)  
**13.01** [Тема: Ділові папери. Офіційний лист. Доручення. Розписка](https://drive.google.com/file/d/1LES1JRn6fSklV3SiBMiPhpmwu2Zla_Ji/view?usp=sharing)  

** Фізика **  
**07.12** [Тема: Досліди М.Фарадея. Електромагнітна індукція. Закон електромагнітної індукції. Правило Ленца](https://drive.google.com/file/d/1sj3YVP7d9jBZHf15nSJBU6EKpNTATAIe/view?usp=sharing)  
**11.01** [Тема: Коливальний контур. Виникнення вільних електромагнітних коливань. Перетворення енергії під час вільних електромагнітних коливань](https://drive.google.com/file/d/1hl7jWNW6gvHTIyF_VtSVg_pJ304kN2Dn/view?usp=sharing)  
**13.01** [Тема: Гармонічні електромагнітні коливання](https://drive.google.com/file/d/1SRLJJvZR5aumZVgxAqipha4mhmFw8Q9_/view?usp=sharing)  

** Хімія **  
**08.12** [Тема: Поняття про гальванічний елемент як хімічне джерело електричного струму](https://drive.google.com/file/d/1-18C_qtNZmcyKNShpSVNgHdP_43NAkoS/view?usp=sharing)  
**12.01** [Тема: Загальна характеристика неметалічних елементів](https://drive.google.com/file/d/116iy1q2Om11OkB2Xr2vkKKIGomEWe2pI/view?usp=sharing)  

** Алгебра **  
**11.01** [Тема: Первісна та її властивості](https://drive.google.com/file/d/1L324DYGv9LNfmQRPdS-EqyuIWCETnm6O/view?usp=sharing)  

** Захист України **  
**11.01** [Тема: Повний огляд пораненого, зупинка всіх інших видів кровотеч](https://drive.google.com/file/d/1vGeJ4yYdwbxW2fG2x-JbPlzplwwwZNlL/view?usp=sharing)  
**13.01** [Тема: Надання домедичної допомоги в разі переломів](https://drive.google.com/file/d/17jAfhMnAnx6-iSSVpvLulBTVmTNv45UT/view?usp=sharing)  

** Фізична культура **  
**12.01** [Тема: Комплекс ранкової гігієнічної гімнастики](https://drive.google.com/file/d/1jMHOn2adK6L881jeXPQpOB7TgJflIDGt/view?usp=sharing)  
**14.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1uu-VCkoPaK6Mt7Hh6UAFze7DItJ7al4U/view?usp=sharing)  

** Геометрія **  
**12.01** [Тема: Об'єм піраміди](https://drive.google.com/file/d/1UWQ8LaxxQqgKUAnUq2pLPtpH5B30dHy6/view?usp=sharing)  

** Географія **  
**13.01** [Тема: Природні зони](https://drive.google.com/file/d/1PyrmX2ocO_VPPzR6-2RqG18M9pkSWBlH/view?usp=sharing)  

** Біологія **  
**13.01** [Тема: Екологічні чинники](https://drive.google.com/file/d/1KC52fpGn1EwDad_-OthY7mp_YCefBRLf/view?usp=sharing)  
**13.01** [Тема: Завдання та методи екології](https://drive.google.com/file/d/1x0_L7PhRfIFdPkvMYp_y_nZFtmRRHu4E/view?usp=sharing)  

** Астрономія **  
**13.01** [Тема: Планети-гіганти](https://drive.google.com/file/d/1ELiTkJtJebQ2sSuVQQT5vZ4a9rgadhbU/view?usp=sharing)  

** Технології **  
**14.01** [Тема: Зовнішній вигляд людини. Складові культури зовнішнього вигляду. Косметологія](https://drive.google.com/file/d/17mcFv1pLc97qMEAacSgUtKcEv7ukOQTF/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="Онлайн уроки">
        <Md>{`
1 клас –  [bit.ly/USO1class](https://bit.ly/USO1class)  
2 клас –  [bit.ly/USO2class](https://bit.ly/USO2class)  
3 клас –  [bit.ly/USO3class](https://bit.ly/USO3class)  
4 клас –  [bit.ly/USO4class](https://bit.ly/USO4class)  
5 клас –  [bit.ly/USO5class](https://bit.ly/USO5class)  
6 клас –  [bit.ly/USO6class](https://bit.ly/USO6class)  
7 клас –  [bit.ly/USO7class](https://bit.ly/USO7class)  
8 клас –  [bit.ly/USO8class](https://bit.ly/USO8class)  
9 клас –  [bit.ly/USO9class](https://bit.ly/USO9class)  
10 клас – [bit.ly/USO10class](https://bit.ly/USO10class)  
11 клас – [bit.ly/USO11class](https://bit.ly/USO11class)  
`}</Md>
      </Tab>
      <Tab title="Зворотній зв'язок">
        <Pdf src="/distance-learning/emails.pdf" height="1200px" />
      </Tab>
      <Tab title="Графік роботи педагогічних працівників під час локдауну">
        <Pdf src="/distance-learning/work schedule.pdf" height="1200px" />
        <Pdf src="/distance-learning/optional classes.pdf" height="1200px" />
      </Tab>
      <Tab title="Режим роботи">
        <Tabs>
          <Tab title="Для учнів 1-х класів">
            <Pdf src="/distance-learning/mode/1.pdf" />
          </Tab>
          <Tab title="Для учнів 2-4-х класів">
            <Pdf src="/distance-learning/mode/2-4.pdf" />
          </Tab>
          <Tab title="Для учнів 5-7-х класів">
            <Pdf src="/distance-learning/mode/5-7.pdf" />
          </Tab>
          <Tab title="Для учнів 8-9-х класів">
            <Pdf src="/distance-learning/mode/8-9.pdf" />
          </Tab>
          <Tab title="Для учнів 10-11-х класів">
            <Pdf src="/distance-learning/mode/10-11.pdf" />
          </Tab>
        </Tabs>
      </Tab>
      <Tab title="Освітня платформа HUMAN">
        <p>
          <strong>
            Криворізьку загальноосвітню школу І-ІІІ ст №55 приєднано до сучасної
            освітньої платформи HUMAN. Освітня платформа HUMAN - система, яка
            забезпечує повноцінний навчальний процес в умовах дистанційного
            навчання і включає навчальні плани, мережу школи, розклад уроків,
            зберiгання тем та планів уроків, роботу з медіаматерiалами, видачу і
            перевірку домашніх завдань, календар здійснення контролю за якістю
            знань, моніторинг діяльності як окремо взятого класу, так і учня й
            учителя, навчальний профіль учня, у якому зберігаються усі
            досягнення дитини.
          </strong>
        </p>
        <ul>
          <li>
            <Link to="https://intercom.help/human-help-center/en/articles/3853556-%D1%80%D0%B5%D1%94%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%8F-%D0%B2-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%96-human">
              Реєстрація учнів в системі HUMAN
            </Link>
          </li>
          <li>
            <Link to="https://intercom.help/human-help-center/en/articles/4152986-%D1%8F%D0%BA-%D0%BF%D1%80%D0%B8%D1%94%D0%B4%D0%BD%D0%B0%D1%82%D0%B8%D1%81%D1%8F-%D0%B4%D0%BE-%D0%B7%D0%B0%D0%BA%D0%BB%D0%B0%D0%B4%D1%83">
              Як приєднатися до закладу
            </Link>
          </li>
          <li>
            <Link to="https://intercom.help/human-help-center/en/collections/2238534-%D0%B4%D0%BB%D1%8F-%D1%83%D1%87%D0%BD%D1%96%D0%B2">
              Довідковий центр для учнів
            </Link>
          </li>
        </ul>
        <img src="/distance-learning/human-warning.jpg" width="15%" />
        <p>
          <strong>Шановні батьки та учні!</strong>
        </p>
        <p>
          Опрацювання навчального матеріалу під час карантину - це особиста
          відповідальність учня, тому просимо контролювати виконання завдань
          дітьми та дотримання ними таких правил:
        </p>
        <ol>
          <li>Уроки будуть проводитися згідно розкладу.</li>
          <li>
            Завдання на урок можна взяти на освітній платформі HUMAN або на
            офіційному сайті школи у розділі «Дистанційне навчання».
          </li>
          <li>
            Урок створюються та наповнюються відповідно до розкладу уроків учнів
            1-11 класів КЗШ №55 КМР ДО. Учень переглядає навчальні матеріали,
            виконує завдання та виконанні роботи надсилає вчителю на освітній
            платформі HUMAN або на електронну адресу.
          </li>
          <li>
            Під час дистанційного навчання здійснюється оцінювання учнів (крім
            учнів 1-3 класів). Тому просимо відповідально та ретельно виконувати
            усі завдання
          </li>
        </ol>
      </Tab>
      <Tab title="На допомогу вчителю">
        <Md>{`
1. [Як технічно організувати дистанційне навчання – покрокова інструкція](http://bit.ly/33LwF2M)
1. [Як вони це роблять. Вчительки початкової, базової та старшої шкіл про організацію оцінювання і дистанційного навчання](http://bit.ly/3anfc37)
1. Матеріали та інструменти для дистанційного навчання від фінського проєкту (+приклад онлайн-уроку) [http://bit.ly/2JKxoIt](http://bit.ly/2JKxoIt), [http://bit.ly/2Vtmayx](http://bit.ly/2Vtmayx), [http://bit.ly/2VUEOzC](http://bit.ly/2VUEOzC), [http://bit.ly/2ZfRtiz](http://bit.ly/2ZfRtiz)
1. [Як працювати в Google-клас: покрокова інструкція](http://bit.ly/3bGXNms)
1. [Як використовувати YouTube у дистанційному навчанні](http://bit.ly/39O51Uh)
1. [Дистанційне навчання в 3-4 класах: інструкції, приклади уроків та комунікації з батьками](http://bit.ly/2yz4d8Z)
1. [10 ЛАЙФХАКІВ ДЛЯ ВЧИТЕЛІВ і порада батькам – вчителька математики про дистанційне навчання](http://bit.ly/2VdGDWP)
1. [Як організувати дистанційне навчання для дітей з ООП. Досвід вчителів](http://bit.ly/3a5Odbi)
1. [Працювати з класом онлайн. Як гімназія “Очаг” навчає дистанційно](http://bit.ly/3egl2pz)
1. [Як розробити дистанційний урок для 1-2 класів – інструкція від вчительки](http://bit.ly/2yvy3ez)
1. [Простою мовою: які рекомендації щодо дистанційного навчання дає латвійське міністерство освіти своїм учителям](http://bit.ly/2KaVlIX)
1. [Як організувати дистанційне навчання: досвід директорів шкіл](https://bit.ly/34UOQ6V)
1. [Практики та підходи до дистанційного навчання – рекомендації для вчителів](http://bit.ly/2YaInDB)
1. [Як сільська школа використовує власну онлайн-платформу (і як це зробити іншим закладам)](http://bit.ly/2SkkFki)
1. [Трудове і фізкультура онлайн – як учителі проводять уроки на відстані](http://bit.ly/3aWrCyz)
1. [Дистанційне навчання: як зацікавити учнів – поради від учительки](http://bit.ly/2WoaCMi)
1. [Найважливіше – підтримка. Як дистанційно навчаються старші школярі у Фінляндії](http://bit.ly/3nj9aHN)
1. [Як поєднати дистанційне навчання з інклюзивним](http://bit.ly/2xSuoYd)
1. [Як створити ефективний контент уроків української для формувального оцінювання – лайфхаки від вчительки](http://bit.ly/2zNU8pc)
1. [Освіта може стати більш суспільною справою, а не просто послугою. Засновник PISA про школи після пандемії](http://bit.ly/2AiOJ9T)
1. [Уроки карантину. Що радять директори шкіл](http://bit.ly/3dOPSoC)
1. [Уроки карантину: що радять учителі](http://bit.ly/3cU2Y2H)
1. [Коли освіта в пріоритеті. Як школи і батьки співпрацювали дистанційно](http://bit.ly/3hooW10)
1. [Онлайн-навчання для дітей з ООП – як зробити його доступнішим](http://bit.ly/37A636N)
1. [Змішане навчання. Як вчителі працюють і офлайн, і онлайн](http://bit.ly/3d7chxS)
1. [Недистанційна освіта під час карантину: 10 фактів про те, як в Індії учні навчають учнів](http://bit.ly/32lVXF5)
1. [Навчання в зимовий локдаун: що рекомендує Київ своїм закладам освіти](http://bit.ly/38RzClo)
1. [Як учителю створити презентацію до уроку – відеоінструкція](http://bit.ly/39dzdde)
1. [Тривалість навчального заняття під час дистанційого формату](https://mon.gov.ua/ua/news/trivalist-navchalnogo-zanyattya-pid-chas-distancijnogo-formatu-lishayetsya-nezminnoyu-rozyasnennya-mon)
`}</Md>
      </Tab>
      <Tab title="На допомогу батькам">
        <Md>{`
1. [Батькам школярів: 20 запитань та відповідей про дистанційне навчання](https://eo.gov.ua/2021/01/12/batkam-shkoliariv-20-zapytan-ta-vidpovidey-pro-dystantsiyne-navchannia)
          `}</Md>
      </Tab>
    </Tabs>
  );
}
