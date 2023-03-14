import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem({ way, text, onPage, onClick }) {
    return (
        <li className={onPage ? "header__menu-item_min-width header__menu-item_click" : "header__menu-item_min-width"} onClick={onClick}><Link to={way}
            className="header__menu-item">{text}  </Link> </li>

    );
}

export default MenuItem;