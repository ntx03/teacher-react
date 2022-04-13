import { React, useState, useEffect } from 'react';
import VK from '../images/vk_color_white.svg'
import instagramm from '../images/instagram_color_white.svg';
import $ from 'jquery';

function Contacts() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    // оживляем инпуты поапап профиля(можно вводить данные)
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeText = (e) => {
        setDescription(e.target.value)
    }

    function submit() {
        // отправка формы 
        $(document).ready(function () {
            //E-mail Ajax Send
            $("form").submit(function () { //Change
                var th = $(this);
                $.ajax({
                    type: "POST",
                    url: "../mail.php", //Change
                    data: th.serialize()
                }).done(function () {
                    alert("Спасибо за сообщение!");
                    setTimeout(function () {
                        // Done Functions
                        th.trigger("reset");
                    }, 1000);
                });
                return false;
            });
        });
    }
    return (
        <main className="content">
            <section className="contacts">
                <h2 className="contacts__title">Контактная информация</h2>
                <div className="contacts__container">
                    <div className="contacts__information">
                        <div className="contacts__school-container">
                            <img className="contacts__icon" src={require("../images/school_icon.png")} alt="иконка школы" />
                            <p className="contacts__text-normal">Муниципальное автономное общеобразовательное учреждение
                                Исетская средняя общеобразовательная школа № 1 Исетского
                                района
                                Тюменской области.</p>
                        </div>
                        <div className="contacts__school-container">
                            <img className="contacts__icon" src={require("../images/location.png")} alt="иконка местоположения" />
                            <p className="contacts__text">Адрес:<span className="contacts__text-normal">626380, Тюменская
                                область, Исетский район, село Исетское, ул. Кирова,29.</span> </p>
                        </div>
                        <div className="contacts__school-container">
                            <img className="contacts__icon" src={require("../images/old-typical-phone.png")} alt="иконка с телефоном" />
                            <p className="contacts__text">Телефон:<span className="contacts__text-normal">+7 (34537)
                                2-10-51.</span></p>
                        </div>
                        <div className="contacts__school-container">
                            <img className="contacts__icon" src={require("../images/email.png")} alt="иконка почты" />
                            <p className="contacts__text">Электронная почта: <span
                                className="contacts__text-normal">nika1012@inbox.ru</span></p>
                        </div>
                        <div className="contacts__social-network">
                            <p className="contacts__text">Социальные сети:</p>
                            <a href={"https://vk.com/id6268101"} target='_blank'
                                className="contacts__social-network-link"><img className="contacts__social-network-icon"
                                    src={VK} alt='логотип vk' /></a>
                            <a href={"https://www.instagram.com/navigator_detstva_to/"} target='_blank'
                                className="contacts__social-network-link"><img className="contacts__social-network-icon"
                                    src={instagramm} alt='логотип instagramm' /></a>
                        </div>
                    </div>
                    <div className="contacts__map">
                        <iframe className="contacts__box" frameBorder="0"
                            src={"https://yandex.ru/map-widget/v1/?um=constructor%3A2c0945238dd9075ae80d280cb605337be499c6c16056db4071d2ef253c7247d8&amp;source=constructor"}
                        ></iframe>
                    </div>
                </div>
                <div className="contacts__form-container">
                    <h2 className="contacts__text-header">Жду ваших сообщений</h2>
                    <form className="contacts__form" name="form_for_post_message">
                        <input type="hidden" name="project_name" value="сайт коротаева.рф"></input>
                        <input type="hidden" name="admin_email" value="anarverd@yandex.ru"></input>
                        <input type="hidden" name="form_subject" value="сообщение с сайта коротаева.рф"></input>
                        <input type="text" required placeholder="Имя и фамилия" value={name || ''} onChange={onChangeName} minLength="2" maxLength="40"
                            name="Имя" className="contacts__input"></input>

                        <textarea type="text" required placeholder="Текст сообщения" onChange={onChangeText} value={description || ''} minLength="2"
                            maxLength="1000" name="message" className="contact__textarea"></textarea>

                        <button id="button_form" className="contacts__button" type="submit" onClick={submit} >Отправить</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Contacts;