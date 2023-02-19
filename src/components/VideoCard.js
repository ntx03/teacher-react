import React from 'react';

function VideoCard({ link, name }) {
    return (
        <div className="video__card">
            <div className="video__video-container">
                <iframe className="video__box" src={link}
                    title="YouTube video player"
                    webkitAllowFullScreen mozallowfullscreen allowFullScreen
                ></iframe>
            </div>
            <p className="video__text">{name}</p>
        </div>
    );
}
export default VideoCard;