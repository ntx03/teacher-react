import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import StudentsPlanform from "./students/StudentsPlanform";
import StudentsExaminations from "./students/StudentsExaminations";
import MenuItem from "./MenuItem";
import StudentsCard from "./StudentsCard";
import StudentsWebsait from "./StudentsSait";
import VideoCard from "./VideoCard";
import kids6 from "../documents/kids/6.jpg";
import на_улице from "../documents/kids/на улице.jpg";
import при_пожаре from "../documents/kids/по пожару.jpg";
import школа from "../documents/kids/Пямятка-Дорога-в-школу-и-обратно.jpg";
import советы from "../documents/kids/Советы_начинающим_велосипедистам.jpg";
import поведение from "../documents/kids/террор.jpeg";
import MenuItemPage from "./MenuItemPage";
import Footer from "./Footer";
import Header from "./Header";

function Students() {
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
              <StudentsCard path="/students" link={kids6} name={"Безопасное поведение на льду водоема"} />
              <StudentsCard path="/students" link={на_улице} name={"Безопасное поведение на улице"} />
              <StudentsCard path="/students" link={при_пожаре} name={"Безопасное поведение при пожаре"} />
              <StudentsCard path="/students" link={школа} name={"Школа дорожной безопасности"} />
              <StudentsCard path="/students" link={советы} name={"Советы начинающим велосипедистам"} />
              <StudentsCard path="/students" link={поведение} name={"Поведение при террорестических угрозах"} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Students;
