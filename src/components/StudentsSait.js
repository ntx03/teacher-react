import React from 'react';

function StudentsWebsait({ name, link, title, linkImage, altImage }) {
    return (
        <div className="students__card">
            <p className="students__header">{name}</p>
            <a className="students__image-container" href={link}
                title={title}>
                <img className="students__image" src={linkImage}
                    alt={altImage} />
            </a>
        </div>
    );
}

export default StudentsWebsait;