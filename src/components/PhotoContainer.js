import React from 'react';

function PhotoContainer({ link, name }) {
    return (
        <div className="photo__container">
            <img className="photo__image"
                src={link}
                alt={name} />
        </div>
    );
}

export default PhotoContainer;