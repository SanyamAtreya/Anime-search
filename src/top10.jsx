import React from 'react';

const Top10 = ({topAnime}) => {
    return (
        <div className="top-container">
            <h3>Top Anime</h3>
            {topAnime.map(anime => (
                <a
                    href={anime.url}
                    target="_blank"
                    key={anime.mal_id}
                    rel="noreferrer"
                >
                    { anime.title }
                </a>
                
            ))}
        </div>
    )
}

export default Top10;
