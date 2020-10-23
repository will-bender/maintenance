import React from 'react';
import logos from './assets/logos/index';
import styled from 'styled-components';

const MaintenanceLayout = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
const MaintenanceMessage = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`
const MessageTitle = styled.div`
    font-size: 5vw;
    margin-bottom: 15%;
    margin-top: 30%;

    text-align: left;
`;

const MessageSubtitle = styled.span`
    width: 65%;
    font-size: 2vw;
    text-align: left;
    margin-bottom: 2%;
`;

const MessageBody = styled.span`
    width: 80%;
    font-size: 1vw;
    text-align: left;
    margin-bottom: 5%;
    line-height: 140%;
`;


const MaintenanceImage = styled.img`
    width: 60%;
    object-fit: contain;
`
const OldSiteButton = styled.button`
    width: 80%;
    padding: 2% 10%;
    background-color: black;
    color: white;
    font-size: 1vw;
    font-weight: 700;
    outline: none;
    border: none;

`

const Maintenance = () => {
    return (
        <MaintenanceLayout >
            <MaintenanceMessage>
                <MessageTitle>{"workharder.io"}</MessageTitle>
                <MessageSubtitle><b>{"A more functional site in process"}</b></MessageSubtitle>
                <MessageBody>{"I've recently come across libraries such as Framer Motion that interest me in what I can build. I also have some pent up ideas for solutions that are easy solves. I needed a place that I could benefit from as a playground while also gracing the internet. This is that site!"}</MessageBody>
    <OldSiteButton>{"Go to old site"}</OldSiteButton>
            </MaintenanceMessage>
            <MaintenanceImage src={logos[Math.floor(Math.random() * logos.length)]} />
        </MaintenanceLayout>

    );
}

export default Maintenance;