import { useState } from 'react';
import axios from 'axios';
import './Featured.css'

const API_KEY = "9bd9009223d3fc910d3a5e26ecccb859";

export default function Featured({ type, fetchUrl }) {
    const [data, setData] = useState([]);

    const handleOptionClick = async (selectedOption) => {
        try {
            const response = await axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=${selectedOption}`); // Replace with your API endpoint
            const data = response.data; // Assuming the API returns data in JSON format
            setData(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option onClick={() => handleOptionClick('28')} value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
        </div>
    )
}