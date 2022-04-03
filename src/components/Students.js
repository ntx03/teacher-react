import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import MenuItem from './MenuItem';
import StudentsCard from './StudentsCard';
import StudentsWebsait from './StudentsSait';
import VideoCard from './VideoCard';
import kids6 from '../documents/kids/6.jpg';
import на_улице from '../documents/kids/на улице.jpg'
import при_пожаре from '../documents/kids/по пожару.jpg'
import школа from '../documents/kids/Пямятка-Дорога-в-школу-и-обратно.jpg'
import советы from '../documents/kids/Советы_начинающим_велосипедистам.jpg'
import поведение from '../documents/kids/террор.jpeg'

function Students() {

    let location = useLocation();

    const [students, setStudents] = useState(false);
    const [platform, setPlatform] = useState(false);
    const [examination, setExamination] = useState(false);

    // меняем цвет меню в зависимости от того, где находится пользователь
    useEffect(() => {
        if (location.pathname === '/students') {
            setStudents(true);
        } else {
            setStudents(false);
        }
        if (location.pathname === '/students/platform') {
            setPlatform(true);
        } else { setPlatform(false); }
        if (location.pathname === '/students/examination') {
            setExamination(true);
        } else { setExamination(false); }
    }
    )

    return (
        <main className="content">
            <div className="parents__menu">
                <ul className="parents__menu-container">
                    <MenuItem way={'/students'} text={'ПРАВИЛА БЕЗОПАСНОСТИ'} onPage={students} />
                    <MenuItem way={'/students/platform'} text={'ПЛАТФОРМЫ ПОМОЩНИКИ'} onPage={platform} />
                    <MenuItem way={'/students/examination'} text={'ПОДГОТОВКА К ЭКЗАМЕНАМ'} onPage={examination} />
                </ul>
            </div>
            <section className="students">
                <div className="students__container">
                    <div className="students__cards-container">
                        <Route exact path='/students'>
                            <StudentsCard link={kids6} name={'Безопасное поведение на льду водоема'} />
                            <StudentsCard link={на_улице} name={'Безопасное поведение на улице'} />
                            <StudentsCard link={при_пожаре} name={'Безопасное поведение при пожаре'} />
                            <StudentsCard link={школа} name={'Школа дорожной безопасности'} />
                            <StudentsCard link={советы} name={'Советы начинающим велосипедистам'} />
                            <StudentsCard link={поведение} name={'Поведение при террорестических угрозах'} />
                        </Route>
                        <Route exact path='/students/platform'>
                            <StudentsWebsait name={'САЙТ "РОССИЙСКАЯ ЭЛЕКТРОННАЯ ШКОЛА"'} l
                                ink={'https://resh.edu.ru/'}
                                title={'Российская электронная школа» – это интерактивные уроки по всему школьному курсу с 1 по 11 класс от лучших учителей страны, созданные для того, чтобы у каждого ребёнка была возможность получить бесплатное качественное общее образование.'}
                                linkImage={require('../images/российская информационная школа.jpg')}
                                altImage={'фотография главной страницы сайта Российская электронная школа'} />
                            <StudentsWebsait name={'САЙТ "Я КЛАСС"'}
                                link={'https://www.yaklass.ru/'}
                                title={'«ЯКласс» — образовательный интернет-ресурс для школьников, студентов, учителей и родителей. Начал работу в 2014 году. Сегодня онлайн-площадкой пользуются 12 миллионов пользователей из 50 000 школ России, Австрии, Армении, Беларуси, Германии, Индии, Казахстана, Кыргызстана, Латвии, Узбекистана,  Финляндии.Портал содержит онлайн-тренажёры  по школьной программе и автоматическую проверку домашних заданий. «ЯКласс» — выпускник акселератора ФРИИ, резидент программ «Сколково» и Microsoft. База ЯКласс содержит 1,6 триллиона заданий по 16 предметам школьной программы, ЕГЭ, ОГЭ и ВПР. 65 %  учащихся пользуются сервисом с мобильных устройств.'}
                                linkImage={require('../images/Я_класс.jpg')}
                                altImage={'фотография главной страницы сайта Я класс'} />
                            <StudentsWebsait name={'САЙТ "Учи.ру" — интерактивная образовательная онлайн-платформа'}
                                link={'https://uchi.ru/'}
                                title={'Учи.ру — интерактивная образовательная онлайн-платформа'}
                                linkImage={require('../images/учи_ру.jpg')}
                                altImage={'фотография главной страницы сайта Учи.ру'} />
                            <StudentsWebsait name={'САЙТ "Skysmart" — цифровая образовательная онлайн-платформа'}
                                link={'https://edu.skysmart.ru/'}
                                title={'Skysmar — цифровая образовательная онлайн-платформа'}
                                linkImage={require('../images/skysmart.jpg')}
                                altImage={'фотография главной страницы сайта Skysmar'} />
                            <StudentsWebsait name={'САЙТ "Атлас новых профессий" - Ваш навигатор по рынку труда будущего'}
                                link={'https://new.atlas100.ru/'}
                                title={'Ваш навигатор по рынку труда будущего'}
                                linkImage={require('../images/Атлас будущих професии.jpg')}
                                altImage={'фотография главной страницы сайта Атлас будущих професий'} />
                        </Route>
                        <Route exact path='/students/examination'>
                            <VideoCard
                                link={'https://www.youtube.com/embed/l5KlXJ_16LY'}
                                name={'Подготовка к ГИА. География 11 класс. 17.01.2020'} />
                            <VideoCard
                                link={'https://www.youtube.com/embed/D5f8jEhvVTg'}
                                name={'Подготовка к ГИА. География 9 класс. 29.03.2019'} />
                            <VideoCard
                                link={'https://www.youtube.com/embed/jy7kCkD5rBA'}
                                name={'Подготовка к ГИА. География 11 класс. 22.03.2019'} />
                            <VideoCard
                                link={'https://www.youtube.com/embed/JMrV5nhaLbA'}
                                name={'Подготовка к ГИА. География 9 класс. 22.10.2020'} />
                        </Route>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Students;