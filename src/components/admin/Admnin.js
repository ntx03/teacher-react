import { React, useState, useEffect } from "react";
import "./Admin.css";

function Admin() {
  return (
    <div className="admin">
      <p className="admin__title">Административная панель</p>
      <div className="admin__container">
        <p className="admin__lable">Логин</p>
        <input className="admin__input" />
      </div>
      <div className="admin__container">
        <p className="admin__lable">Пароль</p>
        <input className="admin__input" />
      </div>
    </div>
  );
}
export default Admin;
