import React from 'react';

function Popup({ name, link, isOpen, onClose }) {

    return (
        <div className={isOpen ? "popup_open" : "popup"}>
            <div className="popup__container-image">
                <button className="popup__icon popup__icon-image" onClick={onClose} type="button" aria-label="закрытие"></button>
                <img className="popup__image" src={link} alt={name} />
                <p className="popup__title-image">{name}</p>
            </div>
            <div onClick={onClose} className="popup__overlay"></div>
        </div>
    );
}

export default Popup;


