import React, { useEffect, useState } from "react";
import Header from "./header";
import SearchAnime from "./searchAnime";
import Top10 from "./top10";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  
  const[ animeList, SetAnimeList] = useState([]);
  const[ topAnime, SetTopAnime] = useState([]);
  const[ search, SetSearch] = useState("");
     
  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    .then(res => res.json());

    SetTopAnime(temp.top.slice(0, 10));
  }

  const HandleSearch = e => {
    e.preventDefault();

    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=9&page=1`)
    .then(res => res.json());
    SetAnimeList(temp.results);
  
  } 

  useEffect(() => {
    GetTopAnime();
    console.log("Top Anime");
  }, []);

  console.log(topAnime);
   
  return (
    <div>
    <Header />
    <div className="section">
      <div className="inner">
        <div className="row">
          <Top10 topAnime={topAnime} />
          <SearchAnime 
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            animeList={animeList}
          />
        </div>
      </div>    
    </div>
    </div>
  )
}

export default App;
