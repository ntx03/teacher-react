import React from 'react';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

function Header() {

    // хук useLocation();
    let location = useLocation();

    // изменяем состояние цвета меню при клике 
    const [main, setMain] = useState(false);
    const [colleagues, setColleagues] = useState(false);
    const [aboutMe, setAboutMe] = useState(false);
    const [students, setStudents] = useState(false);
    const [video, setVideo] = useState(false);
    const [parents, setParents] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [contacts, setContacts] = useState(false);
    const [news, setNews] = useState(false);

    // состояние кнопки меню
    const [button, setButton] = useState(false);

    // меняем цвет меню в зависимости от того, где находится пользователь
    useEffect(() => {
        if (location.pathname === '/') {
            setMain(true); setColleagues(false); setVideo(false); setStudents(false);
        } else { setMain(false); }
        if (location.pathname === '/colleagues/work') {
            setColleagues(true);
        }
        if (location.pathname === '/colleagues') {
            setColleagues(true); setVideo(false); setStudents(false);
        }
        if (location.pathname === '/aboutme') {
            setAboutMe(true); setColleagues(false); setVideo(false); setStudents(false);
        } else {
            setAboutMe(false);
        }
        if (location.pathname === '/students') {
            setStudents(true); setColleagues(false); setVideo(false);
        }
        if (location.pathname === '/students/platform') {
            setStudents(true);
        }
        if (location.pathname === '/students/examination') {
            setStudents(true);
        }
        if (location.pathname === '/video') {
            setVideo(true); setColleagues(false); setStudents(false);
        }
        if (location.pathname === '/video/school') {
            setVideo(true);
        }
        if (location.pathname === '/parents') {
            setParents(true); setColleagues(false); setVideo(false); setStudents(false);
        } else { setParents(false); }
        if (location.pathname === '/photo') {
            setPhoto(true); setColleagues(false); setVideo(false); setStudents(false);
        } else { setPhoto(false); }
        if (location.pathname === '/contacts') {
            setContacts(true); setColleagues(false); setVideo(false); setStudents(false);
        } else { setContacts(false); }
        if (location.pathname === '/news') {
            setNews(true); setColleagues(false); setVideo(false); setStudents(false);
        } else { setNews(false); }
    })

    // открываем меню
    function onMenu() {
        setButton(true);
    }

    // закрываем меню
    function offMenu() {
        setButton(false);
    }

    return (
        <header className="header">
            <div className="header__title-container">
                <p className="header__title">Учитель географии</p>
                <p className="header__title">Коротаева Анна Юрьевна</p>
                <p className="header__title">МАОУ Исетская СОШ №1 Исетского района Тюменской области</p>
            </div>
            <div className="header__slogan-container">
                <h3 className="header__slogan">"Ученик -это не сосуд, который надо наполнить,</h3>
                <h3 className="header__slogan">а факел,
                    который надо зажечь"</h3>
                <p className="header__slogan-autor">В.А.Сухомлинский</p>
            </div>
            <div className="header__menu-button-container">
                <button className="header__menu-button" onClick={onMenu}></button>
                <p className="header__menu-button-text">МЕНЮ</p>
            </div>
            <div className={button ? "header__menu header__menu_open" : "header__menu"}>
                <ul className="header__menu-container header__menu-container_row">
                    <MenuItem way={'/'} text={"ГЛАВНАЯ"} onPage={main} onClick={offMenu} />
                    <MenuItem way={'/aboutme'} text={"О СЕБЕ"} onPage={aboutMe} onClick={offMenu} />
                    <MenuItem way={'/students'} text={"УЧЕНИКАМ"} onPage={students} onClick={offMenu} />
                    <MenuItem way={'/parents'} text={"РОДИТЕЛЯМ"} onPage={parents} onClick={offMenu} />
                    <MenuItem way={'/colleagues'} text={"КОЛЛЕГАМ"} onPage={colleagues} onClick={offMenu} />
                </ul>
                <ul className="header__menu-container header__menu-container_row">
                    <MenuItem way={'/video'} text={"ВИДЕО"} onPage={video} onClick={offMenu} />
                    <MenuItem way={'/photo'} text={"ФОТО"} onPage={photo} onClick={offMenu} />
                    <MenuItem way={'/contacts'} text={"КОНТАКТЫ"} onPage={contacts} onClick={offMenu} />
                    <MenuItem way={'/news'} text={"НОВОСТИ"} onPage={news} onClick={offMenu} />
                </ul>
            </div>
        </header>
    );
}

export default Header;

