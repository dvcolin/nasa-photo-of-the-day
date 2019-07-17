import React, { useState, useEffect } from "react";
import axios from "axios"
import ApodImage from "./ApodImage";
import ApodTitle from "./ApodTitle";
import ApodDate from "./ApodDate";
import ApodDescription from "./ApodDescription";

export default function Header(props) {
    const dateUrl = `2018-03-25`;
    const [pic, setPic] = useState([]);
    const [title, setTitle] = useState([]);
    const [date, setDate] = useState([]);
    const [desc, setDesc] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateUrl}`)
        .then(res => {
            const imgSrc = res.data.hdurl;
            const imgTitle = res.data.title;
            const imgDate = res.data.date;
            const imgDesc = res.data.explanation;

            setPic(imgSrc);
            setTitle(imgTitle);
            setDate(imgDate);
            setDesc(imgDesc);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className='apod-container'>
            <ApodTitle text={title} />
            <ApodDate text={date} />
            <ApodImage src={pic} />
            <ApodDescription text={desc} />
        </div>
    )
}