import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

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
    if (location.pathname === "/colleagues/main") {
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
              <MenuItemPage way={"/colleagues/main"} text={"ПОМОЩЬ ПЕДАГОГУ"} onPage={colleagues} />
              <MenuItemPage way={"/colleagues/work"} text={"РАБОЧИЕ ПРОГРАММЫ"} onPage={colleaguesWork} />
            </ul>
          </div>
          <div className="greetings__container">
            <ul className="parents__list">
              <Outlet />
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Colleagues;
