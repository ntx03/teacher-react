import React from 'react';

function PhotoContainer({ link, name, onClick }) {

    return (
        <div className="photo__container">
            <img className="photo__image" onClick={onClick}
                src={link}
                alt={name} />
        </div>
    );
}

export default PhotoContainer;