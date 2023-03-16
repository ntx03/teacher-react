import React from "react";
import VideoCard from "../VideoCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import MenuItemPage from "../MenuItemPage";

function StudentsExaminations() {
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
              <VideoCard link={"https://www.youtube.com/embed/l5KlXJ_16LY"} name={"Подготовка к ГИА. География 11 класс. 17.01.2020"} />
              <VideoCard link={"https://www.youtube.com/embed/D5f8jEhvVTg"} name={"Подготовка к ГИА. География 9 класс. 29.03.2019"} />
              <VideoCard link={"https://www.youtube.com/embed/jy7kCkD5rBA"} name={"Подготовка к ГИА. География 11 класс. 22.03.2019"} />
              <VideoCard link={"https://www.youtube.com/embed/JMrV5nhaLbA"} name={"Подготовка к ГИА. География 9 класс. 22.10.2020"} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default StudentsExaminations;
