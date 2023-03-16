import React from "react";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import ParentsDocument from "./ParentsDocument";
import Викторина from "../documents/teachers/Викторина Тюм обл.docx";
import Геоинформационные_технологии from "../documents/teachers/геоинформационные технологии на уроках географии.pptx";
import Игры_на_уроках_географии from "../documents/teachers/ИГРЫ НА УРОКАХ ГЕОГРАФИИ.pptx";
import Ландшафтная_карта from "../documents/teachers/Ландшафтная карта.jpg";
import Оценочная_карта from "../documents/teachers/Оценочная карта.jpg";
import Подход from "../documents/teachers/практико ориентированный подход.docx";
import Методы_обучения from "../documents/teachers/Презентация на тему Интерактивные методы обучения .ppt";
import Тюменская_область from "../documents/teachers/Тюменская область.ppt";
import Шестой_класс_аннотация from "../documents/teachers/work_programm/6 класс аннотация 2021-22.docx";
import Пятый_класс_аннотация from "../documents/teachers/work_programm/аннотация 5 класс.docx";
import Программа from "../documents/teachers/work_programm/6 класс 2021-22.docx";
import Аннотация from "../documents/teachers/work_programm/Аннотация 6 класс 8 вид.docx";
import Седьмой_класс_аннотация from "../documents/teachers/work_programm/Аннотация 7 класс.docx";
import Восьмой_класс_аннотация from "../documents/teachers/work_programm/Аннотация 8 класс.docx";
import Девятый_класс_аннотация from "../documents/teachers/work_programm/аннотация 9 класс.docx";
import Одиннадцатый_класс_аннотация from "../documents/teachers/work_programm/Аннотация11 б.docx";
import Десятый_класс_аннотация from "../documents/teachers/work_programm/Аннотация 10 класс.docx";
import Планирование from "../documents/teachers/work_programm/география 8 класс планирование.docx";
import КТП_восьмой_класс from "../documents/teachers/work_programm/ктп 8 класс климанова.docx";
import Рабочая_программа from "../documents/teachers/work_programm/рабочая программа 5 класс.docx";
import Рабочая_программа_шестой_класс from "../documents/teachers/work_programm/рабочая программа 6 класс 8 вид.docx";
import Рабочая_программа_седьмой_класс from "../documents/teachers/work_programm/рабочая программа 7 класса.doc";
import Рабочая_программа_девятый_класс from "../documents/teachers/work_programm/рабочая программа 9 класс.docx";
import Рабочая_программа_десятый_класс from "../documents/teachers/work_programm/рабочая программа 10 класс.docx";
import Рабочая_программа_11_класс from "../documents/teachers/work_programm/рабочая программа 11 б.docx";
import MenuItemPage from "./MenuItemPage";
import Footer from "./Footer";
import Header from "./Header";

function Colleagues() {
  // хук useLocation();
  let location = useLocation();

  const [colleaguesWork, setColleaguesWork] = useState(false);
  const [colleagues, setColleagues] = useState(false);

  // меняем цвет меню в зависимости от того, где находится пользователь
  useEffect(() => {
    if (location.pathname === "/colleagues/work") {
      setColleaguesWork(true);
    } else {
      setColleaguesWork(false);
    }
    if (location.pathname === "/colleagues") {
      setColleagues(true);
    } else {
      setColleagues(false);
    }
  });

  return (
    <>
      <Header />
      <main className="content">
        <section className="greetings">
          <div className="parents__menu">
            <ul className="parents__menu-container">
              <MenuItemPage
                way={"/colleagues"}
                text={"ПОМОЩЬ ПЕДАГОГУ"}
                onPage={colleagues}
              />

              <MenuItemPage
                way={"/colleagues/work"}
                text={"РАБОЧИЕ ПРОГРАММЫ"}
                onPage={colleaguesWork}
              />
            </ul>
          </div>
          <div className="greetings__container">
            <ul className="parents__list">
              <Route exact path="/colleagues">
                <ParentsDocument
                  name={"Викторина Тюменской области"}
                  nameLink={"СКАЧАТЬ"}
                  href={Викторина}
                />
                <ParentsDocument
                  name={"Геоинформационные технологии на уроках географии"}
                  nameLink={"СКАЧАТЬ"}
                  href={Геоинформационные_технологии}
                />
                <ParentsDocument
                  name={"Игры на уроках географии"}
                  nameLink={"СКАЧАТЬ"}
                  href={Игры_на_уроках_географии}
                />
                <ParentsDocument
                  name={"Ландшафтная карта Исетского района"}
                  nameLink={"СКАЧАТЬ"}
                  href={Ландшафтная_карта}
                />
                <ParentsDocument
                  name={"Оценочная карта Исетского района"}
                  nameLink={"СКАЧАТЬ"}
                  href={Оценочная_карта}
                />
                <ParentsDocument
                  name={"Практико-ориентированный подход на уроках географии"}
                  nameLink={"СКАЧАТЬ"}
                  href={Подход}
                />
                <ParentsDocument
                  name={'Презентация на тему "Интерактивные методы обучения'}
                  nameLink={"СКАЧАТЬ"}
                  href={Методы_обучения}
                />
                <ParentsDocument
                  name={
                    'Презентация на тему "Тюменская область вчера и сегодня'
                  }
                  nameLink={"СКАЧАТЬ"}
                  href={Тюменская_область}
                />
              </Route>
              <Route path="/colleagues/work">
                <ParentsDocument
                  name={`Аннотация
                                    О.А. Климанова, В.В. Климанов, Э.В. Ким
                                    География. Землеведение.
                                    6 класс (34 часа, 1 раз в неделю)`}
                  nameLink={"СКАЧАТЬ"}
                  href={Шестой_класс_аннотация}
                />
                <ParentsDocument
                  name={"Рабочая программа по географии 6 класс"}
                  nameLink={"СКАЧАТЬ"}
                  href={Программа}
                />
                <ParentsDocument
                  name={`Аннотация
                                    О.А. Климанова, В.В. Климанов, Э.В. Ким
                                    География. Землеведение.
                                    5 класс (34 часа, 1 раз в неделю)`}
                  nameLink={"СКАЧАТЬ"}
                  href={Пятый_класс_аннотация}
                />
                <ParentsDocument
                  name={"Аннотация 6 класс 8 вид"}
                  nameLink={"СКАЧАТЬ"}
                  href={Аннотация}
                />
                <ParentsDocument
                  name={`Аннотация
                                    О.А. Климанова, В.В. Климанов, Э.В. Ким
                                    География. Землеведение.
                                    7 класс (68 часов, 2 раза в неделю)`}
                  nameLink={"СКАЧАТЬ"}
                  href={Седьмой_класс_аннотация}
                />
                <ParentsDocument
                  name={`Аннотация
                                    А.И. Алексеев, В. А. Низовцев, Э.В. Ким
                                    География. Землеведение.
                                    8 класс (68 часов, 2 раз в неделю)`}
                  nameLink={"СКАЧАТЬ"}
                  href={Восьмой_класс_аннотация}
                />
                <ParentsDocument
                  name={`А.И. Алексеев, В.А. Низовцев, Э. В. Ким
                                    География. Хозяйство России. Хозяйство и географические районы
                                    9 класс (68 часов, 2 раз в неделю)`}
                  nameLink={"СКАЧАТЬ"}
                  href={Девятый_класс_аннотация}
                />
                <ParentsDocument
                  name={`АННОТАЦИЯ
                                    Максаковский В. П.
                                    Экономическая и социальная география мира.
                                    10 класс (34 часа, 1 раз в неделю).`}
                  nameLink={"СКАЧАТЬ"}
                  href={Десятый_класс_аннотация}
                />
                <ParentsDocument
                  name={`Аннотация
                                    Максаковский В. П.
                                    Экономическая и социальная география мира.
                                    11 класс (34 часа, 1 раз в неделю).`}
                  nameLink={"СКАЧАТЬ"}
                  href={Одиннадцатый_класс_аннотация}
                />
                <ParentsDocument
                  name={`Домогацких Е. М., Алексеевский Н. И.
                                    География: физическая география России.
                                    8 класс (68 часов, 2 раза в неделю).`}
                  nameLink={"СКАЧАТЬ"}
                  href={Планирование}
                />
                <ParentsDocument
                  name={`ктп 8 класс климанова`}
                  nameLink={"СКАЧАТЬ"}
                  href={КТП_восьмой_класс}
                />
                <ParentsDocument
                  name={`Рабочая программа 5 класс`}
                  nameLink={"СКАЧАТЬ"}
                  href={Рабочая_программа}
                />
                <ParentsDocument
                  name={`рабочая программа 6 класс 8 вид`}
                  nameLink={"СКАЧАТЬ"}
                  href={Рабочая_программа_шестой_класс}
                />
                <ParentsDocument
                  name={`Программа курса «География. Страноведение» (7 класс)
                                    О.А. Климанова, В.В. Климанов
                                    (68 часов, 2 часа в неделю)`}
                  nameLink={"СКАЧАТЬ"}
                  href={Рабочая_программа_седьмой_класс}
                />
                <ParentsDocument
                  name={`Рабочая программа по географии 9 класс`}
                  nameLink={"СКАЧАТЬ"}
                  href={Рабочая_программа_девятый_класс}
                />
                <ParentsDocument
                  name={`Рабочая программа 10 класс`}
                  nameLink={"СКАЧАТЬ"}
                  href={Рабочая_программа_десятый_класс}
                />
                <ParentsDocument
                  name={`Рабочая программа
                                    Максаковский В. П.
                                    Экономическая и социальная география мира.
                                    11 класс (34 часа, 1 раз в неделю).`}
                  nameLink={"СКАЧАТЬ"}
                  href={Рабочая_программа_11_класс}
                />
              </Route>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Colleagues;
