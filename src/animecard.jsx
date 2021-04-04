import React from 'react';

const AnimeCard = ({anime}) => {
    return (
        <div className="anime-card">
            <a
            href={anime.url}
            target="_blank"
            rel="noreferrer"
            >
                <figure>
                    <img
                        src={anime.image_url}
                        alt="..."
                    />
                </figure>
                <h3>{ anime.title }</h3>
            </a>    
        </div>
    )
}

export default AnimeCard;
