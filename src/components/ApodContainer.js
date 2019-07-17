import React, { useState, useEffect } from "react";
import axios from "axios"
import ApodImage from "./ApodImage";

export default function Header(props) {
    const [pic, setPic] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-03-25')
        .then(res => {
            const imgSrc = res.data.url;
            setPic(imgSrc);
        })
    }, [pic])

    return (
        <div className='apod-container'>
            <ApodImage src={pic} />
        </div>
    )
}