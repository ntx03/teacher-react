import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Admin.css";

function Admin() {
  const [auth, setAuth] = useState(false);
  const [errorAuth, setErrorAuth] = useState(false);

  const autorization = () => {
    setAuth(true);
  };
  return (
    <div className="admin">
      <div className="admin__wrapper-link">
        <Link className="admin__link" to="/">
          На главную
        </Link>
      </div>
      <p className="admin__title">Авторизация пользователя</p>
      <div className="admin__container">
        <p className="admin__lable">Логин:</p>
        <input
          type="text"
          className="admin__input"
          placeholder="Введите логин"
        />
      </div>
      <div className="admin__container">
        <p className="admin__lable">Пароль:</p>
        <input
          type="password"
          className="admin__input"
          placeholder="Введите пароль"
        />
      </div>
      <div className="admin__text-error-box">
        <p
          className={errorAuth ? "admin__text-error" : "admin__text-error_none"}
        >
          Неправильный логин или пароль
        </p>
      </div>
      <button className="admin__button" onClick={autorization}>
        Войти
      </button>
    </div>
  );
}
export default Admin;
