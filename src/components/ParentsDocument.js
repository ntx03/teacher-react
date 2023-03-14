import React from 'react';
import { Link } from 'react-router-dom';

function ParentsDocument({ name, href, nameLink }) {
    return (
        <li className="parents__document">
            <p className="parents__document-name">{name}</p>
            <a className="parents__document-link" href={href}
                download>{nameLink}</a>
        </li>
    );
}

export default ParentsDocument;