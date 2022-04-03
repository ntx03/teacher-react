import React from 'react';
import VideoCard from './VideoCard';
import MenuItem from './MenuItem';
import { Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

function Video() {

    let location = useLocation();

    const [video, setVideo] = useState(false);
    const [school, setSchool] = useState(false);

    useEffect(() => {
        if (location.pathname === '/video') {
            setVideo(true);
        } else { setVideo(false); }
        if (location.pathname === '/video/school') {
            setSchool(true);
        } else { setSchool(false); }
    }
    )

    return (
        <main className="content">
            <div className="parents__menu">
                <ul className="parents__menu-container">
                    <MenuItem way={'/video'} text={'ПРОФОРИЕНТАЦИЯ'} onPage={video} />
                    <MenuItem way={'/video/school'} text={'ШКОЛЬНАЯ ЖИЗНЬ'} onPage={school} />
                </ul>
            </div>
            <section className="video">
                <div className="video__container">
                    <Route exact path='/video'>
                        <p className="video__text-heaher">Выбирай свою будущую профессию уже сейчас!</p>
                        <div className="video__block">
                            <VideoCard
                                link={"https://www.youtube.com/embed/LNrzbiWHmgM"}
                                name={'КНАУФ, основанная в 1932 году, является семейной компанией попроизводству строительных материалов и систем, в которой трудится множество сотрудников различных национальностей.'} />
                            <VideoCard
                                link={"https://www.youtube.com/embed/sYxEFRkmpQU"}
                                name={'СИБУР Тобольск (ранее — Тобольский нефтехимический комбинат,Тобольск-Нефтехим) — российское (ранее советское) нефтехимическое предприятие, расположенное в городе Тобольске Тюменской области. Предназначено для глубокой переработки широкой фракции лёгких углеводородов.'} />
                            <VideoCard
                                link={"https://www.youtube.com/embed/oSSVUKgSAew"}
                                name={'«Тобольск-Полимер» — реализованный компанией СИБУР в рамках государственной программы, проект крупнейшего в России промышленного комплекса по переработке компонентов попутного нефтяного газа (ПНГ) с получением востребованных марок полимеров. Входит в тройку крупнейших подобных производств в мире[1]. Расположен в городе Тобольске Тюменской области.'} />
                            <VideoCard
                                link={"https://www.youtube.com/embed/UKgUznabBGU"}
                                name={'АО «Аминосиб» сегодня – это инвестиционный проект федерального значения, а вскоре - крупнейший производитель аминокислот в России, современное высокотехнологичное предприятие по глубокой переработке пшеницы, производительность которого при выходе на полную мощность составит более 120 тыс. тонн зерна в год.'} />
                            <VideoCard
                                link={"https://www.youtube.com/embed/6GMDmirH6ts"}
                                name={'Как устроена АЭС? Как она работает? Надежность АЭС. Редактор сюжета: Александр Колтовой.'} />
                            <VideoCard
                                link={"https://www.youtube.com/embed/Pw0jPG6hHXA"}
                                name={'Описание: Документальный фильм о доменной печи "Россиянка", выпущенный телеканалом "Россия-24". Железо - один из самых распространенных металлов, но в чистом виде он не встречается.  Чтобы извлечь железо из земли, пришлось организовать сложный технологический процесс. Только в XIV веке была изобретена доменная печь - большая металлургическая, вертикально расположенная плавильная печь шахтного типа для выплавки чугуна и ферросплавов из железорудного сырья. Доменная печь открыла новую страницу истории - железную эру и подарила человеку железную дорогу и Эйфелеву башню, автомобиль и небоскреб.'} />
                            <VideoCard
                                link={"https://www.youtube.com/embed/IjzBK53xL5M"}
                                name={'Виртуальная экскурсия по СХПК ЖЕЛНИНСКИЙ Вагайского района.'} />

                        </div>
                    </Route>
                    <Route path='/video/school'>
                        <p className="video__text-heaher">Когда мы вместе - это сила!</p>
                        <div className="video__block">
                            <VideoCard
                                link={"https://www.youtube.com/embed/w-zOnzGSjwY"}
                                name={'Флэшмоб ко Дню студента, учащиеся МАОУ исетской СОШ 1 поздравляют с Днём студента.'} />
                            <VideoCard
                                link={"https://www.youtube.com/embed/wOfpWlkbMes"}
                                name={'Флэшмоб - акция к Дню флага от РДШ, Отряд 3, летний оздоровительный лагерь.'} />
                            <VideoCard
                                link={"https://www.youtube.com/embed/HXd7Ub9i-Yo"}
                                name={'К Дню русского языка, который будет 21 февраля 6 а класс подготовил приветствия на разных языках мира.'} />
                        </div>
                    </Route>

                </div>
            </section>
        </main>
    );
}

export default Video;