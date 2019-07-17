import React from "react";
import ApodTitle from "./ApodTitle";
import ApodDescription from "./ApodDescription";

export default function ApodInfo({title, desc}) {
    return (
        <div className='apod-info'>
            <ApodTitle text={title} />
            <ApodDescription text={desc} />
        </div>
    )
}