import React from "react";
import StudentsWebsait from "../StudentsSait";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import MenuItemPage from "../MenuItemPage";

function StudentsPlanform() {
  let location = useLocation();

  const [students, setStudents] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [examination, setExamination] = useState(false);
  // меняем цвет меню в зависимости от того, где находится пользователь
  useEffect(() => {
    if (location.pathname === "/students") {
      setStudents(true);
    } else {
      setStudents(false);
    }
    if (location.pathname === "/students/platform") {
      setPlatform(true);
    } else {
      setPlatform(false);
    }
    if (location.pathname === "/students/examination") {
      setExamination(true);
    } else {
      setExamination(false);
    }
  });
  return (
    <>
      <Header />
      <main className="content">
        <div className="parents__menu">
          <ul className="parents__menu-container">
            <MenuItemPage way={"/students"} text={"ПРАВИЛА БЕЗОПАСНОСТИ"} onPage={students} />

            <MenuItemPage way={"/students/platform"} text={"ПЛАТФОРМЫ ПОМОЩНИКИ"} onPage={platform} />

            <MenuItemPage way={"/students/examination"} text={"ПОДГОТОВКА К ЭКЗАМЕНАМ"} onPage={examination} />
          </ul>
        </div>
        <section className="students">
          <div className="students__container">
            <div className="students__cards-container">
              <StudentsWebsait
                name={'САЙТ "РОССИЙСКАЯ ЭЛЕКТРОННАЯ ШКОЛА"'}
                l
                ink={"https://resh.edu.ru/"}
                title={
                  "Российская электронная школа» – это интерактивные уроки по всему школьному курсу с 1 по 11 класс от лучших учителей страны, созданные для того, чтобы у каждого ребёнка была возможность получить бесплатное качественное общее образование."
                }
                linkImage={require("../../images/российская информационная школа.jpg")}
                altImage={"фотография главной страницы сайта Российская электронная школа"}
              />
              <StudentsWebsait
                name={'САЙТ "Я КЛАСС"'}
                link={"https://www.yaklass.ru/"}
                title={
                  "«ЯКласс» — образовательный интернет-ресурс для школьников, студентов, учителей и родителей. Начал работу в 2014 году. Сегодня онлайн-площадкой пользуются 12 миллионов пользователей из 50 000 школ России, Австрии, Армении, Беларуси, Германии, Индии, Казахстана, Кыргызстана, Латвии, Узбекистана,  Финляндии.Портал содержит онлайн-тренажёры  по школьной программе и автоматическую проверку домашних заданий. «ЯКласс» — выпускник акселератора ФРИИ, резидент программ «Сколково» и Microsoft. База ЯКласс содержит 1,6 триллиона заданий по 16 предметам школьной программы, ЕГЭ, ОГЭ и ВПР. 65 %  учащихся пользуются сервисом с мобильных устройств."
                }
                linkImage={require("../../images/Я_класс.jpg")}
                altImage={"фотография главной страницы сайта Я класс"}
              />
              <StudentsWebsait
                name={'САЙТ "Учи.ру" — интерактивная образовательная онлайн-платформа'}
                link={"https://uchi.ru/"}
                title={"Учи.ру — интерактивная образовательная онлайн-платформа"}
                linkImage={require("../../images/учи_ру.jpg")}
                altImage={"фотография главной страницы сайта Учи.ру"}
              />
              <StudentsWebsait
                name={'САЙТ "Skysmart" — цифровая образовательная онлайн-платформа'}
                link={"https://edu.skysmart.ru/"}
                title={"Skysmar — цифровая образовательная онлайн-платформа"}
                linkImage={require("../../images/skysmart.jpg")}
                altImage={"фотография главной страницы сайта Skysmar"}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default StudentsPlanform;
