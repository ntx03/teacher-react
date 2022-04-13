import React from 'react';
import { Link } from 'react-router-dom';
import korotaeva from "../images/изображение_viber_2022-02-01_21-57-12-418.jpg"

function Main({ item, isOpen }) {

    function handleClick(e) {
        isOpen(true);
        const target = e.target;
        return item({
            name: target.alt,
            link: target.src,
        })
    }
    return (
        <main className="content">
            <section className="greetings">
                <h2 className="greetings__title">Здравствуйте, уважаемые коллеги, гости!</h2>
                <h2 className="greetings__title">Вас приветствует учитель географии Коротаева Анна Юрьевна!</h2>
                <div className="greetings__container">
                    <div className="greetings__image-container">
                        <img className="greetings__image" onClick={handleClick} src={korotaeva}
                            alt="Анна Коротаева - учитель географии." />
                    </div>
                    <div className="greetings__container-text">
                        <p className="greetings__text"> Данный сайт адресован учителям, учащимся и их родителям.
                            Материалы сайта могут быть полезны также педагогам дополнительного образования, методистам.
                            На страницах сайта вы можете познакомиться с авторскими разработками уроков, статьями по
                            актуальным вопросам преподавания географии, материалами к учебным
                            занятиям.</p>
                        <p className="greetings__text"> Цель создания сайта - формирование информационно-образовательного
                            пространства
                            для взаимодействия c коллегами, учащимися и их родителями.</p>
                        <p className="greetings__text">Буду рада сотрудничеству с вами!</p>
                        <p className="greetings__text">Предлагаю Вам прочитать моё эссе под названием "Я учитель!"</p>
                        <div className="header__button-container">
                            <button className="header__button-esse"><Link to="/esse" className="header__button">Прочитать</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Main;
