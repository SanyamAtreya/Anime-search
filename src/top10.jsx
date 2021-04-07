import React from 'react';

const Top10 = ({topAnime}) => {
    return (
        <div className="top-container col-lg-4 col-md-5 col-sm-5">
            <h2>Ranking By Popularity</h2>
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
