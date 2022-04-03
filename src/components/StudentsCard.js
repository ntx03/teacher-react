import React from 'react';

function StudentsCard({ link, name }) {
    return (
        <div className="students__card">
            <p className="students__header">{name}</p>
            <div className="students__image-container">
                <img className="students__image" src={link}
                    alt={name} />
            </div>
            <a className="students__link" href={link} download>СКАЧАТЬ</a>
        </div>
    );
}

export default StudentsCard;