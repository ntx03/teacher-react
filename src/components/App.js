import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Esse from "./Esse";
import Video from "./Video";
import Colleagues from "./Colleagues";
import AboutMe from "./AboutMe";
import Students from "./Students";
import Parents from "./Parents";
import Photo from "./Photo";
import Contacts from "./Contacts";
import News from "./News";
import Popup from "./Popup";
import Admin from "./admin/Admnin";
import StudentsExaminations from "./students/StudentsExaminations";
import StudentsPlanform from "./students/StudentsPlanform";
import ColleaguesWork from "./colleagues/colleaguesWork";
import ColleaguesMain from "./colleagues/colleagues";
import VideoMain from "./video/VideoMain";
import VideoScool from "./video/VideoScool";

function App() {
  const [popup, setPopup] = useState(false);
  const [item, setItem] = useState({});

  // закрытие попапа
  const closePopup = () => {
    setPopup(false);
  };
  // закрываем попап по esc
  useEffect(() => {
    if (popup) {
      const closePopupEsc = (evt) => {
        if (evt.key === "Escape") {
          document.removeEventListener("keydown", closePopupEsc);
          closePopup();
        }
      };
      document.addEventListener("keydown", closePopupEsc);
    }
  }, [popup]);

  return (
    <div className="app">
      <div className="page">
        {/* <Redirect from="/" to="/main" /> */}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Main item={setItem} isOpen={setPopup} />} />
          <Route path="/esse" element={<Esse />} />
          <Route path="/colleagues" element={<Colleagues />}>
            <Route path="main" element={<ColleaguesMain />} />
            <Route path="work" element={<ColleaguesWork />} />
          </Route>
          <Route path="/aboutme" element={<AboutMe item={setItem} isOpen={setPopup} />} />
          <Route path="/students" element={<Students />} />
          <Route path="/video" element={<Video />}>
            <Route path="main" element={<VideoMain />} />
            <Route path="school" element={<VideoScool />} />
          </Route>
          <Route path="/parents" element={<Parents />} />
          <Route path="/photo" element={<Photo item={setItem} isOpen={setPopup} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News item={setItem} isOpen={setPopup} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/students/platform" element={<StudentsPlanform />} />
          <Route path="/students/examination" element={<StudentsExaminations />} />
        </Routes>
      </div>

      <Popup isOpen={popup} onClose={closePopup} name={item.name} link={item.link} />
    </div>
  );
}

export default App;
