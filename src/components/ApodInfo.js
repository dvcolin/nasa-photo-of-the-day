import React from "react";
import ApodTitle from "./ApodTitle";
import ApodDescription from "./ApodDescription";
import { Container } from 'semantic-ui-react';

export default function ApodInfo({title, desc}) {
    return (
        <Container text className='apod-info'>
            <ApodTitle text={title} />
            <ApodDescription text={desc} />
        </Container>
    )
}