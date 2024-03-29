import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Video from "../images/Коротаева А.Ю.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function AboutMe({ item, isOpen }) {
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
        <section className="me">
          <div className="me__container">
            <div className="me__container-biography">
              <div className="me__image-container">
                <img
                  id="s"
                  className="me__image me__image-biography"
                  onClick={handleClick}
                  src={require("../images/aboutMe.jpg")}
                  alt="фотография анны коротаевой"
                />
              </div>
              <div className="me__container-text">
                <p className="me__text">
                  {" "}
                  Родилась 10 октября 1990 года в с. Исетское Исетского района Тюменской области. Окончила школу в 2008 году и поступила в Тюменский
                  государственный университет на специальность География. Вела активную общественную жизнь. Участвовала в областной студ. весне,
                  разрабатывали и реализовывали проекты в «Молодой гвардии», активно вовлекали иностранных студентов.
                </p>
                <p className="me__text">
                  {" "}
                  Окончила университет в 2013 году и вернулась в родное село, где сразу начала работать в МАОУ Исетской СОШ №1 c. Исетское Тюменской
                  области. География всегда привлекала меня, манила к путешествиям. На своих уроках пытаюсь развить познавательный интерес. Мы с
                  детьми активно участвуем в районных конференциях, проводим экологические акции и запускаем челенджи, проводим волонтерские
                  мероприятия.
                </p>
                <p className="me__text">
                  В настоящее время увлекаюсь чтением педагогической литературы, вышиваю крестиком, бисером, люблю готовить и проводить время с
                  семьей, веду блог в инстаграме «Навигатора детства».
                </p>
              </div>
            </div>
            <div className="me__container-documents">
              <p className="me__title">Видеопрезентация "Я - учитель"</p>
              <div className="me__card-container">
                {/* <iframe src={Video} className="me__image" title="Видео презентация Я учитель!" /> */}
                <video controls className="me__image">
                  <source src={Video} type="video/mp4" />
                </video>
                {/* <iframe
                  className="me__image"
                  src="https://www.youtube.com/embed/U8vALd5nYbs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe> */}
              </div>
            </div>
            <div className="me__container-documents">
              <p className="me__title">Встреча с министром просвещения Кравцовым С.С., Артек, июль 2021 г.</p>
              <div className="me__card-container">
                <img
                  className="me__image"
                  onClick={handleClick}
                  src={require("../images/Министр.jpg")}
                  alt="Фотография Аны Которавевой с министром образования России"
                />
              </div>
            </div>

            <div className="me__container-documents">
              <p className="me__title">Повышение квалификации</p>
              <div className="me__container-cards">
                <div className="me__card-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Повышение квалификации/Артек (pdf.io).jpg")}
                    alt="удостоверение о повышении квалификации"
                  />
                </div>
                <div className="me__card-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Повышение квалификации/повышение квалификации (pdf.io).jpg")}
                    alt="удостоверение о повышении квалификации"
                  />
                </div>
                <div className="me__card-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Повышение квалификации/повышение квал.2 (pdf.io).jpg")}
                    alt="удостоверение о повышении квалификации"
                  />
                </div>
                <div className="me__card-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Повышение квалификации/повышен.3 (pdf.io).jpg")}
                    alt="удостоверение о повышении квалификации"
                  />
                </div>
                <div className="me__card-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Мои достижения/Сертификат Коротаева А.Ю. (pdf.io).jpg")}
                    alt="сертификат"
                  />
                </div>
                <div className="me__card-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170752-001 (pdf.io).jpg")}
                    alt="Благодарность"
                  />
                </div>
              </div>
            </div>
            <div className="me__container-documents">
              <p className="me__title">Мои достижения</p>
              <div className="me__container-vinner">
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Мои достижения/самые значим (pdf.io).jpg")}
                    alt="Благодарность"
                  />
                </div>
                <div className="me__vinner-container">
                  <img className="me__image" onClick={handleClick} src={require("../images/Мои достижения/значимая (pdf.io).jpg")} alt="Диплом" />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Мои достижения/за олимпиады (pdf.io).jpg")}
                    alt="Благодарность"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Мои достижения/тоже крутая (pdf.io).jpg")}
                    alt="сертификат"
                  />
                </div>
              </div>
            </div>
            <div className="me__container-documents">
              <p className="me__title">Достижения учеников</p>

              <div className="me__container-vinner">
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170224-001 (pdf.io).jpg")}
                    alt="Благодарность"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170252-001 (pdf.io).jpg")}
                    alt="Диплом"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170327-001 (pdf.io).jpg")}
                    alt="Благодарность"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170405-001 (pdf.io).jpg")}
                    alt="сертификат"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170428-001 (pdf.io).jpg")}
                    alt="сертификат"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170453-001 (pdf.io).jpg")}
                    alt="Благодарность"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170555-001 (pdf.io).jpg")}
                    alt="Благодарность"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170620-001 (pdf.io).jpg")}
                    alt="сертификат"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170650-001 (pdf.io).jpg")}
                    alt="сертификат"
                  />
                </div>

                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/img-220209170850-001 (pdf.io).jpg")}
                    alt="Диплом"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/изображение 12.02.2021_1 грамота.jpg")}
                    alt="Грамота"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/изображение_12.02.2022_грамота_2.jpg")}
                    alt="Грамота"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/изображение_12.02.2022_грамота_Захаров.jpg")}
                    alt="Грамота"
                  />
                </div>
                <div className="me__vinner-container">
                  <img
                    className="me__image"
                    onClick={handleClick}
                    src={require("../images/Достижения учеников/конференция (pdf.io).jpg")}
                    alt="Благодарность"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutMe;
