import React from 'react';

function NewsBlock({ data, header, text }) {
    return (
        <ul className="news__name">
            <li>
                <p className="news__data">{data}</p>
            </li>
            <li>
                <h2 className="news__header">{header}</h2>
            </li>
            <li>
                <p className="news__text">{text}</p>
            </li>
        </ul>
    );
}

export default NewsBlock;