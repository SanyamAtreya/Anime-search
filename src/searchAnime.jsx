import React from 'react';
import AnimeCard from "./animecard";

const SearchAnime = (props) => {
    return (
        
    <div className="anime-container">    
        <div className="anime-form">
            <form
            onSubmit={props.HandleSearch}>
                <input
                    className="search-box"
                    type="search"
                    placeholder="Search for an anime.."
                    required
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)}
                />
            </form>
        </div>
        <div className="anime-list">
            {props.animeList.map(anime => (
                <AnimeCard
                   anime={anime}
                   key={anime.mal_id}
                />
            ))}
        </div>
    </div>
    )
}

export default SearchAnime;
