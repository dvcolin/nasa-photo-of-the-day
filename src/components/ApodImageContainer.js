import React from "react";
import ApodDate from "./ApodDate";
import ApodImage from "./ApodImage";

export default function ApodImageContainer({date, img}) {
    return (
        <div className='apod-image-container'>
            <ApodDate text={date} />
            <ApodImage src={img} />
        </div>
    )
}