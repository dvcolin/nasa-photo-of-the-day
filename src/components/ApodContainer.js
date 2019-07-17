import React, { useState, useEffect } from "react";
import axios from "axios"
import ApodInfo from "./ApodInfo";
import ApodImageContainer from "./ApodImageContainer";

export default function ApodContainer({dateUrl}) {
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
            <ApodImageContainer date={date} img={pic} />
            <ApodInfo title={title} desc={desc} />
        </div>
    )
}