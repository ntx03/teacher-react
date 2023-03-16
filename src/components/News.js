import React from "react";
import NewsBlock from "./NewsBlock";
import PhotoContainer from "./PhotoContainer";
import Footer from "./Footer";
import Header from "./Header";

function News({ item, isOpen }) {
  function handleClick(e) {
    isOpen(true);
    const target = e.target;
    return item({
      name: target.alt,
      link: target.src,
    });
  }
  return (
    <>
      <Header />
      <main className="content">
        <section className="news">
          <div className="news__block">
            <NewsBlock
              data={"18.01.2023г."}
              text={
                'Мастер-класс по оказанию первой помощи на заседании РМО педагогов по воспитательной работе Исетского района "РДДМ- территория возможностей". Говорили про Ожоги Инородные тела в верхних дыхательных путях СЛР'
              }
              header={"Мастер-класс по оказанию первой помощи"}
            />
            <div className="photo__block">
              <PhotoContainer
                link={require("../images/NEWS/2023/3.jpg")}
                onClick={handleClick}
                name={"Мастер-класс по оказанию первой помощи"}
              />
              <PhotoContainer
                link={require("../images/NEWS/2023/2.jpg")}
                onClick={handleClick}
                name={"Мастер-класс по оказанию первой помощи"}
              />
              <PhotoContainer
                link={require("../images/NEWS/2023/1.jpg")}
                onClick={handleClick}
                name={"Мастер-класс по оказанию первой помощи"}
              />
            </div>
          </div>
          <div className="news__block">
            <NewsBlock
              data={"18.02.2022г."}
              text={
                "Дети учились строить Розу ветров, а на практической части на улице учились определять направление ветра, и его скорость. Ветер в этот день практически отсутствовал, средняя скорость была 1 м/сек."
              }
              header={
                "18.02.2022 на уроке географии в 6 классах изучали тему Ветер."
              }
            />
            <div className="photo__block photo__block_two">
              <PhotoContainer
                link={require("../images/NEWS/18.02.2022/IMG_20220218_101754.jpg")}
                onClick={handleClick}
                name={
                  "18.02.2022 на уроке географии в 6 классах изучали тему Ветер"
                }
              />
              <PhotoContainer
                link={require("../images/NEWS/18.02.2022/IMG_20220218_102223.jpg")}
                onClick={handleClick}
                name={
                  "18.02.2022 на уроке географии в 6 классах изучали тему Ветер"
                }
              />
              <PhotoContainer
                link={require("../images/NEWS/18.02.2022/IMG_20220218_102225.jpg")}
                onClick={handleClick}
                name={
                  "18.02.2022 на уроке географии в 6 классах изучали тему Ветер"
                }
              />
              <PhotoContainer
                link={require("../images/NEWS/18.02.2022/IMG_20220219_174435.jpg")}
                onClick={handleClick}
                name={
                  "18.02.2022 на уроке географии в 6 классах изучали тему Ветер"
                }
              />
            </div>
          </div>
          <div className="news__block">
            <NewsBlock
              data={"15.02.2022г."}
              text={`Обсуждали понятие слова Война, говорили о страшном явлении в жизни 
                        любого народа, целях войны и последствиях её для всех сторон. Война в Афганистане носила
                        миротворческой характер, но сколько бед в жизнь советских семей она принесла. А ведь
                        именно
                        15 февраля 1989 года последняя колонна советских войск покинула территорию Афганистана.
                        В этот день командующий ограниченным контингентом генерал-лейтенант Борис Всеволодович
                        Громов, спрыгнув с бронетранспортёра, пересёк мост, символизируя этим, что он последним
                        перешёл пограничную реку Амударья (г. Термез), но в реальности последними Афганистан
                        покинули подразделения пограничников и спецназа, прикрывавшие вывод войск и вышедшие на
                        территорию СССР только во второй половине дня 15 февраля. Это событие ознаменовало для
                        Советского Союза окончание Афганской войны, которая продлилась девять лет и унесла жизни
                        более 15 тысяч советских граждан.`}
              header={
                '14 и 15 февраля в 7 "б", 6 "А" и 9-ых классах прошли классные часы на тему "Память об Афганской войне".'
              }
            />
            <div className="photo__block ">
              <PhotoContainer
                link={require("../images/NEWS/14 и 15 марта/IMG-ac013b2f2c43f1abf3b0f0e4444cc141-V.jpg")}
                onClick={handleClick}
                name={
                  "14 и 15 марта прошли классные часы на тему Память об Афганской войне"
                }
              />
              <PhotoContainer
                link={require("../images/NEWS/14 и 15 марта/IMG-fadc3f57def71b192c74925cfe4703c8-V.jpg")}
                onClick={handleClick}
                name={
                  "14 и 15 марта прошли классные часы на тему Память об Афганской войне"
                }
              />
              <PhotoContainer
                link={require("../images/NEWS/14 и 15 марта/IMG-fb440298ca6422d469bd4a27a8486b12-V.jpg")}
                onClick={handleClick}
                name={
                  "14 и 15 марта прошли классные часы на тему Память об Афганской войне"
                }
              />
              <PhotoContainer
                link={require("../images/NEWS/14 и 15 марта/IMG_20220214_114137.jpg")}
                onClick={handleClick}
                name={
                  "14 и 15 марта прошли классные часы на тему Память об Афганской войне"
                }
              />
            </div>
          </div>
          <div className="news__block">
            <NewsBlock
              data={"08.02.2022г."}
              header={"Запустили челендж ко Дню науки 8 февраля."}
            />
            <div className="photo__container news__container-video">
              <video className="photo__image" controls>
                <source
                  src={require("../images/NEWS/Запустили челендж ко Дню науки 8 февраля/VID_31681216_201319_941.mp4")}
                  type="video/mp4"
                />
                Ваш браузер не поддерживает встроенные видео :(
              </video>
            </div>
            <div className="photo__block">
              <PhotoContainer
                link={require("../images/NEWS/Запустили челендж ко Дню науки 8 февраля/IMG_20220209_210514.jpg")}
                onClick={handleClick}
                name={"Генрих Ферман Роберт Кох"}
              />
              <PhotoContainer
                link={require("../images/NEWS/Запустили челендж ко Дню науки 8 февраля/IMG_20220209_210533.jpg")}
                onClick={handleClick}
                name={"Баршев Сергей Иванович"}
              />
              <PhotoContainer
                link={require("../images/NEWS/Запустили челендж ко Дню науки 8 февраля/IMG_20220209_210550.jpg")}
                onClick={handleClick}
                name={"Готтлиб Даймлер"}
              />
            </div>
          </div>
          <div className="news__block">
            <NewsBlock
              data={"04.02.2022г."}
              header={
                "Oнлайн -семинар Григория Кудашова. Игрофикация в образовательном учреждении."
              }
            />
            <div className="photo__block photo__block_two">
              <PhotoContainer
                link={require("../images/NEWS/4 февраля онлайн -семинар Григория Кудашова Игрофикация в образовательном учреждении/IMG_20220212_183500.jpg")}
                onClick={handleClick}
                name={"Григорий Кудашов"}
              />
              <PhotoContainer
                link={require("../images/NEWS/4 февраля онлайн -семинар Григория Кудашова Игрофикация в образовательном учреждении/IMG_20220212_183521.jpg")}
                onClick={handleClick}
                name={"Григорий Кудашов"}
              />
              <PhotoContainer
                link={require("../images/NEWS/4 февраля онлайн -семинар Григория Кудашова Игрофикация в образовательном учреждении/IMG_20220212_183555.jpg")}
                onClick={handleClick}
                name={"Григорий Кудашов"}
              />
            </div>
          </div>
          <div className="news__block">
            <NewsBlock
              data={"02.02.2022г."}
              header={
                "Семинар-совещание в МАОУ Исетской СОШ 1.Воспитательный потенциал в школе."
              }
              text={`А2 февраля в режиме онлайн конференции в МАОУ Исетской школе 1
                        прошёл
                        обучающий семинар "Навигаторы детства". Спикерами данного мероприятия выступили
                        Каипова
                        Г. У, муниципальный координатор проекта " Навигаторы детства", которая поделилась
                        секретами составления матрицы мероприятий и работы на радио. Самсонова Т. А,
                        муниципальный координатор РДШ Исетского района, расказала о Российском движении
                        школьников и значимости участия в их мероприятиях. Кунгурова С. И, Советник
                        директора по
                        воспитательной работе Слобода- Бешкильской СОШ рассказала о новом проекте "Орлята
                        России".Коротаева А. Ю ,советник директора по воспитательной работе Исетской СОШ 1
                        делилась созданием единой системы воспитательной и образовательной среды в школе. По
                        итогам можно сделать вывод, что современная школа - это новая школа с интересными
                        подходами и активными творческими совместными делами.`}
            />
            <div className="photo__block photo__block_two">
              <PhotoContainer
                link={require("../images/NEWS/2.02 семинар совещарие в МАОУ исетской СОШ 1  Воспитательный потенциал в школе/1644674140111.jpg")}
                onClick={handleClick}
                name={"Фотография семинара"}
              />
              <PhotoContainer
                link={require("../images/NEWS/2.02 семинар совещарие в МАОУ исетской СОШ 1  Воспитательный потенциал в школе/1644674140125.jpg")}
                onClick={handleClick}
                name={"Фотография семинара"}
              />
              <PhotoContainer
                link={require("../images/NEWS/2.02 семинар совещарие в МАОУ исетской СОШ 1  Воспитательный потенциал в школе/1644674140133.jpg")}
                onClick={handleClick}
                name={"Фотография семинара"}
              />
            </div>
          </div>
          <div className="news__block">
            <NewsBlock
              data={"19.01.2022г."}
              header={
                "Cеминар совещание с классыми руководителями в с.Слобода-Бекшиль."
              }
            />
            <div className="photo__block photo__block_two">
              <PhotoContainer
                link={require("../images/NEWS/семинар совещание с классыми руководителями в с Слобода Бекшиль/сжатие/1644673317908.jpg")}
                onClick={handleClick}
                name={"Фотография семинара"}
              />
              <PhotoContainer
                link={require("../images/NEWS/семинар совещание с классыми руководителями в с Слобода Бекшиль/сжатие/1644673317899.jpg")}
                onClick={handleClick}
                name={"Фотография семинара"}
              />
              <PhotoContainer
                link={require("../images/NEWS/семинар совещание с классыми руководителями в с Слобода Бекшиль/сжатие/1644673317889.jpg")}
                onClick={handleClick}
                name={"Фотография семинара"}
              />
              <PhotoContainer
                link={require("../images/NEWS/семинар совещание с классыми руководителями в с Слобода Бекшиль/1644673317860.jpg")}
                onClick={handleClick}
                name={"Фотография семинара"}
              />
              <PhotoContainer
                link={require("../images/NEWS/семинар совещание с классыми руководителями в с Слобода Бекшиль/1644673317879.jpg")}
                onClick={handleClick}
                name={"Фотография семинара"}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default News;
