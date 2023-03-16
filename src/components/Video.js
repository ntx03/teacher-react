import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuItemPage from "./MenuItemPage";
import Footer from "./Footer";
import Header from "./Header";

function Video() {
  let location = useLocation();

  const [video, setVideo] = useState(false);
  const [school, setSchool] = useState(false);

  useEffect(() => {
    if (location.pathname === "/video/main") {
      setVideo(true);
    } else {
      setVideo(false);
    }
    if (location.pathname === "/video/school") {
      setSchool(true);
    } else {
      setSchool(false);
    }
  });

  return (
    <>
      <Header />
      <main className="content">
        <div className="parents__menu">
          <ul className="parents__menu-container">
            <MenuItemPage way={"/video/main"} text={"ПРОФОРИЕНТАЦИЯ"} onPage={video} />
            <MenuItemPage way={"/video/school"} text={"ШКОЛЬНАЯ ЖИЗНЬ"} onPage={school} />
          </ul>
        </div>
        <section className="video">
          <div className="video__container">
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Video;
