/* eslint-disable no-useless-escape */
/* eslint-disable no-irregular-whitespace */

import Link from "components/link";
import Md from "components/md";
import Pdf from "components/pdf";
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
1.  [КЗШ №55. Про організацію дистанційного навчання в освітньому закладі під час локдауну з 11.01.2021р](https://drive.google.com/file/d/1uNy48stXlzjLSZktg9walyBT3w-BVm2E/view?usp=sharing)
1.  [Положення про дистанційне навчання](https://drive.google.com/file/d/1kZ93fjRC0NNuyqYM1XtbvCrm3UTHOcRr/view?usp=sharing)
1.  [КЗШ №55. Положення про дистанційну форму здобуття (повної)  загальної середньої освіти в КЗШ № 55 КМР ДО](https://drive.google.com/file/d/1_NYrMvjnVHFkAzyToO1oPkllvfq4mR2M/view?usp=sharing)
1.  [Про затвердження протиепідемічник заходів у закладах освіти на період карантину у зв'язку поширенням коронавірусної хвороби (COVID-19)](https://moz.gov.ua/uploads/ckeditor/%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B8/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%B9%20%D0%A1%D0%B0%D0%BD%D1%96%D1%82%D0%B0%D1%80%D0%BD%D0%B8%D0%B9%20%D0%BB%D1%96%D0%BA%D0%B0%D1%80/%D0%9F%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0%2050.pdf)
1.  [Про запровадження карантинних обмежень](https://drive.google.com/file/d/1HmaH-2SeIwVYnFidmX4VMxskvdbiHYsW/view?usp=sharing)
`}</Md>
      </Tab>
      <Tab title="1 клас">
        <Tabs>
          <Tab title="1 клас">
            <Md>{`
** Англійська мова **  
**11.01** [Тема: Я можу стрибати](https://drive.google.com/file/d/1BpN_3Xx64mdrL7dXNoi-XJmxhACiZSM9/view?usp=sharing)  
**13.01** [Тема: Я можу стрибати](https://drive.google.com/file/d/18mrFTChsBRXWs_rlI1xa6msZVvDZdebB/view?usp=sharing)  
**15.01** [Тема: Я можу читати](https://drive.google.com/file/d/1qMXDFOcPJ5vnz6GPelMXvdqDWwQ_C-ol/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="1-А">
            <Md>{`
** Музичне мистецтво **  
**08.12** [Тема: Казкові пригоди](https://drive.google.com/file/d/1MdrGUQErQR9z4-v2mhl98pkNzoyjjcTv/view?usp=sharing)  
**12.01** [Тема: Музика розповідає про людину](https://drive.google.com/file/d/1IDBGPlGC99GoOMpWx7NFZ-nsH4QRmR2H/view?usp=sharing)  
**13.01** [Тема: Музика розповідає про людину](https://drive.google.com/file/d/1IDBGPlGC99GoOMpWx7NFZ-nsH4QRmR2H/view?usp=sharing)  

** Я досліджую світ **  
**03.12** [Тема: Вода та її властивості. Демонстрація властивостей води](https://drive.google.com/file/d/1koK1E1cpGKmCrjKFO1RHf4_HVJOPHgsO/view?usp=sharing)  
**04.12** [Тема: Властивості грунту](https://drive.google.com/file/d/1R4YdWalufPdylwvMLfy2LqOxv5eHkW8T/view?usp=sharing)  
**07.12** [Тема: Значення грунту для живоi природи](https://drive.google.com/file/d/1fgUN4HIFVeZ2t7ohdyHD2MQTEpaGvGk_/view?usp=sharing)  
**11.01** [Тема: Різноманітність рослин. Їх будова](https://drive.google.com/file/d/1kHLkzM1v4EWkM66jIAf06hNIviTqWQ3o/view?usp=sharing)  
**14.01** [Тема: Дерева, кущі, трав'янисті рослини. Листяні та хвойні рослини](https://drive.google.com/file/d/1m43GaJ8E_aM7IVdiIw1lxFO5EUg534mw/view?usp=sharing)  
**15.01** [Тема: Дикорослі та культурні рослини](https://drive.google.com/file/d/1ksS6aBxXyeNpD8srp7g1cCROaVf3DhhI/view?usp=sharing)  
**18.01** [Тема: Значення культурних рослин. Дослідження насіння соняшника](https://drive.google.com/file/d/1-X58UszfFJHtnwB--zZ3vcbGoq-fWSL0/view?usp=sharing)  
**21.01** [Тема: Різноманітність тварин. Дикі та свійські тварини](https://drive.google.com/file/d/18KtTKyxuhTqXYe5RV1ehC3dPRQajcQBV/view?usp=sharing)  
**22.01** [Тема: Я досліджую світ Комахи](https://drive.google.com/file/d/1Es5iQGJ2kcgJ6qPBzgWoVWlxq8wopY-H/view?usp=sharing)  
**29.03** [Тема: Родиннi традиції i свята](https://drive.google.com/file/d/1wwdKALHVAvRdOVKmcAEzQkzq0Z1OCYyW/view?usp=sharing)  

** Математика **  
**03.12** [Тема: Переставний закон додавання](https://drive.google.com/file/d/1BLi2UtjK2pNwLTdsbZBZQpQnam1ixVsV/view?usp=sharing)  
**04.12** [Тема: Вимірювання довжини відрізків. Сантиметр](https://drive.google.com/file/d/1ybdLJpQ2ujp_B50mgaW0wNd3j-Ya3-jd/view?usp=sharing)  
**12.01** [Тема: Відкриваємо правило знаходження невідомого доданка](https://drive.google.com/file/d/1rKJ2AOVBSJuECbt_09Oq6-QoHNRotcsY/view?usp=sharing)  
**13.01** [Тема: Називаємо компоненти та результат дії віднімання](https://drive.google.com/file/d/1qOf5iXa7MsSFTWx79Tnr_ATlJnCMarh8/view?usp=sharing)  
**14.01** [Тема: Додаємо і віднімаємо числа. Обчислення значень виразів двома способами](https://drive.google.com/file/d/1lUk4ycfmRWhwlDHZAwiDlKFlaOWf94lk/view?usp=sharing)  
**19.01** [Тема: Будуємо відрізки. Вимірювання довжини відрізків лінійкою](https://drive.google.com/file/d/1KkjgsucUJoMlMyK5DcSZIzYGPg8DiBsi/view?usp=sharing)  
**20.01** [Тема: Вивчаємо вирази на 2 дії](https://drive.google.com/file/d/1taDFJBGU4C4eHjXsMPSRvsS7x40Cz9Jf/view?usp=sharing)  
**21.01** [Тема: Додаємо і віднімаємо число 3. Обчислення значень виразів двома способами](https://drive.google.com/file/d/10ItmpqbmKm9-ZIImnhMsi-lQIw8R_1wG/view?usp=sharing)  
**22.01** [Тема: Досліджуємо таблиці додавання і віднімання числа 3](https://drive.google.com/file/d/1kVovTr8bKw3H9cMIsxH474Hd-jWvOKBH/view?usp=sharing)  
**30.03** [Тема: Записуeмо задачу_коротко. Пiдбiр опорноi схеми до задачi](https://drive.google.com/file/d/1xI7wSnBCdUgF9VBatK6ZNTDYY_JH86jP/view?usp=sharing)  
**31.03** [Тема: Досліджуємо властивості величин. Ціле і частина. Визначення довжини ламаної. Розв’язування задач](https://drive.google.com/file/d/1k0c9c1PHoJNVpq_8AhQ4TwjMRMMxJsh3/view?usp=sharing)  

** Читання **  
**03.12** [Тема: Переглянути відео](https://drive.google.com/file/d/1D2aar6UzW4Tfu4bdRX5yZWNcV_PluYtf/view?usp=sharing)  
**11.01** [Тема: Ознайомлення з 2 частиною букваря. Закріплення звукових значень вивчених букв](https://drive.google.com/file/d/1M42xbopBlUqfoF7kDyyt2uig0oJKtekH/view?usp=sharing)  
**12.01** [Тема: Звуки г, г', позначення їх буквою ге](https://drive.google.com/file/d/1Tfgh0_GvPEilEJReJ2faBaWeZ8UHK36R/view?usp=sharing)  
**13.01** [Тема: Закріплення звукових значень букви г](https://drive.google.com/file/d/1XEqZIjINZblPsGOn5A5_RomiPOQHHuwW/view?usp=sharing)  
**14.01** [Тема: Читання Звук ґ, позначеня його буквою ґе](https://drive.google.com/file/d/1qH8vagA0iXgFMd8xEeJEg51Ko-sooPRQ/view?usp=sharing)  
**18.01** [Тема: Закріплення звукових значень вивчених букв](https://drive.google.com/file/d/1TQbBDeZS7TNI1BSBc0IPHCRJzyFGBj8A/view?usp=sharing)  
**19.01** [Тема: Звук (ж), позначення його буквою же](https://drive.google.com/file/d/1OyDkJmyvWpBIsE9pPDOfBBjw0WWYZdQW/view?usp=sharing)  
**20.01** [Тема: Закріплення звукового значення букви же](https://drive.google.com/file/d/1QrpDF-AqT-GPNHAuIjuWQ8ZDxhBfQnnq/view?usp=sharing)  
**29.03** [Тема: Вправи для розвитку навички читання. Загадка. Л.Голота Хто в хатцi живе](https://drive.google.com/file/d/1yO8CSOUXCRsQxaEui7UrgTTo4KirP0-J/view?usp=sharing)  
**30.03** [Тема: Вправи для розвитку навички читання. Загадка. За Л.Борщевською «Папужка»](https://drive.google.com/file/d/1ntwhlnbaeU4SULfKO629i6ZI4On1WeOK/view?usp=sharing)  
**31.03** [Тема: Читаю і розповідаю. Вправи для розвитку навички читання. І.Олексин «Бачить мати», Г.Бойко «Де букварик?»](https://drive.google.com/file/d/12Kucs7T2-fvFXZB9OrEmDR2RFAUNuvHy/view?usp=sharing)  

** Англійська мова **  
**04.12** [Тема: Школа](https://drive.google.com/file/d/1dVzlit8c58ztKuqNk70e7sNuMCzAQzqZ/view?usp=sharing)  
**07.12** [Тема: Моя родина](https://drive.google.com/file/d/1tHi4PcA9O7IS2KKBnV2xnGPoD9KJ7ESr/view?usp=sharing)  
**11.01** [Тема: Я можу стрибати](https://drive.google.com/file/d/1TLstAd2Z6IDuV9KpJ5HsqfmC1Y7Y7Tan/view?usp=sharing)  
**15.01** [Тема: Я можу читати](https://drive.google.com/file/d/10lHbHxGgVBxLDjU5jqUalRlXbamcJcfr/view?usp=sharing)  
**18.01** [Тема: Час із родиною](https://drive.google.com/file/d/12xvSL2u_EUz_3FL3ML-aF2MLqu5J_oAh/view?usp=sharing)  
**22.01** [Тема: У крамниці](https://drive.google.com/file/d/1b0CfvVVVli7Ky3-50O5Rfdine03Ycpbw/view?usp=sharing)  
**29.03** [Тема: Меню](https://drive.google.com/file/d/1ETICw-V2w3jm6Ep2vErEn9Kr6OwHpG1k/view?usp=sharing)  

** Навчання грамоти **  
**04.12** [Тема: Звуки д, д’, позначення їх буквою «де». Практичне засвоєння дзвін-кої вимови звуків у кінці складів і слів. Словниково-логічні вправи](https://drive.google.com/file/d/1ZAOClYQ8HSOzVHbQ4qSlFuvsrc27sgkS/view?usp=sharing)  
**07.12** [Тема: Письмо великої букви Т («те»)](https://drive.google.com/file/d/18W00N1ReiIh331-RUeCaRTs0nlzzX2Gg/view?usp=sharing)  
**11.01** [Тема: Закріплення знань писати вивчені букви, слова і речення з ними](https://drive.google.com/file/d/1VwaqVEl9dT-ePiBA7Ng6bUPaKXT4kWCU/view?usp=sharing)  
**12.01** [Тема: Письмо малої букви г](https://drive.google.com/file/d/1OCs882gQeau-4rCbcHVvIIPpQva7zYiO/view?usp=sharing)  
**13.01** [Тема: Письмо великої букви Г](https://drive.google.com/file/d/1qneFmbWtfiHe-OUiMc7e9zs2hZ7f3Mcp/view?usp=sharing)  
**18.01** [Тема: Письмо малої букви г](https://drive.google.com/file/d/1JDTgSjJ7Lk1aRkyT1gekTPxdXArf6-th/view?usp=sharing)  
**19.01** [Тема: Письмо великої букви г](https://drive.google.com/file/d/1UbpofOTWPt3elNGPSdajQXCMZVQlazGy/view?usp=sharing)  
**20.01** [Тема: Письмо малої букви ж](https://drive.google.com/file/d/1bQpu90F1j7sZ-34TCHmQqqA0NYB2vsBe/view?usp=sharing)  
**21.01** [Тема: Письмо великої букви Ж](https://drive.google.com/file/d/11Feun46chRNuRl99M35kX9NTefIgk9A-/view?usp=sharing)  
**29.03** [Тема: Удосконалення умiння писати вивченi букви, слова i речення з ними](https://drive.google.com/file/d/1NBb7CZ1FVIApw_JB4wxH6tfh3Jq-QR2o/view?usp=sharing)  
**30.03** [Тема: Засвоєння правил мовленнєвого етикету під час знайомства. Складання і записування речень](https://drive.google.com/file/d/1Up8oQdGU1T0HRJiQjWP5L6hgg7soDcwD/view?usp=sharing)  
**31.03** [Тема: Написання слів із буквою ґ. Побудова речень за поданим початком і малюнками](https://drive.google.com/file/d/1HTt5P7tqf6IDlRzZYmxuHE-bZrDLd4Wm/view?usp=sharing)  

** Фізична культура **  
**12.01** [Тема: Руханка](https://drive.google.com/file/d/1L4Jc2b_n8nGf6CHFQ-VBJToOsyLZUVwj/view?usp=sharing)  
**13.01** [Тема: Home Workout](https://drive.google.com/file/d/12zgnhoZ-Yxfez8Ih5vqLk-uVHlUvZcS8/view?usp=sharing)  
**19.01** [Тема: Руханка](https://drive.google.com/file/d/1UtEaGYrew7Fi1WZ6vQkFFsJcb32tOJA6/view?usp=sharing)  
**20.01** [Тема: Руханка](https://drive.google.com/file/d/1B4FV3dddyGDmFww2dIRHpKDBR7q8D5fP/view?usp=sharing)  
**22.01** [Тема: Руханка](https://drive.google.com/file/d/1Zf3EbNJglB0P1BjhIGFDLNOAs_mjP7KV/view?usp=sharing)  
**30.03** [Тема: Ранкова зарядка](https://drive.google.com/file/d/1_IYwaqWYz5l6otp-cVyvwkud5q1ZFJ66/view?usp=sharing)  
**31.03** [Тема: Ранкова гiмнастика](https://drive.google.com/file/d/1eYMY-IHIYoVWJWcvQJ5rFamJduEQ9FDQ/view?usp=sharing)  

** Дизайн і технології **  
**14.01** [Тема: Розумна сова](https://drive.google.com/file/d/1Ja33glOd8DLO8tlF8InGD6-KL2jBX0Fp/view?usp=sharing)  
**21.01** [Тема: Леопардик і Тигрик. Робота з папером](https://drive.google.com/file/d/1JxkYpTcv9YJUsRopBOfmwj2ueWveSaN0/view?usp=sharing)  

** Образотворче мистецтво **  
**12.01** [Тема: Мандри Країною Мистецтв. Цирк](https://drive.google.com/file/d/15CcPLCvh63NS8X-dK6GCR1gH4bDpAgmT/view?usp=sharing)  
**19.01** [Тема: Зустріч з театром. Ляльковий театр. Малювання ляльки до казки Лисичка, Котик і Півник](https://drive.google.com/file/d/1wMtKr4enzYHq59qalPeyWFEvu_HDch5P/view?usp=sharing)  
**30.03** [Тема: Великодні писанки. Малювання писанки](https://drive.google.com/file/d/1IxZg--pyRebmmWJ2pXm3xvTyKGNbNMsH/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="1-Б">
            <Md>{`
** Музичне мистецтво **  
**08.12** [Тема: Казкові пригоди](https://drive.google.com/file/d/1MdrGUQErQR9z4-v2mhl98pkNzoyjjcTv/view?usp=sharing)  
**12.01** [Тема: Музика розповідає про людину](https://drive.google.com/file/d/1IDBGPlGC99GoOMpWx7NFZ-nsH4QRmR2H/view?usp=sharing)  
**19.01** [Тема: У країні мультфільмів](https://drive.google.com/file/d/10EybXfz2BY7dBaF0CHqO8xtysvHWXN4U/view?usp=sharing)  
**30.03** [Тема: Краса і здоров'я.](https://drive.google.com/file/d/19kcbKKaPuGpLIRy4Ywt4wN7vl3iV9rm0/view?usp=sharing)  

** Математика **  
**03.12** [Тема: Досліджуємо таблиці додавання і віднімання числа 1](https://drive.google.com/file/d/1GMRjfOoX8kQHz1CnDqad7zKREO7hd8iM/view?usp=sharing)  
**04.12** [Тема: Переставна властивість додавання](https://drive.google.com/file/d/13-xyT94x5uFpIGxJcmwHee3b_0Y5-J1F/view?usp=sharing)  
**07.12** [Тема: Вимірюємо довжини відрізків](https://drive.google.com/file/d/1OV81adXAyqBvgktML8N-lac3hQK9xlCc/view?usp=sharing)  
**08.12** [Тема: Досліджуємо взаємозв’язок додавання і віднімання](https://drive.google.com/file/d/1v__wqM9AjuRO1SQlpZQC_2E377hLHblN/view?usp=sharing)  
**11.01** [Тема: Відкриваємо правило знаходження невідомого доданка](https://drive.google.com/file/d/1TXTvGC1zLdt6rbB0GeJbz6mjqsEvOQU2/view?usp=sharing)  
**12.01** [Тема: Називаємо компоненти та результат дії віднімання](https://drive.google.com/file/d/177l3cKYaBKwtQRuo92p_Wa0ALaEVSaKt/view?usp=sharing)  
**14.01** [Тема: Додаємо і віднімаємо числа](https://drive.google.com/file/d/11FZP6LeGetyPmQ8Xs_fCuKvDcSJhK8Vu/view?usp=sharing)  
**15.01** [Тема: Вимірюємо довжини відрізків](https://drive.google.com/file/d/1248YDFV2r0BQpUOytj8_JGanCw96feVB/view?usp=sharing)  
**18.01** [Тема: Будуємо відрізки](https://drive.google.com/file/d/15FL79EsHDBgV_n0yCebGcNUHe2vxXXmu/view?usp=sharing)  
**19.01** [Тема: Вивчаємо вирази на дві дії](https://drive.google.com/file/d/1T29NLqDFqysXz_gp9ukajG-SJ7I0iGhF/view?usp=sharing)  
**21.01** [Тема: Додаємо і віднімаємо число 3](https://drive.google.com/file/d/1pgm8-sW4nhzufcJ_gLbXl9vo4YUxcAvm/view?usp=sharing)  
**22.01** [Тема: Досліджуємо таблиці додавання і віднімання числа 3](https://drive.google.com/file/d/1EAkqcVqFxOsxQyqGM-oo27AfDQUtykBN/view?usp=sharing)  
**29.03** [Тема: Повторення вивченого матеріалу. Узагальнення і систематизація знань учнів](https://drive.google.com/file/d/1aF0ZrDg-kPT08Nu1THWLykQoKPfMeP_f/view?usp=sharing)  
**30.03** [Тема: Записуємо задачу коротко. Підбір опорної схеми до задачі](https://drive.google.com/file/d/1M0EvOJJ9I1j3aJ1H-1HkMTmTUqa1pziV/view?usp=sharing)  

** Письмо **  
**03.12** [Тема: Написання рядкової букви "т" (те), складів, слів з нею](https://drive.google.com/file/d/1gsIdnoi5dQYR7EUT3bzl3PpepuFbdQXk/view?usp=sharing)  
**07.12** [Тема: Написання великої букви т](https://drive.google.com/file/d/1uAGCYvyMSTRVlXw8drZ8RAerh1UesUdL/view?usp=sharing)  
**08.12** [Тема: Написання малої букви д, складів, слів і речень з вивченими буквами](https://drive.google.com/file/d/1Q1xk7FNj-EbjL_uWfY5gBlXKRTbAQGa4/view?usp=sharing)  
**12.01** [Тема: Удосконалення вміння писати вивчені букви слова і речення з ними](https://drive.google.com/file/d/1MmVege0nQVfVRoi73izO_UmLKvDSfjJG/view?usp=sharing)  
**13.01** [Тема: Письмо малої букви г. Підготовчі графічні вправи.  Написання складів, слів  із буквою г. списування речень, поданого друкованим шрифтом](https://drive.google.com/file/d/1f4gyJiwBHoQfm5LxVvqLWiWwN0UnkD8B/view?usp=sharing)  
**14.01** [Тема: Написання великої букви Г, складів, слів і речень з вивченими буквами](https://drive.google.com/file/d/1Dh6k8IrtPVoQiWWfu__hWBIV7VVbpaGY/view?usp=sharing)  
**18.01** [Тема: Написання малої букви ґ. Письмо складів, слів і речень з вивченими буквами. Списування друкованого речення](https://drive.google.com/file/d/12oFAzK3XjpzjXJfpCZ6MgV9nzf44kxvr/view?usp=sharing)  
**19.01** [Тема: Написання великої букви Ґ, складів, слів і речень з вивченими буквами](https://drive.google.com/file/d/1IWCqaokJO42MISaY0Rmo_t6TV6L8bc25/view?usp=sharing)  
**20.01** [Тема: Написання малої букви ж, складів, слів і речень з вивченими буквами. Списування друкованого речення](https://drive.google.com/file/d/1AQBiBXT1F7bvxfyfUlsrBUkTHm4gqTX_/view?usp=sharing)  
**22.01** [Тема: Написання великої букви ж. Письмо складів, слів і речень з вивченими буквами. Списування друкованого речення](https://drive.google.com/file/d/1MjThDMBKp_yn9MVl7Zfph7ijaoknx6Np/view?usp=sharing)  
**30.03** [Тема: Удосконалення навичок письма вивчених букв, слів і речень з цими буквами. Списування друкованого речення](https://drive.google.com/file/d/1reNIdGV06VcCz8Nop4Ml8XyM6OIRhDCx/view?usp=sharing)  
**31.03** [Тема: Застосування правил мовленнєвого етикету під час знайомства](https://drive.google.com/file/d/1eH818zgobPRkPWZjGX72T_MwMHvHIyrP/view?usp=sharing)  

** Фізична культура **  
**03.12** [Тема: Постава як основа здоров’я. Танцювальеі кроки.](https://drive.google.com/file/d/1YmlLjjEr2r51vorkocbZ1-mCm6zB9eKs/view?usp=sharing)  
**07.12** [Тема: Зарядка](https://drive.google.com/file/d/1lMcr7-6BkyTXHrHSHyRy59NDZesMKr3j/view?usp=sharing)  
**11.01** [Тема: Перегляд відео](https://drive.google.com/file/d/1B2Wpovo6YBxECDsKgjZmw8b9dJMWldZt/view?usp=sharing)  
**14.01** [Тема: Загально-розвивальні вправи](https://drive.google.com/file/d/1crDAVt7RUgm4gZ41SaAnn0yDoCRqcvop/view?usp=sharing)  
**15.01** [Тема: Дистанційне навчання на уроці фізичної культури](https://drive.google.com/file/d/16iW-B-bxwz5U53maOG8B4W0qaxRW6Y7s/view?usp=sharing)  
**18.01** [Тема: Організовуючі вправи. Комплекс вправ ранкової гімнастики](https://drive.google.com/file/d/1AilRgz09v2eKkLRRL_Kd5J7Xu2RfXRhX/view?usp=sharing)  
**21.01** [Тема: Організовуючі вправи. Комплекс вправ ранкової гімнастики](https://drive.google.com/file/d/1Axs1eyTY0EVwyrUBOW4on5qA1LyFAEHt/view?usp=sharing)  
**22.01** [Тема: Комплекс вправ ранкової гімнастики](https://drive.google.com/file/d/19oivc_8KBD7f1E8O50VPoijugD-3OLrx/view?usp=sharing)  
**29.03** [Тема: Вправи для опанування навичок володіння м’ячем](https://drive.google.com/file/d/116Sk3gZ3cud8FSfxSwAIi-8q-bxLFS4W/view?usp=sharing)  

** Читання **  
**04.12** [Тема: Велика буква т. Читання слів, речень і тексту з вивченими літерами](https://drive.google.com/file/d/1-j7zPCcPLUsNpLGKPI9Z91e5oTld9ob8/view?usp=sharing)  
**08.12** [Тема: Звуки [д], [д']. мала буква д. Читання складів, слів, речень і тексту з вивченими літерами](https://drive.google.com/file/d/1Kt1cTsouFGQBsrP_vPr9GJPx1B2SWC_m/view?usp=sharing)  
**11.01** [Тема: Читаю і розповідаю. Закріплення звукових значень вивчених букв. Читання складів, слів. Опрацювання тексту](https://drive.google.com/file/d/1Zb7pRHOpoOoEPtpGHAOk8OLZRXSUG4mY/view?usp=sharing)  
**12.01** [Тема: Читання слів, речень і тексту з вивченими літерами](https://drive.google.com/file/d/1R7_tJY5BTQBmpYJ-RiDYF_Ui_cQvZIbc/view?usp=sharing)  
**13.01** [Тема: Велика буква г. Читання слів, речень і тексту з вивченими літерами](https://drive.google.com/file/d/1jcTL3toDDq5XM-jaRDkHr_1pRc8TtVNU/view?usp=sharing)  
**19.01** [Тема: Закріплення вміння читати](https://drive.google.com/file/d/1RyXClkVcd9ivWzftmqn2VUt4p972ngjF/view?usp=sharing)  
**20.01** [Тема: Звук [ж]. Мала буква ж. Читання слів і тексту з вивченими літерами](https://drive.google.com/file/d/15TWRAvtjeI9toQOsbcjwRqLy5Mat0I08/view?usp=sharing)  
**21.01** [Тема: Велика буква ж. Читання складів, слів, речень і тексту з вивченими літерами](https://drive.google.com/file/d/1rH4hcWWVpyEYmeY5HCk_Dxu1O4d6kvfJ/view?usp=sharing)  
**29.03** [Тема: Читаю і розповідаю. Вправи для розвитку навички читання. Загадка. За  Л. Борщевською “Папужка”](https://drive.google.com/file/d/1JT2L84DbyvsO34gYuST2mh0zZ6OTAGTR/view?usp=sharing)  
**30.03** [Тема: Читаю і розповідаю. Вправи для розвитку навички читання. І. Олексин “бачить мати...”. Грицько Бойко  “Де букварик?” . П. Кралюк “Що разом?”](https://drive.google.com/file/d/1igI5SrrPDrdDpHLJhS8b0ApVAsCvAc-R/view?usp=sharing)  
**31.03** [Тема: Читаю і розповідаю. Вправи для розвитку навички читання. Й. Курлат “Добрий”. О. Мітта “ У гостях і вдома”.](https://drive.google.com/file/d/1vE0921fh0r_HVCwNPbLc-i-SlDO8NduL/view?usp=sharing)  

** Дизайн і технологія **  
**07.12** [Тема: Зимова мозаїка. «Сипле,сипле сніг…»](https://drive.google.com/file/d/1AERA7DfM5Lc708yBsknO2y1BMta2evIW/view?usp=sharing)  
**11.01** [Тема: Розумна сова. Робота з пластиліном. Виготовлення із пластиліну плоских зображень. Ліплення сови за зразком](https://drive.google.com/file/d/1gGmVSNx13vkIb_HuIgeGzgX226uj706_/view?usp=sharing)  
**13.01** [Тема: Мандри Країною Мистецтв. Цирк. Циркова афіша. Створення аплікації веселого циркового клоуна](https://drive.google.com/file/d/1vkFJEZU4JQNAwMC1H6mOrM9_nqpVGufL/view?usp=sharing)  
**18.01** [Тема: Леопардик і тигрик.  Робота з папером. Згинання і складання паперу. Виготовлення леопардика або тигрика в техніці оригамі за зразком](https://drive.google.com/file/d/1uwly2Fce3gwINDMRE11cK_ENnOOq8rS9/view?usp=sharing)  
**29.03** [Тема: Смачна грушка. Робота з пластиліном. Виготовлення із пластиліну плоских зображень фруктів. Ліплення грушки за зразком](https://drive.google.com/file/d/1ESke7l3UaBfUR3dSahQBTL1CJIprstbO/view?usp=sharing)  
**31.03** [Тема: Народна творчість. Вишивка. Орнамент. Створення орнаменту для розпису чашки](https://drive.google.com/file/d/1XKqok6tTaMkcYZp10_RVhYWEYyVjDul4/view?usp=sharing)  

** Я досліджую світ **  
**08.12** [Тема: Властивості грунту](https://drive.google.com/file/d/1Xl5mQJ5IJvUtov2BDrAGZ1jhm2OaDm3k/view?usp=sharing)  
**12.01** [Тема: Рослини, їх будова. Практична робота. Вивчення будови рослин](https://drive.google.com/file/d/18egbgGekns05rX8eSDCzuhaDtm1EwdrU/view?usp=sharing)  
**13.01** [Тема: Дерева, кущі, трав'янисті рослини. Листяні і хвойні дерева](https://drive.google.com/file/d/1FdXdStUpRG_tzdYpxdJQuG95OJDJhJV3/view?usp=sharing)  
**14.01** [Тема: Дикорослі та культурні рослини](https://drive.google.com/file/d/1qRhS4_KR3lm8sIiJbZWJWldrTMa8BNVV/view?usp=sharing)  
**19.01** [Тема: Соняшник — квітка сонця. Практична робота «дослідження насіння соняшника»](https://drive.google.com/file/d/1i0hycAHCkvkeUe2fbNGgfOlVRStqSIu0/view?usp=sharing)  
**20.01** [Тема: Різноманітність тварин. Дикі і свійські тварини](https://drive.google.com/file/d/1bwm1dQ_Zhjz3sctomtu9qdPTiV3kxnzZ/view?usp=sharing)  
**21.01** [Тема: Комахи](https://drive.google.com/file/d/1tld7g9Nl6Fp_UBtarOjo0lMhDiKczw9F/view?usp=sharing)  
**30.03** [Тема: Родинні традиції і свята](https://drive.google.com/file/d/1Mxjz72Qp_eRGNG_lJs7VPeqeQzHPCpHx/view?usp=sharing)  
**31.03** [Тема: Створення лепбука «День родини»](https://drive.google.com/file/d/1_DMQVDoBa7AQQYxQj5sUn9OVjDv-ZT1u/view?usp=sharing)  

** Англійська мова **  
**13.01** [Тема: Я можу стрибати](https://drive.google.com/file/d/1qRZsU0FHl8VPDip11pjJLjrFYIU2YUuV/view?usp=sharing)  
**15.01** [Тема: Я можу читати](https://drive.google.com/file/d/1GriTlSFgXAtOjB_ZIK5561KBFzHr8xh7/view?usp=sharing)  
**20.01** [Тема: Час із родиною](https://drive.google.com/file/d/1-81LDxxNh5L1i0gJaw8ZYtPd6LyzkUQD/view?usp=sharing)  
**22.01** [Тема: У крамниці](https://drive.google.com/file/d/1ekdWzj51hg3NR7zp0CwCtGJ1CpmpicDF/view?usp=sharing)  

** Образотворче мистецтво **  
**20.01** [Тема: Зустріч з театром. Ляльковий театр. Театральна лялька. Виготовлення ляльки до казки «Лисичка, Котик і Півник»](https://drive.google.com/file/d/1uoe6p-AZBDpvoAjYlrICChgVPHkDhoko/view?usp=sharing)  

`}</Md>
          </Tab>
          <Tab title="1-В">
            <Md>{`
** Мистецтво: музичне мистецтво **  
**08.12** [Тема: Казкові пригоди](https://drive.google.com/file/d/1MdrGUQErQR9z4-v2mhl98pkNzoyjjcTv/view?usp=sharing)  
**12.01** [Тема: Музика розповідає про людину](https://drive.google.com/file/d/1IDBGPlGC99GoOMpWx7NFZ-nsH4QRmR2H/view?usp=sharing)  
**13.01** [Тема: Музика розповідає про людину](https://drive.google.com/file/d/1IDBGPlGC99GoOMpWx7NFZ-nsH4QRmR2H/view?usp=sharing)  
**20.01** [Тема: У країні мультфільмів](https://drive.google.com/file/d/17doh0Zk97XOd_smp8jkZ5BOhOay7FMFC/view?usp=sharing)  

** Мистецтво: образотворче мистецтво **  
**03.12** [Тема: Святкові перетворення. Малювання композиції «Сніговик».](https://drive.google.com/file/d/1rlUqnf0AgrfiqQwAQPdXXIJ3NZeyQoPc/view?usp=sharing)  
**14.01** [Тема: Мандри Країною Мистецтв. Цирк](https://drive.google.com/file/d/1HnkSVKqiKPr0goTh-U_pMtA34oWgR2BO/view?usp=sharing)  
**21.01** [Тема: Зустріч з театром. Ляльковий театр](https://drive.google.com/file/d/1fVMjgHOvES9gaOHHN8CK7YVpHxG_0TXa/view?usp=sharing)  

** Я досліджую світ **  
**03.12** [Тема: Досліджуємо властивості води](https://drive.google.com/file/d/1zSrcxlsg-qgp2oEBI4mKsxRWZ8TGzIxn/view?usp=sharing)  
**07.12** [Тема: Дослiджуeмо властивостi води](https://drive.google.com/file/d/1UrWSVX3VyelYCB-UF8EGO-bTU_Rul64_/view?usp=sharing)  
**08.12** [Тема: Досліджуємо властивості грунту](https://drive.google.com/file/d/13e_IReBjj1fOIHzMhxkc31fHh4vHjN6d/view?usp=sharing)  
**11.01** [Тема: Рiзноманiтнiсть рослин. Iх будова](https://drive.google.com/file/d/1J1qQW0jJz4cBuxr4VkoozbLMHI4ebtKU/view?usp=sharing)  
**12.01** [Тема: Дерева, кущі, трав’янисті рослини. Листяні та хвойні рослини](https://drive.google.com/file/d/1D4Zkqwwd1adIH7KFDOnjlGs3jrZlA6ag/view?usp=sharing)  
**14.01** [Тема: Дикорослі та культурні рослини](https://drive.google.com/file/d/1RwtkgcZD_q7GchT-BMNJZDJloO-1kYSc/view?usp=sharing)  
**18.01** [Тема: Значення культурних рослин. Дослідження насіння соняшника](https://drive.google.com/file/d/1vX-WZAsPBlaJ1C82C0AseMeD6bDMGrZQ/view?usp=sharing)  
**19.01** [Тема: Різноманітність тварин. Дикі та свійські тварини](https://drive.google.com/file/d/1YszTy5ofIbvbLBR6KBy0qoGT51xLmQ0k/view?usp=sharing)  
**21.01** [Тема: Комахи](https://drive.google.com/file/d/1-GlV4wBycWWC47jwOVpA8HnmFrcIYy_K/view?usp=sharing)  
**29.03** [Тема: Створення дерева свого роду за зразком чи власним задумом](https://drive.google.com/file/d/1BIU50cwvLeAZJ8yImA2b7UpFiKKuRpKH/view?usp=sharing)  
**30.03** [Тема: Родиннi традицii i свята](https://drive.google.com/file/d/12vH-j6zJU5M759zXjBfvTNXVEyiLImkg/view?usp=sharing)  

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
**15.01** [Тема: Навчання грамоти.Звук [ґ], позначення його буквою «ґе». Читання складів, слів](https://drive.google.com/file/d/1BMAWISlRWpsc3KPbQEIA67bi-RhHVIZ7/view?usp=sharing)  
**15.01** [Тема: Письмо малої букви ґ. Підготовчі графічні вправи](https://drive.google.com/file/d/1tiESDVkmvb7Wc6ajpHV5NNY5fPvd4rvb/view?usp=sharing)  
**18.01** [Тема: Закріплення звукових значень вивчених букв. Читаю і розповідаю](https://drive.google.com/file/d/1GANgckUk19gguTsI5t9c1XI69e5sBDO0/view?usp=sharing)  
**19.01** [Тема: Навчання грамоти-Звук ж, позначення його буквою «же»](https://drive.google.com/file/d/1ynDKJkOBCZFMsjxZOSuTlFiZAx2tQkDh/view?usp=sharing)  
**19.01** [Тема: Письмо великої букви Ґ, Підготовчі графічні вправи](https://drive.google.com/file/d/1I90N0sLzcBIsi3LXVy2XW6QHm8ug7bhk/view?usp=sharing)  
**20.01** [Тема: Закріплення звукового значення букви «же»](https://drive.google.com/file/d/1ARNyNWVsuqbdfBJVBAd1VRMX3hHyVYhg/view?usp=sharing)  
**20.01** [Тема: Письмо малої букви ж. Підготовчі графічні вправи](https://drive.google.com/file/d/13gg9Xc1GSb2YWa2JusOsfz-bJXUNNcNI/view?usp=sharing)  
**22.01** [Тема: Письмо великоi букви Ж. Пiдготовчi графiчнi вправи](https://drive.google.com/file/d/1pJ63qlkb38npY0DgCRwFruHip2yHOWjb/view?usp=sharing)  
**22.01** [Тема: Звук [ш], позначення його буквою «ша». Звуковий аналіз слів. Читання складів, слів, речень. Опрацювання тексту](https://drive.google.com/file/d/1TZTllWZINg323J1nq_9YSuXHcowMuOp3/view?usp=sharing)  
**29.03** [Тема: Удосконалення вмінь писати вивчені букви, слова і речення з ними. Побудова речень за поданим початком. Розвиток зв’язного мовлення: «Поговоримо про явища природи»](https://drive.google.com/file/d/1Y9Bn_rxFWJ2MFyPf7hM9euKliTL8S8Qn/view?usp=sharing)  
**30.03** [Тема: Засвоeння правил мовленнeвого етикету пiд час знайомства. Складання i записування речень](https://drive.google.com/file/d/1GZJDqi0YsdKlQ94T0AkVKRBNuAcOIyiY/view?usp=sharing)  
**30.03** [Тема: Читаю і розповідаю. Вправи для розвитку навички читання. Загадка. За Л. Борщевською «Папужка»](https://drive.google.com/file/d/1FH08X_AXxqyDlbKAGGF_vbq-JDAP5Y2x/view?usp=sharing)  
**31.03** [Тема: Читаю і розповідаю. Вправи для розвитку навички читання. І. Олексин «Бачить мати…». Грицько Бойко «Де букварик?». П. Кралюк «Що разом?».](https://drive.google.com/file/d/1ahkWRSjvE3VBwpMhleG6rDBM1L8KQWJk/view?usp=sharing)  
**31.03** [Тема: Написання слів із буквою ґ. Побудова речень за поданим початком і малюнками](https://drive.google.com/file/d/1SZ5DHJ9rrsKrOgv7m-sPNg1NjvERUVkh/view?usp=sharing)  

** Математика **  
**04.12** [Тема: Досліджуємо таблиці додавання і віднімання числа 1](https://drive.google.com/file/d/1ske1rUW84RPzp16ulCeQlJJ8dPDdYZWf/view?usp=sharing)  
**07.12** [Тема: Переставний закон додавання](https://drive.google.com/file/d/1lwGJmF1wsfl12PLsIcbSW7V3FiOXVp6H/view?usp=sharing)  
**08.12** [Тема: Вимірюємо довжини відрізків. Сантиметр](https://drive.google.com/file/d/1M3kSuDwFunXFfMLnOsbU92f1gCnZ9j8I/view?usp=sharing)  
**11.01** [Тема: Правило знаходження невiдомого доданка](https://drive.google.com/file/d/13t99T2jx1JNJWrjxUVAmtODJQ8CqrV22/view?usp=sharing)  
**12.01** [Тема: Називаємо компоненти та результат дії віднімання](https://drive.google.com/file/d/1MxNcjkRNg9anYsCL4EQhbrWLfHr0lC0-/view?usp=sharing)  
**13.01** [Тема: Додаeмо i вiднiмаeмо числа](https://drive.google.com/file/d/1x7XGgkrZ4WLgx8wmFvx-f8SVVN9DP2aQ/view?usp=sharing)  
**15.01** [Тема: Вимірюємо довжини відрізків](https://drive.google.com/file/d/1O2CXXNBuKA9Y_h2xup5tr5anraMBBST-/view?usp=sharing)  
**18.01** [Тема: Будуємо відрізки. Вимірювання довжини відрізків лінійкою](https://drive.google.com/file/d/1r1NXYXjAefTxqpEhF1U8Td4MRODA5EIZ/view?usp=sharing)  
**19.01** [Тема: Вивчаємо вирази на дві дії. Підготовчі вправи до розв’язування задач](https://drive.google.com/file/d/1gqHA9y_88br4gtCrNBd2n22oxjc5alHq/view?usp=sharing)  
**20.01** [Тема: Додаємо і віднімаємо число 3](https://drive.google.com/file/d/1JtIQC-YXkToUfI6nwpbB2va8IW3yxwNI/view?usp=sharing)  
**22.01** [Тема: Дослiджуeмо таблицi додавання та вiднiмання числа 3](https://drive.google.com/file/d/18hZqk4RCiu6b07CImYvvJ-XrfpPzwf6R/view?usp=sharing)  
**29.03** [Тема: Перевіряємо свої досягнення. Узагальнення і систематизація знань учнів](https://drive.google.com/file/d/1LE-XfqG-CFH2VFcWzMqLdUXdvX44fQsR/view?usp=sharing)  
**30.03** [Тема: Записуємо задачу коротко. Підбір опорної схеми до задачі](https://drive.google.com/file/d/1WVbpB9dC0e-V0vfZy68PCcRCKC860CXr/view?usp=sharing)  
**31.03** [Тема: Досліджуємо властивості велечин. Ціле і частина. Визначення довжини ламаної. Розв’язування задач](https://drive.google.com/file/d/1xpQpKkcpS7RDJvYBWXssN_9tJmOrHO62/view?usp=sharing)  

** Фізична культура **  
**03.12** [Тема: Вправи для опанування навичок пересувань](https://drive.google.com/file/d/1tJ12GuU1ETqGGV3dHiag95-YTGcWnvkT/view?usp=sharing)  
**04.12** [Тема: Руханка](https://drive.google.com/file/d/1RkX4RdRjUCfWP_g6BVHXam7oKvMP7jS2/view?usp=sharing)  
**08.12** [Тема: Руханка](https://drive.google.com/file/d/1PPRQqUPMy3j6GrSJpCcIL7hNOF7C7cJ5/view?usp=sharing)  
**12.01** [Тема: Організовуючі вправи. Комплекс ранкової гімнастики](https://drive.google.com/file/d/1c6HC2tJuzr2pAdKSf5HJhx-1EfaBG0Lo/view?usp=sharing)  
**14.01** [Тема: Спорядження лижника. Організовуючі команди і прийоми](https://drive.google.com/file/d/11UrNM_PEYkxK6qqqNDwA2SICj5ZOvfAU/view?usp=sharing)  
**15.01** [Тема: Організовуючі вправи. Комплекс ранкової гімнастики](https://drive.google.com/file/d/15jSyFx-fAZ6DreEtPE4r1ObxE4jOOixN/view?usp=sharing)  
**19.01** [Тема: Уроки фізичної культури онлайн](https://drive.google.com/file/d/1kHacSEVCv9XZKcIy3P-ILRZ_crD0sVJt/view?usp=sharing)  
**21.01** [Тема: Техніка безпеки під час виконання фізичних вправ вдома під час дистанційного навчання. Руханка](https://drive.google.com/file/d/1FDOKpwbIl7XKfDxtKv39yrUxlomYlKOU/view?usp=sharing)  
**22.01** [Тема: Техніка безпеки під час виконання фізичних вправ вдома під час дистанційного навчання. Руханка](https://drive.google.com/file/d/19WYSkv-tZRVJ45hGN4lwSt7o9vQfRCth/view?usp=sharing)  
**30.03** [Тема: Руханка](https://drive.google.com/file/d/1MiK4HaMHrC7EQ9TqU343s109hsYXVQZc/view?usp=sharing)  

** Англійська мова **  
**03.12** [Тема: Школа](https://drive.google.com/file/d/1ioY_Y8l-j2E4qXlL4MVnyRt9Z5ND_f4z/view?usp=sharing)  
**07.12** [Тема: Моя родина](https://drive.google.com/file/d/1tHi4PcA9O7IS2KKBnV2xnGPoD9KJ7ESr/view?usp=sharing)  
**11.01** [Тема: Я можу стрибати](https://drive.google.com/file/d/1HSi7uDssbld0qzIZ1DBfQEoWSeGyqrkI/view?usp=sharing)  
**14.01** [Тема: Я можу читати](https://drive.google.com/file/d/15FtlYh_MLY_vk6T369trmLK5p8jYw6cO/view?usp=sharing)  
**18.01** [Тема: Час із родиною](https://drive.google.com/file/d/1mq0nJnbAAKx-92ZHma1GVkEmF8AgKeY_/view?usp=sharing)  
**21.01** [Тема: У крамниці](https://drive.google.com/file/d/1mmZ_qLGdFI0R0lElbHlKQz1YBBOEAjwW/view?usp=sharing)  
**29.03** [Тема: Меню](https://drive.google.com/file/d/1uiAvWekLJ_j2l8b4Wf5bcoixskwqKvj6/view?usp=sharing)  

** Дизайн і технології **  
**13.01** [Тема: Розумна сова](https://drive.google.com/file/d/19FWahGX0oRWdtGQ4MSksjVWrnhEIDgeu/view?usp=sharing)  
**20.01** [Тема: Робота з папером. Згинання і складання паперу](https://drive.google.com/file/d/1X1prISlL_WubY9PaAgjw1VVcRZC9Cvt2/view?usp=sharing)  
**31.03** [Тема: Смачна грушка. Робота з пластиліном. Виготовлення із пластиліну плоских зображень фруктів. Ліплення грушки за зразком](https://drive.google.com/file/d/1p7RMv1xaxLW-tmx0Re_0RRjrTV54xu7-/view?usp=sharing)  
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
`}</Md>
          </Tab>
          <Tab title="2-А">
            <Md>{`
** Музичне мистецтво **  
**08.12** [Тема: Подорожі із маршем](https://drive.google.com/file/d/1tCfYmFlsRDZ5Mlz1JXjzM1K9QWUg3VVR/view?usp=sharing)  
**12.01** [Тема: Подорожі із маршем](https://drive.google.com/file/d/1LO3q12EXj-QD7eMxvLgvzG1xrOtFsiQ5/view?usp=sharing)  
**19.01** [Тема: Музичні країни - опера, балет](https://drive.google.com/file/d/1QIN8U4kfuZriIQOx8s-ugNTw5EKD4cX_/view?usp=sharing)  
**30.03** [Тема: Наша рідна Україна, мов  веснянка соловїна](https://drive.google.com/file/d/1KDgkX5BQglL9DM4l-lj6_kRxBWxHSyxZ/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Ознайомлення з походженням деяких жіночих і чоловічих імен та прізвищ](https://drive.google.com/file/d/1cdMTQM2Iac_prYeaQwbhpST7qVUtsrm-/view?usp=sharing)  
**11.01** [Тема: Досліджую прикметники. Розпізнаю слова – назви ознак](https://drive.google.com/file/d/1Rbv2ekF_6ya8yEzY3rRdcSgQee9BvIH8/view?usp=sharing)  
**13.01** [Тема: Добираю прикметники](https://drive.google.com/file/d/1l1roeb8eJ0wws1f4iGfRe1xUM0vf6crT/view?usp=sharing)  
**14.01** [Тема: Утворюю прикметники](https://drive.google.com/file/d/1Xcn5oT8Ald6TziHaGMoYTXA1oWQO27-B/view?usp=sharing)  
**18.01** [Тема: Поєдную прикметники з іменниками](https://drive.google.com/file/d/1AvuB7MpQsMJs16IfyQFk-JA0Drd7clD1/view?usp=sharing)  
**20.01** [І група. Тема: Змінюю прикметники за числами](https://drive.google.com/file/d/1IFTKBVDY34c_hjFgz8D7qB5d3MwaEhD0/view?usp=sharing)  
**20.01** [ІІ група. Тема: Змінюю прикметники за числами](https://drive.google.com/file/d/1gxYcXtPnwFrq0cC4D4l5sn-W4mRMDpY8/view?usp=sharing)  
**21.01** [І група. Тема: Розпізнаю близькі за значенням прикметники(с.80-81)](https://drive.google.com/file/d/1sfsBIMyAu7szjSzG3-5dAsKYNiaF9yiA/view?usp=sharing)  
**21.01** [ІІ група. Тема: Розпізнаю близькі за значенням прикметники(с.80-81)](https://drive.google.com/file/d/1bm1d7RCF9qynJfDgrq7ZkNzwGv_nZlCW/view?usp=sharing)  
**22.01** [Тема: Розвиток зв'язного мовлення. Малюю новорічну ялинку](https://drive.google.com/file/d/1kFNkJikgaeVEVMtWpqS1PXyl3J2KxBIe/view?usp=sharing)  
**29.03** [ІІ група. Тема: Досліджую спонукальні речення](https://drive.google.com/file/d/1eaBKxtHkVDk-dgeY15nPzk57LHuwcmDd/view?usp=sharing)  
**29.03** [І група. Тема: Досліджую спонукальні речення. Розділові знаки наприкінці спонукальних речень. Складання тексту для реклами ](https://drive.google.com/file/d/1arlO8jmNk01luzOct3tOkRcxZkfya3Ax/view?usp=sharing)  
**31.03** [Тема: Розрізняю окличні і неокличні речення](https://drive.google.com/file/d/19XIOuq4TtlrexDg6pg3-TsUawXeezZSu/view?usp=sharing)  

** Образотворче мистецтво **  
**03.12** [Тема: Витинанка як вид народних ремесел України. Створення декоративних образів.« Паперовий янгол»](https://drive.google.com/file/d/1AyUivaWXvXaVhOjzNywr4df9LnY1BqsK/view?usp=sharing)  
**14.01** [Тема: Малювання композиції «Зимова казка» у  художніх техніках](https://drive.google.com/file/d/1I8MUg8VNUDnbWgDj-JNQrc653tYZZx16/view?usp=sharing)  
**21.01** [Тема: Анімалістичний жанр. Зображення веселого лева або мрійливого ведмедика(фарби або фломастери)](https://drive.google.com/file/d/1S4xqZY2UgW5skmtu2I0jC5j8Q7PIyLyD/view?usp=sharing)  

** Фізична культура **  
**03.12** [Тема: Організовуючі вправи. Загальнорозвивальні вправи для формування правильної постави. Підтягування у висі тта увисі лежачи (хлопці). Танцювальні кроки. Рухлива гра](https://drive.google.com/file/d/1rKgpV07GqvgZd17tYjA0P9Ayeami6TO8/view?usp=sharing)  
**11.01** [Тема: Діджитал фізра](https://drive.google.com/file/d/1h_BiCdkIAsOQsUXDwMUqMDoXvJa3QzXP/view?usp=sharing)  
**13.01** [Тема: Уроки фізичної культури онлайн](https://drive.google.com/file/d/1R3HLRRRi6cJ6UVSWUNP_boBIz8WcxfI6/view?usp=sharing)  
**14.01** [Тема: Уроки фізичної культури онлайн](https://drive.google.com/file/d/1C0w5Q87Mz8YIc0W53Gg-PP94ZUa5M4X2/view?usp=sharing)  
**18.01** [Тема: Техніка безпеки під час виконання фізичних вправ вдома  під час дистанційного навчання. Руханка](https://drive.google.com/file/d/1TFOfzIptXgjSZ1k9CjhadXWUb7DgkqLJ/view?usp=sharing)  
**20.01** [Тема: Техніка безпеки під час виконання фізичних вправ вдома  під час дистанційного навчання. Руханка](https://drive.google.com/file/d/1bKqdk22vNgTM0tqWAqMbX68kGE0q1spY/view?usp=sharing)  
**21.01** [Тема: Техніка безпеки під час виконання фізичних вправ вдома  під час дистанційного навчання. Руханка](https://drive.google.com/file/d/1p_gSlsvsHICbW0uk_nlxkErZU98fPDit/view?usp=sharing)  
**29.03** [Тема: Організовуючі вправи. Загальнорозвивальні вправи. Різновиди ходьби.Вправи для розвитку сили.  Танцювальні кроки. Рухлива гра](https://drive.google.com/file/d/1mTpdchrWZw8osvDaa-vcd_1ktTqncJM4/view?usp=sharing)  
**31.03** [Тема: Організовуючі вправи. Загальнорозвивальні вправи. Різновиди ходьби.Вправи для розвитку сили.  Танцювальні кроки. Рухлива гра](https://drive.google.com/file/d/18uCwvHvaPKUhgfssOwV9yH39Bsk0v5xh/view?usp=sharing)  

** Читання **  
**03.12** [Тема: Досліджуємо текст. Василь Чухліб «Зимова казка» Зачарувала все зима...](https://drive.google.com/file/d/1lO76PM1u99sp3Ey7vKjtOBd5_zP2NEEX/view?usp=sharing)  
**11.01** [Тема: Вступ до розділу. Тамара Коломієць «Як на білих сторінках». Платон Воронько «На кораблику»](https://drive.google.com/file/d/1Tz8osZM1vkY0oqLIqYWsbAJZWLN_lVU9/view?usp=sharing)  
**12.01** [Тема: Небилиці-небувалиці. Платон Воронько «Картина» (вірш-небилиця)](https://drive.google.com/file/d/1VAUHgR3aqoUxwyBsfbi0jTObf6wMj5gh/view?usp=sharing)  
**14.01** [Тема: Світ доброти Тамари Коломієць. Тамара Коломієць «Хиталочка-гойдалочка»](https://drive.google.com/file/d/1424-PoyqXgHc0GuCB9-ozj4sch8JJB-m/view?usp=sharing)  
**15.01** [Тема: Художній образ зими в поезії Ліни Костенко. Ліна Костенко «Пряля», «Лісові дзвіночки»](https://drive.google.com/file/d/1Pk4Fwk0P_dcQzJKNqjymwCPds54w45xt/view?usp=sharing)  
**18.01** [Тема: Співець моря і степу. Анатолій Качан «Хвилювалось море». «Розмова з пароплавом»](https://drive.google.com/file/d/17y3NiH6931vtLDqINkzsHiHkTJLBJ4yK/view?usp=sharing)  
**19.01** [І група. Тема: Оповідання. Василь Сухомлинський «Глуха дівчинка»](https://drive.google.com/file/d/1DOvR4h6tAKrLC3bKjgbEtyYNIuNbDl8K/view?usp=sharing)  
**19.01** [ІІ група. Тема: Оповідання. Василь Сухомлинський «Глуха дівчинка»](https://drive.google.com/file/d/10HO6qsl9Re6IhFzAfP0hDMuApb7DNeYv/view?usp=sharing)  
**21.01** [І група. Тема: Медіавіконце: вистава. Василь Сухомлинський «Покинуте кошеня»](https://drive.google.com/file/d/1Qzp8QohoQcsLwYfU0bNfyk-ggV4bWCA0/view?usp=sharing)  
**21.01** [ІІ група. Тема: Медіавіконце: вистава. Василь Сухомлинський «Покинуте кошеня»](https://drive.google.com/file/d/1uoi9MuQfAg0qKPNFUxjHDjP02HCHo1s5/view?usp=sharing)  
**29.03** [Тема: Порівняння-образ. Анатолій Камінчук «Українська писанка».](https://drive.google.com/file/d/1NC-z-BUlu28d6EAZ8rUSt_ncDnViXbTW/view?usp=sharing)  
**30.03** [ІІ група. Тема: Почуття любові. Володимир Лучук «Тільки мама»](https://drive.google.com/file/d/1RAQSkFKY64Jdy5qLyUrRH4G7cLSfskm2/view?usp=sharing)  
**30.03** [І група. Тема: Почуття любові. Володимир Лучук "Тільки мама"](https://drive.google.com/file/d/1xdY3AzBE8A7aXeKNRSUaqoFZBGpLxsZZ/view?usp=sharing)  

** Я досліджую світ **  
**03.12** [Тема: Які ознаки в зими. Зимові місяці. Природа взимку](https://drive.google.com/file/d/11KQTK4SiuGeuN6_TPKJE_ZUvAUNohijr/view?usp=sharing)  
**12.01** [Тема: Як утворюється лід на водоймах](https://drive.google.com/file/d/1k7CY147uyNx8kolwpn4iQQEc2bmyqnf1/view?usp=sharing)  
**13.01** [Тема: Безпека взимку](https://drive.google.com/file/d/1zAWE1B6AprES8BjJHuORaGRiyDxnRTe2/view?usp=sharing)  
**14.01** [Тема: Хто такий споживач. Реклама. Корисна і шкідлива реклама. Як розповсюджується реклама? Створення реклами продукту, товару](https://drive.google.com/file/d/1nmCDJoBRf8sd2iUyeoa1vqp3WWeWBjlg/view?usp=sharing)  
**19.01** [Тема: Хто такий споживач. Реклама. Корисна і шкідлива реклама. Як розповсюджується реклама? Створення реклами продукту, товару](https://drive.google.com/file/d/1KugUuTg6NdHmtL9gj4FIpBUyZQPkQaqm/view?usp=sharing)  
**20.01** [Тема: Як почуваються рослини взимку](https://drive.google.com/file/d/1wqH3FUh9-gpGqOo1Js44U1lQrXeBUPVs/view?usp=sharing)  
**21.01** [Тема: Як зимують комахи та риби?(c.16-18)](https://drive.google.com/file/d/1TiUqcsF-Yfi6SYaz8pjMHolD17w72flw/view?usp=sharing)  
**30.03** [Тема: Міні проект «Перелітні птахи»](https://drive.google.com/file/d/12tJMM2zQROv3PzxEsKTwNiCFESyzxmdI/view?usp=sharing)  
**31.03** [Тема: Чому птахи будують гнізда](https://drive.google.com/file/d/1kl3SrM6OJeLkWQXPBkDXdkG_Rvge0wJY/view?usp=sharing)  

** Англійська мова **  
**04.12** [Тема: Пори року](https://drive.google.com/file/d/1km6oHMaL5aPtsb5vpLoEVftKb8SYvoBa/view?usp=sharing)  
**04.12** [Тема: Seasons](https://drive.google.com/file/d/1N-iYLAIp11JvEbOFczQz4OV_YEv4nzvF/view?usp=sharing)  
**08.12** [Тема: Весна](https://drive.google.com/file/d/1zvxx9wn5s9iY8vppDTbAO9ZVhro086N4/view?usp=sharing)  
**12.01** [Тема: Годинник](https://drive.google.com/file/d/1awoIHmfcx6r2AbHV6es2XQixV0OKa2Ym/view?usp=sharing)  
**12.01** [Тема: My morning](https://drive.google.com/file/d/1bRleKAxJIWcETJwyNY6N5GWo-sp1gnR9/view?usp=sharing)  
**13.01** [Тема: Що я роблю зранку](https://drive.google.com/file/d/1-Wlmdc4V1mcnO3DtiS6H-0qaH8SHD53Y/view?usp=sharing)  
**13.01** [Тема: My morning](https://drive.google.com/file/d/1vpbyTwi6FC9IfW1Sasq_FZDKZLfMtt1g/view?usp=sharing)  
**15.01** [І група. Тема: Що в мене на сніданок](https://drive.google.com/file/d/1VHtq1lAgzLPBUlaR8E9rS78ZKsCBTk1y/view?usp=sharing)  
**15.01** [Тема: Що в мене на сніданок](https://drive.google.com/file/d/134syhENfVS8KVlIDURnLlhQqncvpsn2P/view?usp=sharing)  
**15.01** [Тема: Kids vocabulary - My Day - Daily Routine](https://www.youtube.com/watch?v=qD1pnquN_DM&feature=youtu.be)  
**19.01** [І група. Тема: Дорога до школи](https://drive.google.com/file/d/1awxCjNnG-SAaEqbLMDGWlV3gRvVVaiyl/view?usp=sharing)  
**19.01** [ІІ група. Тема: Дорога до школи](https://drive.google.com/file/d/1l332iZLyAvjWidOKEp-AA1pQ0v6OLtZV/view?usp=sharing)  
**20.01** [І група. Тема: Що у моєму ланчбоксі](https://drive.google.com/file/d/1zGYzcWbgn35nfrQNRU-96-RxbUiSzY7G/view?usp=sharing)  
**20.01** [ІІ група. Тема: Що у моєму ланчбоксі](https://drive.google.com/file/d/1M51TsarBfBAcnpFe4PQLssuPoK5vLq4q/view?usp=sharing)  
**22.01** [І група. Тема: Читаємо, говоримо, слухаємо разом](https://drive.google.com/file/d/12QHNfI28BKofg-WvULW3hzSrVQHuYZfh/view?usp=sharing)  
**22.01** [ІІ група. Тема: Читаємо, говоримо, слухаємо разом](https://drive.google.com/file/d/1c25NoXyiJ3iLY5zDT61QpI0BHcKWkXcM/view?usp=sharing)  
**30.03** [І група. Тема: Одяг для різної пори року](https://drive.google.com/file/d/1Y8FKt8Z9pj6RrlmRtpVstHkpfaeHuJz0/view?usp=sharing)  
**30.03** [Аудіозапис. І група. Тема: Одяг для різної пори року](https://drive.google.com/file/d/1lYmACg-L_26tDbTu9tFRo08q_AI2m5ph/view?usp=sharing)  
**30.03** [ІІ група. Тема: Одяг для різної пори року](https://drive.google.com/file/d/1-3cbge8DAw5wVN-jM0cQBOcoAI0n54ah/view?usp=sharing)  

** Математика **  
**11.01** [Тема: Задачі і вирази на дії різного ступеня для засвоєння опрацьованих таблиць](https://drive.google.com/file/d/1VwNtfF7VLfGyvNSDziU_iCztBpKSa4aZ/view?usp=sharing)  
**12.01** [Тема: Коло і круг та їх елементи. Порівняння задач на множення  і додавання. Доповнення умов задач запитаннями](https://drive.google.com/file/d/1aXndEuFfl1p8usF-4-nZg72xvRUAc1MI/view?usp=sharing)  
**13.01** [Тема: Вправи і задачі на засвоєння опрацьованих таблиць](https://drive.google.com/file/d/108mV6_atz8cF7tYbBNTyQATe0wGjTevN/view?usp=sharing)  
**15.01** [Тема: Таблиця ділення на 3. Вправи і задачі на використання таблиці ділення на 3. Креслення ламаної лінії](https://drive.google.com/file/d/1s2gDeCUHyqAaNcFzKb6G6pB8FLGJtHda/view?usp=sharing)  
**18.01** [Тема: Поняття «рік» і «місяць». Розв’язування задач з поняттями «рік» і «місяць»](https://drive.google.com/file/d/1Tj0KEVSOk6R9tPUzYmLNVxoyPaPlfkn2/view?usp=sharing)  
**19.01** [Тема: Одиниці вимірювання часу. Визначення часу за циферблатом годинника. Вправи і задачі на використання таблиці ділення на 3. Креслення кола](https://drive.google.com/file/d/1Od1X-oR0nkvQpcMlpHWyDvVR80bhjXkx/view?usp=sharing)  
**20.01** [Тема: Задачі на визначення часу за циферблатом годинника. Вправи на використання таблиць множення числа 3 і ділення на 3](https://drive.google.com/file/d/1EE5eoUi5x095d-cti4RQfsiWhtUJpFl6/view?usp=sharing)  
**22.01** [Тема: Порівняння задач на збільшення числа на кілька одиниць  у прямій і непрямій формі. Складання задач за різними короткими записами. Дії з іменованими числами](https://drive.google.com/file/d/12ExrzWbmxy3MGCoOj7bf2TRzs1jLQWOJ/view?usp=sharing)  
**29.03** [Тема: Складання задач за малюнками та схемами. Вправи на використання таблиці ділення на 8](https://drive.google.com/file/d/1LbQKJ2pftp-ixJl8UXsUDkmAO8QmCYGz/view?usp=sharing)  
**30.03** [Тема: Таблиця ділення на 8. Вправи і задачі, в яких треба використати таблицю ділення на 8](https://drive.google.com/file/d/14V1jH4b9eHcfwcEPvGBakhUA9vsFFSvi/view?usp=sharing)  
**31.03** [Тема: Доповнення нерівностей і рівностей. Розв’язування задач. Порівняння виразів](https://drive.google.com/file/d/1mcvRlzFZUr3tka_drr0Ga-B4KLA-l26W/view?usp=sharing)  

** Інформатика **  
**11.01** [Тема: Правила безпечної роботи з цифровими ґаджетами](https://drive.google.com/file/d/1imDvg8zWf_m6OUAjHJrFWbh4t2qlk2p0/view?usp=drive_web)  
**18.01** [Тема: Пошук зображень в Інтернеті](https://drive.google.com/file/d/1ne-LYW0myt7WTxBw9g124_TnY2JuKS_I/view?usp=drive_web)  
**29.03** [Тема: Цифрові пристрої в минулому та майбутньому](https://drive.google.com/file/d/1SrVo-16k4NMmBGDIge81S0mS5FHlgXS8/view?usp=drive_web)  

** Дизайн і технології **  
**15.01** [Тема: Виготовлення новорічної прикраси «Ковзани». За зразком чи власним задумом](https://drive.google.com/file/d/1VknlhG_ElQ7wvpuFF4pLoh5aWwnbJta8/view?usp=sharing)  
**22.01** [Тема: Виготовлення аплікації «Засніжені дерева». Природа взимку](https://drive.google.com/file/d/1sCJLRjv1q9LKi7NUCMJHoEAW5ZzMQsD8/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="2-Б">
            <Md>{`
** Музичне мистецтво **  
**08.12** [Тема: Подорожі із маршем](https://drive.google.com/file/d/1tCfYmFlsRDZ5Mlz1JXjzM1K9QWUg3VVR/view?usp=sharing)  
**12.01** [Тема: Подорожі із маршем](https://drive.google.com/file/d/1LO3q12EXj-QD7eMxvLgvzG1xrOtFsiQ5/view?usp=sharing)  
**19.01** [Тема: Музичні країни - опера, балет](https://drive.google.com/file/d/1jEoJUsaqsx8tjckpclk6jOlkQflYI4R8/view?usp=sharing)  
**30.03** [Тема: Наша рідна Україна, мов  веснянка соловїна](https://drive.google.com/file/d/1X9zPgnmie6gcAeBSiZY6gFgY0qZJJrhi/view?usp=sharing)  

** Математика **  
**03.12** [Тема: Таблиця множення числа 2. Розв'язування задач на множення](https://drive.google.com/file/d/1Xn7bUU4tJuylgxedhpJCHq5iMu2Jpc6l/view?usp=sharing)  
**11.01** [Тема: Таблиця множення числа 3. Задачі на вивчені таблиці](https://drive.google.com/file/d/1DeVeA9-6utk7WjALrgxJ4ZNOcMAVDpOx/view?usp=sharing)  
**13.01** [Тема: Вправи і задачі на засвоєння таблиці множення числа 3](https://drive.google.com/file/d/1sBJdh3RmGVbwhkmOnYmU2Y_Rd_DZNPGl/view?usp=sharing)  
**14.01** [Тема: Вправи і задачі на засвоєння таблиць множення на 2 і 3](https://drive.google.com/file/d/1oJVEXCEoqAKIutDsMRdDs04-ww_ezoas/view?usp=sharing)  
**15.01** [Тема: Задачі і вирази на дії різного ступеня для засвоєння опрацьованих таблиць](https://drive.google.com/file/d/1wkMxXAk7PPuQTJqsyvnFyjYmJMln68O-/view?usp=sharing)  
**18.01** [Тема: Коло і круг та їх елементи](https://drive.google.com/file/d/18UcKyU_rz5p-ja14YZMfosC99GRhna0_/view?usp=sharing)  
**20.01** [Тема: Вправи і задачі на засвоєння таблиць](https://drive.google.com/file/d/1qTDAwEwXT22ziVKSDhwctAuRQa8GD0kZ/view?usp=sharing)  
**20.01** [Презентація. Тема: Вправи і задачі на засвоєння опрацьованих таблиць](https://drive.google.com/file/d/1YmrMKFYp3XAlta1Kpgmq86vINzGuXi5d/view?usp=sharing)  
**21.01** [Тема: Таблиця ділення на 3](https://drive.google.com/file/d/1UdPHuTYBOkoA6NPe9uxXLTKRscNLpTK8/view?usp=sharing)  
**21.01** [Презентація. Тема: Таблиця ділення на 3](https://drive.google.com/file/d/1TmIcMaswmHLuzdrdOBxXUjpRgnHLd2Kg/view?usp=sharing)  
**22.01** [Тема: Поняття рік, місяць](https://drive.google.com/file/d/1oUhZEGr_Ir5QL62yB8G_qeSozbE942lf/view?usp=sharing)  
**22.01** [Презентація. Тема: Поняття рік, місяць](https://drive.google.com/file/d/1-cKlFoCsRCAEpr5RRBO_CtPhVzJV1G_d/view?usp=sharing)  
**29.03** [Тема: Вправи на застосування таблицi множення i дiлення числа 7](https://drive.google.com/file/d/1l7bzqmfBnrLvPYT5wkFN7Il53fhXqG_m/view?usp=sharing)  
**29.03** [Презентація. Тема: Вправи на застосування таблицi множення i дiлення числа 7](https://drive.google.com/file/d/1tbKWcDqkw8cXzov7LlmP-DtfG2klZmBG/view?usp=sharing)  
**31.03** [Тема: Зв’язок між множенням і діленням](https://drive.google.com/file/d/14tRSKeBSzSw20h1viDlgk9QPZ4N8hmAI/view?usp=sharing)  
**31.03** [Презентація. Тема: Зв’язок між множенням і діленням](https://drive.google.com/file/d/1gyPZe4PS9n64GDzfw2VsYo0ypvIinvPS/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Ставлю питання до назв предметів. Розпізнаю слова — назви предметів за питаннями хто? що?](https://drive.google.com/file/d/1x-mt1ERC1wF1vB7K6oGvzZ8HFU79x8MZ/view?usp=sharing)  
**11.01** [Тема: Досліджую прикметники. Розпізнаю слова – назви ознак](https://drive.google.com/file/d/1LeSCFzAqxiBoTuYpKa2b4KewOU6ni1jP/view?usp=sharing)  
**12.01** [Тема: Добираю прикметники](https://drive.google.com/file/d/1vHaygY39MZbkl421hxq3BxjmtcTLHrgi/view?usp=sharing)  
**14.01** [Тема: Утворюю прикметники. Складання речень](https://drive.google.com/file/d/1jUj-Zan45G7RYmwXgER99CjJw5GBaKrc/view?usp=sharing)  
**18.01** [Тема: Малюю зимові розваги](https://drive.google.com/file/d/1lbXLXEqIkEAE9zHwpq_MIcNxdYkK5SXg/view?usp=sharing)  
**19.01** [Тема: Поєдную прикметники з іменниками](https://drive.google.com/file/d/1jt5c-2AMCIVSG6QTJWAYAD0GIb6-_bwT/view?usp=sharing)  
**19.01** [Презентація. Тема: Поєдную прикметники з іменниками](https://drive.google.com/file/d/1M5gT4smscQz80bCptL-jmCXZpQyGDP9v/view?usp=sharing)  
**21.01** [Тема: Змінюю прикметники за числами](https://drive.google.com/file/d/10LVVZzZjQEfWGOSjtivd99ePmlZx75_U/view?usp=sharing)  
**21.01** [Презентація. Тема: Змінюю прикметники за числами](https://drive.google.com/file/d/1j_OXH-qlszO9o7TW7J67Yb15Q11yCOhC/view?usp=sharing)  
**22.01** [Тема: Розрізняю близькі за значенням прикметники](https://drive.google.com/file/d/1K5lFsiRjDdqaAttjOJvK25L0fWkethhe/view?usp=sharing)  
**22.01** [Презентація. Тема: Розрізняю близькі за значенням прикметники](https://drive.google.com/file/d/1r5X1tDMnJnfIevCVUrUO_zRtSCqGBKOw/view?usp=sharing)  
**29.03** [Тема: Дослiджую речення. Розповiднi речення](https://drive.google.com/file/d/1_o8TmOhrc_V-Rh6OM3jEUpVqJPOFMtmk/view?usp=sharing)  
**29.03** [Презентація. Тема: Дослiджую речення. Розповiднi речення](https://drive.google.com/file/d/1IpkprMI26whMlHehvi7CKWa1Ruepd6Hn/view?usp=sharing)  
**30.03** [Тема: Дослiджую питальнi речення](https://drive.google.com/file/d/1D5wCrb5HBsGsg_6nyvZISUKkHjbi4rgA/view?usp=sharing)  
**30.03** [Презентація. Тема: Дослiджую питальнi речення](https://drive.google.com/file/d/1Ps4FttAgTEDmlVc0yUOKPk7pDjvvV5y0/view?usp=sharing)  

** Читання **  
**03.12** [Тема: Щастя. М. Морозенко «Мій тато повернувся із війни»](https://drive.google.com/file/d/1IohkwNNl7ln_Lo29wlZgDCzqGnIG84Iy/view?usp=sharing)  
**11.01** [Тема: Вступ до розділу «Світ дитинства у творах українських письменників». Вірші. П. Воронько «На кораблику», «Картина»](https://drive.google.com/file/d/1Cxg6dRQ7srujJrcDllsszz6RZF_gYiRF/view?usp=sharing)  
**13.01** [Тема: Ознайомлення з життям і творчістю  Тамари Коломієць. Т. Коломієць «Хиталочка-гойдалочка», «Біле поле полотняне..»](https://drive.google.com/file/d/1MPInbt3fQLQqJ58EDK1DTcsHD4Bs33vs/view?usp=sharing)  
**14.01** [Тема: Ознайомлення з життям і творчістю Ліни Костенко. Л. Костенко «Пряля», «Польові дзвіночки». Прислів'я](https://drive.google.com/file/d/1NJrLIS7KKM4rjJIrPFVrkpEp6UfWMqoK/view?usp=sharing)  
**15.01** [Тема: Ознайомлення з життям і творчістю Анатолія Качана. А. Качан «Хвилювалось море», «Розмова з пароплавом». Читання в особах](https://drive.google.com/file/d/1lM6iKKv6V-JsLw3uvOzCLK_Z6iPpe-YB/view?usp=sharing)  
**18.01** [Тема: В. Сухомлинський «Глуха дівчинка»](https://drive.google.com/file/d/1WIo33Q1EYSlVkqQJk43n0H_yX1yZQJ7f/view?usp=sharing)  
**20.01** [Тема: Медіавіконце: вистава. Василь Сухомлинський «Покинуте кошеня». Вистава «Хто зігріє кошеня?»](https://drive.google.com/file/d/1zx5GM-8TFmut9jF7EVbv0SsCxvvEyYwW/view?usp=sharing)  
**20.01** [Презентація. Тема: Медіавіконце: вистава. Василь Сухомлинський «Покинуте кошеня». Вистава «Хто зігріє кошеня?»](https://drive.google.com/file/d/1qmMD_-O3gwiIORNGlF4MkuL7dZ3YeEl6/view?usp=sharing)  
**21.01** [Тема: Зима білосніжна](https://drive.google.com/file/d/1Bo2j7tWOmiXGQUE1xsYvaaWnlzjLA1m2/view?usp=sharing)  
**29.03** [Тема: Казки народiв Eвропи](https://drive.google.com/file/d/1KN8qrFVG71x8eAXvH6D5PSQ2oivSRc7X/view?usp=sharing)  
**31.03** [Тема: Про що може йти мова в казці? В. Сухомлинський «» Хлопчик і Дзвіночок Конвалії». Читання в особах](https://drive.google.com/file/d/1b_OtGjM28kzeXc8KENSPobyg2gp7qIxG/view?usp=sharing)  
**31.03** [Презентація. Тема: Про що може йти мова в казці? В. Сухомлинський «» Хлопчик і Дзвіночок Конвалії». Читання в особах](https://drive.google.com/file/d/1pV3dISIlm7rGcW-wrVqYggnXl7q7HtjH/view?usp=sharing)  

** Я досліджую світ **  
**03.12** [Тема: Які ознаки в зими. Зимові місяці. Дослідження сніжинок](https://drive.google.com/file/d/1iwAU41FzR28Lcm4x5twjg4NwG-tufv1g/view?usp=sharing)  
**12.01** [Тема: Як утворюється лід на водоймах. Дослідження властивостей льоду](https://drive.google.com/file/d/1gRQEGcS5X-DJClQp2KqTBnk4jWfZ60MU/view?usp=sharing)  
**13.01** [Тема: Правила безпечної поведінки взимку. Створення малюнку – плаката «Зимові застереження»](https://drive.google.com/file/d/1xo2XWck7_Y1V7Ni2l9RsKjjpINnzMnt9/view?usp=sharing)  
**14.01** [Тема: Хто такий споживач](https://drive.google.com/file/d/1ADmhjMrM7-fNC1805vLiEBiNKg9ZCbDN/view?usp=sharing)  
**19.01** [Тема: Хто такий споживач](https://drive.google.com/file/d/1AychzafA2JeKeTxRuT1pQ_TjFhZ119k6/view?usp=sharing)  
**19.01** [Презентація. Тема: Хто такий споживач](https://drive.google.com/file/d/17yiQ-IPOLl83vBnEbgIE9WGp0n58T8V-/view?usp=sharing)  
**20.01** [Тема: Як почуваються рослини взимку](https://drive.google.com/file/d/1L84xRnAKtf6g57TssyawBw2LGpjeXODh/view?usp=sharing)  
**20.01** [Презентація. Тема: Як почуваються рослини взимку](https://drive.google.com/file/d/1_YCebdxV3B1SMgKdikoH2rDkgP2l1w0h/view?usp=sharing)  
**21.01** [Тема: Як зимують комахи та риби](https://drive.google.com/file/d/1L_dGrbk1UMS3fMLlU0WgiddnE3uHAfZ9/view?usp=sharing)  
**21.01** [Презентація. Тема: Як зимують комахи та риби](https://drive.google.com/file/d/1Zb9M9wSMKayXb80utiEZ1p-thzegdXly/view?usp=sharing)  
**30.03** [Тема: Як птахи зустрiчают весну](https://drive.google.com/file/d/176IHJfqpbLdnqFjS6PDPpPmKHyhsKHB4/view?usp=sharing)  
**30.03** [Презентація. Тема: Як птахи зустрiчают весну](https://drive.google.com/file/d/1BCsL-pCK-rODo9BdDPsP3tBa7P_1be-z/view?usp=sharing)  
**31.03** [Тема: Чому птахи в’ють гнізда](https://drive.google.com/file/d/1kkYrhVkm9nlKGifHUpuKujC_Gb-t9w-A/view?usp=sharing)  

** Образотворче мистецтво **  
**13.01** [Тема: Чарівні дерева](https://drive.google.com/file/d/1Z7wrkKXFdjqb0_uRZVY4BqOopNlNk1OD/view?usp=sharing)  
**20.01** [Тема: Карнавал тварин](https://drive.google.com/file/d/1t37Jf8LtDdR9N8V6lJEM_jobbklzYlCn/view?usp=sharing)  
**31.03** [Тема: Квіткові фантазії. Малювання чарівних квітів](https://drive.google.com/file/d/1j94YZcc5G6ceUJ1Q9cuyl3iYGX5jD5ep/view?usp=sharing)  

** Англійська мова **  
**13.01** [Тема: My morning](https://drive.google.com/file/d/1vpbyTwi6FC9IfW1Sasq_FZDKZLfMtt1g/view?usp=sharing)  
**15.01** [Тема: Що в мене на сніданок](https://drive.google.com/file/d/134syhENfVS8KVlIDURnLlhQqncvpsn2P/view?usp=sharing)  
**15.01** [Тема: Kids vocabulary - My Day - Daily Routine](https://www.youtube.com/watch?v=qD1pnquN_DM&feature=youtu.be)  
**19.01** [Тема: Дорога до школи](https://drive.google.com/file/d/1l332iZLyAvjWidOKEp-AA1pQ0v6OLtZV/view?usp=sharing)  
**20.01** [Тема: Що у моєму ланчбоксі](https://drive.google.com/file/d/1M51TsarBfBAcnpFe4PQLssuPoK5vLq4q/view?usp=sharing)  
**30.03** [Тема: Одяг для різної пори року](https://drive.google.com/file/d/1-3cbge8DAw5wVN-jM0cQBOcoAI0n54ah/view?usp=sharing)  

** Дизайн і технології **  
**15.01** [Тема: Виготовлення новорічної прикраси](https://drive.google.com/file/d/1FLM5RFfhrQBWmx9rxMiXcz1ZSLHnBPmH/view?usp=sharing)  
**22.01** [Тема: Виготовлення сніговика](https://drive.google.com/file/d/1hIENnp35JbOvUHtCRf-uuVEiZ4j7goSS/view?usp=sharing)  

** Інформатика **  
**11.01** [Тема: Правила безпечної роботи з цифровими ґаджетами](https://drive.google.com/file/d/1imDvg8zWf_m6OUAjHJrFWbh4t2qlk2p0/view?usp=drive_web)  
**18.01** [Тема: Пошук зображень в Інтернеті](https://drive.google.com/file/d/1ne-LYW0myt7WTxBw9g124_TnY2JuKS_I/view?usp=drive_web)  
**29.03** [Тема: Цифрові пристрої в минулому та майбутньому](https://drive.google.com/file/d/1SrVo-16k4NMmBGDIge81S0mS5FHlgXS8/view?usp=drive_web)  

** Фізична культура **  
**11.01** [Тема: Комплекс вправ ранкової гімнастики](https://drive.google.com/file/d/1lA8PSuCBEqf4v0pEPZPTer_x3nrgvP3u/view?usp=sharing)  
**12.01** [Тема: Комплекс вправ ранкової гімнастики](https://drive.google.com/file/d/10XuqnvSSkNpnuzbtVRPBDRZBjeWgfarf/view?usp=sharing)  
**14.01** [Тема: Комплекс вправ ранкової гімнастики](https://drive.google.com/file/d/1d0mG6EfzCO-K5lJLIKMPLO8tkRHoVWXb/view?usp=sharing)  
**18.01** [Тема: Вправи для формування правильної постави](https://drive.google.com/file/d/1XwPWkr70PWgc_NBNjmr00vrDImBjqo1S/view?usp=sharing)  
**19.01** [Тема: Вправи для формування правильної постави](https://drive.google.com/file/d/1n7o-RgnidmMnn9UccEu5toL2CiA8Joo3/view?usp=sharing)  
**21.01** [Тема: Вправи для розвитку гнучкості](https://drive.google.com/file/d/189IaKX_Zl-wfRIbAOoae0VieUCPQDNjS/view?usp=sharing)  
**29.03** [Тема: Стрибки зi скакалкою. Стрибки у висоту](https://drive.google.com/file/d/1yaiU5er8QJ2E3t6DmT7Kqds-bYbkLs9m/view?usp=sharing)  
**30.03** [Тема: Організовуючі вправи. Різновиди ходьби і бігу. Вправи для профілактики плоскостопості](https://drive.google.com/file/d/1co25Ah0Duz2IrBwIeQ6TvtgIe3GZ92aK/view?usp=sharing)  
`}</Md>
          </Tab>
        </Tabs>
      </Tab>
      <Tab title="3 клас">
        <Tabs>
          <Tab title="3 клас">
            <Md>{`
** Англійська мова **  
**04.12** [Тема: Контроль читання](https://drive.google.com/file/d/1BWaOtRFsi4XEkt7bSQcm16ChwMRt0qs1/view?usp=sharing)  
**13.01** [Тема: Мій дім](https://drive.google.com/file/d/1Ci7BcvbSEmri48cHad4FkDtVvwrQkcgB/view?usp=sharing)  

** Математика **  
**08.12** [Тема: Порівняння способів додавання круглих трицифрових чисел](https://drive.google.com/file/d/1llI5Tp_nB7ogU7BPV0qtPGootAEvYHsu/view?usp=sharing)  

** Фізична культура **  
**08.12** [Тема: Вправи з великим м'ячем (елементи баскетболу)](https://drive.google.com/file/d/1oZVaXtm8nClPDCbJ1AsjSdLWt-eN31qK/view?usp=sharing)  

** Інформатика **  
**08.12** [Тема: Середовище програмування для дітей](https://drive.google.com/file/d/1uWRppF2xxQ-fRm8eOpPrtzKZjXKt3q5k/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="3-А">
            <Md>{`
** Музичне мистецтво **  
**03.12** [Тема: Найдорожча у світі](https://drive.google.com/file/d/1i1gUjCiN0vKPL8XrNsCkVmbBWdbUVxog/view?usp=sharing)  
**14.01** [Тема: Динамічний та темповий розвиток музики](https://drive.google.com/file/d/1hRmyRD4pelKdlBecjJN1BnWyLFTD3oLk/view?usp=sharing)  
**21.01** [Тема: Динамічний розвиток музики](https://drive.google.com/file/d/1UuHDvTTOza3SFfZ-lltSxCqHYoPtHhIW/view?usp=sharing)  

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
**15.01** [Тема: Письмове віднімання двоцифрових чисел](https://drive.google.com/file/d/1gDOoVZvU6uwyd5TKIYxNmTXZDKDicFsC/view?usp=sharing)  
**18.01** [Тема: Письмове віднімання двоцифрових чисел. Розширена задача на зведення до одиниці, що містить буквені дані](https://drive.google.com/file/d/1KlhUiNC9mZZJXUALU170sxnbHbjiOJwD/view?usp=drive_web)  
**18.01** [Презентація. Тема: Письмове віднімання двоцифрових чисел. Розширена задача на зведення до одиниці, що містить буквені дані](https://drive.google.com/file/d/1--GQAKmd7q8M87iwnXD4UWeJjKKzLYwz/view?usp=drive_web)  
**19.01** [Тема: Письмове віднімання трицифрових чисел. Вправи і задачі на застосування вивчених випадків арифметичних дій. Види трикутників. (№67-76)](https://drive.google.com/file/d/1JV3mT2Vwtt9n4RcR0OH1AyguIw6fHmA8/view?usp=sharing)  
**19.01** [Презентація. Тема: Письмове віднімання трицифрових чисел. Вправи і задачі на застосування вивчених випадків арифметичних дій. Види трикутників. (№67-76)](https://drive.google.com/file/d/1nM73uhh09cgxbx3S4-yg8xlrseDPzfTr/view?usp=sharing)  
**20.01** [Тема: Письмове додавання трицифрових чисел, коли сума одиниць дорівнює 10 або сума десятків дорівнює](https://drive.google.com/file/d/1rwhM_rmDUHc6ScD4DfDaWi84Uza7_WGQ/view?usp=sharing)  
**20.01** [Презентація. Тема: Письмове додавання трицифрових чисел, коли сума одиниць дорівнює 10 або сума десятків дорівнює](https://drive.google.com/file/d/1xRBv_2D_EjvORLwOukYmFVGQ7fs6AR2X/view?usp=sharing)  
**21.01** [Тема: Письмове віднімання трицифрових чисел, коли в запису зменшуваного є нуль. (№88-98)](https://drive.google.com/file/d/1DFZabMu2ftw7NlMVUyZKnDO5nwWC784P/view?usp=sharing)  
**22.01** [Тема: Письмове додавання трицифрових чисел, коли сума одиниць більша за 10 одиниць або сума десятків більша за 10 десятків. (№99-108)](https://drive.google.com/file/d/1rJ4z76E60KpvozoV8zctdSnLBXlOFFFi/view?usp=sharing)  
**22.01** [Презентація. Тема: Письмове додавання трицифрових чисел, коли сума одиниць більша за 10 одиниць або сума десятків більша за 10 десятків. (№99-108)](https://drive.google.com/file/d/1uRu_jGrQKn4Ilgu8ekWLjq7B6mM-o0BK/view?usp=sharing)  
**29.03** [Тема: Ділення двоцифрового числа на одноцифрове виду 72:3, 50:2.  Повторення ділення суми на число](https://drive.google.com/file/d/1KbeODWmveHeb__-adJxg5qmYw5gA8vwt/view?usp=sharing)  
**30.03** [Тема: Ділення двоцифрових чисел на одноцифрове. Розв'язання задач. Повторення кола і частини](https://drive.google.com/file/d/1jdCiltomgKgjvOYvAXgucg02ubi_BaHR/view?usp=sharing)  
**30.03** [Презентація. Тема: Ділення двоцифрових чисел на одноцифрове. Розв'язання задач. Повторення кола і частини](https://drive.google.com/file/d/1qd8e85fzciqZBGGxPrfWBcibcMeZKUYt/view?usp=sharing)  
**31.03** [Тема: Ділення двоцифрових чисел на одноцифрове. Порівняння виразів](https://drive.google.com/file/d/1WhSoj6OM7vjjKAPYh-3NZJ3HWscQZfo0/view?usp=sharing)  
**31.03** [Презентація. Тема: Ділення двоцифрових чисел на одноцифрове. Порівняння виразів](https://drive.google.com/file/d/1el218y4D5f62k37slrRva84VLPU33Lkk/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Визначаю будову слова. Написання тексту про свої вподобання (с. 67 – 68)](https://drive.google.com/file/d/1CbxkNJHRP-O8TfHLE4mA0__Mu-56Ovd3/view?usp=sharing)  
**04.12** [Тема: Розбираю слова за будовою. Написання розгорнутої відповіді на запитання (с.69-70)](https://drive.google.com/file/d/16_6Ij1Yc7d1SGifm2jkPij2prkgHWPoQ/view?usp=sharing)  
**13.01** [Тема: Власні і загальні назви](https://drive.google.com/file/d/1LsFG2UyWn_yMVmtq4-TU1E5ATvdSSvEQ/view?usp=drive_web)  
**13.01** [Тема: Назви істот, неістот. Розрізняю іменники — назви істот і неістот. Складання речень](https://drive.google.com/file/d/1y8gWgHhxirlZ-vYV0TVOsH6n-bBjML1k/view?usp=sharing)  
**14.01** [Тема: Власні і загальні назви](https://drive.google.com/file/d/1TOxVV0MkrKphWBwUsWNzD_Ac7CGvW3gU/view?usp=drive_web)  
**14.01** [Тема: Розрізняю власні і загальні іменники. Написання тексту за поданими запитаннями ](https://drive.google.com/file/d/1VptiTesOLhtBzEJVVLOxPKMiqieU2lTn/view?usp=sharing)  
**15.01** [Тема: Записую власні назви з великої букви](https://drive.google.com/file/d/1JPKEx9QfO8glADERLElpOkm-14dhDgBc/view?usp=sharing)  
**15.01** [Презентація. Тема: Записую власні назви з великої букви](https://drive.google.com/file/d/1c-Wcyl6PAMaxbarOVQn6BYykyrY6EkZc/view?usp=drive_web)  
**18.01** [І група. Тема: Розвиток зв'язного мовлення. Складання розповіді про враження від свята. Тема для спілкування: "Як я святкував/святкувала Новий Рік"](https://drive.google.com/file/d/1Ag1Pr9ZfKap_vX-qNhaFwrZL41fR7pP1/view?usp=drive_web)  
**18.01** [ІІ група. Тема: Розвиток зв'язного мовлення. Складання розповіді про враження від свята. Тема для спілкування: "Як я святкував/святкувала Новий Рік"](https://drive.google.com/file/d/1SC1yRX_yFwsvUJlWXANIEuNTaMS3ZRNC/view?usp=sharing)  
**20.01** [І група. Тема: Розпізнавання іменників, які утворилися від дієслів і прикметників](https://drive.google.com/file/d/1uP8eZg1IWoaILzGqN5wAFd9hlSMr1Inu/view?usp=sharing)  
**20.01** [І група. Презентація. Тема: Розпізнавання іменників, які утворилися від дієслів і прикметників](https://drive.google.com/file/d/1KjaKxGVB9IlaHGVFc8DlICFytQpVPpo5/view?usp=sharing)  
**20.01** [ІІ група. Тема: Розпізнаю іменники, які утворилися від дієслів і прикметників](https://drive.google.com/file/d/1HXOjNAstK9HTG5knxuJ2czrYWNEoYCgS/view?usp=sharing)  
**20.01** [ІІ група. Презентація. Тема: Розпізнаю іменники, які утворилися від дієслів і прикметників](https://drive.google.com/file/d/1l7c0HKIA_8srD2m8kd1_SM2DwYoLyE0Y/view?usp=sharing)  
**21.01** [І група. Презентація. Тема: Визначення роду іменників. Придумування заголовка до поданого тексту](https://drive.google.com/file/d/1WFjyqBLx--mr29n-FfyVnWHe5_vjbMvr/view?usp=sharing)  
**21.01** [ІІ група. Тема: Визначення роду іменників. Придумування заголовка до поданого тексту](https://drive.google.com/file/d/1ycTZMmzcT1VePzFS5gZLecsKzVGiAmX9/view?usp=sharing)  
**21.01** [ІІ група. Презентація. Тема: Визначення роду іменників. Придумування заголовка до поданого тексту](https://drive.google.com/file/d/14Jw0uvRHkjuYmoapJ6kHOvfxA6BDMQ2W/view?usp=sharing)  
**21.01** [І група. Тема: Визначення роду іменників. Придумування заголовка до поданого тексту](https://drive.google.com/file/d/11Zt5dSQUfTN6QNCF9IocPy1u2AsPdtiy/view?usp=sharing)  
**22.01** [І група. Тема: Змінювання іменників за числами. Пошук інформації в буклеті. Написання розгорнутої відповіді на запитання. (с.88-89)](https://drive.google.com/file/d/1hrPSvw_4ZXPHvruAfkpIj7UcMeH_JYfP/view?usp=sharing)  
**22.01** [ІІ група. Тема: Змінювання іменників за числами. Пошук інформації в буклеті. Написання розгорнутої відповіді на запитання. (с.88-89)](https://drive.google.com/file/d/1MZ6HMIaXPh7OdzjF3FlmVMNsGLIstLDW/view?usp=sharing)  
**31.03** [І група. Тема: Розпізнавання прийменників. Пошук інформації у прайс-листі. Написання розповіді про своє бажання з обґрунтуванням власної думки (с. 122-124). Повторення спільнокореневих слів](https://drive.google.com/file/d/1m_59BEeS9MVviQ7N6GDu4FZQRyiwxOeS/view?usp=sharing)  
**31.03** [Презентація. І група. Тема: Розпізнавання прийменників. Пошук інформації у прайс-листі. Написання розповіді про своє бажання з обґрунтуванням власної думки (с. 122-124). Повторення спільнокореневих слів](https://drive.google.com/file/d/1kMrxpLL-QmTg0n2kSQx7TfSMdL-wjlYo/view?usp=sharing)  

** Я досліджую світ **  
**03.12** [Тема: Різноманітність культурних рослин. Значення рослин. (ст.139 – 141)](https://drive.google.com/file/d/1ObgOvkNELCuD7z2EJDMIhYqQQ8LbObDi/view?usp=sharing)  
**07.12** [Тема: Яке значення грибів для природи](https://drive.google.com/file/d/19X379rXlpztRdWndiGDOrJdgXY1dF28F/view?usp=sharing)  
**11.01** [Тема: Яку будову маe наше тiло.](https://drive.google.com/file/d/1D0TeQq-w0Ea1azUtzFCuxxrCqubx3ran/view?usp=sharing)  
**13.01** [Тема: Яка роль шкіри в організмі людини](https://drive.google.com/file/d/1o8OmbWDD6WpVk_jSiaiqMTa9Cz_Cjst2/view?usp=sharing)  
**14.01** [Тема: Надання першої домедичної допомоги собі та іншим при незначних ушкодження шкіри](https://drive.google.com/file/d/1PvEpPjngAk-yOJt0A1P6aVHJE56A_vcE/view?usp=sharing)  
**14.01** [Презентація. Тема: Надання першої домедичної допомоги собі та іншим при незначних ушкодження шкіри](https://drive.google.com/file/d/1DuJBLzPrEz1Tk4B3gwe-QugcZhB8aqfb/view?usp=sharing)  
**18.01** [Тема: Що утворює опорно-рухову систему](https://drive.google.com/file/d/1sRbdHNL8a-VDN01_2v1jPY7sqLCfDoRd/view?usp=drive_web)  
**18.01** [Презентація. Тема: Що утворює опорно-рухову систему](https://drive.google.com/file/d/1iTEdfrBxaM5_tcAL-igoAVaQkw3TjdfT/view?usp=drive_web)  
**20.01** [Тема: Як ми пересуваємося (ст. 19-21)](https://drive.google.com/file/d/1MTE7mao5Rd1apWm2BCPxH_4WaGkCAVf8/view?usp=sharing)  
**21.01** [Тема: Яке значення має кровоносна система. Вимірювання частоти свого пульсу (с. 22-25)](https://drive.google.com/file/d/1GT3OKlIDUnRKfEkAMU8dow_H-vXuyGui/view?usp=sharing)  
**29.03** [Тема: Як харчування впливає на здоров'я людини. Мініпроєкт "Старовинні українські страви" (с.80-81)](https://drive.google.com/file/d/12R8eEa-lLjjmuJXKvkOHNaljBqm3gGbu/view?usp=sharing)  
**29.03** [Презентація. Тема: Як харчування впливає на здоров'я людини. Мініпроєкт "Старовинні українські страви" (с.80-81)](https://drive.google.com/file/d/1Lvg1T8IW4oyqve1Ju2oVegozKnJ9AF8S/view?usp=sharing)  
**31.03** [Тема: Чим корисна їжа](https://drive.google.com/file/d/1LaVzYD_TqvRyYsL-4NUcvocsIz7ZEUaw/view?usp=sharing)  

** Англійська мова **  
**04.12** [Тема: День мого друга](https://drive.google.com/file/d/1yU9sYPWGtUCczw7fgugLg-4SLhC0rBqE/view?usp=sharing)  
**08.12** [Тема: Мiй день у школi i вдома](https://drive.google.com/file/d/1gDuh6H768mH1RgxTd43dAYDGuvXS-5FU/view?usp=sharing)  
**12.01** [Тема: Мандрівка у великий будинок](https://drive.google.com/file/d/1u1lv25RXL2fDVIZTj_8D1_8vw6MeN0-J/view?usp=sharing)  
**12.01** [Тема: Мандрівка у великому домі](https://drive.google.com/file/d/1FJhkoBkr1Wo96Sm9cEtAcpfCGZLy2xNz/view?usp=sharing)  
**13.01** [І група. Тема: Що знаходиться всередині будинку](https://drive.google.com/file/d/1a_xhvqRrMsLjNRzElbRQjQOerc2ERGuM/view?usp=sharing)  
**13.01** [ІІ група. Тема: Що знаходиться всередині будинку](https://drive.google.com/file/d/1Tq_XsrByQbEfL3_gYf1aAfikeVvbLNqa/view?usp=sharing)  
**15.01** [І група. Тема: Мої домашні меблі](https://drive.google.com/file/d/1FY7FudapDj5D6vh2EAzKjgdOsaMq-B61/view?usp=sharing)  
**15.01** [ІІ група. Тема: Мої домашні меблі](https://drive.google.com/file/d/1qL7F0xOrUc4zlOOvxl54cMH9dZOIQGFs/view?usp=sharing)  
**19.01** [І група. Тема: Ставлю питання і відповідаю](https://drive.google.com/file/d/1FX8ycz18qupvVedYRmcPi03uWzpY243T/view?usp=sharing)  
**19.01** [ІІ група. Тема: Ставлю питання і відповідаю](https://drive.google.com/file/d/1Y0oX9QPdnVgyInENZQ51tAmCW94s0vkl/view?usp=sharing)  
**20.01** [І група. Тема: Хто мешкає у будинку](https://drive.google.com/file/d/1pIyb36mRn7vSkxWU08yXoaaFRWrfig1z/view?usp=sharing)  
**20.01** [ІІ група. Тема: Хто мешкає у будинку](https://drive.google.com/file/d/13MILXeLUcz6v4WBMc5MGfYlOFSA1hk1W/view?usp=sharing)  
**20.01** [ІІ група. Аудіозапис: U05.L05.Ex01](https://drive.google.com/file/d/17Av1Q2vFlUsKFbMAjAvSNIm-4cJJJ_A2/view?usp=sharing)  
**22.01** [ІІ група. Тема: Завітаємо в готель Брайтон](https://drive.google.com/file/d/1S929SeiWP8SphZM0cPR3M4r4odZfUrsH/view?usp=sharing)  
**22.01** [І група. Тема: Завітаємо в готель Брайтон](https://drive.google.com/file/d/1NXEu685XVRyQPZo67w1k2TjeYuX9N-tq/view?usp=sharing)  
**30.03** [ІІ група. Тема: Медіавіконце мініпроєкт. Створення обкладинки книжки "Мій улюблений вірш"](https://drive.google.com/file/d/1_QuxwrcJAriaZ_nwC_7wtfkJfld2mKHV/view?usp=sharing)  
**30.03** [І група. Тема: Наш веселий літній відпочинок](https://drive.google.com/file/d/1lJyqdP34aCyjyvHrL2mS2S3K7tGoHi2d/view?usp=sharing)  
**30.03** [ІІ група. Тема: Наш веселий літній відпочинок](https://drive.google.com/file/d/1KQU8iH9KxNgNiQtUEwZ3Je9PPTN7fewS/view?usp=sharing)  
**30.03** [Аудіозапис. ІІ група. Тема: Наш веселий літній відпочинок](https://drive.google.com/file/d/1aUR3qNgn3HqqVIFYXa0WLMM_0EysNOGG/view?usp=sharing)  

** Літературне читання **  
**04.12** [Тема: Різдвяне чудо. Найкращий песик на світі. Досліджуємо текст. М.Морозенко "Руде цуценятко і різдвяний ангел" (продовження). Словесне малювання епізоду казки. Придумування продовження казки (с.72-74)](https://drive.google.com/file/d/1P9PYRpe3MujbYrASGAAjP1QHwFm3ZpU7/view?usp=sharing)  
**07.12** [Тема: Робота з дитячою книжкою. Григорій Фалькович Щедрий комар](https://drive.google.com/file/d/1FlnlvXHTd676ksklKfJcIybvINZ-VVAI/view?usp=sharing)  
**08.12** [Тема: Святкові запахи. Робота з картиною художниці Світлани Косенко "Святвечір". Як "прочитати" картину? Настрій. Кольори. Композиція. Розповідь про враження від побаченого. (с.75)](https://drive.google.com/file/d/1v9rZGVdqcx8QjOlkHnz_aq6TO4BEDrOs/view?usp=sharing)  
**11.01** [Тема: Робота з рiзними джерелами iнформацii](https://drive.google.com/file/d/15MB--TNyROHh7Nyt4cHBIHHl38mK9F6Y/view?usp=sharing)  
**12.01** [Тема: Як не любить свій край](https://drive.google.com/file/d/1fyvy3vyBDoh0-mQM2gF4SIGEag3_AY8t/view?usp=sharing)  
**14.01** [Тема: Вірші вихованців Павлиської школи. Д. Телкова «Героям». М. Малолітко «Воїнові, який захищає Вітчизну»](https://drive.google.com/file/d/1KcAOfGQO32LdRrc4E7Dtmp37uh3JymRn/view?usp=sharing)  
**15.01** [Тема: Україна в мініатюрі. О. Кротюк «Наші скарби»](https://drive.google.com/file/d/10jRWJSqkkMVrq547c9Y_Ri7z_E1ffWkw/view?usp=sharing)  
**15.01** [Презентація. Тема: Україна в мініатюрі. О. Кротюк «Наші скарби»](https://drive.google.com/file/d/1WP49MEiGvctx0KGVHGbKzQng3u5TrQPN/view?usp=sharing)  
**19.01** [ІІ група. Тема: Шевченко завжди житиме серед нас. Т. Щербаченко (Стус) «Український лицар». Навчальне аудіювання (Ч.2, с. 85-86)](https://drive.google.com/file/d/1f9uBwuX_Go8cCQ4nOVcdKUbNFgaWgOYY/view?usp=sharing)  
**19.01** [І група. Тема: Шевченко завжди житиме серед нас. Т. Щербаченко (Стус) «Український лицар». Навчальне аудіювання (Ч.2, с. 85-86)](https://drive.google.com/file/d/1tgYGGthDrt-DPE2iZrqrTboT4Ss27sJf/view?usp=sharing)  
**19.01** [Презентація. Тема: Шевченко завжди житиме серед нас. Т. Щербаченко (Стус) «Український лицар». Навчальне аудіювання (Ч.2, с. 85-86)](https://drive.google.com/file/d/1s7LwmS2CmkfcSLrfeqYGcz9pKmB0ymOO/view?usp=sharing)  
**21.01** [ІІ група. Тема: Земля-це книга, у якій історія твого народу. Н.Поклад ,,Гарно дити у селі,,(Ч.2, с.87-88)](https://drive.google.com/file/d/1jcTFUn7Y0OJZeq3aspL0G9wDX4teHqSG/view?usp=sharing)  
**21.01** [І група. Тема: Земля-це книга, у якій історія твого народу. Н.Поклад ,,Гарно дити у селі,,(Ч.2, с.87-88)](https://drive.google.com/file/d/1-Sosy2_sgbxXvLIwBkfXr5a0MDUnAXwL/view?usp=sharing)  
**21.01** [І група. Презентація. Тема: Земля-це книга, у якій історія твого народу. Н.Поклад ,,Гарно дити у селі,,(Ч.2, с.87-88)](https://drive.google.com/file/d/10Gz5OeYAiNdJlY9knJF88T9p5ZYSjt7V/view?usp=sharing)  
**22.01** [І група. Тема: Народні умільці. Н.Олійник ,,Гончарики з Опішного,,. Загадка-добавлянка (Ч.2, с.88-90)](https://drive.google.com/file/d/1doZMKRHZfHgq5n96rRCURaiySedgodsu/view?usp=sharing)  
**22.01** [ІІ група. Тема: Народні умільці. Н.Олійник ,,Гончарики з Опішного,,. Загадка-добавлянка (Ч.2, с.88-90)](https://drive.google.com/file/d/1bnURsuWdw8jJKLRE_6QsYDIhLouJe2tM/view?usp=sharing)  
**29.03** [І група. Тема: Робота з дитячою книжкою. Цікава книга природи. Василь Сухомлинський «Зрубали вербу».](https://drive.google.com/file/d/10RiOmp5MUh3mFC-HGa0yQNOIMsZu1iq3/view?usp=sharing)  
**29.03** [ІІ група. Тема: Робота з дитячою книжкою. Цікава книга природи. Василь Сухомлинський «Зрубали вербу»](https://drive.google.com/file/d/1NPcChECb0dn4WZBNlSmwJ3Tuw-QDJvP2/view?usp=sharing)  
**30.03** [І група. Тема: Медіавіконце мініпроєкт. Створення обкладинки книжки Мій улюблений вірш (с. 130)](https://drive.google.com/file/d/1BqPoyiOvhc59iij0JAEKlwuAjLN-V5c2/view?usp=sharing)  

** Фізична культура **  
**04.12** [Тема: Загально-розвивальні вправи](https://drive.google.com/file/d/1JgQ4VPp15hH2Rg_XeTkgB2WMHAKD-_Je/view?usp=sharing)  
**11.01** [Тема: Бесiда "Режим дня". Правила рухливих вправ](https://drive.google.com/file/d/1dpXjU3C0zkfVkRpK7S3EQksti2P-sVKV/view?usp=sharing)  
**12.01** [Тема: Бесіда «Правила безпеки під час занять стрибковими вправами». Загальнорозвивальні вправи. Комплекс ранкової гігієнічної гімнастики. Вправи на координацію. Стрибки на місці на одній, двох ногах, із поворотами, кругом. Рухлива гра «Хто більше»](https://drive.google.com/file/d/1kKvUwm7nY6KyxaASh7WO14WyeFOIQ1Li/view?usp=sharing)  
**15.01** [Тема: Правила безпеки на заняттях. Організовуючі і загально розвивальні вправи. Комплекс вправ ранкової гімнастики. Різновиди ходьби, бігу. Вправи для розвитку сили. Рухлива гра](https://drive.google.com/file/d/1jZCjQak44c_UXXylkPTreJjxtytl-Gae/view?usp=sharing)  
**18.01** [Тема: Правила рухливих ігор та безпеки на уроках фізичної культури та під час самостійних занять фізичними вправами. Організовуючі вправи, ЗРВ. Різновиди ходьби. Різновиди бігу. Рухлива гра.](https://drive.google.com/file/d/1rEuBGivVyzOl3-e3eDEDAOzTwNtMasXT/view?usp=drive_web)  
**19.01** [Тема: Руховий режим молодшого школяра та його вплив на формування правильної постави](https://drive.google.com/file/d/1pFgNh7_07QJcNU4QOXi9EjPFDMNRjYVU/view?usp=sharing)  
**22.01** [Тема: Дихання під час виконання фізичних вправ. Організовуючі вправи, ЗРВ. Різновиди ходьби. Різновиди бігу. Рухлива гра](https://drive.google.com/file/d/1xi9Dbd7rjWTTDexWTE3lwLg_RkA0_ygb/view?usp=sharing)  
**29.03** [Тема: Інструктаж з БЖД. Організовуючі та загальнорозвивальні вправи. Вправи для розвитку координації. Стрибки зі скакалкою на одній, двох ногах. Стрибки у довжину з місця, з розбігу 5-7 кроків способом "Зігнувши ноги". Рухлива гра](https://drive.google.com/file/d/1v26Q2itj3c19jT5FCbntwMWH9xOxKpCB/view?usp=sharing)  
**30.03** [Тема: Організовуючі та загальнорозвивальні вправи. Вправи для розвитку координації. Стрибки зі скакалкою на одній, двох ногах. Стрибки у довжину з місця, з розбігу 5-7 кроків способом "Зігнувши ноги". Рухлива гра](https://drive.google.com/file/d/1ZuV-EnGFeXIEDKDc57WtQPrqlZ7QjMjC/view?usp=sharing)  

** Образотворче мистецтво **  
**11.01** [Тема: Композицiя "Полiт Карлсона над мiстом"](https://drive.google.com/file/d/1dhQA_ZrWUo6aZiE1XqG-YzOCjyXhezeo/view?usp=sharing)  
**18.01** [Тема: Чарівні дива. Композиція «Крижаний палац Снігової Королеви» (акварель, техніка набризку) або аплікація з витинанкою «Палац снігової королеви»](https://drive.google.com/file/d/1oANaIf8ztpOFNwx609oBJI-Z573JaEQv/view?usp=drive_web)  
**29.03** [Тема: Гумор у мистецтві. Шарж "Веселий школяр або школярка" (кольорові олівці) (ст. 96-97)](https://drive.google.com/file/d/16f2OF67_qYxQRr11ghg8hn3UvshLyb4G/view?usp=sharing)  

** Дизайн і технології **  
**13.01** [Тема: Виготовлення лепбука «Моє тіло»](https://drive.google.com/file/d/1wXPpoNe_jfqNM4kFY-MRqF-hrwlWWYwI/view?usp=sharing)  
**20.01** [Тема: Виготовлення лепбука «Моє тіло» (продовження)](https://drive.google.com/file/d/1LvQWfL4OCChAH4adYlgN5EWccp31TEvM/view?usp=sharing)  
**20.01** [Презентація. Тема: Виготовлення лепбука «Моє тіло» (продовження)](https://drive.google.com/file/d/1fqhU_VYFpuK8pj-UkS2JrnOwwsVo_q81/view?usp=sharing)  
**31.03** [Тема: Виготовлення рухомої іграшки – тварини](https://drive.google.com/file/d/1xx_0xhvmoiUak1sBVSqKTMmCgLFomQJK/view?usp=sharing)  

** Інформатика **  
**12.01** [Тема: Ключові слова для пошуку](https://drive.google.com/file/d/1QlGE5KvyZa31pzE4sfqWeFZfbYDxUTQE/view?usp=drive_web)  
**19.01** [Тема: Авторське право та Інтернет](https://drive.google.com/file/d/1eWEgxh4-UqLhpwbqOEmHasJNVEIpYZ_B/view?usp=drive_web)  
**30.03** [Тема: Доповнення зображень підписом чи коментарем](https://drive.google.com/file/d/1fHLbL2w5hHniFoWgtvTKw_u37Kl3Apnt/view?usp=drive_web)  
`}</Md>
          </Tab>
          <Tab title="3-Б">
            <Md>{`
** Музичне мистецтво **  
**03.12** [Тема: Найдорожча у світі](https://drive.google.com/file/d/1i1gUjCiN0vKPL8XrNsCkVmbBWdbUVxog/view?usp=sharing)  
**14.01** [Тема: Динамічний та темповий розвиток музики](https://drive.google.com/file/d/1hRmyRD4pelKdlBecjJN1BnWyLFTD3oLk/view?usp=sharing)  
**21.01** [Тема: Динамічний розвиток музики](https://drive.google.com/file/d/1LGb4XqzphtDMzvbsqF6knT3YIjHJgP_w/view?usp=sharing)  

** Я досліджую світ **  
**03.12** [Тема: Різноманітність культурних рослин. Значення рослин. (ст.139 – 141)](https://drive.google.com/file/d/1aMckvGtRntg_f6p15jt_-ws3qUiS-4DC/view?usp=sharing)  
**07.12** [Тема: Значення грибів для природи](https://drive.google.com/file/d/1Z87OcfgT8kpP-vnBcQgqIdGmF5Q3yotj/view?usp=sharing)  
**11.01** [Тема: Яку будову маe наше тiло](https://drive.google.com/file/d/1IK6Sfs52ilvhYjSJ259JRnlNvGMARzsr/view?usp=sharing)  
**12.01** [Тема: Яка роль шкіри в організмі людини](https://drive.google.com/file/d/1OKxa43QovYvTQ7C1GVHa_PuFWF6jzwSK/view?usp=sharing)  
**14.01** [Тема: Надання першої домедичної допомоги собі та іншим при незначних ушкодження шкіри](https://drive.google.com/file/d/12eabUC4ooag9i17nbwTAm_MQScczHy8B/view?usp=sharing)  
**14.01** [Презентація. Тема: Надання першої домедичної допомоги собі та іншим при незначних ушкодження шкіри](https://drive.google.com/file/d/1SHWkESDP1T9s1K3btiXyhNfdLUDD4gIv/view?usp=sharing)  
**18.01** [Тема: Що утворює опорно-рухову систему](https://drive.google.com/file/d/1QHSg-LRoZdpkz6NqVDpADA2Z9ExoAt6y/view?usp=drive_web)  
**19.01** [Тема: Як ми пересуваємося (ст. 19-21)](https://drive.google.com/file/d/10zT8FHYv4mRgQgHEei2_vMpPcFeq5A4I/view?usp=sharing)  
**19.01** [Презентація. Тема: Як ми пересуваємося (ст. 19-21)](https://drive.google.com/file/d/1L5ufmE3FuV_W0o37MBZCXEj9NGmBmui0/view?usp=sharing)  
**21.01** [Тема: Яке значення має кровоносна система. Вимірювання частоти свого пульсу (с. 22-25)](https://drive.google.com/file/d/1HnhIaVhId3gxPGUahbaKJ4t04l9Cz5Ts/view?usp=sharing)  
**21.01** [Презентація. Тема: Яке значення має кровоносна система. Вимірювання частоти свого пульсу (с. 22-25)](https://drive.google.com/file/d/1VMJ5UR3ztJdIQiiB0Do36sfPmsJlW6vw/view?usp=sharing)  
**29.03** [Тема: Як харчування впливає на здоров’я людини. Мініпроєкт «Старовинні українські страви».](https://drive.google.com/file/d/1Vn2NpYoAcONaZdstvf3Z9PAyBNudWZt3/view?usp=sharing)  
**30.03** [Тема: Чим корисна iжа](https://drive.google.com/file/d/1QiM-CxbB7AXNuzccDQYxCZQLyrI-l_aO/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Визначаю будову слова. Написання тексту про свої вподобання (с. 67 – 68)](https://drive.google.com/file/d/1xXi1QIpOVQ295yrr8H3iHctB9Z8m8Wsv/view?usp=sharing)  
**04.12** [Тема: Розбираю слова за будовою. Написання розгорнутої відповіді на запитання (с.69-70)](https://drive.google.com/file/d/16_6Ij1Yc7d1SGifm2jkPij2prkgHWPoQ/view?usp=sharing)  
**13.01** [Тема: Назви істот, неістот. Розрізняю іменники — назви істот і неістот. Складання речень](https://drive.google.com/file/d/1uEJCwjDuA7r9rHIpg2qXO6G7PHJJRHAp/view?usp=sharing)  
**14.01** [Тема: Власні і загальні назви](https://drive.google.com/file/d/1nUejfmE2fnJdB128Uzm4vAse_Ekh6CjV/view?usp=drive_web)  
**14.01** [Тема: Розрізняю власні і загальні іменники. Написання тексту за поданими запитаннями ](https://drive.google.com/file/d/1VptiTesOLhtBzEJVVLOxPKMiqieU2lTn/view?usp=sharing)  
**15.01** [Тема: Записую власні назви з великої букви](https://drive.google.com/file/d/1gb5pm25yarGbQtAJtSnl9nlqE01swa2K/view?usp=sharing)  
**15.01** [Презентація. Тема: Записую власні назви з великої букви](https://drive.google.com/file/d/13t6mxKQZxTPnwT1UHdiu_mA2W0DPubG1/view?usp=sharing)  
**18.01** [Тема: Розвиток зв'язного мовлення. Складання розповіді про враження від свята. Тема для спілкування: "Як я святкував/святкувала Новий Рік"](https://drive.google.com/file/d/1zmligS8SxUSVuS4x24AwfBRhzOpdZIZn/view?usp=drive_web)  
**20.01** [Тема: Розпізнавання іменників, які утворилися від дієслів і прикметників](https://drive.google.com/file/d/1nl1U36BbNzglDGNhfnP72PB5A2Yv2nWy/view?usp=sharing)  
**20.01** [Презентація. Тема: Розпізнавання іменників, які утворилися від дієслів і прикметників](https://drive.google.com/file/d/1iJzXvBNLmAX-GAVr9ZJ75Wwuzgv8OH61/view?usp=sharing)  
**21.01** [Тема: Визначення роду іменників. Придумування заголовка до поданого тексту](https://drive.google.com/file/d/1vTcQWg1rXohFzHNAnboPPWTEWxLDLQLZ/view?usp=sharing)  
**21.01** [Презентація. Тема: Визначення роду іменників](https://drive.google.com/file/d/1yUNsXKtEHOkKiz0Z8dJW5d0AvK1wUUDc/view?usp=sharing)  
**22.01** [Тема: Змінювання іменників за числами. Пошук інформації в буклеті. Написання розгорнутої відповіді на запитання. (с.88-89)](https://drive.google.com/file/d/1kPJBO13Oov0VC6vSruFq0vRD-o5bJpys/view?usp=sharing)  
**29.03** [І група. Тема: Написання розповіді за поданим планом на тему з особистого життя. Тема для спілкування: «Як я турбуюся про своє здоров’я».](https://drive.google.com/file/d/1dU_Dt7XnWpMUkZzVxf-cZnt1g6Q5nbNQ/view?usp=sharing)  
**29.03** [ІІ група. Тема: Розвиток зв’язного мовлення. Написання розповіді за поданим планом на тему з особистого життя. Тема для спілкування: «Як я турбуюся про своє здоров’я»](https://drive.google.com/file/d/1H9xUg36NR63QWx5iKYRY56OqRdg7UgJM/view?usp=sharing)  
**31.03** [Тема: Розпізнавання прийменників. Пошук інформації у прайс– листі. Написання розповіді про своє бажання з обґрунтуванням  власної думки](https://drive.google.com/file/d/1vNtx7BariljC-1iFWgMPU7N7VPJshz-Y/view?usp=sharing)  

** Математика **  
**03.12** [Тема: Усне додавання трицифрових круглих чисел. Розв’язування ускладнених задач на четверте пропорційне (№589-599)](https://drive.google.com/file/d/1xsCI0XQlmD11tPhs-8qVLr2WRYYXOtIv/view?usp=sharing)  
**04.12** [Тема: Віднімання круглих чисел двома способами. Розв'язування задач та рівнянь (№600 – 610)](https://drive.google.com/file/d/14PN0awBuaJNbs9B1_0tfjzE0SX992XCy/view?usp=sharing)  
**07.12** [Тема: Додавання та віднімання круглих чисел у межах 1000. Розв’язування задач з буквеними даними](https://drive.google.com/file/d/1rS172j5TrnzlRRiyFYcC9yx78z0KrIBy/view?usp=sharing)  
**11.01** [Тема: Додавання та вiднiмання трицифрових чисел](https://drive.google.com/file/d/1Cs6HRVm1qZQf8mcrJFNYXBwqeQjIBMKu/view?usp=sharing)  
**12.01** [Тема: Письмове додавання двоцифрових чисел. (№12 - 21)](https://drive.google.com/file/d/1IxvI05Io3QIfhPhtAVbsxFPjGh9qJWwO/view?usp=sharing)  
**13.01** [Тема: Письмове додавання двоцифрових чисел](https://drive.google.com/file/d/1qz_aJQ76kexZE9T6hCnjBRRa18J2JnYS/view?usp=sharing)  
**13.01** [Презентація. Тема: Письмове додавання двоцифрових чисел](https://drive.google.com/file/d/1ZWTleK37hyC2uI-pAh8MXerOcZi08AWN/view?usp=sharing)  
**14.01** [Тема: Письмове додавання трицифрових чисел](https://drive.google.com/file/d/1VQ9ZkCxZaEleOTW0VnCXewFfqVQwKwnn/view?usp=sharing)  
**14.01** [Презентація. Тема: Письмове додавання трицифрових чисел](https://drive.google.com/file/d/1_LP8z15wsklY_BDkpeq8yu4wVjkZ7cyt/view?usp=sharing)  
**15.01** [Тема: Письмове віднімання двоцифрових чисел](https://drive.google.com/file/d/1tWGIoeYm_7jCPw3pCwHCT3ws9fRke-02/view?usp=sharing)  
**18.01** [Тема: Письмове віднімання двоцифрових чисел. Розширена задача на зведення до одиниці, що містить буквені дані](https://drive.google.com/file/d/1tLZ-dNIYk54UJyRJbvJaLgTUjbZK-ic4/view?usp=drive_web)  
**18.01** [Презентація. Тема: Письмове віднімання двоцифрових чисел. Розширена задача на зведення до одиниці, що містить буквені дані](https://drive.google.com/file/d/1KpZtLWdA6Fu2DNnSfOLSyJwwRI-ic5FY/view?usp=drive_web)  
**19.01** [Тема: Письмове віднімання трицифрових чисел. Вправи і задачі на застосування вивчених випадків арифметичних дій. Види трикутників. (№67-76)](https://drive.google.com/file/d/15Pfd2crDNJRL4nORiRXfQUAwT8jgJmhh/view?usp=sharing)  
**19.01** [Презентація. Тема: Письмове віднімання трицифрових чисел. Вправи і задачі на застосування вивчених випадків арифметичних дій. Види трикутників. (№67-76)](https://drive.google.com/file/d/1jZM-2WoOZ1b7OR7EQPs9oNX0uVz-z_s8/view?usp=sharing)  
**20.01** [Тема: Письмове додавання трицифрових чисел, коли сума одиниць дорівнює 10 або сума десятків дорівнює](https://drive.google.com/file/d/15_KFd9HzacsUaItamxV7nOtcqn_pKn1s/view?usp=sharing)  
**20.01** [Презентація. Тема: Письмове додавання трицифрових чисел, коли сума одиниць дорівнює 10 або сума десятків дорівнює](https://drive.google.com/file/d/1za2HeZme7UZhSj1R8wkBqwDKbzJJf3Md/view?usp=sharing)  
**21.01** [Тема: Письмове віднімання трицифрових чисел, коли в запису зменшуваного є нуль. (№88-98)](https://drive.google.com/file/d/166pefQbwPnN8DM5PeYROAs5480T5XnjE/view?usp=sharing)  
**21.01** [Презентація. Тема: Письмове віднімання трицифрових чисел, коли в запису зменшуваного є нуль. (№88-98)](https://drive.google.com/file/d/1dF5reZGjhm56Ek4SsmjURcBuLmk6fnKb/view?usp=sharing)  
**22.01** [Тема: Письмове додавання трицифрових чисел, коли сума одиниць більша за 10 одиниць або сума десятків більша за 10 десятків. (№99-108)](https://drive.google.com/file/d/1eZhYflWZrQGCVSJ2gDh5oM-WUa9fkwWS/view?usp=sharing)  
**22.01** [Презентація. Тема: Письмове додавання трицифрових чисел, коли сума одиниць більша за 10 одиниць або сума десятків більша за 10 десятків. (№99-108)](https://drive.google.com/file/d/1N5HtrW_RlUA7O1aDpTWr-V_-D-AcAVBc/view?usp=sharing)  
**29.03** [Тема: Дiлення двоцифрового числа на одноцифрове](https://drive.google.com/file/d/1yQQZ3NIoGVk6JejyXKHtpyf8JIl8g-NI/view?usp=sharing)  
**29.03** [Презентація. Тема: Дiлення двоцифрового числа на одноцифрове](https://drive.google.com/file/d/1jlmVHMW4ylmT4KJBPLqw0SZh8vm5m1wC/view?usp=sharing)  
**30.03** [Тема: Ділення двоцифрових чисел на одноцифрове. Розв’язання задач](https://drive.google.com/file/d/1h9ctE8-o8PsRMEZT6_Owb3ZD3KXYNOLG/view?usp=sharing)  
**31.03** [Тема: Ділення двоцифрових чисел на одноцифрове. Порівняння виразів](https://drive.google.com/file/d/18FT9ztRxKTi7XIYrU0QYXhiYb-BXJ1Uu/view?usp=sharing)  

** Фізична культура **  
**04.12** [Тема: Загально-розвивальні вправи](https://drive.google.com/file/d/1JgQ4VPp15hH2Rg_XeTkgB2WMHAKD-_Je/view?usp=sharing)  
**11.01** [Тема: Бесiда "Режим дня". Правила рухливих вправ.](https://drive.google.com/file/d/18kxrIqQ2I0Q5VxtDf3KnNoA_kGn7MGVf/view?usp=sharing)  
**12.01** [Тема: Бесіда «Правила безпеки під час занять стрибковими вправами». Загальнорозвивальні вправи. Комплекс ранкової гігієнічної гімнастики. Вправи на координацію. Стрибки на місці на одній, двох ногах, із поворотами, кругом. Рухлива гра «Хто більше»](https://drive.google.com/file/d/1kKvUwm7nY6KyxaASh7WO14WyeFOIQ1Li/view?usp=sharing)  
**15.01** [Тема: Правила безпеки на заняттях. Організовуючі і загально розвивальні вправи.  Комплекс вправ ранкової гімнастики. Різновиди ходьби, бігу. Вправи для розвитку сили. Рухлива гра](https://drive.google.com/file/d/1jZCjQak44c_UXXylkPTreJjxtytl-Gae/view?usp=sharing)  
**18.01** [Тема: Правила рухливих ігор та безпеки на уроках фізичної культури та під час самостійних занять фізичними вправами. Організовуючі вправи, ЗРВ. Різновиди ходьби. Різновиди бігу. Рухлива гра.](https://drive.google.com/file/d/1Vj2BvAtov4A-dF3EfzWPPKsNRHw9Cesi/view?usp=drive_web)  
**19.01** [Тема: Руховий режим молодшого школяра та його вплив на формування правильної постави](https://drive.google.com/file/d/1di93Ywq816VHfbQZfrEpPAnK7kWW6Wcu/view?usp=sharing)  
**22.01** [Тема: Дихання під час виконання фізичних вправ. Організовуючі вправи, ЗРВ. Різновиди ходьби. Різновиди бігу. Рухлива гра](https://drive.google.com/file/d/12VF3nGK63xyQAYzj3OYfWlr7j2o4MTQn/view?usp=sharing)  
**29.03** [Тема: Стрибки зi скакалкою](https://drive.google.com/file/d/1_DGoXQBgiW0WtimtNvFzSSusxK1uLRzk/view?usp=sharing)  
**30.03** [Тема: Стрибки зi скакалкою](https://drive.google.com/file/d/1jKxJ3wy5sPNA6ngVZ9Hngdtr4KxEbwFC/view?usp=sharing)  

** Літературне читання **  
**04.12** [Тема: Різдвяне чудо. Найкращий песик на світі. Досліджуємо текст. М.Морозенко "Руде цуценятко і різдвяний ангел" (продовження). Словесне малювання епізоду казки. Придумування продовження казки (с.72-74)](https://drive.google.com/file/d/1P9PYRpe3MujbYrASGAAjP1QHwFm3ZpU7/view?usp=sharing)  
**07.12** [Тема: Різдвяне чудо. Найкращий песик на світі. Досліджуємо текст. М.Морозенко "Руде цуценятко і різдвяний ангел" (продовження)](https://drive.google.com/file/d/1bPvztu-Na0eZkYCKqXfPHqowqZ_5Vj8e/view?usp=sharing)  
**08.12** [Тема: Робота з дитячою книжкою. Григорій Фалькович Щедрий комар](https://drive.google.com/file/d/12XfDi8NrKlTWoyvenOm9zGeNjAIZy4Mr/view?usp=sharing)  
**11.01** [Тема: Робота з рiзними джерелами iнформацiї](https://drive.google.com/file/d/1995wPMnPsYhmPVIA0JaBYNlH4yFLhkwJ/view?usp=sharing)  
**12.01** [Тема: Як не любить свій край](https://drive.google.com/file/d/1fJTtljffcbD6o8M6q8Pa2AagteO25NG_/view?usp=sharing)  
**15.01** [Тема: Україна в мініатюрі. О. Кротюк «Наші скарби»](https://drive.google.com/file/d/10jRWJSqkkMVrq547c9Y_Ri7z_E1ffWkw/view?usp=sharing)  
**15.01** [Презентація. Тема: Україна в мініатюрі. О. Кротюк «Наші скарби»](https://drive.google.com/file/d/1WP49MEiGvctx0KGVHGbKzQng3u5TrQPN/view?usp=sharing)  
**19.01** [Тема: Шевченко завжди житиме серед нас. Т. Щербаченко (Стус), Український лицар.  (Ч.2, с.85-86)](https://drive.google.com/file/d/1hfK9M01dhYqV8vqmtWhjTHjyRNuM3Vt9/view?usp=sharing)  
**19.01** [Презентація. Тема: Шевченко завжди житиме серед нас. Т. Щербаченко (Стус), Український лицар.  (Ч.2, с.85-86)](https://drive.google.com/file/d/1ksi4d18yPLVOMTwGhEhI4Ln2ZBc9edWt/view?usp=sharing)  
**20.01** [Тема: Земля-це книга, у якій історія твого народу. Н.Поклад ,,Гарно дити у селі,,(Ч.2, с.87-88)](https://drive.google.com/file/d/1dsfXYgPaCyTkTRtMCMuoLllRqyxSEYzI/view?usp=sharing)  
**20.01** [Презентація. Тема: Земля-це книга, у якій історія твого народу. Н.Поклад ,,Гарно дити у селі,,(Ч.2, с.87-88)](https://drive.google.com/file/d/1aOv9HuKnI3zTSXV8ywpb7OnnZkG-dXEi/view?usp=sharing)  
**22.01** [Тема: Народні умільці. Н.Олійник, Гончарики з Опішного. Загадка-добавлянка (Ч.2, с.88-90)](https://drive.google.com/file/d/1N2VOvtOoL-kc_xIWl62oq_N_72Qiywgf/view?usp=sharing)  
**30.03** [Тема: Медіавіконце: мініпроєкт. Створення обкладинки книжки «Мій улюблений вірш»](https://drive.google.com/file/d/1yAqP8WfdLw3bjPPWLfIYAvNvlsXo_9NI/view?usp=sharing)  
**31.03** [Тема: Перевіряю свої досягнення «Поезії про дивосвіт природи».](https://drive.google.com/file/d/1G4ZarSKWpEFuYn4NXcTV99QSzK81hMqx/view?usp=sharing)  

** Англійська мова **  
**11.01** [Тема: Мандрівка у великий будинок](https://drive.google.com/file/d/1mDmTRC20f27VBAhPwomQs6pzHS9MPezV/view?usp=sharing)  
**13.01** [Тема: Що знаходиться всередині будинку](https://drive.google.com/file/d/1a_xhvqRrMsLjNRzElbRQjQOerc2ERGuM/view?usp=sharing)  
**15.01** [Тема: Мої домашні меблі](https://drive.google.com/file/d/1zhy6QcwEwTR1wNLkj975g61R4EYljhdb/view?usp=sharing)  
**18.01** [І група. Тема: Ставлю питання і відповідаю](https://drive.google.com/file/d/1DRO0h182AJArBrm_UFCuOiaWBN5lponH/view?usp=sharing)  
**18.01** [ІІ група. Тема: Home, sweet home](https://drive.google.com/file/d/1bEz6df9yTf-tKbnPfuyv1HTL9pbxOyuK/view?usp=sharing)  
**20.01** [І група. Тема: Хто мешкає у цьому будинку](https://drive.google.com/file/d/1cRc4x_5ZaT0r_43Oxbm7sFZEZAPT575_/view?usp=sharing)  
**20.01** [ІІ група. Тема: Хто мешкає зі мною. Мій дім](https://drive.google.com/file/d/1ZT1iit3p8WJ_fFbhOVWej2PAnOiaDM7U/view?usp=sharing)  
**22.01** [І група. Тема: Завітаймо в готель Брайтон](https://drive.google.com/file/d/1repJa8ftszp6aBWS6KuM9W-NDrUIAx0s/view?usp=sharing)  
**22.01** [ІІ група. Тема: Завітаймо в готель Брайтон](https://drive.google.com/file/d/15JLV_ICO3w9VZVRwMSChftRGEpb_pt2v/view?usp=sharing)  
**29.03** [ІІ група. Тема: Наш веселий літній відпочинок](https://drive.google.com/file/d/1t2zPXBKTSJ5GsBsFQ7EF51QWKD20viTn/view?usp=sharing)  
**29.03** [І група. Тема: Наш веселий літній відпочинок](https://drive.google.com/file/d/1lwwC9HoEzJ6BMUkivK0wsItG1RQG53jq/view?usp=sharing)  

** Дизайн і технології **  
**14.01** [Тема: Виготовлення лепбука «Моє тіло»](https://drive.google.com/file/d/1IA7arqorxt5apzLTNMWtRhPfBdmWCLfX/view?usp=sharing)  
**21.01** [Тема: Виготовлення лепбука Моє тіло (продовження)](https://drive.google.com/file/d/1cwOooVTgNW8qizJYmTbMido1M-w6kwST/view?usp=sharing)  
**21.01** [Презентація. Тема: Виготовлення лепбука Моє тіло (продовження)](https://drive.google.com/file/d/1_BSZzyovthaY41OhOKtIO0g16MW9er2r/view?usp=sharing)  

** Інформатика **  
**12.01** [Тема: Ключові слова для пошуку](https://drive.google.com/file/d/1QlGE5KvyZa31pzE4sfqWeFZfbYDxUTQE/view?usp=drive_web)  
**19.01** [Тема: Авторське право та Інтернет](https://drive.google.com/file/d/1eWEgxh4-UqLhpwbqOEmHasJNVEIpYZ_B/view?usp=drive_web)  
**30.03** [Тема: Доповнення зображень підписом чи коментарем](https://drive.google.com/file/d/1fHLbL2w5hHniFoWgtvTKw_u37Kl3Apnt/view?usp=drive_web)  

** Образотворче мистецтво **  
**13.01** [Тема: Мандрівка у світ фантастики. Композиція «Політ Карлсона над містом» (гуаш, акварельні фарби чи кольорові олівці й фломастери) або малювання «Фантастичний персонаж»](https://drive.google.com/file/d/1VG1op6Triu328N7wEyEzC_COIP3cxeAl/view?usp=drive_web)  
**20.01** [Тема: Чарівні дива. Композиція «Крижаний палац Снігової Королеви»](https://drive.google.com/file/d/1Qz_p13WiWU1Y86w4JrNpmVTOpn7wnK6g/view?usp=sharing)  
**31.03** [Тема: Гумор у мистецтві. Шарж "Веселий школяр або школярка"](https://drive.google.com/file/d/1GfvHZUYfWThjttQdZ5GmFw4Qff0_Fok-/view?usp=sharing)  
`}</Md>
          </Tab>
        </Tabs>
      </Tab>
      <Tab title="4 клас">
        <Tabs>
          <Tab title="4 клас">
            <Md>{`
** Англійська мова **  
**03.12** [Тема: Покупки](https://drive.google.com/file/d/1lhOUMYkO4FOvR9kvfydfM19Z81zXLVs1/view?usp=sharing)  
**08.12** [Тема: Новий Рік](https://drive.google.com/file/d/1-ldhQ9GyILrJ4HyNQL74GXcXklK6a7-J/view?usp=sharing)  
`}</Md>
          </Tab>
          <Tab title="4-А">
            <Md>{`
** Музичне мистецтво **  
**03.12** [Тема: «Мистецтво крізь віки»](https://drive.google.com/file/d/1YubWV5rzabVC6jdwvG8rPKUiyjm-OUkj/view?usp=sharing)  
**14.01** [Тема: Крокуємо з піснями рідного краю](https://drive.google.com/file/d/11K_FCj2isa46YdR7TcD1-ky6MDWKbkzo/view?usp=sharing)  
**21.01** [Тема: Їдемо з нашими піснями до Польщі](https://drive.google.com/file/d/1SxcoYy2IE9vGlLGUWvrvZVkoeuHKtM4N/view?usp=sharing)  

** Математика **  
**03.12** [Презентація](https://drive.google.com/file/d/1BKMnkoHMcau09nXlsOo9ppuFX_jwqs7R/view?usp=sharing)  
**04.12** [Тема: Додавання і віднімання іменованих чисел. Розв'язування задач](https://drive.google.com/file/d/1bbD5QaCFp7DONB11hI3Jb2U2ZNXcgxZQ/view?usp=sharing)  
**07.12** [Тема: Дії з іменованими числами. Розв'язування задач на визначення тривалості подій](https://drive.google.com/file/d/1TFFSmhXaVHLoDKMVwoFgXuUMKMzIu1mW/view?usp=sharing)  
**11.01** [Тема: Множення у випадку кількох нулів у першому множнику. Розв'язування задач із двома буквеними даними](https://drive.google.com/file/d/1E3LB2O5ubudymM9Bralf90JOfgUx2buE/view?usp=sharing)  
**13.01** [Тема: Множення багатоцифрових чисел, що закінчуються нуля¬ми. Задачі на спільну роботу](https://drive.google.com/file/d/15BIHK6LSAdUn1Owwvp1-8lIvuxpQAPp-/view?usp=sharing)  
**14.01** [Тема: Множення одноцифрових чисел на багатоцифрові. Знахо¬дження значень виразів на сумісні дії різного ступеня. Задачі на спільну роботу](https://drive.google.com/file/d/1zWYT1UP6Bdd9E2jNqQBOiOjnB-4LB3Ar/view?usp=sharing)  
**15.01** [Тема: Площа фігури. Квадратний сантиметр. Задачі, аналогічні до задач на спільну роботу](https://drive.google.com/file/d/1ebG8YmnygnEXqrMSc-XqHmwL8h-vordu/view?usp=sharing)  
**18.01** [Тема: Правило обчислення площі прямокутника та його застосування. Знаходження значень виразів на сумісні дії. Задачі на спільну роботу](https://drive.google.com/file/d/1CcFIoa2kCLwouqw6ANVWdztId8xJFhrO/view?usp=sharing)  
**20.01** [Тема: Обчислення площі прямокутника. Розв'язування задач, пов'язаних із площею прямокутника](https://drive.google.com/file/d/1Fyu499IbG80h3q6AKX12vJNhbarNgD4t/view?usp=sharing)  
**21.01** [Тема: Одиниці вимірювання площі. Задачі, які містять дії над ве¬личинами, вираженими в одиницях площі](https://drive.google.com/file/d/1teiHYaFJHDxlLYa-t5hFwczGAtF5JaR_/view?usp=sharing)  
**22.01** [Тема: Обчислення площі прямокутних ділянок за планом. Розв'язування задач](https://drive.google.com/file/d/1sI9jA8YFRdRVXY7TgvZuG4FlocEveaDs/view?usp=sharing)  
**29.03** [Тема: Письмове ділення трицифрових чисел на розрядні числа з остачею. Задачі на пропорційне ділення](https://drive.google.com/file/d/1jAIzotTphUfidL3xa3R1CdTCgaUB0fNM/view?usp=sharing)  
**31.03** [Тема: Письмове ділення трицифрових чисел на розрядні числа. Розв'язування і порівняння задач](https://drive.google.com/file/d/1Clb-cBrpiKQ1O2xt6VXmUjlxPlNqpeXq/view?usp=sharing)  

** Основи здоров’я **  
**03.12** [Тема: Профілактика порушень зору, слуху, опорно-рухового апарату у школярів. Вправи для профілактики плоскостопості](https://drive.google.com/file/d/1qcNOK9BdFA-j7Fyo2JrNI_GEvJJfZ-46/view?usp=sharing)  
**14.01** [Тема: Звички і здоров'я. Практична робота виконання проєкту з формування корисної звички](https://drive.google.com/file/d/1xEd-tGuSGbtz4h8z3_0ZxZRI4Iy5hmoQ/view?usp=sharing)  
**21.01** [Тема: Шкідливі звички і здоров'я. Небезпека куріння, вживання алкогольних, наркотичних і токсичних речовин](https://drive.google.com/file/d/1FLirvrEm_fdACL3e1D83szp9ohuXXdPa/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Спостереження за вживанням прикметників у текстах різних стилів: науковому і художньому](https://drive.google.com/file/d/1zxmnnFCg8sk7b3GKFYGAdGdevlCnU8Ph/view?usp=sharing)  
**04.12** [Тема: Змінювання прикметників за родами та числами у сполученні з іменниками. Родові закінчення прикметників](https://drive.google.com/file/d/1HylTHma9uCpPG01X7M4w3scD7l2NZg1v/view?usp=sharing)  
**07.12** [Тема: Вiдмiнювання прикметникiв у сполученнi з iменниками в однинi та множинi](https://drive.google.com/file/d/1ikqCNKAa13tzSpHz2mHTK32XN_cRgUcA/view?usp=sharing)  
**08.12** [Тема: Зіставлення закінчень прикметників з основою на твердий та м’який приголосний в однині і множині](https://drive.google.com/file/d/1cVNaVJgTH328DxQd2XE-6f03MqZZ1OHm/view?usp=sharing)  
**11.01** [І група. Тема: Закріплення знань про правопис прикметників у множині](https://drive.google.com/file/d/14qbPNoQu9_vL5B8d9KpV6EnGGNuWFx1o/view?usp=sharing)  
**11.01** [ІІ група. Тема: Закріплення знань про правопис прикметників у множині](https://drive.google.com/file/d/11h-wGePdXFhvZHdp8oNjT1preTJAPl-l/view?usp=sharing)  
**12.01** [Тема: Побудова сполучень слів і речень із прикметниками, уведення їх у текст](https://drive.google.com/file/d/14o18tm2HqXl1qf9ffXA458-RGfKYdZLT/view?usp=sharing)  
**14.01** [Тема: Закріплення вивченого про прикметник](https://drive.google.com/file/d/1ptbzNmJ-eUTbkfiII5PmjWEIJqR9BisR/view?usp=sharing)  
**14.01** [І група. Тема: Закріплення вивченого про прикметник](https://drive.google.com/file/d/1HZIO56ibMKJZKxOVpu7m5X6xbsJqtRkS/view?usp=sharing)  
**18.01** [І група. Тема: Розбір прикметника як частини мови](https://drive.google.com/file/d/1KA51hJNDdxO7_huF4NKfsgUIKb1lZ0SR/view?usp=sharing)  
**18.01** [ІІ група. Тема: Розбір прикметника як частини мови](https://drive.google.com/file/d/1DNYDJeZ5ONmFVCtpvZiHNfFsgo-0PoEC/view?usp=sharing)  
**19.01** [ІІ група. Тема: Поширення речень прикметниками](https://drive.google.com/file/d/1wEykTcQSrOCuD4oCiJRvteFC5K9e-Wy1/view?usp=sharing)  
**19.01** [І група. Тема: Поширення речень прикметниками](https://drive.google.com/file/d/1qpRR-qCNxIXrGudADdt_W3Zvg9OYK1LH/view?usp=sharing)  
**20.01** [ІІ група. Тема: Узагальнення та систематизація знань і вмінь за темою](https://drive.google.com/file/d/1lpUM2BjXrsgd9TiBT1JpR4yAj76W6XXR/view?usp=sharing)  
**21.01** [І група. Тема: Узагальнення та систематизація знань і вмінь за темою](https://drive.google.com/file/d/1aOkqog-gIP6IYw5TtJWEp4joSBWmm-ar/view?usp=sharing)  
**21.01** [І група. Презентація. Тема: Значення прикметників у мові](https://drive.google.com/file/d/1s74sqrKyLwhhSHYkus8e_6EoeFlfMoKl/view?usp=sharing)  
**21.01** [ІІ група. Тема: Узагальнення та систематизація знань і вмінь за темою](https://drive.google.com/file/d/1TWRdjJgfNuu3hGDB3puFZ6dPcAmIpTmV/view?usp=sharing)  
**29.03** [ІІ група. Тема: Теперішній час. Змінювання дієслів теперішнього часу за особами й числами](https://drive.google.com/file/d/1FdVaFIKVz59weyxHpShY329w6fZJ__mn/view?usp=sharing)  
**29.03** [І група. Тема: Теперішній час. Змінювання дієслів теперішнього часу за особами й числами](https://drive.google.com/file/d/1QtkWO9RayIUKRH8_m1xs-SaY9vLzq8nx/view?usp=sharing)  
**30.03** [ІІ група. Тема: Урок розвитку писемного мовлення. Детальний переказ тексту «Юрко з Тимком  – друзі» (за колективно складеним планом і поданою кінцівкою)](https://drive.google.com/file/d/10GtauYxAuxumaSnSDvRjR8Qa7CF46ooJ/view?usp=sharing)  
**30.03** [І група. Тема: Урок розвитку писемного мовлення . Детальний переказ тексту «Юрко з Тимком  – друзі» (за колективно складеним планом і поданою кінцівкою)](https://drive.google.com/file/d/1TGhaLQgEP8J5ZISDgUHTwi_pPxKPWosT/view?usp=sharing)  

** Фізична культура **  
**04.12** [Завдання](https://drive.google.com/file/d/13py1-ZctKCGOs4nnf8wgTevIB_Fvh90v/view?usp=sharing)  
**11.01** [Тема: Підготовчі вправи](https://drive.google.com/file/d/1uFyQO3IgVCvKHzi8oubTdQul_2H2ugKE/view?usp=sharing)  
**12.01** [Тема: Руханка](https://drive.google.com/file/d/1Q3TKRNkP8pvx1Iw51N1sCrpdo5A6CvLF/view?usp=sharing)  
**15.01** [Тема: Комплекс ранкової гімнастики. Визначення динаміки змін показників розвитку фізичних якостей учнів. Рухливі ігри «Переміна місць», “Піймай жабу”](https://drive.google.com/file/d/1pNl-jidygL1sRCv8nMSlT7Bu-mMzIrQA/view?usp=sharing)  
**18.01** [Тема: Підготовчі вправи. ЗРВ. Різновиди ходьби та бігу. Елементи рівноваги ходьба по гімнастичній лаві. Комбінація із 4 акробатичних елементів](https://drive.google.com/file/d/1L005YoNphGtDnbbNHwC4pPDNaUPQkeeA/view?usp=sharing)  
**19.01** [Тема: Елементи акробатики “міст” комбінація із 4 акробатичних елементів. Вис на зігнутих руках. Рухливі ігри «Фігури»](https://drive.google.com/file/d/1hZRAEqO03mJf5FYobaBf5lBxOADnWBYS/view?usp=sharing)  
**22.01** [Тема: Підготовчі вправи. ЗРВ без предметів. Елементи акробатики “міст” із положення стоячи  стійка на голові і руках із зігнутими ногами; комбінація із 4 акробатичних елементів](https://drive.google.com/file/d/15litFvNqrHJOHnhr7tOMmtQZkJSx1Qjq/view?usp=sharing)  
**29.03** [Тема: Підготовчі вправи. Стрибки зі скакалкою на одній, двох ногах, обертаючи скакалку вперед і назад з проміжними та без проміжних стрибків; стрибки, обертаючи скакалку вперед із перехрещуванням рук (дівчата). Рухливі ігри та естафети зі стрибками](https://drive.google.com/file/d/17cvh8TpY_teVBXbhjTVeR0K0YHqYnv85/view?usp=sharing)  
**30.03** [Тема: Різновиди ходьби та бігу. Стрибки у висоту з розбігу способом «переступання». Вправи для розвитку витривалості. Рухливі  ігри «Кружилиха» та «Піймай жабу»](https://drive.google.com/file/d/1yDl-2PAVAIu4i5zqiV80-jpIbKFtlmS7/view?usp=sharing)  

** Я у світі **  
**04.12** [Тема: Культура поведінки учня](https://drive.google.com/file/d/1VflWdiAssdcz5PqI46YjcYwF-ewod2FQ/view?usp=sharing)  
**15.01** [Тема: Культура спілкування. Чому виникають конфлікти](https://drive.google.com/file/d/1Aqvzlmhe8uwALnuK_VHMrx89Q_DnXvOX/view?usp=sharing)  
**22.01** [Тема: Культура спілкування. Як налагодити хороші взаємини Будьте дружелюбними!](https://drive.google.com/file/d/1b-TC02xZpq4jF42CEUBw3tDE3TsJ1gWu/view?usp=sharing)  

** Літературне читання **  
**07.12** [Тема: Марко Вовчок «Літній ранок», Михайло Коцюбинський «Літній день»](https://drive.google.com/file/d/1Hcug_znkMSO2DtbPp1V1SVFXCAeuL6PJ/view?usp=sharing)  
**08.12** [Тема: Г. Тютюнник Ласочка](https://drive.google.com/file/d/1Gq1aM952H2hFwxYpQWESf9wuZVwo-v3I/view?usp=sharing)  
**11.01** [Горевич Л. В. Тема: Вступ до розділу. Т.Шевченко. Про себе](https://drive.google.com/file/d/18gp7SS7XMB2mTTqtUg6lb_B440vyruDz/view?usp=sharing)  
**11.01** [Тема: Вступ до розділу. Т. Шевченко «Про себе»](https://drive.google.com/file/d/14SItJIPS8y-xNf5CrlzGGycZwhEQPBjR/view?usp=sharing)  
**12.01** [Горевич Л. В. Тема: Т. Шевченко. Вітер віє-повіває](https://drive.google.com/file/d/1ASZjzysh6riXA87oo98MFpGX_5OexTsb/view?usp=sharing)  
**12.01** [Тема: Вітер віє-повіває» Т. Шевченко «Вітер з гаєм розмовляє»](https://drive.google.com/file/d/1xwYMgR8EI1TGQ_di1Z4eYcc4Hp6JrmEv/view?usp=sharing)  
**13.01** [Горевич Л. В. Тема: Т.Шевченко. Реве та стогне Дніпр широкий](https://drive.google.com/file/d/1f0uqai6p7R-AvwZ0oad36TCocKStAgdN/view?usp=sharing)  
**13.01** [Тема: Т. Шевченко «Реве та стогне Дніпр широкий»](https://drive.google.com/file/d/1jdBuZZhKcYhJqVXI2F2OqNQV_tGwlUx0/view?usp=sharing)  
**15.01** [Горевич Л. В. Тема: Музей Заповіту Т. Шевченка](https://drive.google.com/file/d/1ye9H-wnIx79cXvUhI7rvhEckBg3xjJ2K/view?usp=sharing)  
**15.01** [Тема: Пам'ятаємо про Шевченка. "Музей "Заповіт" Тараса Григоровича Шевченка в Переяславі"](https://drive.google.com/file/d/1WQU5rWn5S0DTtPkpyKpUtPt-hzmbUFKf/view?usp=sharing)  
**18.01** [Горевич Л. В. Тема: УПЧ. «Видатні письменники» Тарас Шевченко « За сонцем хмаронька пливе», «Сонце гріє, вітер віє». Іван Франко «Червона калина, чого в лузі гнешся?», «Порада». Леся Українка «Талого снігу платочки сивенькі». Микола Вінграновський «Наша річка»](https://drive.google.com/file/d/1KUo41UKUrsxDX5jLKRhv84egAvfy6ith/view?usp=sharing)  
**18.01** [Тема: Урок позакласного читання «Видатні письменники»](https://drive.google.com/file/d/1aye5eekD3O40o939-ka8J83rhgR-pIax/view?usp=sharing)  
**19.01** [Тема: Роман Завадович «Поет-Каменяр»](https://drive.google.com/file/d/1_i3WmIH0WD-H7p4o5fiUmZfUi9AamICO/view?usp=sharing)  
**19.01** [Горевич Л. В. Тема: Іван Франко. Роман Завадович. Поет-Каменяр (скорочено)](https://drive.google.com/file/d/1pBdsL8yz0yiau7vIw5zIx09D1YXQaaq6/view?usp=sharing)  
**20.01** [Горевич Л. В. Тема: Іван Франко «Дивувалась зима», «Дрімають села» (напам’ять)](https://drive.google.com/file/d/1wU2TRL11KF6v7FD_x0jEGqsriHQULPkD/view?usp=sharing)  
**20.01** [Тема: Іван Франко «Дивувалась зима», «Дрімають села»](https://drive.google.com/file/d/15WfAw0I-ZOtywoTBmtCqmmiLDzhJZS2c/view?usp=sharing)  
**22.01** [Горевич Л. В. Тема: Іван Франко «Лисичка-кума»](https://drive.google.com/file/d/1poSNPwYIrzzCqrxRUyBKdkYhAYmRRPZB/view?usp=sharing)  
**22.01** [Горевич Л. В. Презентація. Тема: Іван Франко «Лисичка-кума»](https://drive.google.com/file/d/1XdYND6WllGVWkvrYFaYth78nulN_oOvJ/view?usp=sharing)  
**22.01** [Тема: Іван Франко «Лисичка-кума»](https://drive.google.com/file/d/1WEyhZ5C6Uqd1Lnlb_K8GcpsSvJedes74/view?usp=sharing)  
**29.03** [Горевич Л. В. Тема: Не загубив, а знайшов](https://drive.google.com/file/d/1CHazisUMfegIkJ7tDST-m1jWoRAE5ZGu/view?usp=sharing)  
**29.03** [Тема: Василь Сухомлинський «Не загубив, а знайшов»](https://drive.google.com/file/d/1WzK8CtWZXNJPDb2FBm2yoUsyV8fpvqY1/view?usp=sharing)  
**30.03** [Горевич Л. В. Тема: Всеволод Нестайко. Шура i Шурко](https://drive.google.com/file/d/1-ygI851t1vkWH6Z5ZWm3RW3bm-oJ_uzg/view?usp=sharing)  
**30.03** [Тема: Всеволод Нестайко «Шура і Шурко»](https://drive.google.com/file/d/1lVUB1jUQrUzLZLbO_S_pphQBvc5ygm_o/view?usp=sharing)  
**31.03** [Тема: Всеволод Нестайко «Шура і Шурко»](https://drive.google.com/file/d/19DjkMMmBJvSTHTgv2j_4evAwnnj34OIe/view?usp=sharing)  

** Природознавство **  
**08.12** [Тема: Рослинний та тваринний світ Євразії](https://drive.google.com/file/d/12dq2cy7xWbmzcqgIBieKcuquvoJs3jDe/view?usp=sharing)  
**12.01** [Тема: Особливості природи Північної Америки](https://drive.google.com/file/d/1G94Zq0SGjxwYDH0TmQi2CU7RCPxgB0mM/view?usp=sharing)  
**13.01** [Тема: Рослинний і тваринний світ Північної Америки](https://drive.google.com/file/d/1ZPoiXNeJFJrgwkP02wzEBLjzjeGKXKzr/view?usp=sharing)  
**19.01** [Тема: Найбільші країни Північної Америки. Діяльність людей та охорона природи](https://drive.google.com/file/d/1FVWiHLCmcQM3bEbPQexpmuXIkyq1FDmY/view?usp=sharing)  
**20.01** [Тема: Особливості природи Південної Америки](https://drive.google.com/file/d/1ZKdNcWhKZA2eNm62uHnweLjCEonPZzoE/view?usp=sharing)  
**30.03** [Тема: Чорне та Азовське моря. Використання й охорона природ¬них багатств водойм. Практична робота: позначення на контурній карті основних водойм України](https://drive.google.com/file/d/1WbWBL_thPHmx-BsV-h0bObzN6iiwHQoc/view?usp=sharing)  
**31.03** [Тема: Ґрунти України. Охорона ґрунтів](https://drive.google.com/file/d/1EFhzO0rQO-ol3g142182NaY6YRedKbDq/view?usp=sharing)  

** Трудове навчання **  
**11.01** [Тема: Поглиблення знань про аплікацію. Послідовність виготовлення об’ємної аплікації на тканині з використанням ґудзиків, леліток та бісеру](https://drive.google.com/file/d/1q_ewBpSabhe2sThmRxF7JLvWEzjL_RAd/view?usp=sharing)  
**18.01** [Тема: Пластичні матеріали для виготовлення виробів. Закріплення поняття об'єму. Ліплення улюбленої тваринки](https://drive.google.com/file/d/1E438g7hnOfmJ-ac30ljauNKMQUsJ7Mgo/view?usp=sharing)  
**29.03** [Тема: Властивості  штучних матеріалів: пластик, поролон, синтепон, вата. Послідовність виготовлення простих виробів із штучних матеріалів.  Іграшки із штучних матеріалів](https://drive.google.com/file/d/1MIzShEawXWyXVsxK0gvtHDOlkBw-O2gz/view?usp=sharing)  

** Англійська мова **  
**12.01** [Тема: Моя улюблена пора року](https://drive.google.com/file/d/1PDsqIBOFsVc7KKQH2w1znaOqBAhOa3HH/view?usp=sharing)  
**12.01** [Тема: Улюблена пора року](https://drive.google.com/file/d/13wF_z37_jA6pDq5U6QmdB-mvuMSjxZ7I/view?usp=sharing)  
**14.01** [Тема: Погода учора](https://drive.google.com/file/d/1izpL-TiXEgFA2fkYzNC5GAdFng5tYXBj/view?usp=sharing)  
**14.01** [І група. Тема: Погода учора](https://drive.google.com/file/d/1OcLRtbZuRZBWhMeWwFGTWOwLCWN0BzO8/view?usp=sharing)  
**19.01** [І група. Тема: Узимку](https://drive.google.com/file/d/1CmG5HXgv6PTumbZdtgCQRRqrrbXlg20t/view?usp=sharing)  
**19.01** [ІІ група. Тема: Узимку](https://drive.google.com/file/d/1u3ZB5A2FETykSEukf0XSo18uPAOq7Xaj/view?usp=sharing)  
**21.01** [І група. Тема: Порівнюємо погоду](https://drive.google.com/file/d/1m6KsrUNzHAVsE0aSW1ZxJv1yDuG8P7lM/view?usp=sharing)  
**21.01** [ІІ група. Тема: Повторюємо погоду](https://drive.google.com/file/d/1iZJGiJt7yLM6HlPcYb1-j15R-N4Yy8uX/view?usp=sharing)  
**30.03** [І група. Тема: Види подорожі](https://drive.google.com/file/d/1vVn57VPeIcelPMBhnTvdA6NHPv6E8oRX/view?usp=sharing)  
**30.03** [ІІ група. Тема: Види подорожі](https://drive.google.com/file/d/1eMoQ2xpyxPsod62yu54sZbOvZvD3haAd/view?usp=sharing)  

** Основи мовознавства **  
**15.01** [Тема: Тренувальні вправи на побудову речень з прикметниками. Складання тексту-опису за малюнком](https://drive.google.com/file/d/10Y0DfvUD_nzi63CeOtKn8LQ_Z6dQ0fWy/view?usp=sharing)  

** Образотворче мистецтво **  
**13.01** [Горевич Л. В. Тема: Невідома планета](https://drive.google.com/file/d/1eEBEMuWkGd9yEa6BiHlvDiag95QBekMp/view?usp=sharing)  
**19.01** [Горевич Л. В. Тема: Караван у пустелі](https://drive.google.com/file/d/1FdfAvojx8X9IRtXwhB6iAMegd3KZXQp8/view?usp=sharing)  
**19.01** [Горевич Л. В. Презентація. Тема: Караван у пустелі](https://drive.google.com/file/d/1WvjLMudcsO79sogzpvvWM0pMS9UFsaIQ/view?usp=sharing)  
**31.03** [Горевич Л. В. Тема: Пам'ятки архітектури](https://drive.google.com/file/d/1rpeWgTqbCw3KC1Cyw8AUb5E6m68zMBXt/view?usp=sharing)  

** Інформатика **  
**13.01** [Тема: Електронна пошта](https://drive.google.com/file/d/1KyFCawBMzLggZl_i87HzBarHmFnhAAoK/view?usp=drive_web)  
**20.01** [Тема: Інформаційні ресурси Інтернету. Пошук навчальних матеріалів в мережі. Навчальна діяльність учня в Інтернеті. Рівні доступу до навчальних матеріалів.](https://drive.google.com/file/d/1e5L-kjkqik3vDlfm2jIA1Ne2RuMPdS2g/view?usp=drive_web)  
`}</Md>
          </Tab>
          <Tab title="4-Б">
            <Md>{`
** Музичне мистецтво **  
**03.12** [Тема: «Мистецтво крізь віки»](https://drive.google.com/file/d/1YubWV5rzabVC6jdwvG8rPKUiyjm-OUkj/view?usp=sharing)  
**14.01** [Тема: Крокуємо з піснями рідного краю](https://drive.google.com/file/d/11K_FCj2isa46YdR7TcD1-ky6MDWKbkzo/view?usp=sharing)  
**21.01** [Тема: Їдемо з нашими піснями до Польщі](https://drive.google.com/file/d/11xxUNAOB17avpm3c7INPz48j9_wp-8VE/view?usp=sharing)  

** Математика **  
**03.12** [Тема: Круглі числа.Складання виразів за задачами з буквеними даними.Периметр прямокутної ділянки.](https://drive.google.com/file/d/1z_JEo9XL_hgqyII0JYc9G2B0n2ui4m9z/view?usp=sharing)  
**04.12** [Тема: Додавання і віднімання іменованих чисел. Розв'язування задач](https://drive.google.com/file/d/1p6NmCkJs7I06ZFszWV09CTa43lTQjayZ/view?usp=sharing)  
**08.12** [Тема: Дії з іменованими числами. Розв'язування задач на визначення тривалості подій](https://drive.google.com/file/d/1mAA0ZPexYqipo6qwLHmKryPYK9ENwrhq/view?usp=sharing)  
**11.01** [Тема: Множення у випадку кількох нулів у першому множнику. Розв'язування задач із двома буквеними даними](https://drive.google.com/file/d/1Ndk9K6TbYfUcRk8DXsKY_26okR5-T9qx/view?usp=sharing)  
**13.01** [Тема: Множення багатоцифрових чисел, що закінчуються нулями. Задачі на спільну роботу](https://drive.google.com/file/d/10kc67ej04CgihVsMUF8hxTqekjxFW5mP/view?usp=sharing)  
**14.01** [Тема: Множення одноцифрових чисел на багатоцифрові. Знахо¬дження значень виразів на сумісні дії різного ступеня. Задачі на спільну роботу](https://drive.google.com/file/d/1hcNuZJsrJ9Q5HT2qzadWW3ShO3UyTI17/view?usp=sharing)  
**15.01** [Тема: Площа фігури. Квадратний сантиметр. Задачі, аналогічні до задач на спільну роботу](https://drive.google.com/file/d/12ssI3W5dGJEyR-BXUZYiESSqWlD5IOHa/view?usp=sharing)  
**18.01** [Тема: Правило обчислення площі прямокутника та його застосування. Знаходження значень виразів на сумісні дії. Задачі на спільну роботу](https://drive.google.com/file/d/1sH1vA4Pi6uYCVqOViW7nebHFd7gvqBpS/view?usp=sharing)  
**20.01** [Тема: Обчислення площі прямокутника. Розв'язування задач, пов'язаних із площею прямокутника](https://drive.google.com/file/d/1-JX1qwBNi6kb3y52mGveK8UgmuQF3xSE/view?usp=sharing)  
**21.01** [Тема: Одиниці вимірювання площі. Задачі, які містять дії над величинами, вираженими в одиницях площі](https://drive.google.com/file/d/1U8lkWCq-E_ow3SSzkyg531F_Ee3cEXDi/view?usp=sharing)  
**22.01** [Тема: Обчислення площі прямокутних ділянок за планом. Розв'язування задач](https://drive.google.com/file/d/1EfcLjaVcC4xj_w2wU_9c9w3WCci8Q9he/view?usp=sharing)  
**29.03** [Тема: Письмове ділення трицифрових чисел на розрядні числа з остачею. Задачі на пропорційне ділення](https://drive.google.com/file/d/1HN9E9b6oaVzTyUeIC6Xi3DbxEte29ZSG/view?usp=sharing)  
**31.03** [Тема: Письмове ділення трицифрових чисел на розрядні числа. Розв’язування і порівняння задач](https://drive.google.com/file/d/1mMSuC1KwnPhVhqgxy4TT93B_t2dmvF5H/view?usp=sharing)  

** Природознавство **  
**03.12** [Тема: Рослинний і тваринний світ Євразії](https://drive.google.com/file/d/19B5F0TdlKF4LUvAQpcxKbDVSHyyTeqsP/view?usp=sharing)  
**08.12** [Тема: Найбільші країни Євразії. Діяльність людей і охорона природи](https://drive.google.com/file/d/1-ZbQm2ELGZLCuiCAegkDazL-kYFKc3FL/view?usp=sharing)  
**12.01** [Тема: Особливості природи Північної Америки](https://drive.google.com/file/d/1eA4jM4nlw23Fdoq3S26XnI1TMMbST8gJ/view?usp=sharing)  
**14.01** [Тема: Рослинний і тваринний світ Північної Америки](https://drive.google.com/file/d/1-BVJOltDc5MFjelOkqXwRBMy6w8UKBAC/view?usp=sharing)  
**19.01** [Тема: Найбільші країни Північної Америки. Діяльність людей та охорона природи](https://drive.google.com/file/d/1nCp2Ugn80cz4WuDzRHpytrBR5j_UYekv/view?usp=sharing)  
**21.01** [Тема: Особливості природи Південної Америки](https://drive.google.com/file/d/1yrP4lzcVgz7eSEphcoX4Mro0zFAXgNPB/view?usp=sharing)  
**30.03** [Тема: Ґрунти України. Охорона грунтів](https://drive.google.com/file/d/1h5q1o9HMrEjBEkMOwwyfExuOjGqZ9YVm/view?usp=sharing)  

** Українська мова **  
**04.12** [Тема: Змінювання прикметників за родами та числами у сполученні з іменниками. Родові закінчення прикметників](https://drive.google.com/file/d/1k2OS5tmdSqS9U0ESF0N_D7h9kb-thQbt/view?usp=sharing)  
**07.12** [Тема: Відмінювання прикметників у сполученні з іменниками в олнині та множині](https://drive.google.com/file/d/1EuPEWhVuPf8n8BGEe1ILALq1uzZm8W81/view?usp=sharing)  
**08.12** [Тема: Зіставлення закінчень прикметників з основою на твердий та м'який приголосний в однині і множині](https://drive.google.com/file/d/1fxO-bXRnNAx7on3XH9tJs3pXCu3VvgLM/view?usp=sharing)  
**11.01** [Тема: Закріплення знань про правопис прикметників у множині](https://drive.google.com/file/d/17ZPnL2xTbr37Zcka30jzUsW_ZyvtYjs7/view?usp=sharing)  
**12.01** [Тема: Побудова сполучень слів і речень із прикметниками, уведення їх у текст](https://drive.google.com/file/d/1PTQfBwJkXFd3YtEKPTqNs_zR9mZxoVMg/view?usp=sharing)  
**13.01** [Тема: Закріплення вивченого про прикметник](https://drive.google.com/file/d/1UWeDPMNkgo7Y8P4qWCn5xYL1SoVTitZD/view?usp=sharing)  
**18.01** [І група. Тема: Розбір прикметника як частини мови](https://drive.google.com/file/d/1GjJX24X_Vo_XQx4vmrOg7otHnu9TAZ1W/view?usp=sharing)  
**18.01** [ІІ група. Тема: Розбір прикметника як частини мови](https://drive.google.com/file/d/1fmZMfVPdjHty8yPs1rSMeyJnbntCJzDd/view?usp=sharing)  
**19.01** [І група. Тема: Поширення речень прикметниками](https://drive.google.com/file/d/1P-xs2JZxlmguCrzYICUBvFsyIN0t_94p/view?usp=sharing)  
**19.01** [ІІ група. Тема: Поширення речень прикметниками](https://drive.google.com/file/d/1imDBo_79_5agkH_z62hAg0BFq79G0g6x/view?usp=sharing)  
**20.01** [І група. Тема: Узагальнення та систематизація знань і вмінь за темою](https://drive.google.com/file/d/1czShqWhW7yn-XSmqCO0SnUG9_srr_TBg/view?usp=sharing)  
**29.03** [І група. Тема: Теперішній час. Змінювання дієслів теперішнього часу за особами й числами](https://drive.google.com/file/d/1PYFTjVBi1nN5HDddNRKcVs9dFXiguRTm/view?usp=sharing)  
**29.03** [ІІ група. Тема: Теперішній час. Змінювання дієслів теперішнього часу за особами й числами](https://drive.google.com/file/d/11GPmkiuXhKUmEyeDP-ZiBHW6SRNj5cnq/view?usp=sharing)  
**30.03** [І група. Тема: Урок розвитку писемного мовлення . Детальний переказ тексту «Юрко з Тимком  – друзі» (за колективно складеним планом і поданою кінцівкою)](https://drive.google.com/file/d/1l5Y3fgE7AuVuWeO8-qcclxhyjVSmiVAG/view?usp=sharing)  
**30.03** [ІІ група. Тема: РЗМ. Детальний переказ тексту](https://drive.google.com/file/d/19tlpQBB0Df3k41GdMPdnIzs48DqJmFZa/view?usp=sharing)  
**31.03** [І група. Тема: Майбутній час. Змінювання дієслів майбутнього часу за особами й числами](https://drive.google.com/file/d/1Yw3mBzS9PRMekFQb-xZFRO0qQIPtLuOB/view?usp=sharing)  

** Я у світі **  
**04.12** [Тема: Культура поведінки учня](https://drive.google.com/file/d/1uW5654jU6K1rkEnbTDFy_8sCJ2kafQLS/view?usp=sharing)  
**15.01** [Тема: Культура спілкування. Чому виникають конфлікти](https://drive.google.com/file/d/1-YQOG6G5lD5AOaHkFCeGbuz8o5pnYpnB/view?usp=sharing)  
**22.01** [Тема: Культура спілкування. Як налагодити хороші взаємини. Будьте дружелюбними!](https://drive.google.com/file/d/18jQBENeXErGtSbc4aYgVd4ew9XDreCLQ/view?usp=sharing)  

** Англійська мова **  
**03.12** [Тема: Покупки](https://drive.google.com/file/d/1vJe5h3cSMsODOLKX_hlLazFw6AvQAr-L/view?usp=sharing)  
**12.01** [Тема: Улюблена пора року](https://drive.google.com/file/d/1_kfoGwLBw19Ll9VlO4Fjwk8Ny3Mh4Hdw/view?usp=sharing)  
**14.01** [Тема: Погода учора](https://drive.google.com/file/d/15wSaQmW5zZoUMHk0RxXdNIasTtRAvwwt/view?usp=sharing)  
**19.01** [І група. Тема: Узимку](https://drive.google.com/file/d/1_azVP1BKPhiIv0m364gULF-ILzdsmvqh/view?usp=sharing)  
**19.01** [І група. Тема: Узимку](https://drive.google.com/file/d/1bAcyO6UNvKl_4KJs3VNvuFYHx28kiaMr/view?usp=sharing)  
**19.01** [ІІ група. Тема: Узимку](https://drive.google.com/file/d/1KkCV9O8rLfRRZQKqZzcaj-Ogy0mMI2Iv/view?usp=sharing)  
**21.01** [І група. Тема: Порівнюємо погоду](https://drive.google.com/file/d/138omnOvZ7E2DAFKqmtqRJYRksKLSMo04/view?usp=sharing)  
**21.01** [ІІ група. Тема: Порівнюємо погоду](https://drive.google.com/file/d/1wjHUn9oV-WXgz2-AQJb33dI_NFFT97L2/view?usp=sharing)  
**30.03** [І група. Тема: Види подорожі](https://drive.google.com/file/d/1yxkzQFnov_Ym50OeZd5St80rBQteB1KP/view?usp=sharing)  
**30.03** [ІІ група. Тема: Види подорожi](https://drive.google.com/file/d/1PauQkfxWFOloebbUGVkLdKnqo-fmP8Ez/view?usp=sharing)  

** Літературне читання **  
**07.12** [Тема: Марко Вовчок «Літній ранок», Михайло Коцюбинський «Літній день»](https://drive.google.com/file/d/1XgJrjALeSBPNQ_Qy5nIsx0yLyZXI39WL/view?usp=sharing)  
**08.12** [Тема: Григір Тютюнник «Ласочка»](https://drive.google.com/file/d/1FfR9kqe3b1y5wSfqJ84ugJLaPfL0Pjgw/view?usp=sharing)  
**11.01** [Горевич Л. В. Тема: Вступ до розділу. Т.Шевченко. Про себе](https://drive.google.com/file/d/18gp7SS7XMB2mTTqtUg6lb_B440vyruDz/view?usp=sharing)  
**11.01** [Тема: Вступ до розділу. Т. Шевченко «Про себе»](https://drive.google.com/file/d/17QzW4_chVoqozQ6JbXJuLD-TEHOOuWB4/view?usp=sharing)  
**12.01** [Горевич Л. В. Тема: Т. Шевченко. Вітер віє-повіває](https://drive.google.com/file/d/1ASZjzysh6riXA87oo98MFpGX_5OexTsb/view?usp=sharing)  
**12.01** [Тема: Т. Шевченко «Вітер віє-повіває» Т. Шевченко «Вітер з гаєм розмовляє»](https://drive.google.com/file/d/1V45WvxGyQOCPdbBJZm46s_Yf2Z3gwNDi/view?usp=sharing)  
**13.01** [Горевич Л. В. Тема: Т.Шевченко. Реве та стогне Дніпр широкий](https://drive.google.com/file/d/1f0uqai6p7R-AvwZ0oad36TCocKStAgdN/view?usp=sharing)  
**13.01** [Тема: Т. Шевченко «Реве та стогне Дніпр широкий»](https://drive.google.com/file/d/1Ckj9KfRUmEQ00aLHDw196PtxikJzKi_T/view?usp=sharing)  
**15.01** [Горевич Л. В. Тема: Музей Заповіту Т. Шевченка](https://drive.google.com/file/d/1ye9H-wnIx79cXvUhI7rvhEckBg3xjJ2K/view?usp=sharing)  
**15.01** [Тема: Музей «Заповіту» Тараса Григоровича Шевченка в Переяславі](https://drive.google.com/file/d/1gykhbudr6vOOB7IMkZ7RXI8oLlqFjP1g/view?usp=sharing)  
**18.01** [Горевич Л. В. Тема: УПЧ. «Видатні письменники» Тарас Шевченко « За сонцем хмаронька пливе», «Сонце гріє, вітер віє». Іван Франко «Червона калина, чого в лузі гнешся?», «Порада». Леся Українка «Талого снігу платочки сивенькі». Микола Вінграновський «Наша річка»](https://drive.google.com/file/d/1KUo41UKUrsxDX5jLKRhv84egAvfy6ith/view?usp=sharing)  
**18.01** [Тема: Урок позакласного читання «Видатні письменники»](https://drive.google.com/file/d/14rqc6HRb9EcO08bnmBpQMA8TsVMssmZO/view?usp=sharing)  
**19.01** [І група. Тема: Роман Завадович «Поет-Каменяр»](https://drive.google.com/file/d/1-5rpa-gi8LlG7-8cseBBwVBM5VDxwJER/view?usp=sharing)  
**19.01** [Горевич Л. В. Тема: Іван Франко. Роман Завадович. Поет-Каменяр (скорочено)](https://drive.google.com/file/d/1pBdsL8yz0yiau7vIw5zIx09D1YXQaaq6/view?usp=sharing)  
**20.01** [Горевич Л. В. Тема: Іван Франко «Дивувалась зима», «Дрімають села» (напам’ять)](https://drive.google.com/file/d/1wU2TRL11KF6v7FD_x0jEGqsriHQULPkD/view?usp=sharing)  
**20.01** [Тема: Іван Франко «Дивувалась зима», «Дрімають села» (напам’ять)](https://drive.google.com/file/d/1HWHTi4gtvT43opOchiWshRM-j1ypV8u8/view?usp=sharing)  
**22.01** [Горевич Л. В. Тема: Іван Франко «Лисичка-кума»](https://drive.google.com/file/d/1poSNPwYIrzzCqrxRUyBKdkYhAYmRRPZB/view?usp=sharing)  
**22.01** [Горевич Л. В. Презентація. Тема: Іван Франко «Лисичка-кума»](https://drive.google.com/file/d/1XdYND6WllGVWkvrYFaYth78nulN_oOvJ/view?usp=sharing)  
**22.01** [Тема: Іван Франко «Лисичка-кума»](https://drive.google.com/file/d/1urZlEXQnhZ9br6IKFHKQAuqrKCQ3ncgE/view?usp=sharing)  
**29.03** [Горевич Л. В. Тема: Не загубив, а знайшов](https://drive.google.com/file/d/1CHazisUMfegIkJ7tDST-m1jWoRAE5ZGu/view?usp=sharing)  
**29.03** [Тема: Василь Сухомлинський «Не загубив, а знайшов»](https://drive.google.com/file/d/1gAkCI4l00kKDckJUn_8SxmcgaCmLATzm/view?usp=sharing)  
**30.03** [Горевич Л. В. Тема: Всеволод Нестайко. Шура i Шурко](https://drive.google.com/file/d/1-ygI851t1vkWH6Z5ZWm3RW3bm-oJ_uzg/view?usp=sharing)  
**30.03** [Тема: Всеволод Нестайко «Шура і Шурко»](https://drive.google.com/file/d/1t3h3jpUarLF977NjaSYjuRwj1WSmoUpB/view?usp=sharing)  
**31.03** [Тема: Всеволод Нестайко «Шура і Шурко»](https://drive.google.com/file/d/1y865xqQQceTvpj0NdhrGbs2I0BkLx6O3/view?usp=sharing)  

** Образотворче мистецтво **  
**08.12** [Тема: Дизайн годинника](https://drive.google.com/file/d/1gMGKFcVJS20q8y2uKGv8Y2kvwBbrkVJB/view?usp=sharing)  
**08.12** [Презентація: Дизайн годинника](https://drive.google.com/file/d/12gYiiJa404TLX0Yq4d4pUZr3L5eo2Fjq/view?usp=sharing)  
**12.01** [Горевич Л. В. Тема: Невідома планета](https://drive.google.com/file/d/1eEBEMuWkGd9yEa6BiHlvDiag95QBekMp/view?usp=sharing)  
**19.01** [Горевич Л. В. Тема: Караван у пустелі](https://drive.google.com/file/d/1FdfAvojx8X9IRtXwhB6iAMegd3KZXQp8/view?usp=sharing)  
**19.01** [Горевич Л. В. Презентація. Тема: Караван у пустелі](https://drive.google.com/file/d/1WvjLMudcsO79sogzpvvWM0pMS9UFsaIQ/view?usp=sharing)  
**30.03** [Горевич Л. В. Тема: Пам’ятки архітектури.  Особливості архітектури рідного міста. Важливість збереження памяток архітектури. Значення виробору формату для створення виразної врівноваженої композиції](https://drive.google.com/file/d/1EFfSMqXThHJu1P8dNeVOphG7Pv4CaQ3w/view?usp=sharing)  

** Основи здоров’я **  
**11.01** [Тема: Звички і здоров'я. Практична робота: виконання проєкту з формування корисної звички](https://drive.google.com/file/d/1hEFNVYpZOEiC_Q8FM2xIroBvJI9HgWwE/view?usp=sharing)  
**18.01** [Тема: Шкідливі звички і здоров'я. Небезпека куріння, вживання алкогольних, наркотичних і токсичних речовин](https://drive.google.com/file/d/1X7juVmIOahHDjr4OYxHxBxCy8beukTHQ/view?usp=sharing)  
**29.03** [Тема: Безпека школяра. Правила поведінки під час масових шкільних заходів](https://drive.google.com/file/d/1FoZ-EiGsXIccjeubTT7t0hfpyOQsQ5jS/view?usp=sharing)  

** Трудове навчання **  
**11.01** [Тема: Поглиблення знань про аплікацію. Послідовність виготовлення об’ємної аплікації на тканині з використанням ґудзиків, леліток та бісеру](https://drive.google.com/file/d/1Z76yAY3HR8JXXfmbai_0Mai2x20r1GY0/view?usp=sharing)  
**18.01** [Тема: Пластичні матеріали для виготовлення виробів](https://drive.google.com/file/d/1whV-X3d54NnrYGkWlZ89YY-fiJUldMYd/view?usp=sharing)  
**29.03** [Тема: Властивості штучних матеріалів: пластик, поролон, синтепон, вата. Послідовність виготовлення простих виробів із штучних матеріалів. Іграшки із штучних матеріалів](https://drive.google.com/file/d/15Xayi3lG0unPIr_aCIDpPBN8oRy6toDm/view?usp=sharing)  

** Фізична культура **  
**13.01** [Тема: Підготовчі вправи. ЗРВ зі скакалкою. Рухлива гра](https://drive.google.com/file/d/1kenzSxobJ8YO5eDSGzqAUSZ_R-_FTPsr/view?usp=sharing)  
**14.01** [Тема: Комплекс ранкової гімнастики зі скакалкою. Визначення динаміки змін показників розвитку фізичних якостей учнів. Рухливі ігри](https://drive.google.com/file/d/1NTOa7Bd7emw5GwL8xzzoMLcVegC1VQIs/view?usp=sharing)  
**15.01** [Тема: Комплекс ранкової гімнастики. Визначення динаміки змін показників розвитку фізичних якостей учнів . Рухливі ігри «Переміна місць», “Піймай жабу”](https://drive.google.com/file/d/1PVlGxI1zb8K-vcja88GB5i92n8eIXy7c/view?usp=sharing)  
**20.01** [Тема: Підготовчі вправи. ЗРВ. Різновиди ходьби та бігу. Елементи рівноваги: ходьба по гімнастичній лаві, (поєднання кроків  польки з різними положеннями рук.). Комбінація із 4 акробатичних елементів (на вибір). Вис кутом. Рухлива гра «Переміна місць», “Виклик”, “Наступ”, “Естафета по колу»](https://drive.google.com/file/d/1CPe_owTr058h4m5EQS7CEEz4iVBbfFCu/view?usp=sharing)  
**21.01** [Тема: Елементи акробатики: “міст” із положення стоячи (з допомогою); стійка на голові і руках із зігнутими ногами; комбінація із 4 акробатичних елементів.Вис на зігнутих руках.Рухливі ігри«Фігури», «Займи вільне місце», “Естафета звірів”](https://drive.google.com/file/d/1Ms4GuQ7W-2fBor9EwiczDTTWSV7j3xgl/view?usp=sharing)  
**22.01** [Тема: Підготовчі вправи. ЗРВ без предметів. Елементи акробатики: “міст” із положення стоячи (з допомогою); стійка на голові і руках із зігнутими ногами; комбінація із 4 акробатичних елементів Сіди–перехід із сіду в сід зігнувши ноги та в сід кутом; лежачи перехід із сіду в упор ззаду. Рухлива гра «Захист фортеці»](https://drive.google.com/file/d/1oIfTbc72GxSiwCCsLtlb0KITqh_QhSxj/view?usp=sharing)  
**31.03** [Тема: Підготовчі вправи](https://drive.google.com/file/d/1gRucMsalLnSnGu19_QWEtsO-IxLcpUpA/view?usp=sharing)  

** Інформатика **  
**13.01** [Тема: Електронна пошта](https://drive.google.com/file/d/1KyFCawBMzLggZl_i87HzBarHmFnhAAoK/view?usp=drive_web)  
**20.01** [Тема: Інформаційні ресурси Інтернету. Пошук навчальних матеріалів в мережі. Навчальна діяльність учня в Інтернеті. Рівні доступу до навчальних матеріалів.](https://drive.google.com/file/d/1e5L-kjkqik3vDlfm2jIA1Ne2RuMPdS2g/view?usp=drive_web)  
`}</Md>
          </Tab>
        </Tabs>
      </Tab>
      <Tab title="5 клас">
        <Md>{`
** Природознавство **  
**03.12** [5-Б. Тема: Поняття про сузір’я. Зорі.](https://drive.google.com/file/d/1R7UCQIPSK5QBTiTtfQ6qKkuGD4RD3D5G/view?usp=sharing)  
**07.12** [5-Б. Тема: Планети. Сонячна система. Відмінності між планетами](https://drive.google.com/file/d/19GFMmi7yCI24Cm4kS8cYlhJLU6BNtJcj/view?usp=sharing)  
**08.12** [5-А. Тема: Астрономія як наука](https://drive.google.com/file/d/17ou9n3HZoSLpPQGQzsl4kZLQpwa_3ZRx/view?usp=sharing)  
**11.01** [5-Б. Тема: Будова Землi](https://drive.google.com/file/d/1AHmg1RAPP8z-jAJEepqDTf6qckrexjiR/view?usp=sharing)  
**12.01** [5-А. Тема: Форма і розміри землі. Внутрішня будова Землі](https://drive.google.com/file/d/1IluFsIaDapgGVLVl60xD23aY7q968SNU/view?usp=sharing)  
**14.01** [5-Б. Тема: Рухи Землі](https://drive.google.com/file/d/1n9Ts6EEEAIf0G-ip-BD26qMxe-byJElC/view?usp=sharing)  
**15.01** [5-А. Тема: Рухи землі. Пори року](https://drive.google.com/file/d/1g1U2c18ig-Rho7SAaMLL4wfs_plofZ3N/view?usp=sharing)  
**18.01** [5-Б. Тема: Місяць – супутник Землі. Сонячні та місячні затемнення](https://drive.google.com/file/d/1pVVUC3ISxMSobRqYdl59f_NzW7waFaP7/view?usp=sharing)  
**19.01** [5-А. Тема: Місяць - супутник Землі](https://drive.google.com/file/d/1A9VpeqXXv2LFZ0Ixqvj12_ZQMnnisgUR/view?usp=sharing)  
**21.01** [5-Б. Тема: Способи зображення Землі](https://drive.google.com/file/d/13_mKEu1vupF1PsqR9rVwSLd570HKjUSA/view?usp=sharing)  
**22.01** [5-А. Тема: Способи зображення землі](https://drive.google.com/file/d/1Lo6BZR__i1lahcxrnb2xexgdr-RW8jMC/view?usp=sharing)  
**29.03** [5-Б. Тема: Різноманітність середовищ життя. Наземно-повітряне середовище](https://drive.google.com/file/d/1s4YbQsb9ee6bshdIOh-YErekGVbsMNAP/view?usp=sharing)  
**30.03** [5-А. Тема: Вода і тепло в житті організмів](https://drive.google.com/file/d/1bpnIcYJLWoXX6hLm92t-TZlQJDQxNcZB/view?usp=sharing)  

** Українська мова **  
**03.12** [5-А. Тема: Склад. Наголос. Орфоепічний словник і словник наголосів](https://drive.google.com/file/d/11q7FSrqVxan8Y0BJ1_Xj9DnInzEiyFwU/view?usp=sharing)  
**03.12** [5-А. Тема: Есе (розмірковування в довільній формі) про красу й молозвучність української мови](https://drive.google.com/file/d/1_iDvQLwccro5qew0XzXPU9S6B_Sr_o5T/view?usp=sharing)  
**03.12** [5-Б. Тема: Приголосні тверді, м’які (повторення). Співвідношення звуків і букв. Звукове значення букв я, ю, є, ї .](https://drive.google.com/file/d/14VBVYgk0nTv9ga2twnBFYXtfg_bGpaCL/view?usp=sharing)  
**08.12** [5-Б. Тема: Позначення звуків мовлення на письмі](https://drive.google.com/file/d/1vM1_QZpP-S97Il4twyMPXw-4JFLgMgbT/view?usp=sharing)  
**11.01** [Тема: Орфограма (практично). Орфографічний словник. Орфографічна помилка (практично), її умовне позначення](https://drive.google.com/file/d/1nLndxOwyxsLIOYxd4AegEb0juBr6tUwb/view?usp=sharing)  
**13.01** [5-А. Тема: Орфографічна помилка, її умовне позначення](https://drive.google.com/file/d/11xzrGBklVhP2Q2zGwkGwxitKeQd64wRT/view?usp=sharing)  
**13.01** [Тема: Орфографічна помилка](https://drive.google.com/file/d/1RliCOJtjWwzjEfFRtFzJpHfBc0_J9r23/view?usp=sharing)  
**13.01** [Тема: Префікси роз-, без-](https://drive.google.com/file/d/1csKSMUqi1pBQgHzn9-cPLSltQQ9a4ug5/view?usp=sharing)  
**14.01** [5-А. І група. Тема: Префікси роз-, без-](https://drive.google.com/file/d/1Xw7dLcsOcU_enXRfI4GLcnlQNCOfgao2/view?usp=sharing)  
**14.01** [5-Б. Тема: Спрощення у групах приголосних](https://drive.google.com/file/d/1ZkJ_wlvPGVl12T_XdVVRapmR7EpylLEW/view?usp=sharing)  
**18.01** [5-А. І група. Тема: Спрощення в групах приголосних](https://drive.google.com/file/d/1gEui2fI0NS11F0MibSAI4-Js95H0Xv6V/view?usp=sharing)  
**18.01** [5-А. ІІ група. Тема: Спрощення в групах приголосних](https://drive.google.com/file/d/1xeV__dfDZ9d3_EI-njpIdHPUr14HvEVz/view?usp=sharing)  
**19.01** [5-Б. Тема: Чергування голосних](https://drive.google.com/file/d/1z5OaGQQ9cXDn0Arb4r081jekEzBZqVbN/view?usp=sharing)  
**20.01** [5-А. І група. Тема: Найпоширеніші випадки чергування голосних і приголосних звуків](https://drive.google.com/file/d/1-MmUSM3j1ffrQqYpE9sdEDIipj2rdhm9/view?usp=sharing)  
**20.01** [5-А. ІІ група. Тема: Найпоширеніші випадки чергування голосних і приголосних звуків](https://drive.google.com/file/d/1RcuMEabmsNEQ05v7m5LccAuHl8oE4CW0/view?usp=sharing)  
**21.01** [5-А. І група. Тема: Укладання пам’ятки найпоширеніших випадків чергування голосних і приголосних звуків](https://drive.google.com/file/d/1qxrv9aEkYLCOJAH-RdpT4MJT0vO4NUPP/view?usp=sharing)  
**21.01** [5-А. ІІ група. Тема: Укладання пам’ятки найпоширеніших випадків чергування голосних і приголосних звуків](https://drive.google.com/file/d/11SMZd5u79Fr6NZI4UlInFnPxppsJBZcH/view?usp=sharing)  
**21.01** [5-Б. Тема: Основні випадки чергування у-в, і-й](https://drive.google.com/file/d/1h7qAkjGnBoRX25WFRdNFQeedv7KJMt9d/view?usp=sharing)  
**29.03** [5-А. І група. Тема: Двакрапка й тире при узагальнювальних словах  у реченнях з однорідними членами](https://drive.google.com/file/d/1o3p0AL6YknYConKHud6Sn7uNu40H1nXH/view?usp=sharing)  
**29.03** [5-А. ІІ група. Тема: Тире  у реченнях з однорідними членами](https://drive.google.com/file/d/1S3m5fEf60m4OSMeGHR33R7tbYoNHXgOB/view?usp=sharing)  
**30.03** [5-Б. Тема: Тире  у реченнях з однорідними членами](https://drive.google.com/file/d/1DLBNaeIwQT0TUQYMOtKOaUUOIyQ03RB_/view?usp=sharing)  

** Трудове навчання **  
**03.12** [Тема: Виконання ялинкової прикраси з паперу (техніка торцювання)](https://drive.google.com/file/d/160AecYyYSB489pv8RIwh7WzL1zbmSA9t/view?usp=sharing)  
**03.12** [Інструкційна картка: Виготовлення ялинкової прикраси «Ялинка»](https://drive.google.com/file/d/1VbeV1DMe1MoR72-cbMHZVGjvG8fhxlXJ/view?usp=sharing)  
**03.12** [Інструкційна картка: Виготовлення ялинкової прикраси «Різдвяна зірка»](https://drive.google.com/file/d/1AsMT40FxyVqGHoI16liGMkmSY3w7pzxj/view?usp=sharing)  
**11.01** [Тема: Проведення міні-маркетингового дослідження для обґрунтування вибору виробу](https://drive.google.com/file/d/1ONQ0pIyeNHm0nYcdo8an_okGGNtYnVdW/view?usp=sharing)  
**13.01** [5-Б. Тема: М’яка іграшка як невід’ємний атрибут у побуті та мистецтві українців. Види м’яких іграшок](https://drive.google.com/file/d/1DiMmWvcbu04Dnn7At5RRBeBgydUQ5jVk/view?usp=sharing)  
**13.01** [5-Б. Тема: Інструктаж з БЖД та ОП. Визначення алгоритму  взаємодії в майстерні. Вибір об’єкта праці](https://drive.google.com/file/d/1uX142Rbfhq27LHQjts627PH2KZkdaUxr/view?usp=sharing)  
**14.01** [5-А. Тема: Технологія виготовлення м’якої пласкої іграшки. Етапи проєктування. Планування роботи. Шаблони деталей іграшки](https://drive.google.com/file/d/1nRhq0AYT63HUDkBHY6zqDS2wR9uLfpR2/view?usp=sharing)  
**18.01** [5-А. Тема: Способи збільшення та зменшення малюнків. Розмічання за шаблоном. Добір та підготовка основних та доповнюючих матеріалів, інструментів для роботи. Визначення необхідної кількості матеріалів для виготовлення виробу](https://drive.google.com/file/d/1cOcHJVvRvnusQynJbFiPqrkxTgc2YjE7/view?usp=sharing)  
**18.01** [5-А. Тема: Проєкт “М’яка пласка іграшка”](https://drive.google.com/file/d/1cnIkcPiBjbgwmIkRrNzSjgNy772MrqeA/view?usp=sharing)  
**20.01** [5-Б. Тема: Застосування методу фантазування для виготовлення м’якої пласкої іграшки. Створення графічного зображення](https://drive.google.com/file/d/1GYpjhoE68fcwoNyldE0bBbZN2lCdaY6Z/view?usp=sharing)  
**20.01** [5-Б. Тема: Проведення міні-маркетингового дослідження для обґрунтування вибору виробу](https://drive.google.com/file/d/1Uj9gKpIu71l7oGWdUA3I7rzitbXNsnaA/view?usp=sharing)  
**21.01** [5-А. Тема: Технологічна послідовність розкроювання виробу](https://drive.google.com/file/d/1RX-JlpYUuCv8_SAVqtBN8aQUYMkkJ3Mn/view?usp=sharing)  
**29.03** [Тема: Загальні відомості про харчування, його значеннядля життя людини. Раціональне харчування. Режим харчування](https://drive.google.com/file/d/1EpJVTH1twJuBHH2t-9yvorWWzLLak4jD/view?usp=sharing)  

** Інформатика **  
**03.12** [Тема: Середовище описання і виконання алгоритмів](https://drive.google.com/file/d/1v4UkLcIBNjYTNAmYwho0KhV6vbkT7CCs/view?usp=sharing)  
**04.12** [Тема: Середовище описання і виконання алгоритмів](https://drive.google.com/file/d/1q0xiG0DzjVzhH_uJxaHAUIu8-fawm6LK/view?usp=drive_web)  
**14.01** [5-Б. Тема: Алгоритмічна структура розгалуження](https://drive.google.com/file/d/1jBQsWtaU5zGcXpFe7L1TfMOdNnPuDkBn/view?usp=drive_web)  
**15.01** [5-А. Тема: Алгоритмічна структура розгалуження](https://drive.google.com/file/d/1jBQsWtaU5zGcXpFe7L1TfMOdNnPuDkBn/view?usp=drive_web)  
**21.01** [5-Б. Тема: Повна та коротка форми розгалуження](https://drive.google.com/file/d/1BaAz7HaFcPKxsB8fKNtDRnBBBfxV5WQv/view?usp=drive_web)  
**22.01** [Тема: Повна та коротка форми розгалуження](https://drive.google.com/file/d/1qKu2FJ6jDgjkVN2Ofm-UT0hbOss_LZ8m/view?usp=drive_web)  

** Музичне мистецтво **  
**04.12** [Тема: Музика і хореографія](https://drive.google.com/file/d/1PBuwP5xPJCP1aZy49dCWZpE4B5NvjRSX/view?usp=sharing)  
**13.01** [5-А. Тема: Світ вокальної музики](https://drive.google.com/file/d/109qgig0UxPqVL5zyP7xqGcaLkE4U_kYc/view?usp=sharing)  
**15.01** [Тема: Світ вокальної музики](https://drive.google.com/file/d/1TmtEUbUoxYDjLBmT9dnHeNDcuLFpyVfi/view?usp=sharing)  
**15.01** [5-Б. Тема: Світ вокальної музики](https://drive.google.com/file/d/109qgig0UxPqVL5zyP7xqGcaLkE4U_kYc/view?usp=sharing)  
**20.01** [5-А. Тема: Хорова музика](https://drive.google.com/file/d/1MEo_qk5aP_RTkNO-KHCFfLcXFKVXkOhT/view?usp=sharing)  
**22.01** [5-Б. Тема: Хорова музика](https://drive.google.com/file/d/1YdRvGnGlRPeLT7xxGEq9ENa5H7CHiuda/view?usp=sharing)  

** Математика **  
**04.12** [Тема: Аналіз контрольної роботи. Види кутів. Вимірювання кутів](https://drive.google.com/file/d/1d8YTI_NUHB38Jtw7fLmJ7ZvtROh6ltEi/view?usp=sharing)  
**07.12** [Тема: Величина кута. Вимірювання та побудова кутів](https://drive.google.com/file/d/1S-jvWe03UfILGtbRhqqWJjSjTwlo8Fm0/view?usp=sharing)  
**08.12** [Тема: Величина кута. Вимірювання та побудова кутів](https://drive.google.com/file/d/1fM_JZHlzjYUsp9fmJKv_FQvwTYRaGFCu/view?usp=sharing)  
**11.01** [5-А,Б. Тема: Уявлення про звичайні дроби](https://drive.google.com/file/d/15TW2iX6PdzFOQlI9kIhhov_wwiGd9eFY/view?usp=sharing)  
**12.01** [5-А,Б. Тема: Дроби і ділення натуральних чисел](https://drive.google.com/file/d/1iq9PeQcl8FHCpHrsXCO1vw7ir-GkAN5k/view?usp=sharing)  
**13.01** [5-А,Б. Тема: Порівняння звичайних дробів](https://drive.google.com/file/d/1T3PXdjQWXS-2itvWkz51NW6iKlGctOVG/view?usp=sharing)  
**15.01** [5-А,Б. Тема: Правильні та неправильні дроби](https://drive.google.com/file/d/1jmNhzrXpi_OinX6a6GQ4UdmXz3dzVqBN/view?usp=sharing)  
**18.01** [5-А,Б. Тема: Порівняння дробів. Самостійна робота](https://drive.google.com/file/d/16cz0VHDM2tY9D0xyIIn3qgrdyurgHg0N/view?usp=sharing)  
**19.01** [5-А,Б. Тема: Мішані числа](https://drive.google.com/file/d/1cLpQcWQsXp5jY1-O7F1VJWi1lektEDfF/view?usp=sharing)  
**20.01** [5-А,Б. Тема: Додавання і віднімання дробів з однаковими знаменниками](https://drive.google.com/file/d/1whuLYsEJoyF4d-zVdFd7DaQsE3vWc4eP/view?usp=sharing)  
**29.03** [5-А,Б. Тема: Ділення десяткового дробу на десятковий дріб](https://drive.google.com/file/d/1AkBacw5isTptJC7B0NIzyt6RrrSnkFSe/view?usp=sharing)  
**30.03** [5-А,Б. Тема: Розв'язання текстових задач](https://drive.google.com/file/d/15p7jc_EvkQVIGSI2T5SKZXIe1YuvMQZf/view?usp=sharing)  

** Основи здоров’я **  
**07.12** [Тема: Принципи й методи загартовування. Рухова активність](https://drive.google.com/file/d/1V1D_tWdTDdtnDAvlQCNpFvMNngl0j9gZ/view?usp=sharing)  
**11.01** [Тема: Попередження травм під час рухливих ігор. Правила безпечної поведінки в басейні та на льоду](https://drive.google.com/file/d/1dAALP8mt62Hpr92U2kwKr2iAXyzH5xqa/view?usp=sharing)  
**14.01** [5-А. Тема: Правила людських стосунків](https://drive.google.com/file/d/14LYHk8grt7X0xAplYGuLp7J_DLSPb48I/view?usp=sharing)  
**18.01** [5-Б. Тема: Відпочинок школяра. Ознаки перевтоми. Умови здорового сну. Вплив телебачення і комп’ютера на здоров’я. Узагальнення знань з розділу](https://drive.google.com/file/d/12oUrlpMVwEOmX79zeypaR54gAAMQ1k4Y/view?usp=sharing)  
**29.03** [5-Б. Тема: Пожежна безпека](https://drive.google.com/file/d/1UktBuI351xCSS10XWlcpm-tA0aOa42zJ/view?usp=sharing)  

** Англійська мова **  
**11.01** [Тема: Особливі дні](https://drive.google.com/file/d/1JWLFqKvZ8MmH-ISBimbICHoGNIvdTYP4/view?usp=sharing)  
**11.01** [Тема: Особливі дні](https://drive.google.com/file/d/1orExTKQz_YKfCTcCdNcqXnxC00DgbnD7/view?usp=sharing)  
**12.01** [5-А. Тема: Улюблені свята](https://drive.google.com/file/d/1YWpoSU90bkwsqOSU62oiVVIigLOlPUES/view?usp=sharing)  
**12.01** [5-Б. Тема: Особливі дні](https://drive.google.com/file/d/14JfQyOgUcyd0xkaVBx97AbACdv-s0atU/view?usp=sharing)  
**14.01** [5-А. Тема: Улюблені свята](https://drive.google.com/file/d/1wORNI1dxFz-SkAEN1L00kX6lsJPTfrwn/view?usp=sharing)  
**14.01** [5-Б. Тема: Улюблені свята](https://drive.google.com/file/d/171sZweJ38OBYTpM7eE4JfrY6_SeXx8gZ/view?usp=sharing)  
**15.01** [5-Б. Тема: Улюблені свята](https://drive.google.com/file/d/1yyKkkDI92ukee5xb8QLHAL3DOHU4DGhU/view?usp=sharing)  
**18.01** [5-А. І група. Тема: Свята в Україні](https://drive.google.com/file/d/1hpB-31ZH2JYWcREWvkKNt-_PbKajnOmr/view?usp=sharing)  
**18.01** [5-А. ІІ група. Тема: Свята в Україні](https://drive.google.com/file/d/1hvD_7ezPvZWfclzVUUVXwmSIcKVpPCLF/view?usp=sharing)  
**19.01** [5-А. І група. Тема: День Подяки](https://drive.google.com/file/d/1IcDNUvL8b1VxABjMjkKovilFQLVCvbjc/view?usp=sharing)  
**19.01** [5-Б. Тема: Свята в Україні](https://drive.google.com/file/d/1lljaYkdWxL3XSxXo_3VfZs7StvBP12_T/view?usp=sharing)  
**19.01** [5-А. ІІ група. Тема: День Подяки](https://drive.google.com/file/d/1xsd82vdTLFo2vD1rPmzY4-exgcXujNPv/view?usp=sharing)  
**21.01** [5-А. І група. Тема: День Подяки](https://drive.google.com/file/d/1foxJeEY6SRAr5xIq7fydLUrhI-tH9M4z/view?usp=sharing)  
**21.01** [5-А. ІІ група. Тема: День Подяки. Повторення Друзі по листуванню](https://drive.google.com/file/d/1v8uuOBRtoYraYy7d78NLLs0gD4ID7Mba/view?usp=sharing)  
**21.01** [5-Б. Тема: День Подяки](https://drive.google.com/file/d/1tVCevF_UJanjSJENC0xSnDpi7GKi503W/view?usp=sharing)  
**21.01** [Презентація. Тема: Тo be в минулому часі](https://drive.google.com/file/d/13LvuuA6bRCjXdjSg0kACklI7fFF784KB/view?usp=sharing)  
**22.01** [5-Б. Тема: День подяки](https://drive.google.com/file/d/1udc11Mnq0Rlg76KvQ5ufti6eEEHaU6j_/view?usp=sharing)  
**29.03** [5-А. І група. Тема: Турбота про природу](https://drive.google.com/file/d/1ryy1gKTRtCZySo48F8v5tgWIaaBrgTs0/view?usp=sharing)  
**29.03** [5-А. ІІ група. Тема: Турбота про природу](https://drive.google.com/file/d/1xBA7yECOhp2k_onfT40iaI4yKbYMmpQw/view?usp=sharing)  
**30.03** [5-А. ІІ група. Тема: Підсумковий урок](https://drive.google.com/file/d/1jDLbXgiJWrWdIeoLm4KG-F4Ng1ysrESC/view?usp=sharing)  
**30.03** [5-А. І група.Тема: Підсумковий урок з теми «Заняття на свіжому повітрі»](https://drive.google.com/file/d/1d2U-t3IpPOGG6qpb6myBK2c2l0D6b8kU/view?usp=sharing)  
**30.03** [5-Б. Тема: Турбота про природу](https://drive.google.com/file/d/1N18CtnEpDfea-pGnhFbbzsIH5KHoBYiq/view?usp=sharing)  

** Фізична культура **  
**11.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1XhCtlyYjAKVl9AIRPem4FPnj3raJbyH6/view?usp=sharing)  
**12.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/19JpbGmIRyTMoW5R2LWURakA-bIZX3U6_/view?usp=sharing)  
**14.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/12aDjzZNcQ5pIg84_LJOowtmnEJbU-jGD/view?usp=sharing)  
**15.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1Og43cbmenI2GgRbINuVhkQmLUNnPDyii/view?usp=sharing)  
**18.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1M5NyXKDRbrKRvePxBYCfLSSIfEFQvUvX/view?usp=sharing)  
**19.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1KZ16zz8E6htrYtBcPwvoAiEwM9HMj7wg/view?usp=sharing)  
**21.01** [5-А. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1dkT_slE_qb6n_BXvBdhyzB2VkXIPf-Tq/view?usp=sharing)  
**22.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1AhC0Lhp909EGTa6XFxGc_rDhfO6OUw7i/view?usp=sharing)  
**29.03** [Тема: Комплекс вправ ранкової гімнастики](https://drive.google.com/file/d/1w7b2zMZ-BSJS1b2ocvQ4_AzQfdMp0vxw/view?usp=sharing)  
**30.03** [Тема: Комплекс вправ ранкової гімнастики](https://drive.google.com/file/d/1L8MkuYdtrKbnCH7ldm8s66xLT3tGc_fE/view?usp=sharing)  

** Образотворче мистецтво **  
**11.01** [5-Б. Тема: Скульптура космонавт](https://drive.google.com/file/d/1mvaqrrkGEY-U7MTH9WrLW-q_fnGKRq6A/view?usp=sharing)  
**13.01** [5-А. Тема: Скульптура космонавт](https://drive.google.com/file/d/1uE_G_RJH4nHcJ1QfM06A98ien9RVb-Xh/view?usp=sharing)  
**18.01** [5-Б. Тема: Скульптура. Фантастична тварина](https://drive.google.com/file/d/1AgFVNevFmTlspT3quYBICcA-SvFXibLa/view?usp=sharing)  
**20.01** [5-А. Тема: Скульптура. Фантастична тварина](https://drive.google.com/file/d/1FfZOhyZGsuDlTgh7NdvsWUV97ziLPqIK/view?usp=sharing)  
**29.03** [5-Б. Тема: Споруди мегаполісу](https://drive.google.com/file/d/1QW6OKNhttnyJxuUL5yQQTRpyml-V5T4m/view?usp=sharing)  

** Українська література **  
**11.01** [5-А. Тема: Л.Глібов. "Химерний, маленький...", "Що за птиця?"](https://drive.google.com/file/d/1PfhpTVhihBn22ZZafAJ0UAig2vydUWqH/view?usp=sharing)  
**11.01** [5-Б. Тема: Л.Глібов. "Химерний, маленький...", "Що за птиця?"](https://drive.google.com/file/d/1PfhpTVhihBn22ZZafAJ0UAig2vydUWqH/view?usp=sharing)  
**13.01** [5-А. Тема: Особливості поетичних загадок. Л. Глібов, роль у них казкових елементів, фольклорної основи, гумору, пестливих слів](https://drive.google.com/file/d/1O8kDBu5GJo2wRO4Mtwcx0srs_KQ43xy-/view?usp=sharing)  
**13.01** [5-Б. Тема: Особливості поетичних загадок, роль у них казкових елементів, фольклорної основи](https://drive.google.com/file/d/110bEXNQcZPr28UcQf2FpkCqhBwL2ajSQ/view?usp=sharing)  
**18.01** [5-А. Тема: «Повість минулих літ» - найдавніший літопис нашого народу](https://drive.google.com/file/d/1D3Pk4Ib_c9eZHq1mzWSn_ZzS2Yf8VL-n/view?usp=sharing)  
**18.01** [5-Б. Тема: Повість минулих літ-найдавніший літопис нашого народу. Літописні оповіді  Три брати- Кий, Щек, Хорив і сестра їхня Либідь,  Святослав укладає мир з греками і повертається до Києва. Смерть Святослава](https://drive.google.com/file/d/1VNGKOWDlrwDmSKB2KvJ3QpS6nhcP91GL/view?usp=sharing)  
**20.01** [5-А. Тема: «Розгром Ярославом печенігів. Початок великого  будівництва в Києві. Похвала книгам»](https://drive.google.com/file/d/10cuj_fVE75YzLbc3t2ZuevwhKsagRqk3/view?usp=sharing)  
**20.01** [5-Б. Тема: «Розгром Ярославом печенігів. Початок великого  будівництва в Києві. Похвала книгам»](https://drive.google.com/file/d/1v2CkkeeZkbxZ206V8BC7A-oZXMwJfJuw/view?usp=sharing)  
**29.03** [5-А. Тема: "Гаї шумлять...", "Блакить мою душу обвіяла...".Мелодійність віршів П.Тичини](https://drive.google.com/file/d/1JxcUaItKDBwrjJnOA76l87Pkrvd_F3eQ/view?usp=sharing)  
**29.03** [5-Б. Тема: "Гаї шумлять...", " Блакить мою душу обвіяла...". Мелодійність віршів П. Тичини](https://drive.google.com/file/d/1s2zOI3Hj3r9CLosYkJ3-KQemwfryJgip/view?usp=sharing)  

** Зарубіжна література **  
**12.01** [Тема: Світ дорослих і світ дітей у повісті](https://drive.google.com/file/d/1cHfohaV_CYmsTVX2Oi9yxl94CcrBcDaO/view?usp=sharing)  
**14.01** [5-Б. Тема: Провідні ідеї твору](https://drive.google.com/file/d/1fBCYM8AhXrIkc3c6sZDM8Z3YrdTy9EMS/view?usp=sharing)  
**15.01** [5-А. Тема: Провідні ідеї твору](https://drive.google.com/file/d/1m2n0G6s6WSmiV8vApaHnE8hEZ84eZpz1/view?usp=sharing)  
**19.01** [Тема: Ставлення автора до своїх героїв](https://drive.google.com/file/d/1eF6Ew5I8qza01ktwm1YTkYI1Yn9fy3b2/view?usp=sharing)  
**21.01** [5-Б. Тема: Том Сойєр і Гекльберрі Фінн. Характеристика образів](https://drive.google.com/file/d/1VCnXbA7xlIwgiHyejNaVQr01qx7yh8j1/view?usp=sharing)  
**22.01** [5-А. Тема: Том Сойєр і Гекльберрі Фінн. Характеристика образів](https://drive.google.com/file/d/12Cu7WxJqKZLov56z-N_hjRCssaTEvT6R/view?usp=sharing)  
**30.03** [5-А,Б. Тема: РМ Твір Моя улюблена книга, або Музика для душі](https://drive.google.com/file/d/1EOMMI3rwS0oDgAysnv2tXrvM82kr_M1T/view?usp=sharing)  

** Історія **  
**15.01** [Тема: Пам’ятки і пам’ятники історії](https://drive.google.com/file/d/1gF97W2MBDi0FNUAUUw8fytyNDAjAz01z/view?usp=sharing)  
**22.01** [5-А,Б. Тема: Джерела, які зберігають память про історію княжої Русі - України](https://drive.google.com/file/d/1FacLUEdPcAWEJ-XdMe0r0zLeFMkuzTkF/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="6 клас">
        <Md>{`
** Українська література **  
**03.12** [Тема: Образ мужньої, сильної духом дівчинки, її життєрадісний погляд на світ, вільнолюбство, впевненість, розвинена уява у вірші «Як дитиною бувало…»](https://drive.google.com/file/d/19t3ni434ZVtcao03dVgQwqiPwhptSfah/view?usp=sharing)  
**08.12** [Тема: Леся Українка «Тиша морська» - пейзажно-мариністичний малюнок](https://drive.google.com/file/d/1jLtotObpy3WYFFF6a7CDAg6nAf61sHIF/view?usp=sharing)  
**12.01** [Тема: Дитинство письменника. Федько-халамидник](https://drive.google.com/file/d/1TPmdXHROH0TZNiX3SOC5qabHfbIepGDA/view?usp=sharing)  
**15.01** [Тема: Щедрий на добро внутрішній світ героя. Федько як особистість. Федько як особистість. Образи Федька і Толі](https://drive.google.com/file/d/1ChlYlpWB26EycVcTECHuHVN9TNaQBrk2/view?usp=sharing)  
**19.01** [Тема: Роль художніх засобів у творі](https://drive.google.com/file/d/1fDfGQFAi9CsVKi4CQOXMfjg2vehxnskX/view?usp=sharing)  
**21.01** [Тема: УПЧ. В.Винниченко «Кумедія з Костем»](https://drive.google.com/file/d/1qsDlgrA3xDsc_nHW-0SUQQ9gNe73gBwA/view?usp=sharing)  
**22.01** [Тема: УПЧ. В.Винниченко «Кумедія з Костем»](https://drive.google.com/file/d/1rV2Zt1g_I0VjYxZ-fvC7_TVQY55wRmE4/view?usp=sharing)  
**30.03** [Тема: Уява, фантазія і романтичність у житті сучасної людини](https://drive.google.com/file/d/1qEbN2wGuvyjOC0X0uCOLuV9aOjV5su3v/view?usp=sharing)  

** Інформатика **  
**03.12** [Тема: Редагування програмних об’єктів](https://drive.google.com/file/d/14u2a-Fbfs2UVhKlYPdZQYEyak9uKZs1T/view?usp=sharing)  
**04.12** [Тема: Редагування програмних об’єктів](https://drive.google.com/file/d/16uK94BEboljVzcud-sfI-BgczQk6SqYY/view?usp=drive_web)  
**07.12** [Тема: Редагування програмних об'єктів](https://drive.google.com/file/d/1RzBoVhxIdkGA3AiAq--IJcpcYBwjob8I/view?usp=sharing)  
**11.01** [6-Б. Тема: Керування об’єктами у середовищі виконання алгоритмів](https://drive.google.com/file/d/1VNV5qeK5yBI5RGBGqKm1F47MW3EZT6_o/view?usp=drive_web)  
**14.01** [6-В. Тема: Редагування програмних об’єктів.](https://drive.google.com/file/d/16uK94BEboljVzcud-sfI-BgczQk6SqYY/view?usp=drive_web)  
**15.01** [6-В. Тема: Редагування програмних об’єктів.](https://drive.google.com/file/d/16uK94BEboljVzcud-sfI-BgczQk6SqYY/view?usp=drive_web)  
**18.01** [6-Б. Тема: Програмування процесів з повторенням і розгалуженням](https://drive.google.com/file/d/1xUUMZus4_T25XqvnlY_t1nHPp6259_Vx/view?usp=drive_web)  
**21.01** [6-Б. Тема: Програмування процесів з повторенням і розгалуженням](https://drive.google.com/file/d/1xUUMZus4_T25XqvnlY_t1nHPp6259_Vx/view?usp=drive_web)  
**22.01** [6-В. Тема: Програмування процесів з повторенням і розгалуженням](https://drive.google.com/file/d/1xUUMZus4_T25XqvnlY_t1nHPp6259_Vx/view?usp=drive_web)  
**29.01** [6-Б. Тема: Програмне забезпечення для створення і відтворення комп'ютерних презентацій](https://drive.google.com/file/d/1kVMkY0wMvQBA9aGKn-sBszmyYFg7b-bV/view?usp=drive_web)  

** Музичне мистецтво **  
**04.12** [Тема: Українська симфонічна поема](https://drive.google.com/file/d/1HIqvp7YHpcBXXhV9D5TZGJ86eHBwwJxu/view?usp=sharing)  
**13.01** [6-В. Тема: Камерно-інструментальна музика](https://drive.google.com/file/d/1f3sF5UGPjrOw2R3C4ldPBl5A3mBu81Ly/view?usp=sharing)  
**15.01** [6-А. Тема: Камерно-інструментальна музика](https://drive.google.com/file/d/1f3sF5UGPjrOw2R3C4ldPBl5A3mBu81Ly/view?usp=sharing)  
**15.01** [6-Б. Тема: Камерно-інструментальна музика](https://drive.google.com/file/d/1f3sF5UGPjrOw2R3C4ldPBl5A3mBu81Ly/view?usp=sharing)  
**20.01** [6-В. Тема: Ноктюрн](https://drive.google.com/file/d/1HemtQnEbD4wTarcy0cNSlqP0eTDDWWhL/view?usp=sharing)  
**22.01** [6-А. Тема: Ноктюрн](https://drive.google.com/file/d/1XVQvh81K31ZLXuliuVtpI9lZ3AydVTvX/view?usp=sharing)  
**22.01** [6-Б. Тема: Ноктюрн](https://drive.google.com/file/d/15qEhtrBYnFrszWKKtVxMYoIi7jX1xKv1/view?usp=sharing)  

** Математика **  
**04.12** [Тема: Пряма та обернена пропорційна залежність](https://drive.google.com/file/d/1wvfb4nJOgeV9QnldpeYtGn2_kDzpbtmu/view?usp=sharing)  
**04.12** [Тема: Обернена пропорційна залежність](https://drive.google.com/file/d/1wHUa4yGSdK192MjZ5YKUIWoZcVUin7AV/view?usp=sharing)  
**07.12** [Тема: Відсоткове відношення двох чисел](https://drive.google.com/file/d/1iYwL_pzThDE3eDVWtiq4tqNG4VfV6I4Q/view?usp=sharing)  
**07.12** [Тема: Коло і круг](https://drive.google.com/file/d/11XLOszKBM3EPjpsUE9-kjuBm-VknuNNh/view?usp=sharing)  
**08.12** [Тема: Кругові діаграми](https://drive.google.com/file/d/19LSENrV3FXVR2jmo-d-1vpJw-wMGGJ-B/view?usp=sharing)  
**08.12** [Тема: Відсоткові розрахунки](https://drive.google.com/file/d/1R7T_knhcfnSJK-SUJhbyMBMbN2reVCCL/view?usp=sharing)  
**11.01** [6-А,В. Тема: Додатні та від'ємні числа. Число нуль](https://drive.google.com/file/d/1gOKmuC88hemTuFmWTczbbKmy0ARznYe7/view?usp=sharing)  
**11.01** [6-Б. Тема: Відсоткові розрахунки](https://drive.google.com/file/d/1Zfytcvvdeup5d3a0lOcHbHt69x-OkZnS/view?usp=sharing)  
**12.01** [6-А,В. Тема: Координатна пряма](https://drive.google.com/file/d/1YflD_mgVismDEdHMBSHlleHy_YUiuRjp/view?usp=sharing)  
**12.01** [6-Б. Тема: Коло і круг](https://drive.google.com/file/d/1A4aNKpPgWQcl3V_iheHpKRaUf-svqYDz/view?usp=sharing)  
**13.01** [6-А,В. Тема: Координатна пряма](https://drive.google.com/file/d/1jhgoyy_vxgcS0cfRKdpu0zzOCydH5biD/view?usp=sharing)  
**13.01** [6-Б. Тема: Кругові та стовпчасті діаграми](https://drive.google.com/file/d/1tYxB-pYC32fSWaIUQzrFiX8mTA1ti22s/view?usp=sharing)  
**13.01** [6-Б. Презентація. Тема: Кругові та стовпчасті діаграми](https://drive.google.com/file/d/1XnTl3NwsLlBSJnPNDF9oMJhcatT2XI40/view?usp=sharing)  
**15.01** [6-Б. Тема: Ймовірність випадкової події](https://drive.google.com/file/d/1GfILiSRpplxvzgeQgHwsBnff8Uo32ADF/view?usp=sharing)  
**15.01** [6-А,В. Тема: Розв'язування вправ](https://drive.google.com/file/d/1vlD1lBEG3vAIS-s6lkCKKfMQD16vH-X0/view?usp=sharing)  
**18.01** [6-Б. Тема: Підготовка до контрольної роботи](https://drive.google.com/file/d/1vM6ZHcMvA5jIjXgb3Vo663wecYdANDur/view?usp=sharing)  
**18.01** [6-А,В. Тема: Модуль числа](https://drive.google.com/file/d/1QgruIa1AxkapdNlQscNBdwSVy4dAdD_2/view?usp=sharing)  
**19.01** [6-А,В. Тема: Модуль числа](https://drive.google.com/file/d/1zQV0bWxO4PzaHNQUl5dFEkAzxSknlMas/view?usp=sharing)  
**19.01** [6-Б. Тема: Підсумковий урок з теми «Довжина кола. Площа круга. Тіла обертання. Діаграми.» Контрольна робота](https://drive.google.com/file/d/1dsQblVn0v8lfgU5gK-iIHyZ2sXZylb5V/view?usp=sharing)  
**20.01** [6-Б. Тема: Додатні та від'ємні числа. Число нуль](https://drive.google.com/file/d/1x0mYBP9AI-Pl8UL4CwKcqdSlp9Xg7Au_/view?usp=sharing)  
**20.01** [6-А,В. Тема: Розв'язування вправ](https://drive.google.com/file/d/1vBiY5-vOIWJloc6XoJu-OETr3--SEZeW/view?usp=sharing)  
**22.01** [6-А,В. Тема: Цілі числа. Раціональні числа](https://drive.google.com/file/d/144hd3FwaDtauv3hlPgqn8UrdVu6skUMF/view?usp=sharing)  
**29.03** [6-Б. Тема: Ділення раціональних чисел](https://drive.google.com/file/d/1kw5yYdd3nEsQaTAOBwrSJINdqTj8yCoZ/view?usp=sharing)  
**29.03** [6-А,В. Тема: Вирази та їх спрощення](https://drive.google.com/file/d/1_BXBO4uUWaNiZhGFH_TGO2f7WkeHyako/view?usp=sharing)  
**30.03** [6-Б. Тема: Ділення раціональних чисел](https://drive.google.com/file/d/1r8srZ08QErX6u3H-G4b88J28Z2_2yyd_/view?usp=sharing)  
**30.03** [6-А,В. Тема: Вирази та їх спрощення](https://drive.google.com/file/d/14YDDxrlXSLM3K6gijYLDyEwASJ-Jrgpe/view?usp=sharing)  

** Українська мова **  
**04.12** [Тема: Відмінки іменників. Кличний відмінок](https://drive.google.com/file/d/1qknJdLvX6BUZIvZNErt0V8oxq7MI5UO3/view?usp=sharing)  
**07.12** [Тема: Відмінювання іменників І відміни](https://drive.google.com/file/d/1Do8nVvddTJkf7IVS5Bl3IyIBvMrIa-bW/view?usp=sharing)  
**08.12** [Тема: Відмінювання іменників. Поділ іменників на відміни та групи](https://drive.google.com/file/d/11Z8CMcTG0Na1MCpTit6W-bFskR3yWmmi/view?usp=sharing)  
**11.01** [Тема: Незмінювані іменники. Рід незмінюваних іменників](https://drive.google.com/file/d/1OBVjvoJZIoN2VNdEep2uBRAnBVQd79ON/view?usp=sharing)  
**12.01** [Тема: Відмінювання іменників, що мають форму лише множини](https://drive.google.com/file/d/161iSi4nJJNJfV7ew9v4cJNA9E6olCzsO/view?usp=sharing)  
**13.01** [Тема: Написання й відмінювання чоловічих і жіночих прізвищ, імен по батькові](https://drive.google.com/file/d/1p0ee-aDkqsmnKQwgG5HzR3cUNAGQygeu/view?usp=sharing)  
**14.01** [Тема: Щедрий на добро внутрішній світ героя. Федько як особистість. Федько як особистість. Образи Федька і Толі](https://drive.google.com/file/d/1_aFW8QXgCJTusKtOk-peQtstt6MEHcua/view?usp=sharing)  
**15.01** [6-Б. Тема: Букви е, и, і в суфіксах іменників](https://drive.google.com/file/d/1LmkshuXNDyFV-7fSUjfaC2xxttoiopYC/view?usp=sharing)  
**18.01** [6-А,В. Тема: Букви е, и, і в суфіксах іменників](https://drive.google.com/file/d/1LmkshuXNDyFV-7fSUjfaC2xxttoiopYC/view?usp=sharing)  
**19.01** [Тема: Написання не з іменниками](https://drive.google.com/file/d/1d3W4t9j5XWprCHT14yRiyDcvZocv5pKS/view?usp=sharing)  
**20.01** [Тема: Написання не з іменниками](https://drive.google.com/file/d/1wonRT9TJ_3xEuXYKgFzxIKjymSP7cMpt/view?usp=sharing)  
**21.01** [Тема: Написання не з іменниками](https://drive.google.com/file/d/1JulWsr9cMaLhUsnSC6o8OACDKSVH25Qm/view?usp=sharing)  
**22.01** [Тема: Складні слова. Правопис складних слів разом і через дефіс. Написання слів із пів](https://drive.google.com/file/d/1naP4akMUVs2zQwH0Ndr6hG-e2wj9WF-i/view?usp=sharing)  
**29.03** [Тема: Числівники прості, складні і складені](https://drive.google.com/file/d/13-SB3tWtod5s-WeMfOPBZqs0c4m1u2dA/view?usp=sharing)  
**30.03** [Тема: Відмінювання кількісних числівників, що означають цілі числа](https://drive.google.com/file/d/1kpfFn-i34wsvChHLIh5IklxmhG337Zjd/view?usp=sharing)  

** Біологія **  
**11.01** [Тема: Різноманітність та видозміни пагона](https://drive.google.com/file/d/1-QyLP9rc_OE-yPg9YZ7I6EDa7FmKktvz/view?usp=sharing)  
**14.01** [Тема: Будова листка у звязку з функціями](https://drive.google.com/file/d/1SgqVRONZ5bItfVbpccloSGkG56VB6dxb/view?usp=sharing)  
**18.01** [6-А,Б. Тема: Внутрішня будова листка](https://drive.google.com/file/d/1Ze7oESR054cbDba0OBorUCdZgBHunBab/view?usp=sharing)  
**19.01** [6-В. Тема: Внутрішня будова листка](https://drive.google.com/file/d/1UiHQEyvJDrNGxF3nq8SIt64wn7LZuveE/view?usp=sharing)  
**21.01** [Тема: Розмноження рослин](https://drive.google.com/file/d/1RO7tmFwIyWZCfhlBIldt2G6OIJoi5TYe/view?usp=sharing)  
**29.03** [Тема: Екологічні групи рослин](https://drive.google.com/file/d/118ZNVkLCBxuIRoJX82KCPyTecQst6IGP/view?usp=sharing)  

** Англійська мова **  
**11.01** [Тема: Продукти харчування](https://drive.google.com/file/d/1d3TbAEysdcGIIGHnMnE1Pt-076Fx2xcB/view?usp=sharing)  
**13.01** [Тема: Овочі та фрукти](https://drive.google.com/file/d/1r0WmGmylVGkm43cUXuqTWMPGN2IrSJt0/view?usp=sharing)  
**14.01** [6-Б,В. Тема: Солодощі](https://drive.google.com/file/d/102hYRqIEZuy0EOMGMUGgs6wLuvBgMl88/view?usp=sharing)  
**15.01** [6-А. Тема: Солодощі](https://drive.google.com/file/d/1xyXWBeFktq2LscZoQClkpzd_AYCUQk_w/view?usp=sharing)  
**18.01** [Тема: Улюблені страви](https://drive.google.com/file/d/1UnmqixQKKt683aPbFrY8ZTjrSjl29p3S/view?usp=sharing)  
**20.01** [Тема: Улюблені страви моєї родини. Повторення, Уподобання моїх друзів](https://drive.google.com/file/d/1Tizxr9J10TNGhllL8TnNCAet3jSeTg7O/view?usp=sharing)  
**21.01** [6-Б,В. Тема: Традиції харчування](https://drive.google.com/file/d/1Jc6gbvt7NGk55jXsn-7rul8Ay5IKU-Ar/view?usp=sharing)  
**21.01** [Презентація. Тема: The Future Simple Tense (простий майбутній час)](https://drive.google.com/file/d/15T5P90_VFyvMBfld89LoosAuWc6tmI6o/view?usp=sharing)  
**22.01** [6-А. Тема: Традиції харчування](https://drive.google.com/file/d/17FgnB3oOjEYuQwPEhj5FzE8G-RATW9wU/view?usp=sharing)  
**29.03** [Тема: Мій улюблений спосіб подорожування](https://drive.google.com/file/d/1L01iGLj3BpjYjiR7hDCFkLxPdWel0fHW/view?usp=sharing)  

** Трудове навчання **  
**11.01** [Тема: Правила БЖД та ОП Короткі історичні відомості про розвиток мистецтва штучних декоративних квітів. Види декоративних квітів](https://drive.google.com/file/d/16YUkvI89A0BiQETZdytpt_jrfWkzfgT8/view?usp=sharing)  
**11.01** [Тема: Конструкційні матеріали для виготовлення декоративних квітів. Інструменти та пристосування](https://drive.google.com/file/d/1Blc1bZu3BLlIkWK4Kxi99RRurtEUTVK0/view?usp=sharing)  
**12.01** [Тема: Конструкційні матеріали для виготовлення декоративних квітів. Інструменти та пристосування](https://drive.google.com/file/d/1M4lEkElBCBg_eVHu2RzYUMMRo6Swfev9/view?usp=sharing)  
**12.01** [Тема: Правила БЖД та ОП Короткі історичні відомості про розвиток мистецтва штучних декоративних квітів. Види декоративних квітів](https://drive.google.com/file/d/17_WWzKgBKOEKvrDGA5hjMlRhNI_WREWm/view?usp=sharing)  
**18.01** [6-В. Тема: Проведення міні-маркетингового дослідження для обґрунтування вибору виробу та його конструкційних особливостей](https://drive.google.com/file/d/1pxglnkU-tvmKhXgx0sNRfMaOOPnGmSko/view?usp=sharing)  
**18.01** [6-В. Тема: Застосування методу фантазування для виготовлення декоративних квітів.  Розроблення ескізного малюнка квітів](https://drive.google.com/file/d/17ZWUlpboSCwRXyzWOzwlhoF9QGt-dxpu/view?usp=sharing)  
**19.01** [6-А,Б. Тема: Проведення міні-маркетингового дослідження для обґрунтування вибору виробу](https://drive.google.com/file/d/195Fe79Vml4do2NyC-N-krd1JvdSzh7gj/view?usp=sharing)  
**19.01** [6-А,Б. Тема: Застосування методу фантазування для виготовлення декоративних квітів](https://drive.google.com/file/d/14PD-uehW5coAK_9pzmuMV6TRvZZWYgar/view?usp=sharing)  
**29.03** [6-В. Тема: Торбинка для дрiбничок](https://drive.google.com/file/d/1wOjmFUnE-G3pQKEnWJZQ_qqUljtmaPhj/view?usp=sharing)  
**29.03** [6-В. Тема: Модель транспортного засобу](https://drive.google.com/file/d/1yRcm7CYzoA8ywU2n6zxW6v2QAHFSQMTc/view?usp=sharing)  
**30.03** [6-А. Тема: Вибір та обґрунтування теми проєкту (види торбинки)](https://drive.google.com/file/d/1FufWJzT3rMrJPxj9qXGjc-WR3eK6GGAZ/view?usp=sharing)  
**30.03** [6-Б. Тема: Вибір та обґрунтування теми проєкту (види торбинки)](https://drive.google.com/file/d/1F3RlCc2DbYroAyzPiE3kTW6IPiqK7DRX/view?usp=sharing)  

** Географія **  
**12.01** [Тема: Кліматична карта. Теплові пояси землі практичне значення вимірювання температури повітря](https://drive.google.com/file/d/1MeFviw1kCIDcwHIRPY2YtcA80_L4Q7pQ/view?usp=sharing)  
**14.01** [Тема: Атмосферний тиск](https://drive.google.com/file/d/1u9nZSjAC2oCx31K_5venZlJt142B94GB/view?usp=sharing)  
**15.01** [Тема: Атмосферний тиск](https://drive.google.com/file/d/1Oga8FbAW6SN2K-Yprr_0dtQu0XssiHaT/view?usp=sharing)  
**18.01** [Тема: Північна Америка](https://drive.google.com/file/d/11cEiCvZoTkiPnLDYMDbalQNOG9iBxzN0/view?usp=sharing)  
**19.01** [Тема: Вітер](https://drive.google.com/file/d/13RgOuRoni47jtrSjFaLvI2Yd1TR7egNG/view?usp=sharing)  
**21.01** [Тема: Вода в атмосфері](https://drive.google.com/file/d/1ZRDP84t-rVrjAY-CUIinz3g5Zc08jQQj/view?usp=sharing)  
**22.01** [6-А,Б. Тема: Вода в атмосфері](https://drive.google.com/file/d/16_IdXLXxzpckvq2SwgUzDmc_iT3hKLGT/view?usp=sharing)  
**22.01** [6-В. Тема: Вода в атмосфері](https://drive.google.com/file/d/1lIA1Qf1Y_38uGVVCpogAtaqDWqdoeYxy/view?usp=sharing)  
**30.03** [6-А,Б,В. Тема: Біосфера](https://drive.google.com/file/d/1vZemM51I02351fLU5SKK0UWfV_rVl5pn/view?usp=sharing)  

** Історія **  
**13.01** [6-А,Б. Тема: Історія Підкорення Греції Філіппом ІІ](https://drive.google.com/file/d/1vSz07K60HtR64gGO7ZCeYoDOXPyjHbey/view?usp=sharing)  
**13.01** [6-В. Тема: Підкорення Греції Філіпом ІІ](https://drive.google.com/file/d/1W16nIfrwv-_tLQfCSm2Q2u-nSoX-EbsY/view?usp=sharing)  
**15.01** [6-В. Тема: Утворення імперії Александра Македонського](https://drive.google.com/file/d/1_pEhPSPLEo3g3psDYnFRr5irb7PTR5cl/view?usp=sharing)  
**15.01** [6-А,Б. Тема: Утворення імперії Александра Македонського](https://drive.google.com/file/d/1xJS1EfDK-cVx6iPd0trFf4hQj54itOpj/view?usp=sharing)  
**20.01** [6-А,Б. Тема: Александр Македонський](https://drive.google.com/file/d/1_rDtdlkQjFDjeeqKKU-yds6DA0s-2_VM/view?usp=sharing)  
**20.01** [6-В. Тема: Александр Македонський](https://drive.google.com/file/d/1_rDtdlkQjFDjeeqKKU-yds6DA0s-2_VM/view?usp=sharing)  
**22.01** [6-А,Б,В. Тема: Елліністичні держави. Культура елліністичної доби](https://drive.google.com/file/d/10eb54TjLDnVCip8z25Qvw5nYE0-EcGue/view?usp=sharing)  

** Основи здоров’я **  
**13.01** [Тема: Види рішень](https://drive.google.com/file/d/1Ic241cRLf0OHQiJDlEFwiHeGkWpJTBc9/view?usp=sharing)  
**20.01** [Тема: Вплив реклами на рішення людини. Види реклами](https://drive.google.com/file/d/1NbtevUO8Mhl3b43N5955q54r68Lf1nS2/view?usp=sharing)  

** Образотворче мистецтво **  
**14.01** [Тема: Побутовий жанр. Історія виникнення та розвитку](https://drive.google.com/file/d/1XYvXwACQ4PgoG10yrkiNui7Ho97oaw35/view?usp=sharing)  
**21.01** [Тема: Домашній інтер'єр](https://drive.google.com/file/d/1eK99iCcgZY7eYNzWoC1X7G3yCTBqZ7OI/view?usp=sharing)  

** Зарубіжна література **  
**11.01** [6-А. Тема: А.П.Чехов Хамелеон](https://drive.google.com/file/d/1PfhpTVhihBn22ZZafAJ0UAig2vydUWqH/view?usp=sharing)  
**12.01** [6-Б,В. Тема: А.П.Чехов Хамелеон](https://drive.google.com/file/d/1PfhpTVhihBn22ZZafAJ0UAig2vydUWqH/view?usp=sharing)  
**14.01** [6-А,Б,В. Тема: А.П.Чехов Товстий і тонкий](https://drive.google.com/file/d/1RpnTytzDvTUDxd-fOmTv0_p9DSV4fNE6/view?usp=sharing)  
**18.01** [6-А. Тема: Викриття пристосуванства, підлабузництва в оповіданнях А.П. Чехова. Діалог як основна форма розкриття сюжету](https://drive.google.com/file/d/19mtPuXVlE9fmhJdQOKjWh5WKMFc2xdm8/view?usp=sharing)  
**19.01** [6-Б,В. Тема: Викриття пристосуванства, підлабузництва в оповіданнях А.П. Чехова. Діалог як основна форма розкриття сюжету](https://drive.google.com/file/d/16lj3yh1wT32FaNg6l52P6Y-oW7RyiuVv/view?usp=sharing)  
**21.01** [6-А,Б,В. Тема: Майстерність письменника у змалюванні персонажів. Роль художньої деталі. Підтекст. Символічність назви](https://drive.google.com/file/d/1nCm4LqXnRliAl4vBfJUkOoDwUoNKMMuB/view?usp=sharing)  
**29.03** [6-А. Тема: Д. Родарі. "Листівки з видами міст". Широта світу та його сприйняття ліричним героєм вірша](https://drive.google.com/file/d/1x78SHWfBQcTBy2VC34Y3Y5DwOMmTm6HQ/view?usp=sharing)  
**30.03** [6-Б,В. Тема: Джанні Родарі. Листівки з видами міст. Широта світу та його сприйняття ліричним героєм вірша](https://drive.google.com/file/d/136S1xu14swnE8ZHIhqRjDcws8OQeUI_k/view?usp=sharing)  

** Російська мова **  
**13.01** [6-А. Тема: Правописание не с глаголами. Правописание -тся, -ться на конце глаголов](https://drive.google.com/file/d/1HvuduB6zBZNOhSh61W8TlOppA2vsTaC8/view?usp=sharing)  
**15.01** [6-Б,В. Тема: Правописание не с глаголами. Правописание -тся, -ться на конце глаголов](https://drive.google.com/file/d/1HvuduB6zBZNOhSh61W8TlOppA2vsTaC8/view?usp=sharing)  
**20.01** [6-А. Тема: Наиболее употребительные предлоги. Союзы](https://drive.google.com/file/d/11imYKN0XAlRW4k2-cfoyFE6nSCAzhlkp/view?usp=sharing)  
**22.01** [6-Б,В. Тема: Наиболее Употребительные предлоги. Союзы](https://drive.google.com/file/d/1RiS8M8ri6DputibpwC3u0q7iR55Ebwv6/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="7 клас">
        <Md>{`
** Фізика **  
**03.12** [Тема: Коливальний рух. Амплітуда коливань. Період і частота коливань. Маятники.](https://drive.google.com/file/d/1qvwaKnFReAwoJV2QDkk4CS5k-MpwJtrd/view?usp=sharing)  
**07.12** [Тема: Розв’язування задач. Повторення](https://drive.google.com/file/d/1GqmdTYb1tvgWkB_hP-_i1tTMCatd2TqE/view?usp=sharing)  
**11.01** [Тема: Iнертнiсть. Маса](https://drive.google.com/file/d/1DeS0Ba5UNJ0cDpKHxos2kV3tVpUA1nG9/view?usp=sharing)  
**14.01** [7-Б. Тема: Густина речовини](https://drive.google.com/file/d/1GhZzz15RS3FPzjBVAxEH5NL_7xkqEadU/view?usp=sharing)  
**15.01** [7-А. Тема: Густина речовини](https://drive.google.com/file/d/1e7fu6OdHJmW2aLeE5aU3bGfa8pC1eVFh/view?usp=sharing)  
**18.01** [7-А,Б. Тема: Взаємодія тіл. Сила](https://drive.google.com/file/d/15LAgo4lLcByMmLVVTaZt1IeRn5GXSMJV/view?usp=sharing)  
**21.01** [7-А,Б. Тема: Деформація. Сила Пружності](https://drive.google.com/file/d/1RAAimiRbetxS2_4x2cn-Z0bWxQHZ6-05/view?usp=sharing)  
**29.03** [7-А,Б. Тема: Гідростатичний тиск. Сполучені посудини](https://drive.google.com/file/d/1SdVY7I-M2YvFBojDEnE-hXfTw-bo-AXt/view?usp=sharing)  

** Музичне мистецтво **  
**03.12** [Тема: «Електронна музика та її інструменти. Жанри і напрями електронної музики»](https://drive.google.com/file/d/1ZNwUMDGIqB9I96Nj55TvWZmcg5LEIKc9/view?usp=sharing)  
**04.12** [Тема: «Електронна музика та її інструменти. Жанри і напрями електронної музики»](https://drive.google.com/file/d/1VUTZhWnbIARa3D69NKg3qvHvC8ygPxq3/view?usp=sharing)  
**14.01** [7-А. Тема: Джаз](https://drive.google.com/file/d/1W0UAHGeBr3Cta9iKU2OVkSyi71kZxW-2/view?usp=sharing)  
**15.01** [7-Б. Тема: Джаз](https://drive.google.com/file/d/1g9Slz7ZVOTuE1MBxi_9r4HD7cobBXN0y/view?usp=sharing)  
**21.01** [7-А. Тема: Рок-музика](https://drive.google.com/file/d/1hOF5vrabaJWFwgpnBBDv7LbLL1sYSES7/view?usp=sharing)  
**22.01** [7-Б. Тема: Рок-музика](https://drive.google.com/file/d/1mOtiY-tF4iMzyrBGBz4OpDdz2OWRJ1fK/view?usp=sharing)  

** Історія України. Всесвітня історія **  
**03.12** [Тема: Походи вікінгів та їх завоювання](https://drive.google.com/file/d/10SKWwFRat3yT2mp-XidaaXIqylc7hV62/view?usp=sharing)  
**11.01** [Тема: Правління Ярославичів](https://drive.google.com/file/d/1KblQ7S0ICu_ekaXFnVFyVI7uDohlUwY-/view?usp=sharing)  
**14.01** [Тема: Правління В. Мономаха](https://drive.google.com/file/d/1TF74sWB5fZZ2558syT__C8ChMlBN0D8D/view?usp=sharing)  
**19.01** [Тема: Київське, Переяславське, Чернігівське князівства](https://drive.google.com/file/d/19reMQXluo7gLq8-uhovC-_vNDvmrWbIw/view?usp=sharing)  
**21.01** [Тема: Галицьке та Волинське князівства в 12ст.](https://drive.google.com/file/d/195Xb4LDi6Fjn4tTi_VM3tl3X2C_WrMNJ/view?usp=sharing)  
**30.03** [Тема: Причини зближення Польщі і Литви у XIV ст.](https://drive.google.com/file/d/1i6Y1fpN9goJcfVRPkW_hG97zzkUGGlsm/view?usp=sharing)  

** Геометрія **  
**03.12** [Тема: Кути, утворені при перетині двох паралельних прямих січною. Властивості кутів, утворених при перетині паралельних прямих січною.](https://drive.google.com/file/d/1fFJnhdfAIKT66YiMKbNvDSv4onIhFgb3/view?usp=sharing)  
**03.12** [Презентація: Кути при січній](https://drive.google.com/file/d/14HC1AtZFrH7uzWDvLnEClidQ-lvEiuWB/view?usp=sharing)  
**14.01** [Тема: Трикутник та його елементи. Медіана, бісектриса та висота трикутника. Нерівність трикутника](https://drive.google.com/file/d/1CMiLXvMy8GArmsffQw2V0O65MEzmrRl0/view?usp=sharing)  
**15.01** [7-А,Б. Тема: Властивості кутів трикутника. Сума кутів трикутника](https://drive.google.com/file/d/1c4p70km5T9P5tdfaJWCj-rqMP1oM_6gW/view?usp=sharing)  
**21.01** [7-А. Тема: Сума кутів трикутника. Зовнішній кут трикутника](https://drive.google.com/file/d/1RZVFkgKquMYaTNN10tgi-ZSiHAfC4LPL/view?usp=sharing)  
**21.01** [7-Б. Тема: Сума кутів трикутника. Зовнішній кут трикутника](https://drive.google.com/file/d/1wnBMHmEa5I-cTkpo7PFpWqxkg6j_73iJ/view?usp=sharing)  
**22.01** [7-А,Б. Тема: Розв'язування задач](https://drive.google.com/file/d/1xmssML1Z47MUINoGWBvfzhm6DpFJN1Tw/view?usp=sharing)  

** Англійська мова **  
**03.12** [Тема: Страви](https://drive.google.com/file/d/1yC2uOR3TM0u3iNRhyux5e6-eVAAwOQei/view?usp=sharing)  
**07.12** [Тема: Хатня робота](https://drive.google.com/file/d/12RjLjjkx7VsGOdMvqr8EN0xwZwFRlhId/view?usp=sharing)  
**07.12** [Тема: Виконання хатньої роботи](https://drive.google.com/file/d/1_M8zNX8T00sWs-Gq6L5w-PnqrLRydaLx/view?usp=sharing)  
**11.01** [Тема: Види спорту](https://drive.google.com/file/d/1lXlyXV3JL9qobds-FKnWTTr4FsiYJy11/view?usp=sharing)  
**11.01** [Тема: Види спорту](https://drive.google.com/file/d/1YmKwSsqFSKvmuN3AhWT-v_x02tsLR5gx/view?usp=sharing)  
**12.01** [7-Б. Тема: Види спорту](https://drive.google.com/file/d/1eUESWK6zIr6qRwpdMIjfy1eSuGqF86-5/view?usp=sharing)  
**13.01** [7-А. Тема: Сучасні Олімпійські ігри](https://drive.google.com/file/d/1JyUfXX-AaMdtz8mZPIwQHPQO9yVEwJdn/view?usp=sharing)  
**13.01** [7-А,Б. Тема: Олімпійські ігри](https://drive.google.com/file/d/1G78pEW6ZTCqRljyOq7AtIXrugOFAmkTD/view?usp=sharing)  
**14.01** [7-А. Тема: Символіка олімпійських ігор](https://drive.google.com/file/d/1UaFF3KYrmmJXmXIGxSwZsHvnPF4N2DLB/view?usp=sharing)  
**14.01** [7-А. Тема: Символіка олімпійських ігор](https://drive.google.com/file/d/1lV_IYsZZzYdUbyI2gfEKuM04zvlAAKla/view?usp=sharing)  
**18.01** [7-А. І група. Тема: Сучасні міжнародні спортивні події](https://drive.google.com/file/d/1Vuo7HeRt43SUWmiUpXcbjqwHfHwqVcH9/view?usp=sharing)  
**18.01** [7-А. ІІ група. Тема: Сучасні міжнародні спортивні події](https://drive.google.com/file/d/1wKGbo-UqgGDDBbRlgltM4IEH4h_BXpBL/view?usp=sharing)  
**19.01** [7-Б. Тема: Сучасні міжнародні спортивні події](https://drive.google.com/file/d/1JfxiNjK9NUN7xfliZ-T2piIBeCIugzoz/view?usp=sharing)  
**20.01** [7-А. І група. Тема: Сучасні міжнародні спортивні події](https://drive.google.com/file/d/1vSzoN6AbnEFYS3dOUO3txpxpP7UZpS4B/view?usp=sharing)  
**20.01** [7-А. ІІ група. Тема: Міжнародні спортивні події](https://drive.google.com/file/d/1OSIJkAJJSfKBGWBzqzOBG2eRsfCBRh1R/view?usp=sharing)  
**20.01** [7-А. ІІ група. Презентація](https://drive.google.com/file/d/1qB9k8e5H9yk0p5GJzQQ3_ThVliba6Ae5/view?usp=sharing)  
**20.01** [7-Б. Тема: Сучасні міжнародні спортивні події](https://drive.google.com/file/d/1M9gydlbh_RNqye0DmBiwrLP8F85JiTVX/view?usp=sharing)  
**21.01** [7-А. І група. Тема: Вступ до спортивного клубу](https://drive.google.com/file/d/1O9pC-bxymsVEVHFQVbYVs4iGSAY9mWZs/view?usp=sharing)  
**21.01** [7-Б. Тема: Вступ до спортивного клубу](https://drive.google.com/file/d/1HlRXQ3djWZQjs6I_ylpPaV8sXDZjz6lI/view?usp=sharing)  
**21.01** [7-А. ІІ група. Тема: Вступ до спортивного клубу](https://drive.google.com/file/d/1ceg_kFKAAM81SmS93SNAGWbOy0zxSoob/view?usp=sharing)  
**29.03** [7-А. І група. Тема: Рекомендації щодо перегляду фільму чи вистави](https://drive.google.com/file/d/1Am5lNpLi5q7GnnBjBRJF3Kd6OOhiVBN-/view?usp=sharing)  
**29.03** [7-А. ІІ група.Тема: Рекомендації щодо перегляду фільму або вистави](https://drive.google.com/file/d/18qjsYL2-nvwT2Av5K7i6MoFtlmAn3cwb/view?usp=sharing)  
**30.03** [7-Б. І група. Тема: Рекомендації щодо перегляду фільму чи вистави](https://drive.google.com/file/d/1REVkx7SsvABhyZEhy2Oq-y4W8cUaf6vX/view?usp=sharing)  

** Інформатика **  
**04.12** [Тема: Створення моделей для розв’язування задач](https://drive.google.com/file/d/129xZiYVeZFgltMSzdCWdQEco6wnXtbuw/view?usp=drive_web)  
**13.01** [7-Б. Тема: Створення комп'ютерної моделі рівномірного прямолінійного руху](https://drive.google.com/file/d/1eEhezYQyhBuwJkm7r1QrzZF_b1rQ0hBC/view?usp=drive_web)  
**15.01** [7-А. Тема: Створення комп'ютерної моделі рівномірного прямолінійного руху](https://drive.google.com/file/d/1eEhezYQyhBuwJkm7r1QrzZF_b1rQ0hBC/view?usp=drive_web)  
**20.01** [Тема: Створення комп’ютерної моделі процесу взаємопов’язаного функціонування об’єктів](https://drive.google.com/file/d/1ebt5P6lRYllgG-E5yVvgtguMgKRpMfFm/view?usp=drive_web)  
**22.01** [Тема: Створення комп’ютерної моделі процесу взаємопов’язаного функціонування об’єктів](https://drive.google.com/file/d/1ebt5P6lRYllgG-E5yVvgtguMgKRpMfFm/view?usp=drive_web)  

** Біологія **  
**04.12** [Тема: Різноманітність птахів, їх роль у природі та значення в житті людини](https://drive.google.com/file/d/1yE8Ay4YmvkBD_Dh23t4NCf8q2Jox4_Ou/view?usp=sharing)  
**08.12** [Тема: Ссавці. Особливості будови, способу життя](https://drive.google.com/file/d/1rOLn1IUWVoWF-pVz3KegQbQu8D3hsJ6C/view?usp=sharing)  
**12.01** [Тема: Живлення і травлення](https://drive.google.com/file/d/1p12j3GV8HdauDarVJmqtLZYzNj6msmaG/view?usp=sharing)  
**15.01** [Тема: Дихання та газообмін. Органи дихання](https://drive.google.com/file/d/1O6M_gAPyeNZwHWr1GoQAuIEJmLwk9Iu3/view?usp=sharing)  
**19.01** [Тема: Транспорт речовин у тварин](https://drive.google.com/file/d/1Avhx4pqT0479ipcy012hA7N7U5dfuRhl/view?usp=sharing)  
**22.01** [Тема: Замкнена та незамкнена кровоносна система](https://drive.google.com/file/d/1ZeHKRTqVl2JC8UjNiU7I61o1j2ikdeNF/view?usp=sharing)  
**30.03** [Тема: Поведінка тварин](https://drive.google.com/file/d/1CA8aP1QimysFWYTlxg1w_c_kRkrzMrhg/view?usp=sharing)  

** Основи здоров’я **  
**04.12** [Тема: Показники фізичного розвитку підлітків. Способи покращення фізичної форми](https://drive.google.com/file/d/1RLib8JRvGgB4ChCpFRIzK3r3e9lClYCL/view?usp=sharing)  
**14.01** [Тема: Особливості психічного розвитку підлітків](https://drive.google.com/file/d/1byjm4077tWSc_gv66VVHGZpUnos6THQ7/view?usp=sharing)  

** Українська мова **  
**03.12** [Тема: Безособові дієслівні форми на -но, -то. Перехід дієприкметників у прикметники та іменники](https://drive.google.com/file/d/1hGi6SV1EOVml1ZQiq7HCV3iPyEyUI5em/view?usp=sharing)  
**04.12** [Тема: Михайло Стельмах. „Гуси-лебеді летять”. Єдність світу природи і світу дитячої душі](https://drive.google.com/file/d/16f8K3tfl64X6YPtW-QA9HcYiBUrorDP2/view?usp=sharing)  
**11.01** [Тема: Дієприслівник як особлива форма дієслова](https://drive.google.com/file/d/1tY7xYqFrYmmDStV1_-5VY8TG7mt2Z7p-/view?usp=sharing)  
**11.01** [7-А. Алтинбаєва Л. М. ІІ група, 7-Б. Тема: Дієприслівник як особлива форма дієслова: загальне значення, морфологічні ознаки, синтаксична роль](https://drive.google.com/file/d/1wPUmizPfvrk8xvxlFnAR8ZaVzBONigsU/view?usp=sharing)  
**13.01** [7-Б. Тема: Дієприслівниковий зворот. Розділові знаки при дієприслівниковому звороті й одиничному дієприслівникові](https://drive.google.com/file/d/1FVGnicieGXVOTeJ_XWiD9Y-VfmPokNuN/view?usp=sharing)  
**14.01** [7-А. Алтинбаєва Л. М. ІІ група. Тема: Дієприслівниковий зворот. Розділові знаки при дієприслівниковому звороті й одиничному дієприслівникові](https://drive.google.com/file/d/1Mq_8VvHeAosR-u4f10lV055P09CFZpiv/view?usp=sharing)  
**14.01** [7-Б. Тема: Дієприслівниковий зворот. Розділові знаки при дієприслівниковому звороті й одиничному дієприслівникові](https://drive.google.com/file/d/1VgKvWkZNIO6CZ6_ajIX05r7kqVzo1oRV/view?usp=sharing)  
**14.01** [7-А. Харенко Ю. А. І група. Тема: Дієприслівниковий зворот. Розділові знаки при дієприслівниковому звороті й одиничному дієприслівникові](https://drive.google.com/file/d/1CFk4BBR7Gt_3su7EHFQyV3ji27A5cM_8/view?usp=sharing)  
**18.01** [7-А. Алтинбаєва Л. М. ІІ група. Тема: Дієприслівниковий зворот. Розділові знаки при дієприслівниковому звороті й одиничному дієприслівникові](https://drive.google.com/file/d/1vAo32W8bXqlHKojUKKpNCVqGTNikS2ZI/view?usp=sharing)  
**18.01** [7-Б. Алтинбаєва Л. М. Тема: Дієприслівник доконаного і недоконаного виду, їх творення](https://drive.google.com/file/d/1kyc76mCbTERuLk_WWD6L6ZN8oANncG7D/view?usp=sharing)  
**20.01** [7-А. Харенко Ю. А. І група. Тема: Вид і час дієприслівників. Творення дієприслівників недоконаного і доконаного виду](https://drive.google.com/file/d/1J2cDntiuMJc0nz9-3h70aOWUkQtgkFZl/view?usp=sharing)  
**20.01** [7-А. Алтинбаєва Л. М. ІІ група. Тема: Дієприслівник доконаного і недоконаного виду, їх творення](https://drive.google.com/file/d/1udfhzyxDQ52VrFQJui2h55-L2gnB975a/view?usp=sharing)  
**21.01** [7-А. Харенко Ю. А. І група. Тема: РМ. Усний твір розповідного характеру в художньому стилі про виконання певних дій на основі власних спостережень з використанням дієприслівникових зворотів (за складним планом)](https://drive.google.com/file/d/19ZXdcXZO5gRukHO7ZSEmuTT_Fs_U_Khp/view?usp=sharing)  
**21.01** [7-А. Алтинбаєва Л. М. ІІ група. Тема: Усний твір розповідного характеру в художньому стилі про виконання певних дій на основі власних спостережень з використанням дієприслівникових зворотів (за складним планом)](https://drive.google.com/file/d/1tOERPu6A8XHDv9FtHXUYPjsT7oXMO5r2/view?usp=sharing)  
**21.01** [7-Б. Алтинбаєва Л. М. Тема: Усний твір розповідного характеру в художньому стилі про виконання певних дій на основі власних спостережень з використанням дієприслівникових зворотів (за складним планом)](https://drive.google.com/file/d/1ypZVGuIzUWop7gPGRfa5ROtShW9Fabsq/view?usp=sharing)  
**29.03** [7-А. Харенко Ю. А. І група. Тема: Прийменник як службова частина мови. Прийменник як засіб зв’язку у словосполученні](https://drive.google.com/file/d/1KHsGfwUzSErxz5vtDmfZYwEwv9jRHWcO/view?usp=sharing)  
**29.03** [7-А. Алтинбаєва Л. М. ІІ група. Тема: Прийменник як службова частина мови. Прийменник як засіб зв’язку у словосполученні](https://drive.google.com/file/d/1rkQNM56reTLdUmFnrE5JnpT7LcfCIhf1/view?usp=sharing)  
**29.03** [7-Б. Алтинбаєва Л. М. Тема: Прийменник як службова частина мови. Прийменник як засіб зв’язку у словосполученні](https://drive.google.com/file/d/1rkQNM56reTLdUmFnrE5JnpT7LcfCIhf1/view?usp=sharing)  

** Хімія **  
**07.12** [Тема: Фізичні та хімічні явища](https://drive.google.com/file/d/1vDn2GcA1M_iqktbjVpByURwMEJyEv4vQ/view?usp=sharing)  
**11.01** [Тема: Оксиген і кисень](https://drive.google.com/file/d/1UsZBg4YupwyGd3rBFYBn0gww1kJZSJi0/view?usp=sharing)  
**13.01** [7-А. Тема: Склад повітря](https://drive.google.com/file/d/17cqStc7d5zs3scW7i90zEuZ8nNGdkc6q/view?usp=sharing)  
**13.01** [7-Б. Тема: Закон збереження маси](https://drive.google.com/file/d/1cDg4l_tzfwOAXsy1ZXACo_IQSk7c6PRQ/view?usp=sharing)  
**18.01** [7-Б. Тема: Схема хімічної реакції. Рівняння хімічних реакцій](https://drive.google.com/file/d/18BEUyTrk2EhmmahAhM-N5A6SvwlYP6KF/view?usp=sharing)  
**29.03** [Тема: Масова частка розчиненої речовини](https://drive.google.com/file/d/1J5Pz0OeQB2B1mHRNTbwrTqat1PHsQBQX/view?usp=sharing)  

** Алгебра **  
**07.12** [Тема: Формули квадрата двочлена, різниці квадратів, суми і різниці кубів](https://drive.google.com/file/d/1rZfpPfzYKlR_3eqiRpZImyPSKsHghooO/view?usp=sharing)  
**08.12** [7-Б. Тема: Формули суми і різниці кубів](https://drive.google.com/file/d/1Oy_lN7IVHkAP8efaDlTwDTtYg4lRSczR/view?usp=sharing)  
**11.01** [7-А,Б. Тема: Розкладання многочлена на множники винесенням спільного множника за дужки](https://drive.google.com/file/d/15Ks4kkI-K7biOkyD3OHBw3XxxecwUq1S/view?usp=sharing)  
**12.01** [7-Б. Тема: Розкладання многочлена на множники способом группування](https://drive.google.com/file/d/1D4MCUIOU1zUx4AJTxJD47fPeY_RFL5Bh/view?usp=sharing)  
**13.01** [7-А. Тема: Розкладання многочлена на множники способом группування](https://drive.google.com/file/d/1D4MCUIOU1zUx4AJTxJD47fPeY_RFL5Bh/view?usp=sharing)  
**18.01** [7-А,Б. Тема: Використання формул скороченого множення для розкладання многочлена](https://drive.google.com/file/d/1yOyVNUGRVZtOVEdOi1xqbXLK-NErdJTu/view?usp=sharing)  
**19.01** [7-Б. Тема: Застосування кількох способів розкладання многочленів на множники](https://drive.google.com/file/d/190rTQeDp3sY8fmPJ2h_5reTRfxBIiHCt/view?usp=sharing)  
**20.01** [7-А. Тема: Застосування кількох способів розкладання многочленів на множники](https://drive.google.com/file/d/1jdfVMDBx6lvfpyX_3jjAv9WqDv6JfLAa/view?usp=sharing)  
**29.03** [7-А,Б. Тема: Графік лінійного рівняння із двома змінними](https://drive.google.com/file/d/15VI6WgtOLv-YNXTBC0dechIWVD-JIzU-/view?usp=sharing)  
**30.03** [7-Б. Тема: Системи двох лінійних рівнянь з двома змінними. Графічний спосіб розв’язування систем лінійних рівнянь із двома змінними](https://drive.google.com/file/d/1Kwo3O2z_UO5-H-MLD7toTCuooLy4_5L8/view?usp=sharing)  

** Географія **  
**11.01** [Тема: Географічне положення. Відкриття і дослідження антарктиди](https://drive.google.com/file/d/1lIgDyXiWc38CJRLGqbQqjvOiuHOlwgot/view?usp=sharing)  
**13.01** [Тема: Антарктида](https://drive.google.com/file/d/1c7ccaM1aL5k9X7_SGzQAfkuLUaxCawYd/view?usp=sharing)  
**20.01** [Тема: Тектонічна структура Північної Америки](https://drive.google.com/file/d/1rW0x6jh0WhxWOYQ1OlBHNU_NOH4NON1l/view?usp=sharing)  
**29.03** [Тема: Населення Євразія. Держави.](https://drive.google.com/file/d/1KK3tdXEhOZIEzZqi-edBTpx8s0DM7By1/view?usp=sharing)  

** Трудове навчання **  
**11.01** [Тема: Вибір об'єкта проєктування. Планування проєктної діяльності. Комбінування композиції для панно з мозаїки](https://drive.google.com/file/d/1fIqDduVTMiUAkkrR67T8l5GJk7whp_vs/view?usp=sharing)  
**11.01** [Тема: Блокнот](https://drive.google.com/file/d/1JVhwmqntdVZW0QbF_xxWBLJMmbw16wd_/view?usp=sharing)  
**15.01** [7-Б. Тема: Вибір об'єкта проєктування. Планування проєктної діяльності. Комбінування композиції для панно з мозаїки](https://drive.google.com/file/d/1NQaJyhVEQHkDuJuEkBG9s6TGlVvIpiRZ/view?usp=sharing)  
**18.01** [7-А. Тема: Матеріали для виконання мозаїкового набору. Технологія виготовлення мозаїкового набору. Добір матеріалів, інструментів для виготовлення панно](https://drive.google.com/file/d/1GNKZCogBt1i_ysO86sitEbuAflB9iAql/view?usp=sharing)  
**22.01** [7-Б. Тема: Матеріали для виконання мозаїкового набору. Технологія виготовлення мозаїкового набору](https://drive.google.com/file/d/1z8R0o-7MnU60JGySiGWl214e2ky0qrn2/view?usp=sharing)  
**22.01** [7-Б. Презентація. Тема: Матеріали для виконання мозаїкового набору. Технологія виготовлення мозаїкового набору](https://drive.google.com/file/d/15vNfq_nj7d8XU59fdlXz9W1xhMZz-IEK/view?usp=sharing)  
**29.03** [Тема: Деревина, придатна для різьблення. Моделі-аналоги рамки для фото. Інструменти для різьблення](https://drive.google.com/file/d/1itbMvmwGXAXcySj8rVnBGJzmLb7trdG2/view?usp=sharing)  

** Обслуговуюча праця **  
**18.01** [Тема: Блокнот. Технологічний етап проектування виробу. Процес виготовлення основи виробу](https://drive.google.com/file/d/1dm0ngdyFF0cEhVF6-5-5ansZG-2zaQ20/view?usp=sharing)  
**29.03** [Тема: Текстильна іграшка](https://drive.google.com/file/d/1Q5p5HSgnknATKJb0OuDsZ-ZlB89pLA4x/view?usp=sharing)  

** Зарубіжна література **  
**11.01** [7-Б. Тема: Уславлення дружби й вірності у вірші](https://drive.google.com/file/d/1q_z-piiacmGpZ4P54I9aoZJtOZp1NpwI/view?usp=sharing)  
**12.01** [7-А. Тема: Уславлення дружби й вірності у вірші](https://drive.google.com/file/d/1q_z-piiacmGpZ4P54I9aoZJtOZp1NpwI/view?usp=sharing)  
**15.01** [7-А,Б. Тема: Олександр Грін. Пурпурові вітрила. Поєднання реального і фантастичного в повісті](https://drive.google.com/file/d/1z_IXKzjO-Q4Sjp72qSTGPz6yZ9Oj3yrL/view?usp=sharing)  
**18.01** [7-Б. Тема: Пурпурові вітрила. Основний конфлікт твору](https://drive.google.com/file/d/1HMKzaHlgHsNKKyv9X7M-KvIDUjD9DRmi/view?usp=sharing)  
**19.01** [7-А. Тема: О.Грін. "Пурпурові вітрила". Основний конфлікт твору](https://drive.google.com/file/d/18RhX0DpSPyTsjagFjiTCjP2EviV0q7pA/view?usp=sharing)  
**22.01** [7-А,Б. Тема: Ассоль і Грей](https://drive.google.com/file/d/1KZ2BIwhwj90pfLn8JQYXa5BiiW-YaDkd/view?usp=sharing)  
**29.03** [7-Б. Тема: О.Генрі."Останній листок". Образи дівчат (Сью, Джонсі). Особливості художньої мови новели, розповідач](https://drive.google.com/file/d/1pgmhZPOG3kxsLjtir5rG_5cnStFiINIP/view?usp=sharing)  
**30.03** [7-А. Тема: О.Генрі."Останній листок". Образи дівчат (Сью, Джонсі). Особливості художньої мови новели, розповідач](https://drive.google.com/file/d/1adesKUFQx7c-Qj22Heo1gFBBBLeaLXfU/view?usp=sharing)  

** Фізична культура **  
**12.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1LYMqo8lKOm-bCK_MHTKKwk0WLaRKPTEK/view?usp=sharing)  
**13.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1jm9dPqtOM5-L1OzB0IOBkJ_1pKbsG4oz/view?usp=sharing)  
**14.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1JQ0c8HoeaLvHCuU0gmXQVOHdVBRvmzj5/view?usp=sharing)  
**19.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1gL64WbYYkVrM1ftVjesKRnPmi1stenI5/view?usp=sharing)  
**20.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/186IGOELjm4-36ctk1q5uqLgaB1Vc8rKX/view?usp=sharing)  
**21.01** [Тема: Урок фізичної культури №3 (Дистанційне навчання)](https://drive.google.com/file/d/1_bP7_UuYF7Vlf7SAFbovNtM6IGWMEYlS/view?usp=sharing)  
**30.03** [Тема: Легка атлетика](https://drive.google.com/file/d/1iqIVr2ndtfwgI-ad3YHrI3MYAlPxEKmi/view?usp=sharing)  

** Образотворче мистецтво **  
**12.01** [Тема: Види дизайну. Промисловий дизайн. Проектування предметів побуту](https://drive.google.com/file/d/1E2YpfNEiT7Pc2NJucY1Ljco3On99jjva/view?usp=sharing)  
**19.01** [Тема: Види дизайну. Промисловий дизайн. Проектування предметів побуту. Органайзер для канцелярії](https://drive.google.com/file/d/1H4YCGuTglR2imsO0Ci4040Bkovn9xLiD/view?usp=sharing)  
**30.03** [Тема: Графічний дизайн. Культурні та національні традиції. Значення оберегової символіки в народному мистецтві України](https://drive.google.com/file/d/1OhZPHcs8wPPz3sWHtJFIZy2lgafXZvHA/view?usp=sharing)  

** Українська література **  
**13.01** [Алтинбаєва Л. М. Тема: Григір Тютюнник. Коротко про дитинство письменника. «Климко» - автобіографічна основа твору](https://drive.google.com/file/d/1FVGnicieGXVOTeJ_XWiD9Y-VfmPokNuN/view?usp=sharing)  
**15.01** [Алтинбаєва Л. М. Тема: Григір Тютюнник «Климко». Морально-етичні уроки доброти, чуйності, турботи про рідних»](https://drive.google.com/file/d/1C6JAUftojU1EgFFwpR16DseRtwF0ouSg/view?usp=sharing)  
**20.01** [Алтинбаєва Л. М. Тема: Ідея самопожертви. Характеристика образу Климка](https://drive.google.com/file/d/1nzvhl78tGfyH54DCB_L-WDp44_f77w5x/view?usp=sharing)  
**22.01** [Алтинбаєва Л. М. Тема: УМР. Переказування найбільш вражаючих епізодів повісті «Климко» (з аргументуванням свого вибору)](https://drive.google.com/file/d/18A6CI3dbSmU_OaMPdylpm8cavMjNsfh-/view?usp=sharing)  

** Російська мова **  
**12.01** [7-А. Тема: Наречие. Значение, вопросы, роль в предложении](https://drive.google.com/file/d/17WUW3pPf4_MoiIAr_Yl6k_R7OfcG-rsF/view?usp=sharing)  
**13.01** [7-Б. Тема: Наречие. Значение, вопросы, роль в предложении](https://drive.google.com/file/d/11wftWB5eji91n4akTf-93xE99cc_QVqv/view?usp=sharing)  
**19.01** [7-А. Тема: Буква "о", "а" на конце наречий. Буква "ь" после ж, ш, ч, щ на конце наречий](https://drive.google.com/file/d/184MP2fM27-k1g7_Iu6EnJdIJiWD-Gqqa/view?usp=sharing)  
**20.01** [7-Б. Тема: Буква о, а на конце наречий. Буква ь после ж, ш, ч, щ на конце наречий](https://drive.google.com/file/d/1EH35pyNX4ZK3C58s9rE2bxjNnKFDbsgb/view?usp=sharing)  
**30.03** [7-А. Тема: Обособленные определения.Уточняющие обособленные члены предложения. Сравнительный оборот](https://drive.google.com/file/d/1XsTUUnCyeJjChqIFd2fCbIfhX-bzGjoh/view?usp=sharing)  

`}</Md>
      </Tab>
      <Tab title="8 клас">
        <Md>{`
** Українська мова **  
**03.12** [Тема: Односкладні прості речення з одним головним членом підметом. Називні речення](https://drive.google.com/file/d/1VuUQRDDL4JHv2u27c3eGMZbOwm5faErV/view?usp=sharing)  
**04.12** [Тема: Односкладне речення як частина складного речення](https://drive.google.com/file/d/1VyJSxhNK75LaOybr6mJM4lCo-yHHyHQw/view?usp=sharing)  
**07.12** [Тема: Односкладне речення як частина складного](https://drive.google.com/file/d/1uIqBK7oZ3BYbhNXTSmrOXh-3YNaOuYRq/view?usp=sharing)  
**08.12** [Тема: Називні речення](https://drive.google.com/file/d/1ZokPMYgrJV-ISFFQUDuzyvlpJtrMwqFh/view?usp=sharing)  
**11.01** [Стрембицька Л. А. Тема: Однорідні члени речення зі сполучниковим, безсполучниковим і змішаним зв’язком](https://drive.google.com/file/d/1Bp29kHYOhrerlDFekSr2kvVE3hWG7fPw/view?usp=sharing)  
**11.01** [Добровольська В. Е. Тема: Однорідні члени речення (зі сполучниковим, безсполучниковим і змішаним зв’язком). Кома  між однорідними членами речення](https://drive.google.com/file/d/1TsVOAgxWjc_s6rbM2q4eBq5mYd5ldOjo/view?usp=sharing)  
**14.01** [Стрембицька Л. А. Тема: Урок розвитку комунікативних умінь. Конспект прочитаного науково-навчального тексту, тематичні виписки](https://drive.google.com/file/d/1sCfFfHavQGG-lYq_jWTvjKmmvDfZ2nlY/view?usp=sharing)  
**14.01** [Добровольська В. Е. Тема: Конспект прочитаного](https://drive.google.com/file/d/154NdIbN6BD-WBUHGmFjPigsPxYweYJFq/view?usp=sharing)  
**15.01** [Добровольська В. Е. Тема: Конспект прочитаного науково-навчального тексту. Тематичні виписки](https://drive.google.com/file/d/14PXaTBqeKwdUsGIEM6c_MUboLHBOxr9o/view?usp=sharing)  
**18.01** [Стрембицька Л. А. Тема: Кома між однорідними членами речення](https://drive.google.com/file/d/13OGJK9YVUQcl44r8Bog6KBomQt6uhETd/view?usp=sharing)  
**18.01** [8-А. Добровольська В. Е. І група. Тема: Кома  між однорідними членами речення](https://drive.google.com/file/d/1RhlXDCw2Hev75iMHK7CH1OVn8Db-ikB0/view?usp=sharing)  
**19.01** [8-Б. Добровольська В. Е. І група. Тема: Речення з кількома рядами однорідних членів](https://drive.google.com/file/d/1ZX0ac6KzptOt5yPXHSsO_thldcTDuuQW/view?usp=sharing)  
**21.01** [Стрембицька Л. А. Тема: Речення поширені й непоширені. Другорядні члени речення. Означення — другорядний член речення](https://drive.google.com/file/d/1PODdit4j4Ncjzq0EmCV5x1YCbMtvEo2z/view?usp=sharing)  
**21.01** [8-А. Добровольська В. Е. І група. Тема: Поширені й непоширені однорідні](https://drive.google.com/file/d/1tHkGuzRcogZjGvgtHpt8niLrmTbzXDEx/view?usp=sharing)  
**22.01** [8-Б. Добровольська В. Е. Тема: Поширені й непоширені однорідні](https://drive.google.com/file/d/1C0hlOPeDLnGF_b72XUaXm_hjVG3GNtzr/view?usp=sharing)  
**29.03** [8-А. І група. Тема: Відокремлені прикладки](https://drive.google.com/file/d/1aBtosL0bQiamcjRum25Z5v6pytSWRz_j/view?usp=sharing)  
**29.03** [Стрембицька. Тема: Відокремлені прикладки](https://drive.google.com/file/d/1urv1Hjpn8bK1amBN5G0lk6E1j8XnhPPG/view?usp=sharing)  
**30.03** [8-Б. Тема: Відокремлені прикладки](https://drive.google.com/file/d/1aTnIGNvW1sbIOIwE-ueZgoZi88inQHUh/view?usp=sharing)  

** Українська література **  
**03.12** [Тема: Володимир Підпалий. «Бачиш: між трав зелених…» Ідея людяності, бережливого ставлення до природи](https://drive.google.com/file/d/1Q8mIXGFf9Qrm1fqus0UoNSE-0gA4qN9q/view?usp=sharing)  
**04.12** [Тема: Володимир Підпалий. «Бачиш: між трав зелених…» Ідея людяності, бережливого ставлення до природи](https://drive.google.com/file/d/1zwbcYCFqTCQ_VpTTmIfyBXEmkuzFEkTq/view?usp=sharing)  
**08.12** [Тема: В. Голобородько. Самобутня постать поета в українській літературі. Вірш «з дитинства: дощ» («я вплетений ...»). Вільний вірш](https://drive.google.com/file/d/1kH8xW5IXr5JrcJe5ABKwdTlprQCsOWxf/view?usp=sharing)  
**11.01** [Тема: І. Малкович «З янголом на плечі», «З нічних молитов»](https://drive.google.com/file/d/1wkMchPjM5IxHFp_Vh0wnVPWkuCv75aFD/view?usp=sharing)  
**12.01** [Тема: І. Малкович «З янголом на плечі», «З нічних молитов»](https://drive.google.com/file/d/1f3ckGzhIJtucoOuLQZeTF9BbUkw1DmkP/view?usp=sharing)  
**14.01** [Тема: В. Герасим'юк. «Чоловічий танець». Розмаїття сучасної лірики. Поєднання в поезіях глибинної історичності бачення світу з відчуттям сучасної присутності в ньому](https://drive.google.com/file/d/1S64qQM7_4RcmYWHYCn0UKULXk2hkdje4/view?usp=sharing)  
**15.01** [Тема: В. Герасим'юк. «Чоловічий танець». Розмаїття сучасної лірики. Поєднання в поезіях глибинної історичності бачення світу з відчуттям сучасної присутності в ньому](https://drive.google.com/file/d/16OHpUS0dsC4mQtEqf4TbOUxwk4qvMN0k/view?usp=sharing)  
**18.01** [8-Б. Тема: Іван Карпенко-Карий. Життєвий і творчий шлях митця](https://drive.google.com/file/d/1zUdjCBVeILhDjF8t3bxidhibnJUwjUzO/view?usp=sharing)  
**19.01** [8-А. Тема: Іван Карпенко-Карий. Життєвий і творчий шлях митця](https://drive.google.com/file/d/1NkYpJH0KLdWmXwV87xA0QAIbjKbOsgke/view?usp=sharing)  
**14.01** [Тема: В. Герасим'юк. «чоловічий танець». Розмаїття сучасної лірики. Поєднання в поезіях глибинної історичності бачення світу з відчуттям сучасної присутності в ньому](https://drive.google.com/file/d/11wKYjhbQGW1OccgI6-rHs0uIzDYVNfTp/view?usp=sharing)  
**21.01** [Тема: Проблема влади грошей](https://drive.google.com/file/d/1LcCijiJuB4NG1GYhPR3Te9-aQzj5UVDX/view?usp=sharing)  
**22.01** [8-А. Тема: Проблема влади грошей](https://drive.google.com/file/d/1s9NuPeFqDgvAx6ncELK8FgoA7qtRrELu/view?usp=sharing)  
**29.03** [Тема: Розвиток мовлення. Написання фанфіків на основі повісті «Шпага Славка Беркути»](https://drive.google.com/file/d/1XNgk3oczcKH2BIdkMQvtFerp-v2tWwVC/view?usp=sharing)  
**30.03** [8-А. Тема: Розвиток мовлення. Написання фанфіків на основі повісті «Шпага Славка Беркути»](https://drive.google.com/file/d/1fm0H4zcuadzMbKixo5WSqsbdV9v3p2wQ/view?usp=sharing)  

** Хімія **  
**03.12** [Тема: Кількість речовини. Моль – одиниця кількості речовини. Число Авогадро.](https://drive.google.com/file/d/1Xza-GsZgxJa88JxRQB42fENhbGkA2hPj/view?usp=sharing)  
**07.12** [Тема: Кількість речовини. Моль – одиниця кількості речовини. Число Авогадро](https://drive.google.com/file/d/1ClT-RpO5-Fb9UmgW8t6_jCoMkGIPosu2/view?usp=sharing)  
**07.12** [Тема: Молярна маса речовини](https://drive.google.com/file/d/1em4zvfuwmaW3e2k5LEzgm8Z0QNCxu39i/view?usp=sharing)  
**11.01** [Тема: Відносна густина газів](https://drive.google.com/file/d/1ZN-Oxll5hhJorsC4EEgdQzuVXaOS44lB/view?usp=sharing)  
**13.01** [Тема: Узагальнення знань з теми](https://drive.google.com/file/d/1V9TH_kS1OI3-q-VWjeMBggTIfS4L0Pp6/view?usp=sharing)  
**14.01** [8-Б. Тема: Узагальнення знань](https://drive.google.com/file/d/1p1ysEaHh2QQtwpt2xejRIsOKCmCFeko4/view?usp=sharing)  
**18.01** [8-А,Б. Тема: Перевірка знань з теми «Кількість речовини. Розрахунки за хімічними формулами»](https://drive.google.com/file/d/1u4Q3Z7iYKUXiq7KyRVC-ddOB1hGbjvn5/view?usp=sharing)  
**21.01** [8-Б. Тема: Оксиди](https://drive.google.com/file/d/1Jqqw6_7c3kCBrSgvLsWE58Ph-dTmV8Lm/view?usp=sharing)  
**29.03** [Тема: Амфотерні оксиди та гідроксиди](https://drive.google.com/file/d/1U1vQkYVQGqboOjsNsztOEugwJakcahwL/view?usp=sharing)  

** Історія України. Всесвітня історія **  
**03.12** [Тема: Абсолютизм і громадянські війни у Франції](https://drive.google.com/file/d/1LjHnyvIvkFpsROshHXQx8bzKyHRS6yRz/view?usp=sharing)  
**04.12** [Тема: Англія в 16 ст.](https://drive.google.com/file/d/18cLnwgnsymixuJAGVpq_VXA4NuAMLyXL/view?usp=sharing)  
**11.01** [Тема: Початок Національно-визвольної війни](https://drive.google.com/file/d/1V23KI3K7tR9HpqFg8gC3ZOfhVoxW-yXt/view?usp=sharing)  
**14.01** [Тема: Українська козацька держава](https://drive.google.com/file/d/1VC_qj6xu4bO5FLWC1yqwZuQQXGJnBxxK/view?usp=sharing)  
**15.01** [Тема: Україно-московський договір 1654 р.](https://drive.google.com/file/d/13RUYXRMP9zK36mxMD8ty7OoSGCVYq2yD/view?usp=sharing)  
**18.01** [Тема: Воєнно-політичні події 1654-1657рр.](https://drive.google.com/file/d/1PZqj15YI0WVXxP6WA4aPviGKmA_Wc40g/view?usp=sharing)  
**21.01** [8-А. І група. Тема: Воєнно-політичні події 1654-1657рр.](https://drive.google.com/file/d/1YV2oTyrn8DMnC2TZr6Hg4DbPcNnYHUqI/view?usp=sharing)  
**21.01** [8-А. ІІ група. Тема: Газети та журнали України](https://drive.google.com/file/d/1PxeF0LS8ruXCTB0MtCmpJA5RhJZVQQbv/view?usp=sharing)  
**22.01** [Тема: Практичне заняття: історичний портрет Б.Хмельницького](https://drive.google.com/file/d/1N3i_MCVKcBkqgXkT-fyPpXu_lWbcnlF1/view?usp=sharing)  
**29.03** [Тема: Лівобережна Гетьманщина наприкінці  17ст. Гетьман І. Мазепа](https://drive.google.com/file/d/1jAMsj__-3Ik6DuGRcfxX80C6k2670IaU/view?usp=sharing)  

** Англійська мова **  
**03.12** [Тема: Музика в нашому житті. Відомі українські виконавці.](https://drive.google.com/file/d/1vZrqAEL9AOaGZyKMNjDM_F2so579-b7m/view?usp=sharing)  
**07.12** [Тема: Музичні стилі](https://drive.google.com/file/d/1E29fXAu4YeuLL9SJEhFSQpTMnBPpl6eR/view?usp=sharing)  
**08.12** [Тема: Контроль письма](https://drive.google.com/file/d/1Mtr3VOv_jK9HV4uAjHEkvRY5IKCnIiBM/view?usp=sharing)  
**11.01** [Тема: Засоби масової інформації](https://drive.google.com/file/d/136W2jAuyhX9m2W0DwW6CCuhywkrx2Llw/view?usp=sharing)  
**12.01** [8-А. Тема: Преса у житті людини](https://drive.google.com/file/d/1VIKe0ChnQHLEJ7fANcVOWs6cZ2Za3b_y/view?usp=sharing)  
**12.01** [8-А,Б. Тема: Ukrainian press](https://drive.google.com/file/d/1sNb3tvMXXMQpgWoHJL7SpiE7OR-aEqei/view?usp=sharing)  
**14.01** [8-А. Тема: Активізація граматичних навичок](https://drive.google.com/file/d/1wYjzr1m_qWett4OTBJ2_7ibjKEaLUumG/view?usp=sharing)  
**14.01** [8-А. Тема: Активізація граматичних навичок](https://drive.google.com/file/d/1vmRRhqyIHbPnZVVLCkHYoL2gLZAREWi3/view?usp=sharing)  
**18.01** [8-А. Тема: Місця проведення вільного часу](https://drive.google.com/file/d/1CkVCBWtpuAKPRHbLNT9FpEQhdqDRY8i4/view?usp=sharing)  
**18.01** [8-А,Б. Хоменко А.Ю. Тема: Місця, де ти проводиш час з книжкою](https://drive.google.com/file/d/1yJQf4UPd6jXNajw2tgAj_xgbWIXi0ROo/view?usp=sharing)  
**19.01** [8-А. І група. Тема: Газети та журнали України](https://drive.google.com/file/d/1Rkjk7TH2Amd93dcIstNTgvh_JlSZ8LZy/view?usp=sharing)  
**19.01** [8-А. ІІ група. Тема: Газети та журнали України](https://drive.google.com/file/d/1ErE7a0kqZxWc5-eLsdyfrV1kjUD3QMoT/view?usp=sharing)  
**19.01** [8-Б. Тема: Газети та журнали України](https://drive.google.com/file/d/1Rkjk7TH2Amd93dcIstNTgvh_JlSZ8LZy/view?usp=sharing)  
**21.01** [8-А. І група. Тема: Газети і журнали](https://drive.google.com/file/d/1WYwiytG2hHXzvWNNFiLsxoOgqHxIbNOV/view?usp=sharing)  
**21.01** [8-Б. Тема: Газети і журнали](https://drive.google.com/file/d/1WYwiytG2hHXzvWNNFiLsxoOgqHxIbNOV/view?usp=sharing)  
**29.03** [Тема: Англомовні країни](https://drive.google.com/file/d/1EByzLNZ-zbxpC6iCyht01Jq9DaWt4NP3/view?usp=sharing)  
**29.03** [Тема: Англомовні країни](https://drive.google.com/file/d/1l0ZK96lw9Zht4Teprp_kGF9vj0ZmtIpV/view?usp=sharing)  
**30.03** [8-Б. Тема: Англомовні країни](https://drive.google.com/file/d/1kKRQeIWc8_dt7SHse7gHb2Q0pMxp9wXR/view?usp=sharing)  
**30.03** [8-А. І група. Тема: Англомовні країни](https://drive.google.com/file/d/1kKRQeIWc8_dt7SHse7gHb2Q0pMxp9wXR/view?usp=sharing)  
**30.03** [8-А. ІІ група. Тема: Англомовні країни](https://drive.google.com/file/d/13HxFZBX2t-9Zw6oPO8w8YzvNZA-8zWik/view?usp=sharing)  

** Алгебра **  
**03.12** [Тема: Степінь із цілим показником](https://drive.google.com/file/d/1bTPiJE5il-PKaAeDk_o2SmSDULHcrHSZ/view?usp=sharing)  
**12.01** [8-Б. Тема: Арифметичний корінь](https://drive.google.com/file/d/111JNeChYNr9ccJKOwYv_E0JvDNlebSHP/view?usp=sharing)  
**13.01** [8-А. Тема: Функція у=х2, її графік і властитвості](https://drive.google.com/file/d/1a1CBk2F9c0dwjajS5bSjf5mVTANkQP8g/view?usp=sharing)  
**13.01** [8-Б. Тема: Раціональні числа. Ірраціональні числа](https://drive.google.com/file/d/1qbzY_IkBq86ERmeYM-n2CFZQWNjVlMKq/view?usp=sharing)  
**14.01** [8-А. Тема: Розв'язування вправ](https://drive.google.com/file/d/1NwltdqxK6UUT_10duiGdEo4vhB9YKygI/view?usp=sharing)  
**19.01** [8-Б. Тема: Рівняння x^2=a](https://drive.google.com/file/d/1hhxl7A63lq0oWg-7lj36WvxcikoDzuFF/view?usp=sharing)  
**20.01** [8-А. Тема: Арифметичний квадратний корінь](https://drive.google.com/file/d/14nw_oFLbH8vRnyKj3R0TVq0EDbSx6W6L/view?usp=sharing)  
**20.01** [8-Б. Тема: Властивості арифметичного квадратного корення](https://drive.google.com/file/d/1fe7ayuDm0znP1Q4PVCyncgVaWUpbi5xR/view?usp=sharing)  
**21.01** [8-А. Тема: Розв'язування вправ](https://drive.google.com/file/d/1cc0k4tJrMiZWm5hfD7sUvWaUc4-wLJ6m/view?usp=sharing)  
**30.03** [8-Б. Тема: Квадратний тричлен. Розкладання квадратного тричлена на множники](https://drive.google.com/file/d/12mtGWC9vbPGVivNbYSTA0GOwiJ8r9gbf/view?usp=sharing)  

** Географія **  
**04.12** [Тема: Вплив погодно-кліматичних умов на здоров'я і господарську діяльність людини. Охорона атмосферного повітря. Кліматичні особливості своєї місцевості](https://drive.google.com/file/d/1vYAwfOrYGHF59NtP26e4W9X-6BdlSoxY/view?usp=sharing)
**13.01** [Тема: Різноманітність рослинності](https://drive.google.com/file/d/190SjQ3t2NADxqxF6-V5mlS3-Q1dWrfwF/view?usp=sharing)  
**15.01** [Тема: Різноманітність тваринного світу. Закономірності поширення тваринного світу в україні](https://drive.google.com/file/d/1XyaWmfjpAlK3WytHBDwcVJONYRtS-98P/view?usp=sharing)  
**20.01** [Тема: Ландшафти](https://drive.google.com/file/d/1kQID_dK8KbhvWM2Fcd5LEUckO_PSeSlf/view?usp=sharing)  
**22.01** [Тема: Природні зони](https://drive.google.com/file/d/12XsPUe0oR4w7wi6MhZvpeUhshZbZYmMX/view?usp=sharing)  

** Фізична культура **  
**04.12** [8-А. Тема: Розвиток сили та силової витривалості учнів](https://drive.google.com/file/d/1_7s0JREx_prAAOorgG0U9tFW_D6w5mlE/view?usp=sharing)  
**07.12** [8-А. Тема: Розвиток сили та силової витривалості учнів](https://drive.google.com/file/d/157g18UgHRVX1WUAJEuvJFVW_Ij2SQQVz/view?usp=sharing)  
**11.01** [8-А. Тема: Розвиток спритності та швидкісно-силових якостей учнів](https://drive.google.com/file/d/16XPh-b-LCDLvnnLrJ_IB0wDfmPWAGX-F/view?usp=sharing)  
**11.01** [8-Б. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1Eochp0AGgZTCZaGcJ9EtaA1d-jKhKO2d/view?usp=sharing)  
**13.01** [8-А. Тема: Удосконалення та закріплення елементів гри з баскетболу](https://drive.google.com/file/d/1op1q0EuhTO25dfx7ukJRMRWJuUoqhpSq/view?usp=sharing)  
**13.01** [8-Б. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/12vrsqqoPhoEa-2J0Z4tp0UUQu2ib30Yo/view?usp=sharing)  
**13.01** [8-А. Тема: Удосконалення та закріплення елементів гри з баскетболу: розвиток основних фізичних якостей (швидкісно-силових здібностей, витривалості)](https://drive.google.com/file/d/1g6AxfxGJ4GjlN7YqoKUfbx7597Y5RhmI/view?usp=sharing)  
**15.01** [8-А. Тема: Техніка та тактика гри в баскетбол (обігрування суперника, індивідуальні та групові тактичні дії у нападі та захисті)](https://drive.google.com/file/d/1IcIBT7dhnNc7ZAPpX5l_vuZ0Oyamp42x/view?usp=sharing)  
**15.01** [8-Б. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1kQZxPeZF08yoII2V4fLwpHT1GErWRMZM/view?usp=sharing)  
**18.01** [8-А. Тема: Школа м’яча. Пересування гравця; ловіння м’яча двома та однією руками на різних рівнях і напрямках](https://drive.google.com/file/d/14HWjGv-C6VNCApzvUCkNDERwipX8-c0z/view?usp=sharing)  
**18.01** [8-Б. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/13CnmyXH0MC5LyZNTTKw7WJt_0YhnFtW_/view?usp=sharing)  
**20.01** [8-Б. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1LD36V_9O8XBk3X-ZreDg0U154Fasvrsx/view?usp=sharing)  
**20.01** [8-А. Тема: БЖД. Школа м'яча. Поєднання різних способів пересування з виконанням технічних елементів. Комплекс ранкової гігієнічної гімнастики. Загально-розвиваючі вправи](https://drive.google.com/file/d/1D29auCdGHYVS2M44lnHiEikNKNDKp8Ws/view?usp=sharing)  
**22.01** [8-Б. Тема: Урок фізичної культури №3](https://drive.google.com/file/d/1OlVXnC6fjbHf4-NlEyEb8XxP9D6A-seU/view?usp=sharing)  
**22.01** [8-А. Тема: Теорія. Урок розвитку фізичних якостей, використовуючи спортивні та рухливі ігри або урок повторення пройденого матеріалу в ігровій формі](https://drive.google.com/file/d/1spVlH7tCyNAhMP-wzyR71hIwz0Gbz3ju/view?usp=sharing)  
**29.03** [8-А. Тема: Теорія. Повторити техніку виконання низького та високого старту з пробіжкою до 20м.Спортивна гра](https://drive.google.com/file/d/11TrCByx5EPW06n3QD5rqhGPEkHxFt6OK/view?usp=sharing)  
**29.03** [8-Б. Тема: Силові тренування](https://drive.google.com/file/d/10YqpSv4732PYACMVW9YIEzzLDudXfcq1/view?usp=sharing)  

** Біологія **  
**04.12** [Тема: Значення дихання. Будови і функції органів дихання](https://drive.google.com/file/d/1h8oxnpA9mSto58NfYV2yjRUNRFcB1z3B/view?usp=sharing)  
**11.01** [Тема: Еритроцити. Групи крові. Правила переливання крові](https://drive.google.com/file/d/1ttuNGyNu7XmVYVPYm4ERtRxs7BloGj8d/view?usp=sharing)  
**15.01** [Тема: Лейкоцити. Тромбоцити. Зсідання крові](https://drive.google.com/file/d/14dSe9B4kHL7jXkF-YKdAqNlBRxt96_AS/view?usp=sharing)  
**18.01** [Тема: Серце. Будова та функції](https://drive.google.com/file/d/18629rXuuW03MR3KVg8gsiL02Jld7KDcu/view?usp=sharing)  
**22.01** [Тема: Робота серця](https://drive.google.com/file/d/1vRnSm3B5ixYZ5hvde3-b-RoLHRqnfNcM/view?usp=sharing)  
**29.03** [Тема: Слухова сенсорна система](https://drive.google.com/file/d/1ywbexiAE-uvk-dzgmEOcJ4Rc1rCkSnj6/view?usp=sharing)  

** Основи здоров’я **  
**07.12** [Тема: Становлення особистості](https://drive.google.com/file/d/1XiqqH2rvbGD9PSbehbUFOjgN9d6ssUI8/view?usp=sharing)  
**14.01** [Тема: Уміння вчитися](https://drive.google.com/file/d/1mwchdGtSdjUyp-OvoNM7QltcOmLCsBWr/view?usp=sharing)  

** Геометрія **  
**08.12** [Тема: Подібність прямокутних трикутників. Властивість бісектриси. Метричні співвідношення](https://drive.google.com/file/d/1P4n2CeJ0hOGemlmT2Z8di8FAmWrYIIhI/view?usp=sharing)  
**12.01** [8-А. Тема: Теорема Піфагора. Розв'язування задач](https://drive.google.com/file/d/1UEMLd_yzP8g0PgmQvwv6Zh3v2_CpgQ1G/view?usp=sharing)  
**12.01** [8-Б. Тема: Теорема Піфагора](https://drive.google.com/file/d/1UqIOb1Yck4KipmrXn1L2m21aCcPdsoQC/view?usp=sharing)  
**14.01** [8-Б. Тема: Розвязування задач на застосування Теореми Піфагора](https://drive.google.com/file/d/1KcE0rSknuk6Tz9BP0GiW5YavbpLwvj3U/view?usp=sharing)  
**19.01** [8-А. Тема: Перпендикуляр і похила, їх властивості. Розв'язування задач](https://drive.google.com/file/d/1gdNA-tv0jx7MnbtWdcfdngWi8TVfvztz/view?usp=sharing)  
**19.01** [8-Б. Тема: Перпендикуляр і похила, їх властивості](https://drive.google.com/file/d/1UQya_4xSBHWL4XGhBcrPGHV9wOM2jO8s/view?usp=sharing)  
**30.03** [8-А. Тема: Відношення площ подібних трикутників](https://drive.google.com/file/d/19k1d7_1FrgBh_hbOxUfL4lkALZmjdtH_/view?usp=sharing)  
**30.03** [8-А. Тема: Розв’язування задач на обчислення площі трапеції](https://drive.google.com/file/d/1XzgiovMLv3u2yO7qJmTebl9xnoBiTEXU/view?usp=sharing)  
**30.03** [8-Б. Тема: Площа паралелограма](https://drive.google.com/file/d/1_--ReM7l8wtA3sNlhEt_TnErhE_Jq2h1/view?usp=sharing)  

** Інформатика **  
**08.12** [Тема: Логічні вирази. Оператори розгалуження. Вкладені розгалуження](https://drive.google.com/file/d/1UIkiDcQ0uWpgiOSN8HPQe0On15gl7hh0/view?usp=sharing)  
**12.01** [Тема: Графічні побудови](https://drive.google.com/file/d/1tl_MXuI4EZtqUfnMDEYHdtpT0tzGpUN_/view?usp=drive_web)  
**19.01** [Тема: Циклічні побудови](https://drive.google.com/file/d/1c_bZhxF8-Hh5lebFhNYMc-sjwFM3-C3v/view?usp=drive_web)  
**30.03** [Тема: Графічні і мультимедійні елементи на веб-сторінках](https://drive.google.com/file/d/1V85AapncYt_mjQu4eG2pjqn70pWYWQVY/view?usp=drive_web)  
**30.03** [Тема: Поняття про структуру веб-сайтів. Організація навігації сайтом. Поняття гіперпосилання](https://drive.google.com/file/d/14rl2qPXsA0BDStEwPnUs-3HofYPLFLmF/view?usp=drive_web)  

** Мистецтво **  
**03.12** [Тема: Ідеали й образи Ренесансу](https://drive.google.com/file/d/1biA9w5C0Tq2_npKhtO7uwph7Jpz5Q6-g/view?usp=sharing)  
**13.01** [Тема: Бароко](https://drive.google.com/file/d/1vSmu-ezDNaD-gyqWA9aIGJ34CVkJ3ZvS/view?usp=sharing)  
**14.01** [Тема: Бароко](https://drive.google.com/file/d/1_VBKRJCQ4-GeVhiRdasRq86zeqppDQ6b/view?usp=sharing)  
**20.01** [8-Б. Тема: Живопис Бароко](https://drive.google.com/file/d/1ubKg5kUk1WcJ8pVNfk0HVa2gyBb-4HVw/view?usp=sharing)  
**21.01** [8-А. Тема: Живопис Бароко](https://drive.google.com/file/d/1e866-_P0fjnSPIWMyR5p6UEHhqHPpYxQ/view?usp=sharing)  

** Російська мова **  
**13.01** [Тема: Параллельная связь между предложениями в тексте](https://drive.google.com/file/d/1kI1EqW4xoE3j_M4DUEWxgqBji3bQfjXp/view?usp=sharing)  
**20.01** [Тема: Обособленные второстепенные члены предложения](https://drive.google.com/file/d/1FPjgGHDYc8cqbobOT6xVBrdtmq40xgpQ/view?usp=sharing)  

** Фізика **  
**13.01** [Тема: Електризація. Електричний заряд](https://drive.google.com/file/d/1jgAI2QMnq0wL6_T1Qc5G4e1Op7hPX_RP/view?usp=sharing)  
**20.01** [Тема: Закон Кулона](https://drive.google.com/file/d/17F7hnOY4f-mxVuFhytiva4qUtpoyAdaj/view?usp=sharing)  

** Зарубіжна література **  
**12.01** [Тема: Епоха Відродження в Європі. Гуманізм. Культ античності. Характерні ознаки ренесансної культури і літератури](https://drive.google.com/file/d/1vbMlF-Ynn34DuybFY31ZAfQSuHiLDv2o/view?usp=sharing)  
**14.01** [Тема: Франческо Петрарка – видатний італійський поет – гуманіст. Багатство](https://drive.google.com/file/d/12MAcf2F1hiRml9oSUVzZizGeYKy_Nt1V/view?usp=sharing)  
**19.01** [Тема: Ф. Петрарка. Сонет 61. Історія кохання в сонеті Петрарки. Образ ліричного героя і героїні. Втілення гуманістичних ідеалів у поезії митця. Структура сонетів Петрарки](https://drive.google.com/file/d/1KFhVRs2vIOEQUSQP5h5jgNtkwlPtXRhb/view?usp=sharing)  
**21.01** [Тема: Ф. Петрарка. Сонет 132. Історія кохання в сонетах Петрарки](https://drive.google.com/file/d/1PBHH04adxiGnE_3XFYtqk5dNKLjcWaBR/view?usp=sharing)  
**30.03** [Тема: Міщанин - шляхтич. Мольєр - майстер класичної комедії.Художнє новаторство Мольєра в драматургії, вплив його відкриттів на світове театральне мистецтво](https://drive.google.com/file/d/1-IrVUuual4mBEL4Ugc7b_aebtnKzDO0E/view?usp=sharing)  

** Трудове навчання **  
**15.01** [Тема: Добір матеріалів, інструментів та обладнання. Технологічний процес нанесення ескізу виробу](https://drive.google.com/file/d/19EmWgL5wR9n3jNLQZ1-K42qE4r3OzN_7/view?usp=sharing)  
**15.01** [Тема: Нове життя старим речам](https://drive.google.com/file/d/11j3BrrOba1ZEVDbqlo98x10zfh5opziV/view?usp=sharing)  
**22.01** [Тема: Технологічний процес вирізання корпусу годинника](https://drive.google.com/file/d/1yZ--3kf_qZYgkNyrARYdzTVbGWNhs64e/view?usp=sharing)  

** Обслуговуюча праця **  
**22.01** [8-А. Тема: Ознайомлення зі зразками виробів, виготовлених із старих речей. Види конструкційних матеріалів для їх виготовлення. Інструменти та пристосування для виготовлення](https://drive.google.com/file/d/1OS4RzsWOyuSN0C36eHSJONGlUciI7o9q/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="9 клас">
        <Md>{`
** Географія **  
**03.12** [Тема: Видобування металічних руд](https://drive.google.com/file/d/1nLsYYlfSAhh_c-YzVUL8iJaKDekY1NXc/view?usp=sharing)  
**12.01** [Тема: Значення металургійного виробництва](https://drive.google.com/file/d/1GCcuhzaV9QvOaSJ6EoyfV0d1YywlEzZK/view?usp=sharing)  
**14.01** [Тема: Виробництво чавуну, сталі, прокату](https://drive.google.com/file/d/18jyFjfipbqmj_b8KXq9glkjIG57rcYCN/view?usp=sharing)  
**19.01** [9-А. Тема: Виробництво чавуну, сталі, прокату в україні: домінувальні технології, сукупність чинників розміщення підприємств, основні центри, місце україни на світовому ринку чорних металів](https://drive.google.com/file/d/11QeXAnS9NooghKyv0Kdem3uMJHuh-xj8/view?usp=sharing)  
**19.01** [9-Б. Тема: Металургійне виробництво світу. Найбільші країни-виробники та країни-споживачі чорних металів. Сучасні тенденції розміщення виробництв чавуну, сталі, прокату. Найбільші країни-виробники та країни-споживачі кольорових металів у світі](https://drive.google.com/file/d/1Hsoq6_W-tF1Ccg7XT23Lx2fYBMWtSqdn/view?usp=sharing)  
**21.01** [9-А. Тема: Металургійне виробництво світу](https://drive.google.com/file/d/1TX5gWYZ3Wi15JufANp3sCIilAR_fioK5/view?usp=sharing)  
**22.01** [9-А. Тема: Металургійне виробництво світу](https://drive.google.com/file/d/1c90HVScdVIRw_CwRt_oKKG7i80cFeNTO/view?usp=sharing)  
**30.03** [Тема: Транспорт України](https://drive.google.com/file/d/1sTNH0OLgxPl9LvTVIOhnypo3rvg4MsqY/view?usp=sharing)  

** Хімія **  
**03.12** [Тема: Реакції оборотні й необоротні](https://drive.google.com/file/d/1J2DYha0BrqewRn0sm7Yn2UbvM5hr7tu0/view?usp=sharing)  
**07.12** [Тема: Винаходи та винахідники](https://drive.google.com/file/d/1nZmcjJQ_nrd_c52_FH-uuyn8NjG5mwVq/view?usp=sharing)  
**08.12** [Тема: Класифікація хімічних реакцій. Реакції сполучення, розкладу, заміщення, обміну](https://drive.google.com/file/d/1tfQyElQnK1SBSHg-jwM8HbxB1pdGYWaP/view?usp=sharing)  
**12.01** [Тема: Вступ до органічної хімії](https://drive.google.com/file/d/1QhyD_QZTlrWJ69b4zgRBD2efL1V3LOWx/view?usp=sharing)  
**14.01** [Тема: Метан і його гомологи](https://drive.google.com/file/d/1WMQk6LicSO7c09zsJzkzeFvucHwb2Ebs/view?usp=sharing)  
**19.01** [Тема: Властивості алканів](https://drive.google.com/file/d/1HLuMIzTs7jnDRWKYV6tTXJ2bCyx322DS/view?usp=sharing)  
**21.01** [9-А. Тема: Закон об'ємних відношень газів](https://drive.google.com/file/d/1a7O8xKrh5JMjiqZfa-vVZp-WcXuwhkLb/view?usp=sharing)  
**21.01** [9-Б. Тема: Закон об'ємних відношень газів](https://drive.google.com/file/d/1wI4AbjJ5W3ATUxZNbTZWvtFsqQ4sUBGj/view?usp=sharing)  
**30.03** [Тема: Поняття про амінокислоти](https://drive.google.com/file/d/17c-VhmedVhucvqWA6cwJK0tv03zoSDF1/view?usp=sharing)  

** Правознавство **  
**03.12** [Тема: Конституційні права і свободи людини і громадянина](https://drive.google.com/file/d/15aef0Tzl_ip_KxMQal1xDjVIK8mWwNyg/view?usp=sharing)  
**12.01** [Тема: Неповнолітні в цивільних правовідносинах](https://drive.google.com/file/d/1mkKrkJBESGcP4uahN5398wU37m9WLJwk/view?usp=sharing)  
**14.01** [Тема: Неповнолітні в цивільних правовідносинах](https://drive.google.com/file/d/1vkk7Xp8pTOkE-PJMm4FWrN9DQ6rKfpAl/view?usp=sharing)  
**21.01** [Тема: Практичне заняття «Власність неповнолітніх»](https://drive.google.com/file/d/1SmtEqdOh-rV6ZwhgBKObPKRjeavnDJsG/view?usp=sharing)  

** Трудове навчання **  
**03.12** [Тема: Технологічний процес виготовлення обраного об’єкта проєктування. Самоконтроль якості виконання технологічних операцій](https://drive.google.com/file/d/1qgNcVbtUgtnpbvFGkulfNExXQBMM8zsC/view?usp=sharing)  
**03.12** [Презентація: Вироби в етнічному стилі](https://drive.google.com/file/d/1FJS9VMTsfPY1UJL0EZaSOYGiBlLzxwUs/view?usp=sharing)  
**14.01** [Тема: Проєкт «Нове життя старим речам»](https://drive.google.com/file/d/1_dYxvYKyftsuKH-eQv6Ky6DkzNwSo3b5/view?usp=drive_web)  
**14.01** [Тема: Ниткографія](https://drive.google.com/file/d/1bvsmvNVymCoYQZ6xZGUbcYQ2MCdzgzcU/view?usp=sharing)  
**14.01** [Тема: Визначення завдань для виконання проєкту. Основи біоніки в проєктуванні. Вибір об’єкта проєктування](https://drive.google.com/file/d/13y4Fm0kHftZtxTMAcjrrjCakCdnptoLu/view?usp=sharing)  
**21.01** [Тема: Основи біоніки в проєктуванні. Дослідження та обгрунтування форми виробу](https://drive.google.com/file/d/12XtwXyKEqeQ-GkexhnlsYAlt11aBWL3m/view?usp=sharing)  

** Обслуговуюча праця **  
**21.01** [9-А. Тема: Технологія ниткографії](https://drive.google.com/file/d/18rfdNGgXAKdKIlXGFAK3QtrlyCRFJJly/view?usp=sharing)  

** Історія України. Всесвітня історія **  
**03.12** [Тема: Повсякденне життя та побут українців у 19 ст.](https://drive.google.com/file/d/1I_2vKC2eCScwYuNW-zNiV13rTHkryuUI/view?usp=sharing)  
**12.01** [Тема: Україна і Східна війна. Ліквідація кріпацтва](https://drive.google.com/file/d/15iKyTOJqD_JsqQpYjl-1d21tDMiRFU59/view?usp=sharing)  
**13.01** [9-А. Тема: Україна і Східна війна. Ліквідація кріпацтва](https://drive.google.com/file/d/1PO5TGAAbHBieaJkKeWaqXLf7jumYfAvF/view?usp=sharing)  
**14.01** [9-Б. Тема: Ліквідація кріпацтва. Реформи 1860-1870рр](https://drive.google.com/file/d/129GBaXSaThZbYXwCrv2ESVZMDPt1KKuu/view?usp=sharing)  
**15.01** [9-Б. Тема: Модернізація промисловості і сільського господарства](https://drive.google.com/file/d/15_ZJI_4dAwSMQYzaCCbCMCV-Hf_c_Lg7/view?usp=sharing)  
**19.01** [9-Б. Тема: Місто і село в пореформений період](https://drive.google.com/file/d/1Wwuw2TvGBUS54vFZfq-VbS4pN5dVl3As/view?usp=sharing)  
**20.01** [9-А. Тема: Модернізація промисловості і сільського господарства. Місто і село в пореформений період](https://drive.google.com/file/d/15tt7ERzpdn24JblsvTN6E0KqNKJRh3EN/view?usp=sharing)  
**21.01** [9-А. Тема: Національний рух: громади, хлопомани](https://drive.google.com/file/d/1gyodBX4-OkYUoLEkCYRbTEPB466-V3QO/view?usp=sharing)  
**22.01** [9-Б. Тема: Національний рух: громади, хлопомани](https://drive.google.com/file/d/1ISSDUUHh0x5XZh8uzvMS5Mo7sncXyJQB/view?usp=sharing)  
**30.03** [9-Б. Тема: Соціально-економічний розвиток Наддніпрянщини в 1900-1914рр.](https://drive.google.com/file/d/13K3rLE5v-yHdlqnyyuBYODDJxNvbspP4/view?usp=sharing)  

** Геометрія **  
**03.12** [9-Б. Тема: Вектори. Розв’язування задач](https://drive.google.com/file/d/1ykrS5YhJf-ggic_8ad1LHgVjfAVZtKBF/view?usp=sharing)  
**03.12** [9-Б. Тема: Вектори на площині](https://drive.google.com/file/d/1RjV9PuGkr7pomGzkRf1IxFZqe38f5fHj/view?usp=sharing)  
**13.01** [9-Б. Тема: Теорема косинусів. Наслідки з теореми косинусів](https://drive.google.com/file/d/1YpfdHsbBPwSUCuEzPakkc47ODIzI6NMS/view?usp=sharing)  
**13.01** [9-А. Тема: Розв'язування трикутників](https://drive.google.com/file/d/1Y5WUNQHrr86e5dR0fjLd9nCYzCup6n0-/view?usp=sharing)  
**14.01** [9-Б. Тема: Розв'язування задач](https://drive.google.com/file/d/1FNR6AishVUxDstAxc3vhJZut5oaKpg2s/view?usp=sharing)  
**15.01** [9-А. Тема: Розвязування трикутників. Прикладні задачі](https://drive.google.com/file/d/1fkKupj8BvSo4p8nGTMT5vjSetjXaW9Dy/view?usp=sharing)  
**20.01** [9-А. Тема: Розвязування трикутників](https://drive.google.com/file/d/1Doc46sNCXT17l8jkh1jM83LRjhb8ouA_/view?usp=sharing)  
**20.01** [9-Б. Тема: Теорема синусів. Наслідок з теореми синусів](https://drive.google.com/file/d/1i5M68udfpv2eF4nJ885eWnctntCbPtvA/view?usp=sharing)  
**21.01** [9-Б. Тема: Розв'язування трикутників. Прикладні задачі](https://drive.google.com/file/d/1cJ6DzQIlbHzh9m4O3GwxtZvOAxKK2l5Q/view?usp=sharing)  

** Англійська мова **  
**03.12** [Тема: Винаходи та винахідники](https://drive.google.com/file/d/1_YPlRDOzxWAHMorqZAt9hTRsefrTjAo4/view?usp=sharing)  
**03.12** [Тема: Досягнення вчених](https://drive.google.com/file/d/19XeV2VuNy_amH9X5aWZLrydwz0Jng_xO/view?usp=sharing)  
**07.12** [Тема: Наука i технiчний прогрес](https://drive.google.com/file/d/1yGjt52TT5Ja68IoYE-iQhc5U-vj5TDZN/view?usp=sharing)  
**11.01** [Тема: Організації захисту тварин](https://drive.google.com/file/d/1l_By8gK3RGLDsJL_cOjUvOG2hPpIFA7Y/view?usp=sharing)  
**11.01** [Тема: Захист навколишнього середовища](https://drive.google.com/file/d/1ILYfBJ6IzDIwuM9Gp1aYOK1Atvnf7KT9/view?usp=sharing)  
**13.01** [9-А. Тема: Майбутнє у наших руках](https://drive.google.com/file/d/1nExAnW2sGIZNY-YcjZU-VrvxUzhgEiLp/view?usp=sharing)  
**13.01** [Тема: Майбутнє у наших руках](https://drive.google.com/file/d/1RQ-Ma6rgOg1rLoWxmBrVVPGzAFZlzyvU/view?usp=sharing)  
**14.01** [ІІ група. Тема: Тварини в небезпеці](https://drive.google.com/file/d/1tuTnvhxgYkqvSWILFxeMwLlyyEcC_JGC/view?usp=sharing)  
**14.01** [Тема: Тварини в небезпеці](https://drive.google.com/file/d/1RhjgxlUaPmZAh5Kdb-XIYURiQ3cwV0Ej/view?usp=sharing)  
**18.01** [9-А. ІІ група. Тема: Тварини у небезпеці](https://drive.google.com/file/d/1DVYs-NtkpwMi6eFR3TZPt4OUi1bj8Ocx/view?usp=sharing)  
**18.01** [9-А,Б. Тема: Тварини в небезпеці. Захист навколишнього середовища](https://drive.google.com/file/d/1Caz032sz1dDMEqTfTUaDxL9fjjsGqUMo/view?usp=sharing)  
**20.01** [9-А. ІІ група. Тема: Граматика](https://drive.google.com/file/d/1LCOfNk_ChcEQ8ir6dmWHJBKGpd7GuUh9/view?usp=sharing)  
**20.01** [9-А. І група. Тема: Grammar: Conditional 1](https://drive.google.com/file/d/17sfeGmwD9CtkjHNj5XnBfCniaUVumF9r/view?usp=sharing)  
**20.01** [9-А. ІІ група. Презентація](https://drive.google.com/file/d/1sk1imLP5o7riRefT_plN3_AqUm4Zfa4K/view?usp=sharing)  
**20.01** [9-Б. Тема: Grammar: Conditional 1](https://drive.google.com/file/d/17sfeGmwD9CtkjHNj5XnBfCniaUVumF9r/view?usp=sharing)  
**21.01** [9-А. І група. Тема: Як вберегти довкілля](https://drive.google.com/file/d/1LaT-dr8Rd4VOq_CFpERwVnHIIn99e-Aq/view?usp=sharing)  
**21.01** [9-А. ІІ група. Тема: Як вберегти довкілля](https://drive.google.com/file/d/1TIDcHij7SPWwh8rHyswMRZo29EI23tlP/view?usp=sharing)  
**21.01** [9-Б. Тема: Як вберегти довкілля](https://drive.google.com/file/d/1LaT-dr8Rd4VOq_CFpERwVnHIIn99e-Aq/view?usp=sharing)  
**29.03** [Тема: Плани на майбутнє](https://drive.google.com/file/d/10yixQ0Lz7U_XDNLpwRh6NsmcS33VhCTs/view?usp=sharing)  
**29.03** [9-А. ІІ підгрупа. Тема: Плани на майбутнє](https://drive.google.com/file/d/1piRNouIWFvYmN9qV7KTXudEEjp6WJPib/view?usp=sharing)  
**29.03** [9-А. І група. Тема: Складні речення із сурядним і підрядним зв'язком](https://drive.google.com/file/d/1_tQlJsDOCYnrOz2tAtwGgS1ugQHpCyB7/view?usp=sharing)  

** Українська література **  
**04.12** [Тема: Григорій Квітка-Основ’яненко. Соціально-побутова сентиментально-реалістична повість «Маруся» - перший прозовий твір в українській літературі](https://drive.google.com/file/d/1IctRSEVhbQKuR7w9WLmBvh9_H6rR7KY7/view?usp=sharing)  
**08.12** [Тема: Утілення морального й естетичного ідеалів в образі головної героїні твору «Маруся» Григорія Квітки-Основ’яненка](https://drive.google.com/file/d/1R5BQK_Ak3rXkgxnO5eNc1QfvOqFMB6zF/view?usp=sharing)  
**08.12** [Тема: Григорій Квітка – Основ’яненко. «Маруся» - перша українська повість нової української літератури](https://drive.google.com/file/d/16ez0tik2MYfC2up6itnSEkdXbaLHB7ub/view?usp=sharing)  
**12.01** [Тема: Література українського романтизму](https://drive.google.com/file/d/1mOgP6dWvVXwPSawELx4m3cn-rAybOybG/view?usp=sharing)  
**12.01** [Тема: Романтизм](https://drive.google.com/file/d/1k0j1k6Gq5-mJ0o6xnUM0hwBAQDBfUZ0E/view?usp=sharing)  
**15.01** [Тема: П. Гулак-Артемовський “Рибалка”](https://drive.google.com/file/d/1YJQV5s5RgZCwcq0x4PnLWI4J6K8st_wq/view?usp=sharing)  
**15.01** [9-А. Тема: Поет-романтик П. Гулак-Артемовський. Коротко про письменника. Балада «Рибалка»](https://drive.google.com/file/d/1jhsOB11YGUCQh6C8Oxh49GemkdAR3NAT/view?usp=sharing)  
**19.01** [Тема: Євген Гребінка. Висока оцінка І. Франком байкарської майстерності Гребінки. Вірш «Човен»](https://drive.google.com/file/d/1E3rC2ZVSrYFvyIWnVti8H_dltF1Rj8zK/view?usp=sharing)  
**19.01** [Тема: Євген Гребінка «Ведмежий суд», «Човен»](https://drive.google.com/file/d/11ps9Z2TU5yvz-TU9aOMYxKpCd8CHnMsB/view?usp=sharing)  
**22.01** [9-А. Тема: Микола Гоголь. Творчість М. Гоголя, уродженця України, місце його творчості на порубіжжі культур двох народів. Вираження глибини національного духу у творах прозаїка та драматурга, українська історія та фольклор як їх джерело. Повість «Тарас Бульба. Сюжет твору](https://drive.google.com/file/d/1LCpsRXwRUtvdKs8C-1CW97BYn_llx73K/view?usp=sharing)  
**22.01** [9-Б. Тема: Микола Гоголь -український письменник. Вплив української культури на розвиток його творчості](https://drive.google.com/file/d/1N14_DPXV8REU31PCVvK2T6ZLsqNkBBpT/view?usp=sharing)  
**30.03** [9-А. Тема: Трагедія жінки-матері, боротьба за своє материнство, жорстокість народної моралі («У нашім  раї на землі…»). Наскрізний ліризм творів Т.Г.Шевченка про  жіночу долю](https://drive.google.com/file/d/1i-SU7yXPPWqn54gCMDldSmTRRz67-l6M/view?usp=sharing)  
**30.03** [9-Б. Тема: Трагедія жінки-матері, боротьба за своє материнство, жорстокість народної моралі («У нашім раї на землі…»). Наскрізний ліризм творів Т. Шевченка про жіночу долю](https://drive.google.com/file/d/1kOCDhL3N0vfoUjy9k62A3GWANoXZoN0x/view?usp=sharing)  

** Фізична культура **  
**04.12** [9-А. Тема: Розвиток сили та силової витривалості учнів.](https://drive.google.com/file/d/10ODZR-UG7C9YAJv3bPb-eKqe7kwsjJA4/view?usp=sharing)  
**07.12** [9-А. Тема: Розвиток сили та силової витривалості учнів](https://drive.google.com/file/d/12k27PIaN2ZzIUK3lutBO1zOTVn6UWo2s/view?usp=sharing)  
**11.01** [9-А. Тема: Розвиток спритності та швидкісно-силових якостей учнів](https://drive.google.com/file/d/1WTy3mT3CjJ4sdcOuh6bBKbXIxEsMY4uD/view?usp=sharing)  
**12.01** [9-Б. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1YICGzoCACuWwxD_o5BlATFzE7rF5BhFy/view?usp=sharing)  
**13.01** [9-А. Тема: Удосконалення та закріплення елементів гри з баскетболу](https://drive.google.com/file/d/1yXSdD8La-0ZbP6xy3uYyL9KkldKupl5e/view?usp=sharing)  
**13.01** [9-Б. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1GDiGGV6CEt1dKN9to9EufjKydZ_hxn-p/view?usp=sharing)  
**15.01** [9-А. Тема: Удосконалення та закріплення елементів гри з баскетболу: розвиток основних фізичних якостей (швидкісно-силових здібностей, витривалості)](https://drive.google.com/file/d/1S1X4xkLvClnjSwsyEKpa5SJUO11x08Hq/view?usp=sharing)  
**15.01** [9-А. Тема: Техніка та тактика гри в баскетбол (передача м’яча в 3-х зі зміною місця(вісімка)](https://drive.google.com/file/d/1k6DH_xYSy8tPWnpwvxmBVDuD8fzlZcOj/view?usp=sharing)  
**15.01** [9-Б. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/18gNfD87sKpIpZF92qq53quX-Iy-advY0/view?usp=sharing)  
**18.01** [9-А. Тема: Техніка та тактика гри в баскетбол (передача і ловіння м’яча у русі; ведення м’яча зі зміною швидкості, напрямку та висоти відскоку м’яча)](https://drive.google.com/file/d/19K9a387H88YK9fvnowuwMya5NsCZUA3E/view?usp=sharing)  
**19.01** [9-Б. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1tULEl2hfmkS_HI-TGgEidZ0N_jxIYRLn/view?usp=sharing)  
**20.01** [9-Б. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1jg_teXvNRHhh5x1uAqdWRUY6hLFczlKl/view?usp=sharing)  
**20.01** [9-А. Тема: Техніка та тактика гри в баскетбол (передача і ловіння м’яча у русі; ведення м’яча зі зміною швидкості, напрямку та висоти відскоку м’яча)](https://drive.google.com/file/d/1O5nQqGtxrU6uf7dKkKMKElrKI4mD2pY9/view?usp=sharing)  
**22.01** [9-Б. Тема: Урок фізичної культури №3](https://drive.google.com/file/d/1Q95O5I_-GneOngocjiLD7NA1MFq3cZN3/view?usp=sharing)  
**22.01** [9-А. Тема: Теорія. Урок розвитку фізичних якостей, використовуючи спортивні та рухливі ігри або урок повторення пройденого матеріалу в ігровій формі](https://drive.google.com/file/d/1r-jy_IFgB3ajYrjRxuxljOyPevHzb_jF/view?usp=sharing)  
**22.01** [Тема: Йонізаційна дія радіоактивного випромінювання](https://drive.google.com/file/d/1W0oauZiXzQjsRdIs8QryI3at36am1mKL/view?usp=sharing)  
**29.03** [9-А. Тема: Вплив занять фізичими вправами на основі системи та функції організму. Загальнорозвиваючі   та спеціальні легкоатлетичні вправи](https://drive.google.com/file/d/16FvVtoTNar7hJ4sFQrQJYksU7KX8wBuX/view?usp=sharing)  
**30.03** [9-Б. Тема: Тренування на всі групи м'язів](https://drive.google.com/file/d/1EldItnlkxPqjXltQzVHb0K6gv5USVamY/view?usp=sharing)  

** Інформатика **  
**04.12** [Тема: Розроблення програми. Виконання арифметичних обчислень. Уведення, виконання й налагодження програм](https://drive.google.com/file/d/1dpekkJgkf59EosU2y6jtD_cr9PnqzdpZ/view?usp=drive_web)  
**13.01** [9-Б. Тема: Виконання індивідуальних і групових навчальних проектів із дослідження предметної галузі.](https://drive.google.com/file/d/1OvX1LpPoxgOfNDojztLYgVV3OOs7Vjz3/view?usp=drive_web)  
**15.01** [9-А. Тема: Виконання індивідуальних і групових навчальних проектів із дослідження предметної галузі.](https://drive.google.com/file/d/1OvX1LpPoxgOfNDojztLYgVV3OOs7Vjz3/view?usp=drive_web)  
**20.01** [Тема: Оформлення матеріалів про виконання індивідуальних і групових навчальних проектів із дослідження предметної галузі. Захист проекту](https://drive.google.com/file/d/1f_jiARPznbXRurKma5BGNmZHXSsfSOFj/view?usp=drive_web)  
**22.01** [Тема: Оформлення матеріалів про виконання індивідуальних і групових навчальних проектів із дослідження предметної галузі. Захист проекту](https://drive.google.com/file/d/1f_jiARPznbXRurKma5BGNmZHXSsfSOFj/view?usp=drive_web)  

** Біологія **  
**04.12** [Тема: Фотосинтез: світлова та темнова фази](https://drive.google.com/file/d/1AP4SBbE-Wl8PoIH4LiQXBqO2b-ri70gl/view?usp=sharing)  
**08.12** [Тема: Фотосинтез: світлова та темнова фази](https://drive.google.com/file/d/1S6_jcCPsO5FX4L2cLg4SQky7qNgKGoY5/view?usp=sharing)  
**12.01** [Тема: Біосинтез білка](https://drive.google.com/file/d/1YQLcAEpKdZdHWzeHDsiRbuX5SOuAPHYQ/view?usp=sharing)  
**13.01** [9-А. Тема: Біосинтез білка](https://drive.google.com/file/d/1CMP1DhawEZ9rW1RfhSNG79JhazjcsDlj/view?usp=sharing)  
**13.01** [9-Б. Тема: Біосинтез білка](https://drive.google.com/file/d/1IvcZ6lohy5m0b28pvc0rRmOkad4MkB4o/view?usp=sharing)  
**15.01** [9-А. Тема: Біосинтез білка](https://drive.google.com/file/d/1YPDmhYf6PlsQV9BKsA4Q8vw6gfVXIxgW/view?usp=sharing)  
**19.01** [9-А. Тема: Поділ клітини](https://drive.google.com/file/d/1iCMwRs27S5p25ZKNX7t-zVU9jRySgti4/view?usp=sharing)  
**20.01** [9-А. Тема: Мейоз](https://drive.google.com/file/d/1TMdyIJV-B-zceJiZyTmTVX_MutNWcJx-/view?usp=sharing)  
**20.01** [9-Б. Тема: Поділ клітини](https://drive.google.com/file/d/1lhuNTrGDFdYfKsINzAS6JT55RIbgwsRE/view?usp=sharing)  
**22.01** [9-Б. Тема: Мейоз](https://drive.google.com/file/d/1np9PfnwUiZatPH0cuf92BffC-vRZhJA1/view?usp=sharing)  
**30.03** [9-А,Б. Тема: Докази реальності еволюції](https://drive.google.com/file/d/14w75kRZBAAWhwxN8MZQx-VaA6xYlKovh/view?usp=sharing)  

** Українська мова **  
**07.12** [Тема: Усний твір-роздум у публіцистичному стилі мовлення на суспільну тему](https://drive.google.com/file/d/1B1Pj9K4LkO41bylzM2_PTvUpGMqRtovG/view?usp=sharing)  
**07.12** [Тема: Складнопідрядні речення з підрядними обставинними](https://drive.google.com/file/d/1fVWf5gP_b0DCFPvrb2zxgnuf5uoBXjEK/view?usp=sharing)  
**11.01** [Тема: Складнопідрядні речення з кількома підрядними](https://drive.google.com/file/d/1yJCHo9URB20FC9XfzvvW89iZ66s4ira9/view?usp=sharing)  
**13.01** [Тема: Стислий усний переказ тексту публіцистичного стилю](https://drive.google.com/file/d/1-DHsHbSTpEuQ412tstPEzrnv1nLCz9mE/view?usp=sharing)  
**13.01** [Тема: Стислий усний переказ тексту публіцистичного стилю](https://drive.google.com/file/d/119DO-0LnY3dxpYHlGpQ0eLCuXWmcZ7Zn/view?usp=sharing)  
**18.01** [Тема: Розділові знаки в складнопідрядному реченні з кількома підрядними](https://drive.google.com/file/d/1joBxsLiM5ZDCty8Lp7qGKCmkBA-cWRVy/view?usp=sharing)  
**18.01** [9-А. І група. Тема: Розділові знаки в складнопідрядному реченні з кількома підрядними](https://drive.google.com/file/d/1bFgbR8JUAnS1dkKsMguCpJoOlOs6Csl3/view?usp=sharing)  
**20.01** [9-А. І група. Тема: Розділові знаки у СПР з кількома підрядними](https://drive.google.com/file/d/1XGSk_Gawn5MQZC-Oe4xsujcYWCQ9DPlZ/view?usp=sharing)  
**21.01** [Тема: Розділові знаки в складнопідрядному реченні з кількома підрядними](https://drive.google.com/file/d/18XofWzo_-_tw1Z3HI1Errfaut1a57TTx/view?usp=sharing)  
**29.03** [9-А. Тема: Складне речення з різними видами зв’язку](https://drive.google.com/file/d/1Oyo-wUbrFRVipKO8xjyLArDCjWNYRIi-/view?usp=sharing)  
**29.03** [9-Б. Тема: Вибірковий письмовий переказ тексту наукового стилю (з використанням складних речень із різними видами зв’язку)](https://drive.google.com/file/d/1L4Sdvy4SDXC-q9hUpOxQakOyaSL328HF/view?usp=sharing)  

** Фізика **  
**04.12** [Тема: Механічні хвилі](https://drive.google.com/file/d/1gFUenJvZoiJfbG2dXxl35x6LtqAUs2RB/view?usp=sharing)  
**08.12** [Тема: Електромагнітне поле](https://drive.google.com/file/d/1EfXMUGu05I7gJxeY_VOnUyFSvDNKXFWi/view?usp=sharing)  
**08.12** [Тема: Звукові хвилі](https://drive.google.com/file/d/126g0uZowIP3iR08iTKfkKfQ_HqjU3VHf/view?usp=sharing)  
**12.01** [Тема: Модель атома](https://drive.google.com/file/d/1qUzWy-DnK5zTjgJ5rWTaCWiqCLd54CrA/view?usp=sharing)  
**15.01** [Тема: Радіоактивність](https://drive.google.com/file/d/1zyfT3xZ2s9SF9QqOwVPCY_A1IZGoCc5r/view?usp=sharing)  
**19.01** [Тема: Активність радіонуклідів](https://drive.google.com/file/d/1E1x-YRRxexT9mj-MO77yTu9c1e2CaTHo/view?usp=sharing)  
**30.03** [Тема: Рух тіла під дією кількох сил](https://drive.google.com/file/d/1VMuRMoXIbrxCNmuRDs9CKE6K8MQZaDpQ/view?usp=sharing)  

** Мистецтво **  
**04.12** [Тема: Сюрреалізм](https://drive.google.com/file/d/1NifrDQX_ktjFsE6qmEyUdO5CkcjpReOn/view?usp=sharing)  
**15.01** [Тема: Мова і види кіномистецтва](https://drive.google.com/file/d/1Rc1q_Cv4mFZU_BPZdqmkiMYbcQWqIXXv/view?usp=sharing)  
**22.01** [Тема: Жанри кіномистецтва](https://drive.google.com/file/d/1u5JXUFCSTVlZqL2BBIA_7SS0ovzaJKfV/view?usp=sharing)  

** Алгебра **  
**11.01** [Тема: Квадратні нерівності](https://drive.google.com/file/d/19Gm5ymTCuqJGr9_ikFVp8-WzoFccQtwD/view?usp=sharing)  
**12.01** [9-А. Тема: Квадратні нерівності](https://drive.google.com/file/d/1wA9BKwoKXWPgwQgDQcOQVkvRB8w4_JkE/view?usp=sharing)  
**14.01** [9-А. Тема: Квадратні нерівності](https://drive.google.com/file/d/1j8Agoad-KOkTKyPhKyLUK63FOnH9iYmW/view?usp=sharing)  
**15.01** [9-Б. Тема: Квадратні нерівності](https://drive.google.com/file/d/1vE8vcvucUl_AN0E_QYuXj8DesWr4X7R1/view?usp=sharing)  
**18.01** [9-Б. Тема: Розв'язування систем рівнянь](https://drive.google.com/file/d/1mxfFjyKHSMrUkIAQvPcRHvEVjfFcdaQ3/view?usp=sharing)  
**19.01** [9-А. Тема: Розв'язування систем рівнянь](https://drive.google.com/file/d/1J8VrUC7p6eUpU8PMucMLhzzvKSgNsro1/view?usp=sharing)  
**29.03** [9-Б. Тема: Нескінченнна геометрична прогресія та її сума](https://drive.google.com/file/d/1kktsl9Y7qlodzDU9M4H8gJyo2fEpbhmL/view?usp=sharing)  

** Основи здоров'я **  
**11.01** [Тема: Емоційна саморегуляція](https://drive.google.com/file/d/11Rz5-2DvjMIYc5RphYWrrLeAr6mJ3TVv/view?usp=sharing)  
**18.01** [Тема: Уміння вчитися](https://drive.google.com/file/d/1ai-kazBS4jh5AsIaA_5FKPGm_d5tqqS1/view?usp=sharing)  
**29.03** [Тема: Репродуктивне здоров'я молоді](https://drive.google.com/file/d/1CUlXzHjAaNaRYWXUcj35g9vadfuMSC16/view?usp=sharing)  

** Зарубіжна література **  
**11.01** [Тема: Новаторство М. Ю. Лермонтова в жанрі роману](https://drive.google.com/file/d/1O7MBHYMIcNsH9Y8VbzFlsfs0J1K0xx64/view?usp=sharing)  
**14.01** [Тема: Порівняння образів Євгенія Онєгіна і Печоріна](https://drive.google.com/file/d/1pJyFbhj2u9Dv-3F78b4JEwnI0wb89CYr/view?usp=sharing)  
**18.01** [Тема: Позакласне читання. Бальзак Шагренева шкіра](https://drive.google.com/file/d/1yWxy4HRd0L9GTdiqfNOsoEf6Q_-PKVYB/view?usp=sharing)  
**21.01** [Тема: Том Сойєр і Гекльберрі Фінн. Характеристика образів](https://drive.google.com/file/d/1i1duE91RvLnRgcOfv5niYnMVz4XezEDT/view?usp=sharing)  
**29.03** [Тема: Генріх Ібсен. Роль Ібсена в розвитку світової даматургії, його новаторство](https://drive.google.com/file/d/1wEAFga2rafXVozvBQKSQENYJIA05aZ7y/view?usp=sharing)  

** Російська мова **  
**11.01** [Тема: Наречие. Разнообразие значений наречий](https://drive.google.com/file/d/1Nwu87ha1mFSJoL72GbG5UDd7PnJ-ZWpl/view?usp=sharing)  
**18.01** [Тема: Слитное и дефисное написание наречий](https://drive.google.com/file/d/1aA4e8RM7fLsw1ySNKDqdnuFSBhbFvjaO/view?usp=sharing)  
**29.03** [Тема: Знаки препинания в сложноподчинённых предложениях с несколькими придаточными](https://drive.google.com/file/d/14v_LGArVf8aHBx9f9ZS9SpnPqIF9jCgw/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="10 клас">
        <Md>{`
** Українська мова **  
**03.12** [Тема: Лексичні норми української мови](https://drive.google.com/file/d/1XT-saYAg8GwSe8t6S7x7aldPogbaVAMc/view?usp=sharing)  
**04.12** [Тема: Мовна надмірність, уникнення тавтології, плеоназму та мовної недостатності](https://drive.google.com/file/d/1hrAqRLD8lJfa4tLUULSvdeHLwtmxaVu2/view?usp=sharing)  
**04.12** [Тема: Розмовна, просторічна, емоційно забарвлена лексика. Сленг. Екзотизми. Пуризми. Стилістичні можливості розмовної, просторічної лексики](https://drive.google.com/file/d/1EQAzk0Jp_hxAi9YKNzo5NfBpEXW5Ga_Z/view?usp=sharing)  
**08.12** [Тема: Лексика української мови за походженням](https://drive.google.com/file/d/1O0Ba-JtVOJVgg2QA_yQnJqK5hJr7Ut2h/view?usp=sharing)  
**12.01** [Стрембицька Л.А. Тема: Фразеологічні одиниці української мови. Основні ознаки фразеологізмів. Основні групи фразеологізмів](https://drive.google.com/file/d/1DCFJyJyqINXzaCZp-2S93IiZUjW1crQ7/view?usp=sharing)  
**12.01** [Добровольська В. Е. Тема: Фразеологічні одиниці української мови](https://drive.google.com/file/d/12Gg5S1uZiL_BMtWqhjqycUxbHLE-AUXB/view?usp=sharing)  
**13.01** [Стрембицька Л.А. Тема: Стилістична система української мови](https://drive.google.com/file/d/1Q1zBK4NY0K616pLOemT_3nVGop_JrVve/view?usp=sharing)  
**13.01** [Добровольська В. Е. Тема: РМ Розмовний стиль](https://drive.google.com/file/d/1CvxSCzdlEvg7Dt8a0B4tHu6efUZ3aMyp/view?usp=sharing)  
**14.01** [Стрембицька Л.А. Тема: Джерела формування фразеологізмів української мови. Використання фразеологізмів у різних стилях мови](https://drive.google.com/file/d/1Uc8ivagU7hWMI6UuVO8Txfk3QaMsqBl1/view?usp=sharing)  
**14.01** [Добровольська В. Е. Тема: Джерела фразеологізмів](https://drive.google.com/file/d/1AKggzxQ39uJ1YgAY2qtbdaBpewTI5b06/view?usp=sharing)  
**15.01** [Стрембицька Л.А. Тема: Прислів’я та приказки, крилаті вислови. Стійкі народні порівняння. Побажання, приповідки, каламбури, їх оцінний зміст](https://drive.google.com/file/d/1mCaengvxqaLZZYreUqZ1gVI1qnJSXLfV/view?usp=sharing)  
**15.01** [Добровольська В. Е. Тема: Прислів′я і приказки, крилаті вислови. Стійкі народні порівняння. Побажання, приповідки, каламбури, їх оцінний зміст](https://drive.google.com/file/d/1RhH0E_O7-KnvF8JDlWHKaLRu4xMOIz7C/view?usp=sharing)  
**19.01** [Стрембицька Л.А. Тема: Багатозначність, синонімія, антонімія фразеологічних одиниць](https://drive.google.com/file/d/1WNq8vlMZb67Lc1kwWcI-uF5xxmjirbj9/view?usp=sharing)  
**19.01** [Добровольська В. Е. Тема: Багатозначність, синонімія, антонімія фразеологічних одиниць](https://drive.google.com/file/d/1mErG-XEZUBOJKeLho6obuqOAlnaZc6Bn/view?usp=sharing)  
**20.01** [Стрембицька Л.А. Тема: Фразеологізми власне українського походження та фразеологічні запозичення з інших мов. Національно-мовний колорит фразеології. Фразеологічні відповідники в різних мовах](https://drive.google.com/file/d/1_HRwch7I3bwosObnWT39PUIbtlSZ_2yt/view?usp=sharing)  
**20.01** [Добровольська В. Е. Тема: Фразеологізми власне українського походження та фразеологічні запозичення з інших мов. Національно-мовний колорит фразеології. Фразеологічні відповідники в різних мовах](https://drive.google.com/file/d/1f1zoaGVsZTCAHbQteR_Q9wsYZyJCm27o/view?usp=sharing)  
**21.01** [Стрембицька Л.А. Тема: Фразеологія художнього мовлення, наукова, публіцистична, офіційно-ділова. Фразеологізми з професійної мови](https://drive.google.com/file/d/1097wT6EZOitsO5SiZz_6hOLnc3F-FhHm/view?usp=sharing)  
**21.01** [Добровольська В. Е. Тема: Фразеологія художнього мовлення, наукова, публіцистична, офіційно-ділова. Фразеологізми з професійної мови](https://drive.google.com/file/d/1MbeEQlIc7gXV9OiGMTTOl2q9xiTxFrox/view?usp=sharing)  
**22.01** [Добровольська В. Е. Тема: РМ Фонетичні, інтонаційні, лексичні... особливості розмовного жанру](https://drive.google.com/file/d/1_UVzwHexCcWXLMc7hobrRDX6_lN0sHTe/view?usp=sharing)  
**30.03** [Добровольська В. Е. Тема: Стилістичне використання якісних, відносних, присвійних прикметників. Словник епітетів української мови. Синоніміка форм ступенів порівняння прикметників. Помилки у вживанні форм ступенів порівняння](https://drive.google.com/file/d/1mTydd81X_ZmmtuJOjJf9q1yRBgSOBKa0/view?usp=sharing)  
**30.03** [Стрембицька Л.А. Тема: Стилістичне використання якісних, відносних, присвійних прикметників. Словник епітетів української мови. Синоніміка форм ступенів порівняння прикметників. Помилки у вживанні форм ступенів порівняння](https://drive.google.com/file/d/1O4SoyJ8Lk2xWpFo6awAdOp6r0E38kza5/view?usp=sharing)  

** Українська література **  
**03.12** [Тема: Лексична помилка. Найпоширеніші випадки порушення лексичної норми. Кальки з інших мов, недоречне вживання  українських слів у невластивому їм значенні](https://drive.google.com/file/d/1CfxzHg5xSZsuiWSIreHnKZphpaHdrocv/view?usp=sharing)  
**04.12** [Тема: Комедія «Мартин Боруля». Психологічна переконливість і трагікомічне звучання образу Мартина Борулі. Інші образи у творі. Значення творчості І. Тобілевича для української драматургії](https://drive.google.com/file/d/1egMwZ_m44RercI_fJaz74USyVzLiUEDJ/view?usp=sharing)  
**07.12** [Тема: Урок виразного читання .І.Я Франко - розум і серце українського народу](https://drive.google.com/file/d/1mZUh-mMlj84-ySBLKaVOKjicN2-T0-vK/view?usp=sharing)  
**08.12** [Тема: Іван Франко – поет, прозаїк, драматург, громадський діяч, перекладач, літературний критик і перший галицький учений](https://drive.google.com/file/d/1oFaxSgiWeTF2tujmFmmQXHikcq8JnCLA/view?usp=sharing)  
**11.01** [Тема: Михайло Коцюбинський – людина високої духовної культури](https://drive.google.com/file/d/1HY0h7_QuCjBkNgvGKLzpz38AEtvkhiQm/view?usp=sharing)  
**12.01** [Тема: Психологічна новела «Іntermezzo»](https://drive.google.com/file/d/1o8IzH3YhH87CT0SZTHm8yJBt2_N-f0_x/view?usp=sharing)  
**13.01** [Тема: Зіставлення двох світів. «Психологічно переконливе розкриття внутрішнього стану людини в новелі М. Коцюбинського «Intermezzo». Символічні образи. Поетика імпресіонізму](https://drive.google.com/file/d/1e7EddY4g5DcGMUuCCJR6ICPUTmxVwTdP/view?usp=sharing)  
**15.01** [Тема: Поетика імпресіонізму. М.Коцюбинський "Тіні забутих предків"](https://drive.google.com/file/d/1KGKBca-JFOpnPvZ0sLn-nSM8sj_nkvXt/view?usp=sharing)  
**18.01** [Тема: Система образів твору. Образи-символи як засоби індивідуалізації героїв. Самобутність модерної поетики повісті «Тіні забутих предків»](https://drive.google.com/file/d/12g7c6HrRUjHK4g-18O0_sYubgLisG4Th/view?usp=sharing)  
**19.01** [Тема: Кохання Івана та Марічки в повісті Коцюбинського «Тіні забутих предків»](https://drive.google.com/file/d/1tigsUScY8FYjgXJbxIWyEGqUmEM10Se-/view?usp=sharing)  
**20.01** [Тема: Значення творчої спадщини М. Коцюбинського для розвитку української літератури, її роль у загальноєвропейському контексті](https://drive.google.com/file/d/1jfgfLlP_wxhu1jAC5ex8KA7Plaez4XB2/view?usp=sharing)  
**22.01** [Тема: Позакласне читання. М.Коцюбинський «Що записано в книгу життя»](https://drive.google.com/file/d/1zTHFdB2SkHtPTzrIN9KzpSpxtpMwCClP/view?usp=sharing)  
**29.03** [Тема: Символізм як літературний напрям останньої третини ХІХ — початку ХХ століття. Основні естетичні принципи та поетичне новаторство символістів](https://drive.google.com/file/d/1M9wrx4pLH1npQG_Nz0DUVI_5me-UFPCK/view?usp=sharing)  
**30.03** [Тема: Угруповання молода муза - зв'язок із зарубіжною літературою. Нова драма на межі століть](https://drive.google.com/file/d/1JhSIx72ppu8TybRrzKGD-D9y3pOdthNR/view?usp=sharing)  

** Фізика **  
**03.12** [Тема: Механічна робота. Потужність. Кінетична енергія.](https://drive.google.com/file/d/13ktDbpkU-YGMFOs3KRcYIqKot5LfswUQ/view?usp=sharing)  
**08.12** [Тема: Закон збереження енергії](https://drive.google.com/file/d/1XmDNvbUoT_A-Kxyv3hLzAEV86kFrSjHR/view?usp=sharing)  
**08.12** [Тема: Імпульс.Реактивний рух](https://drive.google.com/file/d/1c_MGIN_B14rayQ-AG2VHjGcWjTZaSSNg/view?usp=sharing)  
**12.01** [Тема: Механічні коливання](https://drive.google.com/file/d/1D_PrdzvuncDuJY0hpPy2A8SMK1Vi5Vwu/view?usp=sharing)  
**14.01** [Тема: Маятники](https://drive.google.com/file/d/1oRzPzDYiJgMeQ7AL0Gp0jovmr9Xdg9Ln/view?usp=sharing)  
**19.01** [Тема: Найпростіші коливальні системи](https://drive.google.com/file/d/11BprS-cSRHUsbswcWxaJYs_HWkMYT2yQ/view?usp=sharing)  
**21.01** [Тема: Механічні хвилі](https://drive.google.com/file/d/1seb4d2I5eGXellmfXvlcQm_-Ss3cKr8k/view?usp=sharing)  
**30.03** [Тема: Властивості твердих тіл](https://drive.google.com/file/d/1ZneSuyIcpAy7KqDFbr4O207nbrH1Oj-o/view?usp=sharing)  

** Інформатика **  
**03.12** [Тема: Введення і редагування даних різних типів. Впорядкування, пошук і фільтрування даних. Робота з запитами на вибірку](https://drive.google.com/file/d/1qwSHNz8AwKcfXYKGDlvibJ_amV3Qd4KE/view?usp=drive_web)  
**14.01** [Тема: Проектування та створення об&#39;єктів мультимедіа. Системи керування вмістом для веб-ресурсів](https://drive.google.com/file/d/1TUh59OvfXa2-OyOCefAftOHTBf9rN_hJ/view?usp=drive_web)  
**21.01** [Тема: Створення та адміністрування сайту](https://drive.google.com/file/d/1KaMqozJplWnh-PZMifkSWKBese5cwykZ/view?usp=drive_web)  

** Фізична культура **  
**04.12** [І група. Тема: Розвиток сили та силової витривалості учнів.](https://drive.google.com/file/d/1SBvvvI6L7-usEP0lkbxvVs85UtZqhjpJ/view?usp=sharing)  
**07.12** [І група. Тема: Розвиток сили та силової витривалості учнів.](https://drive.google.com/file/d/1bVDhnNBqQ35HurKBFbklf2gkmX5fxABN/view?usp=sharing)  
**11.01** [І група. Тема: Розвиток спритності та швидкісно-силових якостей учнів](https://drive.google.com/file/d/1rZFJfznJNx8mZNT-cfDQDT3LpAEMvpIe/view?usp=sharing)  
**11.01** [ІІ група. Тема: Комплекс ранкової гігієнічної гімнастики](https://drive.google.com/file/d/1ULJ_VGIr9_kERv7sVpw3JX_j2349NwRY/view?usp=sharing)  
**13.01** [І група. Тема: Удосконалення та закріплення елементів гри з баскетболу](https://drive.google.com/file/d/111Xat5coKa7CDGGxIcQAyOW-k9MpLult/view?usp=sharing)  
**13.01** [ІІ група. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1BIgERmEclZSLLns6pGJmR79UQvuahvx6/view?usp=sharing)  
**15.01** [І група. Тема: Техніка та тактика гри в баскетбол (ловіння та передача м’яча однією рукою)](https://drive.google.com/file/d/1zHiHuL5Jat8ofChJR_Is7jn7-C27tgAe/view?usp=sharing)  
**15.01** [ІІ група. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1v4HR7NuYOa6mprDOaN7MkRKzhTDHzI_T/view?usp=sharing)  
**18.01** [І група. Тема: Школа м’яча. Персональний та позиційний захист, тактика захисту і атаки](https://drive.google.com/file/d/1A-3PxAP7p7Gp_aZGGubCxLH7K4srdSm6/view?usp=sharing)  
**18.01** [ІІ група. Тема: Комплекс ранкової гігієнічної гімнастики](https://drive.google.com/file/d/1J1Dok0FbCEcBFm-RprKoPTeZJnk7perA/view?usp=sharing)  
**20.01** [ІІ група. Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1FL1r3DQURSSd-qmOIy8fu-D9RW8-Q9YS/view?usp=sharing)  
**20.01** [І група. Тема: Пересування в стійці баскетболіста. Зупинка подвійним кроком без м’яча під час переміщень. Школа м’яча. Комплекс загально-розвиваючих вправ на місці](https://drive.google.com/file/d/1JVtAv6B6Q0G1b2y76JOx-T-uXz8FTGau/view?usp=sharing)  
**22.01** [ІІ група. Тема: Урок фізичної культури №3](https://drive.google.com/file/d/1txKl9KWGjWRFdiG9ST2fH9wnqHDj6nnP/view?usp=sharing)  
**22.01** [І група. Тема: Теорія. Урок розвитку фізичних якостей, використовуючи спортивні та рухливі ігри або урок повторення пройденого матеріалу в ігровій формі](https://drive.google.com/file/d/1OChI6d7ksJyO2ZxXkbM7fQsdlMMuBI0T/view?usp=sharing)  
**29.03** [І група. Тема: Теорія. Повторити техніку виконання низького та високого старту з пробіжкою до 20м.Спортивна гра](https://drive.google.com/file/d/1EWHRfWtQDVNhC1AmrjMvsX1yjlVVisJv/view?usp=sharing)  
**29.03** [ІІ група. Тема: Тренування на всі групи м'язів в домашніх умовах](https://www.youtube.com/watch?v=LF1hsGsYYH4)  

** Історія України. Всесвітня історія **  
**04.12** [Тема: Західноукраїнська Народна Республіка.](https://drive.google.com/file/d/1UX5pzPnYGVUlJs01kyXsn3UxARYrvB_5/view?usp=sharing)  
**12.01** [Тема: Утворення Радянського Союзу. Запровадження нової економічної політики](https://drive.google.com/file/d/198gM5KftrRB-qm_6-x-cMHKym0YSwwkJ/view?usp=sharing)  
**15.01** [Тема: Індустріалізація радянської України](https://drive.google.com/file/d/1y7gqpHTvG35p49P0Z2L4rEvwv6ODZHOB/view?usp=sharing)  
**19.01** [Тема: Колективізація](https://drive.google.com/file/d/1UJaQNgdKWW9NA8KQSCCYJqeNoBVfjKyz/view?usp=sharing)  
**22.01** [Тема: Голодомор: причини, наслідки, пам'ять](https://drive.google.com/file/d/1AO9zW6xx5HWQpXDSi9GIZJ7aQN7Kmipw/view?usp=sharing)  
**30.03** [Тема: Окупаційний режим в Україні](https://drive.google.com/file/d/1_W96wzzS-zjCffiOHxd5xlfULNoEwZ3K/view?usp=sharing)  

** Англійська мова **  
**04.12** [Тема: Reading](https://drive.google.com/file/d/1ks5tAkLDNz6WXJjOfcN97bWqpuTajWmp/view?usp=sharing)  
**13.01** [Тема: Комунікаційні технології](https://drive.google.com/file/d/1lMDro9_nrNQROhmbxxwvxtkCw_xfette/view?usp=sharing)  
**13.01** [Тема: Communication technologies](https://drive.google.com/file/d/1JnKfi4N11v4Jc5Fey5IMmp3lZE30yeMy/view?usp=sharing)  
**15.01** [Тема: Комунікативні технології](https://drive.google.com/file/d/1IZLD7Wgocw8j788iwBPfs1JeC8u5YWVT/view?usp=sharing)  
**15.01** [Тема: Комунікативні технології](https://drive.google.com/file/d/19a_t5bm9uQxiL0ssYYiyzCnd_p5lw8Mg/view?usp=sharing)  
**19.01** [Тема: Проблеми екології та пошук шляхів їх вирішення](https://drive.google.com/file/d/1UL3epNr1RGHEVEu-j5aRMQKHd3n3nA4d/view?usp=sharing)  
**20.01** [І група. Тема: Сучасні засоби комунікації. Корисні винаходи](https://drive.google.com/file/d/14putPFNvVyAclzZ-qkVhjc3NLXVzTf8J/view?usp=sharing)  
**20.01** [ІІ група. Тема: Комунікаційні технології](https://drive.google.com/file/d/1yAZELyuHJft20qGVuhteZmlERLvPeYA2/view?usp=sharing)  
**22.01** [ІІ група. Тема: Природні катаклізми, як явища в природі](https://drive.google.com/file/d/1rd-orSZ1t6ebr1lEtyY52QVycl6nuHgA/view?usp=sharing)  
**22.01** [І група. Тема: Природні катаклізми, як явища в природі](https://drive.google.com/file/d/1CqgaR_fU1mthq8f-Nv-6L-EwkpzFqoPy/view?usp=sharing)  

** Захист України**  
**07.12** [Хлопці. Тема: Статути Збройних Сил України. Військові звання військовослужбовців Збройних Сил України](https://drive.google.com/file/d/1OzU2dwv875YIu-Owskc3Irad1zmIoqE9/view?usp=sharing)  
**11.01** [Хлопці. Тема: Вогнева підготовка](https://drive.google.com/file/d/190Hpb8Hc2f1DXFKG1XJdIfRWQKXTefWM/view?usp=sharing)  
**11.01** [Дівчата. Тема: Потенційно небезпечні місця. Вибухонебезпечні предмети](https://drive.google.com/file/d/1onH0OCXfhI6qW2YA2RZo6xsNgkVifZKR/view?usp=sharing)  
**18.01** [Хлопці. Тема: Вогнева підготовка. Стрілецька зброя та поводження з нею. Порядок неповного розбирання і складання та обслуговування автомата. Заходи безпеки при поводженні зі зброєю](https://drive.google.com/file/d/1NyvNcaDGZzFLmZXCG5YE_u5-6CL5iVPs/view?usp=sharing)  
**18.01** [Дівчата. Тема: Види кровотеч. Ознаки та швидке розпізнавання загрозливої для життя кровотечі](https://drive.google.com/file/d/1OCi1XdCixpV3FAmAlR2gkCoFN7Tel3QI/view?usp=sharing)  
**20.01** [Хлопці. Тема: Вогнева підготовка. Стрілецька зброя та поводження з нею. Малокаліберна і пневматична гвинтівки та гладкоствольна рушниця. Загальна будова малокаліберної гвинтівки та пневматичної гвинтівки та їх характеристика](https://drive.google.com/file/d/1NE6s2E3o6mMwk0MFkb1RoqTNMCIZAEai/view?usp=sharing)  
**20.01** [Дівчата. Тема: Техніка застосування прямого тиску на рану](https://drive.google.com/file/d/1i-ETcPcHY5NPe5A1zLujOhqhJAtfgQz5/view?usp=sharing)  
**29.03** [Хлопці. Тема: Тактична підготовка. Основи військової топографії. Складання опису місцевості. Висота перерізу рельєфу. Визначення висот за топографічною картою.Визначення зон видимості](https://drive.google.com/file/d/1_iMMzCnk9svyrNitxu_tJWe1a8b1OGmQ/view?usp=sharing)  
**29.03** [Дівчата. Тема: Порядок надання допомоги за травми очей](https://drive.google.com/file/d/1Pcb2WEz90zAotnHpZhwtPPeacdvXBOhx/view?usp=sharing)  

** Хімія **  
**07.12** [Тема: Насичені одноатомні спирти](https://drive.google.com/file/d/1IfJ4cpMktmfYg7JKuCp4G7s1HGHH3NaY/view?usp=sharing)  
**11.01** [Тема: Фенол](https://drive.google.com/file/d/1GBj55S5WQcQ1tAkfGdVC6YBTIiYejAmR/view?usp=sharing)  
**18.01** [Тема: Альдегіди](https://drive.google.com/file/d/1R46IAepRqo3fiGFeigqSGH0Bh4t6JnjQ/view?usp=sharing)  
**21.01** [Тема: Карбонові кислоти](https://drive.google.com/file/d/1mNFcSoR326mipDSK0ytVy2_i5VJ4ODdu/view?usp=sharing)  
**29.03** [Тема: Анілін](https://drive.google.com/file/d/1sv_BQDrM_ui0OUJRLoNx_ktn_rU9kSif/view?usp=sharing)  

** Географія **  
**11.01** [Тема: Третинний сектор економіки. Нерівномірність економічного розвитку субрегіонів азії та особливості їх участі в міжнародному поділі праці. Зв’язки україни з країнами Азії.](https://drive.google.com/file/d/1uEjvyC_mFoXDQP-tFUQKQ63GqB7vXnQg/view?usp=sharing)  
**14.01** [Тема: Японія. Загальна характеристика](https://drive.google.com/file/d/1hGCt-38PBv_vBJ4KSf-N3A7_sd9VEuzJ/view?usp=sharing)  
**18.01** [Тема: Японія. Господарство](https://drive.google.com/file/d/1RZPadyav1K27XsOj-VU48QI6tA7LnlJc/view?usp=sharing)  
**20.01** [Тема: Географічний простір](https://drive.google.com/file/d/10Rx7EHa1wotLL-wwwyuTtRSNp8O039Hg/view?usp=sharing)  
**29.03** [Тема: США. Особливості сучасного постіндустріального розвитку. Господарство](https://drive.google.com/file/d/1hqOj6B4bYKQsJdltI8GiO68hNYuCCo_5/view?usp=sharing)  

** Алгебра **  
**11.01** [Тема: Радіанне вимірювання кутів](https://drive.google.com/file/d/19KcVgym3kZyvIV-SMlDCUuvdZCjmINU4/view?usp=sharing)  
**15.01** [Тема: Властивості тригонометричних функцій](https://drive.google.com/file/d/1aoiPcJBCWstSVUwguGMZvrCz5AmL3YRl/view?usp=sharing)  
**18.01** [Тема: Властивості тригонометричних функцій](https://drive.google.com/file/d/1z09HALI4stJDeBq9dOT5wDA8OoHXsEun/view?usp=sharing)  
**29.03** [Тема: Границя функції в точці](https://drive.google.com/file/d/160Jvq1EMfxAvmLTBmmShrKJpdoQeBjfp/view?usp=sharing)  

** Технології **  
**12.01** [Тема: Український суванір](https://drive.google.com/file/d/1Qjysoxx4CbkF3hvpoWE8jhs9EKJ-HX7j/view?usp=sharing)  
**12.01** [Тема: Розробка ескізного малюнка виробу](https://drive.google.com/file/d/1njz_ZQeiVuTzj43N9avAHsd-U5nEqNQ3/view?usp=sharing)  
**15.01** [ІІ група. Тема: Основні етапи проєктування виробу. Складання технологічної послідовності виготовлення виробу](https://drive.google.com/file/d/18MlAOoYQgjuWYSYIBDqGnbhcjFX9MGS2/view?usp=sharing)  
**19.01** [І група. Тема: Основні етапи проєктування виробу](https://drive.google.com/file/d/1Yt3qSX6BAqWdyDLI5qc50SN3Q5i2iccH/view?usp=sharing)  
**19.01** [ІІ група. Тема: Технологія виготовлення та декорування виробу](https://drive.google.com/file/d/1rs71ZTySWI6_US7-I26cFINeQuyVdJyA/view?usp=sharing)  
**22.01** [І група. Тема: Технологія виготовлення та декорування виробу](https://drive.google.com/file/d/1Lsr3HJj2S6_B4ku6i-IhNSU_ACQjtTyl/view?usp=sharing)  
**30.03** [Тема: Технологія виготовлення виробу: визначення особливостей кімнати. Добір кольорової гамми](https://drive.google.com/file/d/1MY8Fvm5ofVYXtjy356dHItFhqi7jzjt7/view?usp=sharing)  

** Громадянська освіта **  
**11.01** [Тема: Поява демократії](https://drive.google.com/file/d/1YA97w93ZHBb5qcSDRkOUixfJySWwWlCo/view?usp=sharing)  
**12.01** [Тема: Вибори. Референдум](https://drive.google.com/file/d/1p44UiEvXNtX23HI7yctZKF41JCkohMMb/view?usp=sharing)  
**18.01** [Тема: Політичні партії, громадські організації і їх вплив на демократію](https://drive.google.com/file/d/1FB1oV8XvlFR_vLa8NFni5iuETwS7MvJS/view?usp=sharing)  
**19.01** [Тема: Громадянське суспільство та правова держава](https://drive.google.com/file/d/1VQPif4kMQHidmsIS8MEg7FWDcjSslDwa/view?usp=sharing)  
**29.03** [Тема: Економіка як сфера життя людей](https://drive.google.com/file/d/1c5SqMsOSYlqPUuqfGJ2xpOvPfr4n4sdi/view?usp=sharing)  
**30.03** [Тема: Раціональне і ефективне використаня ресурсів](https://drive.google.com/file/d/1h_e79OCSur6ANsRB1Ho0l6GOf7TMSe8t/view?usp=sharing)  

** Зарубіжна література **  
**13.01** [Тема: Особливості роману 19 століття](https://drive.google.com/file/d/1a-QzVjMDxjhOfN9iYQ16Xrv7kaxMQ2w5/view?usp=sharing)  
**20.01** [Тема: Значення Флобера для розвитку реалізму](https://drive.google.com/file/d/1-23c90ta6BLJ5C7LQsHLtpnOWYBZ7X0y/view?usp=sharing)  

** Геометрія **  
**13.01** [Тема: Кути в просторі](https://drive.google.com/file/d/1rjbEKlAjKW4xBCtlEmyQmD8MwGznJaZO/view?usp=sharing)  
**20.01** [Тема: Ортогональне проєктування](https://drive.google.com/file/d/1waidP_R9XFo2YD-fArAfYjGRzNzUM_Sc/view?usp=sharing)  

** Біологія **  
**14.01** [Тема: Закономірності спадковості. Гібридологічний аналіз](https://drive.google.com/file/d/1FVlYRcqxhNy-PpceFMNbZ9fESAcJfw-m/view?usp=sharing)  
**14.01** [Тема: Основні поняття генетики. Закономірності спадковості](https://drive.google.com/file/d/1Dabm66R9SdlouoWc1auZZiMT7diXBhjM/view?usp=sharing)  
**21.01** [Тема: Гібридологічний аналіз. Кодомінування](https://drive.google.com/file/d/1Xa66YtzC1DM7CzywQM1j24ZKx0nehxNG/view?usp=sharing)  
**21.01** [Тема: Гідридологічний аналіз. Основні типи схрещувань](https://drive.google.com/file/d/10QLnZwkP490qwA8Y9hGhu-pc8qntyRcH/view?usp=sharing)  
`}</Md>
      </Tab>
      <Tab title="11 клас">
        <Md>{`
** Українська література **  
**03.12** [Тема: «Патетична соната» - драматична опозиція високої мрії і потворної дійсності](https://drive.google.com/file/d/1-l7D_zFg1QA_-aGbH1lADDCULEBgChgc/view?usp=sharing)  
**03.12** [Тема: Микола Гурович Куліш](https://drive.google.com/file/d/1FMV2UWTFbPSAjYr4Gwhv4lIHsEnHucaA/view?usp=sharing)  
**04.12** [Тема: Іван Багряний. Життєвий і творчий шлях письменника. Багряний — публіцист.](https://drive.google.com/file/d/1KjKOrRrOI3epjzcnILvSqcldr4Xbf5XZ/view?usp=sharing)  
**14.01** [Тема: «Шістдесятництво» як суспільне і мистецьке явище](https://drive.google.com/file/d/1d3wjMUig-15_zO-1fwZmkhF1edP_lBuJ/view?usp=sharing)  
**15.01** [Тема: Василь Симоненко «Казка про Дурила»](https://drive.google.com/file/d/17OUsAchkRZ3LcTivpoeQewG7dMa4QZby/view?usp=sharing)  
**21.01** [Тема: Дмитро Павличко. Основні відомості про поета, перекладача.  Пісня «два кольори», що стала народною](https://drive.google.com/file/d/1aynebUuDHKnm4fP7kz95vfu-WvRZmBni/view?usp=sharing)  
**22.01** [Тема: Іван Драч. «Балада про соняшник»](https://drive.google.com/file/d/15-WKNnoTRRl3IY47sFOKx24cteeUvNyY/view?usp=sharing)  

** Інформатика **  
**03.12** [Тема: Поняття про мови веб-скриптів та спосіб використання скриптів у гіпертекстових документах](https://drive.google.com/file/d/1jMc7DGcKCgnaUjGwBOw1DKgZov0jVr9k/view?usp=drive_web)  
**14.01** [Тема: Поняття про мови веб-скриптів та спосіб використання скриптів у гіпертекстових документах](https://drive.google.com/file/d/1jMc7DGcKCgnaUjGwBOw1DKgZov0jVr9k/view?usp=drive_web)  
**21.01** [Тема: Прикладний програмний інтерфейс. Планування веб-сайту та етапи роботи над ним](https://drive.google.com/file/d/1BaAz7HaFcPKxsB8fKNtDRnBBBfxV5WQv/view?usp=drive_web)  

** Історія України. Всесвітня історія **  
**04.12** [Тема: Опозиційний рух в Україні 60-80-х рр. ХХ ст.](https://drive.google.com/file/d/1BRFbeZezM4EQBXfjdEyCgfPXCTltDMaR/view?usp=sharing)  
**11.01** [Тема: Початок перебудови](https://drive.google.com/file/d/1ApC9AoA8ydI10AeYp7Uv3LOdbhKO0h8L/view?usp=sharing)  
**15.01** [Тема: Соціально-економічне життя 1980-90рр](https://drive.google.com/file/d/1XOz-iM24jeQC2t3Vxo0KeyPjvoAtzYNM/view?usp=sharing)  
**18.01** [Тема: Зростання суспільно-політичної активності громадян](https://drive.google.com/file/d/1EYyybEy36lkDlqsmYvtvTPl5V4Db1HUZ/view?usp=sharing)  
**20.01** [Тема: Проголошення Декларації про державний суверенітет України](https://drive.google.com/file/d/1Bexa2cRGSbZa6jB-ov7XI0kDcW6vwo4X/view?usp=sharing)  
**22.01** [Тема: Утвердження незалежності України](https://drive.google.com/file/d/1GtPOklXI_qF3Rd4kb8DTG_CoNKi44H6q/view?usp=sharing)  
**29.03** [Тема: Західна Україна в 1921-1939 рр.](https://drive.google.com/file/d/1t0QSimKSLUUBGy1gZyICaiE9VFY0H2mi/view?usp=sharing)  

** Англійська мова **  
**04.12** [Тема: Reading](https://drive.google.com/file/d/1clNCU8I-QMXLumrUeVrrPFrlUHCobR-z/view?usp=sharing)  
**08.12** [Тема: Writing](https://drive.google.com/file/d/1c275FUb4T5R-xkotqqn08tbq5HkvdXX-/view?usp=sharing)  
**12.01** [Тема: Винаходи та винахідники](https://drive.google.com/file/d/1Rm3Gy6W61WhXkbSMFLrPTydEMecqV7F9/view?usp=sharing)  
**15.01** [Тема: Проблеми екології](https://drive.google.com/file/d/1mwtlmoDoexJ342paE9E5Iun3s-vEduu4/view?usp=sharing)  
**22.01** [Тема: Глобальне потепління](https://drive.google.com/file/d/1mAhBiN_usDWOj3LJJLjMbtbei4Ix0xcD/view?usp=sharing)  
**30.03** [Тема: Уміння керувати емоціями](https://drive.google.com/file/d/1NtLFV4TTnOnX95lm3sPat74jCqXBth9X/view?usp=sharing)  

** Українська мова **  
**07.12** [Тема: Есе «Що робить мене щасливим (щасливою)»](https://drive.google.com/file/d/1xZaYEjnfrn1_BhqFqRKVKQHtugYFExs6/view?usp=sharing)  
**08.12** [Тема: Розділові знаки в простому ускладненому реченні](https://drive.google.com/file/d/1Y4mGclReJDaXcHw6xqFtGXOIANhIcrdP/view?usp=sharing)  
**11.01** [Тема: Пряма і непряма мова, її призначення і граматично смислові особливості](https://drive.google.com/file/d/1y2TTkiq2-8unZ0sfG9PDyv_l7IVRIIhv/view?usp=sharing)  
**12.01** [Тема: Інтонування речень із прямою мовою, діалогом. Цитування](https://drive.google.com/file/d/1UTUZTJzfvGP_ol-XjjKdZOKBqwGMzbsr/view?usp=sharing)  
**13.01** [Тема: Ділові папери. Офіційний лист. Доручення. Розписка](https://drive.google.com/file/d/1LES1JRn6fSklV3SiBMiPhpmwu2Zla_Ji/view?usp=sharing)  
**18.01** [Тема: Телефонна розмова як один із видів усного ділового мовлення. Лист електронною поштою і мобільним телефоном (sms). Основні вимоги до культури спілкування по телефону і в Інтернеті](https://drive.google.com/file/d/1zz_F1Kkn0vXItnqLmuQI6e21qF4o6JFS/view?usp=sharing)  
**19.01** [Тема: Зміст і будова тексту. Складне синтаксичне ціле. Актуальне членування речення. Способи зв’язку речень у тексті](https://drive.google.com/file/d/1CDHa-M2SC20K_SJKHfafSv_bFx8HhRZ0/view?usp=sharing)  
**20.01** [Тема: Зв’язне мовлення. Ділові папери. Розписка](https://drive.google.com/file/d/19pLFIpWytvG0Xel89khteho7a3-Ottz5/view?usp=sharing)  
**29.03** [Тема: Специфічно професійна лексика. Наукова лексика. Терміни, канцеляризми та штампи. Стилістичне використання термінів, канцеляризмів та штампів](https://drive.google.com/file/d/1gjzPclfg0FlV4mLVnUNq9NurzFPARTt2/view?usp=sharing)  
**30.03** [Тема: Письмовий відгук про твір мистецтва (спектакль, кінофільм)](https://drive.google.com/file/d/1KYQRa3_MaZP_Dt9Fx0NA5byJUXx3KSGV/view?usp=sharing)  
**30.03** [Тема: Фразеологія художнього мовлення, наукова, публіцистична, офіційно-ділова](https://drive.google.com/file/d/1nQr7emaW1S7PSLjnkvgjF9YptHsQvrtW/view?usp=sharing)  

** Фізика **  
**07.12** [Тема: Досліди М.Фарадея. Електромагнітна індукція. Закон електромагнітної індукції. Правило Ленца](https://drive.google.com/file/d/1sj3YVP7d9jBZHf15nSJBU6EKpNTATAIe/view?usp=sharing)  
**11.01** [Тема: Коливальний контур. Виникнення вільних електромагнітних коливань. Перетворення енергії під час вільних електромагнітних коливань](https://drive.google.com/file/d/1hl7jWNW6gvHTIyF_VtSVg_pJ304kN2Dn/view?usp=sharing)  
**13.01** [Тема: Гармонічні електромагнітні коливання](https://drive.google.com/file/d/1SRLJJvZR5aumZVgxAqipha4mhmFw8Q9_/view?usp=sharing)  
**18.01** [Тема: Змінний струм](https://drive.google.com/file/d/1bD74Aqij3uqUMc4XbJU1RX1gnB69KX8g/view?usp=sharing)  
**20.01** [Тема: Змінний струм](https://drive.google.com/file/d/1owu8HqYPlDT81w3ZLalHKKmcVS5CvAlY/view?usp=sharing)  
**29.03** [Тема: Квантові властивості світла. Світлові кванти. Закони фотоефекту](https://drive.google.com/file/d/1lfyn1kQ75u8soa-7yRQbHjVzeCU0pS94/view?usp=sharing)  

** Хімія **  
**08.12** [Тема: Поняття про гальванічний елемент як хімічне джерело електричного струму](https://drive.google.com/file/d/1-18C_qtNZmcyKNShpSVNgHdP_43NAkoS/view?usp=sharing)  
**12.01** [Тема: Загальна характеристика неметалічних елементів](https://drive.google.com/file/d/116iy1q2Om11OkB2Xr2vkKKIGomEWe2pI/view?usp=sharing)  
**19.01** [Тема: Галогени](https://drive.google.com/file/d/1k5ct8mdHwfewxzUHBtm6Ai1-0twGjPN4/view?usp=sharing)  
**30.03** [Тема: Добрива](https://drive.google.com/file/d/18P3n501Ym5kDNYCdcZT8IAR24stt8G86/view?usp=sharing)  
**30.03** [Тема: Грунти](https://drive.google.com/file/d/1uDX5OoIx-jPdFW9QpNYs9_S2__uJVauO/view?usp=sharing)  

** Алгебра **  
**11.01** [Тема: Первісна та її властивості](https://drive.google.com/file/d/1L324DYGv9LNfmQRPdS-EqyuIWCETnm6O/view?usp=sharing)  
**14.01** [Тема: Правила знаходження первісних](https://drive.google.com/file/d/1UDcLsFF-566T45qpyzx9so_S6L3zEydu/view?usp=sharing)  
**18.01** [Тема: Правила знаходження первісних](https://drive.google.com/file/d/131gyL6Us88QJs0uOmSfwilpKoUyqUMEc/view?usp=sharing)  
**29.03** [Тема: Елементи математичної статистики](https://drive.google.com/file/d/19gNViblYQQh0N3-UW_4xU_tcGSLls3BY/view?usp=sharing)  

** Захист України **  
**11.01** [Тема: Повний огляд пораненого, зупинка всіх інших видів кровотеч](https://drive.google.com/file/d/1vGeJ4yYdwbxW2fG2x-JbPlzplwwwZNlL/view?usp=sharing)  
**13.01** [Тема: Надання домедичної допомоги в разі переломів](https://drive.google.com/file/d/17jAfhMnAnx6-iSSVpvLulBTVmTNv45UT/view?usp=sharing)  
**18.01** [Тема: Надання домедичної допомоги в разі опіків і проникного поранення ока](https://drive.google.com/file/d/1b6sDoJFOBEPWtu6g2ko71Bjq1ywCx6Sy/view?usp=sharing)  
**29.03** [Тема: Характеристика зон стихійного лиха](https://drive.google.com/file/d/1EmkawzT_Wt7ymUxgJ1ftRjZW3ax2tD0a/view?usp=sharing)  

** Фізична культура **  
**12.01** [Тема: Комплекс ранкової гігієнічної гімнастики](https://drive.google.com/file/d/1jMHOn2adK6L881jeXPQpOB7TgJflIDGt/view?usp=sharing)  
**14.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1uu-VCkoPaK6Mt7Hh6UAFze7DItJ7al4U/view?usp=sharing)  
**15.01** [Тема: Загальна фізична підготовка](https://drive.google.com/file/d/1_1WXlbqeLPi1XIu0MQfWKRCT0K5DzRpQ/view?usp=sharing)  
**19.01** [Тема: Комплекс ранкової гігієнічної гімнастики](https://drive.google.com/file/d/1ILmTrJyCfBsy-jsjh0X787l1tmdikX8j/view?usp=sharing)  
**21.01** [Тема: Урок фізичної культури №3](https://drive.google.com/file/d/1CGsVipO3oWkzUKiyeAC5wfZ1XaEgFn76/view?usp=sharing)  
**22.01** [Тема: Урок фізичної культури №3](https://drive.google.com/file/d/1fxBGJm1KsmebVV_ah97LaXQOZjtc7n6c/view?usp=sharing)  
**30.03** [Тема: Тренування на всі групи м'язів](https://drive.google.com/file/d/1wsM5Zd-pzS4BoSkS3EvQHp51DcnTEflE/view?usp=sharing)  

** Геометрія **  
**12.01** [Тема: Об'єм піраміди](https://drive.google.com/file/d/1UWQ8LaxxQqgKUAnUq2pLPtpH5B30dHy6/view?usp=sharing)  

** Географія **  
**13.01** [Тема: Природні зони](https://drive.google.com/file/d/1PyrmX2ocO_VPPzR6-2RqG18M9pkSWBlH/view?usp=sharing)  
**30.03** [Тема: Повторення вивченого матеріалу. Підготовка до ЗНО](https://drive.google.com/file/d/1rVt9uWcwyVlnIIhV3Lh7PnoQE1M6hzZP/view?usp=sharing)  

** Біологія **  
**13.01** [Тема: Екологічні чинники](https://drive.google.com/file/d/1KC52fpGn1EwDad_-OthY7mp_YCefBRLf/view?usp=sharing)  
**13.01** [Тема: Завдання та методи екології](https://drive.google.com/file/d/1x0_L7PhRfIFdPkvMYp_y_nZFtmRRHu4E/view?usp=sharing)  
**20.01** [Тема: Механізми регуляції чисельності популяцій](https://drive.google.com/file/d/1MkHA8KUxWyhb7E9H1Fh7hyjll5e9amM9/view?usp=sharing)  
**20.01** [Тема: Популяції. Класифікація популяцій](https://drive.google.com/file/d/1EXkb_TdUrpzqX-0L6OW_lg6xYbTOpawz/view?usp=sharing)  

** Астрономія **  
**13.01** [Тема: Планети-гіганти](https://drive.google.com/file/d/1ELiTkJtJebQ2sSuVQQT5vZ4a9rgadhbU/view?usp=sharing)  
**20.01** [Тема: Планети-гіганти](https://drive.google.com/file/d/1JW5vCVxbg1KpraiPwld_qzBleG11FVGO/view?usp=sharing)  

** Технології **  
**14.01** [Тема: Зовнішній вигляд людини. Складові культури зовнішнього вигляду. Косметологія](https://drive.google.com/file/d/17mcFv1pLc97qMEAacSgUtKcEv7ukOQTF/view?usp=sharing)  
**15.01** [Тема: Функції шкіри. Типи шкіри. Визначення свого типу шкіри](https://drive.google.com/file/d/1q-Z4pelNikntx-CEP6N2sQ4fCpooQ9Fw/view?usp=sharing)  
**22.01** [Тема: Етапи догляду за шкірою обличчя. Шкірні лінії](https://drive.google.com/file/d/1Ehe0OTS1qjdUCLrWMP8kXzkyMpHLS1ou/view?usp=sharing)  
**22.01** [Презентація. Тема: Етапи догляду за шкірою обличчя. Шкірні лінії](https://drive.google.com/file/d/1smQ-ZHl1FZVF72OI0fjR5k4TFhroRX3D/view?usp=sharing)  

** Зарубіжна література **  
**14.01** [Тема: Срібна доба російської поезії тенденції, здобутки,долі митців](https://drive.google.com/file/d/1bdigwZW9uVPUwn3_l4F0jiY8sCZPsh4K/view?usp=sharing)  
**21.01** [Тема: Розвиток жанру антиутопії. Поетика](https://drive.google.com/file/d/1pTl_pAaZW_6nOmp2Zh0L5K8WApo7qFsK/view?usp=sharing)  
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
