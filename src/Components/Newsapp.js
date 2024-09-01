import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
    const [search, setSearch] = useState("HEALTH");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "c01a3fa139fb47fb9f9b7208bb7e7af5";

    const getData = async () => {
        try{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0, 10);
        setNewsData(dt);
        }
        catch(error){
        console.error("Errorf fetching",error);
        }
    };

    useEffect(() => {
        getData();
    }, []); // Only run on initial load

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const userInput = (event) => {
        setSearch(event.target.value);
        getData(); // Trigger data fetch on button click
    };

    return (
        <div>
            <nav>
                <div>
                    <h1 style={{ fontWeight: 400, fontSize: "20px", fontFamily: "Fantasy", paddingLeft: 20 }}>Fit Focus</h1>
                </div>
                <ul>
                    <a style={{ fontWeight: 800, fontSize: "30px" }}>Elevate Your Wellbeing</a>
                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay Updated with TrendyNews</p>
            </div>
            <div className='categoryBtn'>
                <button onClick={userInput} value="Nutrition">Nutrition</button>
                <button onClick={userInput} value="Fitness">Fitness</button>
                <button onClick={userInput} value="Mental-health">Mental Health</button>
                <button onClick={userInput} value="Preventive Health">Preventive Health</button>
                <button onClick={userInput} value="Healthcare Services">Healthcare Services</button>
            </div>
            <div>
                {newsData ? <Card data={newsData} /> : null}
            </div>
        </div>
    );
};

export default Newsapp;
