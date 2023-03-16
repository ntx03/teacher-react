import React from "react";
import VideoCard from "./VideoCard";
import MenuItem from "./MenuItem";
import { Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuItemPage from "./MenuItemPage";
import Footer from "./Footer";
import Header from "./Header";

function Video() {
  let location = useLocation();

  const [video, setVideo] = useState(false);
  const [school, setSchool] = useState(false);

  useEffect(() => {
    if (location.pathname === "/video") {
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
            <MenuItemPage
              way={"/video"}
              text={"ПРОФОРИЕНТАЦИЯ"}
              onPage={video}
            />
            <MenuItemPage
              way={"/video/school"}
              text={"ШКОЛЬНАЯ ЖИЗНЬ"}
              onPage={school}
            />
          </ul>
        </div>
        <section className="video">
          <div className="video__container">
            <Route exact path="/video">
              <p className="video__text-heaher">
                Выбирай свою будущую профессию уже сейчас!
              </p>
              <div className="video__block">
                <VideoCard
                  link={"https://vk.com/video4391481_456239046"}
                  name={
                    "КНАУФ, основанная в 1932 году, является семейной компанией попроизводству строительных материалов и систем, в которой трудится множество сотрудников различных национальностей."
                  }
                />
                <VideoCard
                  link={
                    "https://rutube.ru/play/embed/bfcc7954fa0379b49ee322931ec65a77"
                  }
                  name={
                    "СИБУР Тобольск (ранее — Тобольский нефтехимический комбинат,Тобольск-Нефтехим) — российское (ранее советское) нефтехимическое предприятие, расположенное в городе Тобольске Тюменской области. Предназначено для глубокой переработки широкой фракции лёгких углеводородов."
                  }
                />
                <VideoCard
                  link={
                    "https://rutube.ru/play/embed/ed0f54b70b230b7d4305a56ea1c413b8"
                  }
                  name={
                    "«Тобольск-Полимер» — реализованный компанией СИБУР в рамках государственной программы, проект крупнейшего в России промышленного комплекса по переработке компонентов попутного нефтяного газа (ПНГ) с получением востребованных марок полимеров. Входит в тройку крупнейших подобных производств в мире[1]. Расположен в городе Тобольске Тюменской области."
                  }
                />
                <VideoCard
                  link={"https://www.youtube.com/embed/UKgUznabBGU"}
                  name={
                    "АО «Аминосиб» сегодня – это инвестиционный проект федерального значения, а вскоре - крупнейший производитель аминокислот в России, современное высокотехнологичное предприятие по глубокой переработке пшеницы, производительность которого при выходе на полную мощность составит более 120 тыс. тонн зерна в год."
                  }
                />
                <VideoCard
                  link={"https://www.youtube.com/embed/6GMDmirH6ts"}
                  name={
                    "Как устроена АЭС? Как она работает? Надежность АЭС. Редактор сюжета: Александр Колтовой."
                  }
                />
                <VideoCard
                  link={"https://www.youtube.com/embed/Pw0jPG6hHXA"}
                  name={
                    'Описание: Документальный фильм о доменной печи "Россиянка", выпущенный телеканалом "Россия-24". Железо - один из самых распространенных металлов, но в чистом виде он не встречается.  Чтобы извлечь железо из земли, пришлось организовать сложный технологический процесс. Только в XIV веке была изобретена доменная печь - большая металлургическая, вертикально расположенная плавильная печь шахтного типа для выплавки чугуна и ферросплавов из железорудного сырья. Доменная печь открыла новую страницу истории - железную эру и подарила человеку железную дорогу и Эйфелеву башню, автомобиль и небоскреб.'
                  }
                />
                <VideoCard
                  link={"https://www.youtube.com/embed/IjzBK53xL5M"}
                  name={
                    "Виртуальная экскурсия по СХПК ЖЕЛНИНСКИЙ Вагайского района."
                  }
                />
              </div>
            </Route>
            <Route path="/video/school">
              <p className="video__text-heaher">Когда мы вместе - это сила!</p>
              <div className="video__block">
                <VideoCard
                  link={
                    "https://rutube.ru/play/embed/c4074c4bb47d0c6206689241edfe0b59"
                  }
                  name={
                    "Флэшмоб ко Дню студента, учащиеся МАОУ исетской СОШ 1 поздравляют с Днём студента."
                  }
                />
                <VideoCard
                  link={
                    "https://rutube.ru/play/embed/c33b525d6c342f093579ddcca6674e22"
                  }
                  name={
                    "Флэшмоб - акция к Дню флага от РДШ, Отряд 3, летний оздоровительный лагерь."
                  }
                />
                <VideoCard
                  link={
                    "https://rutube.ru/play/embed/17c75c85f980f94c7d7c5bb208d93185"
                  }
                  name={
                    "К Дню русского языка, который будет 21 февраля 6 а класс подготовил приветствия на разных языках мира."
                  }
                />
              </div>
            </Route>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Video;
