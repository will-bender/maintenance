import React, { useState } from 'react';
import logos from './assets/logos/index';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`
const MessageTitle = styled.div`
    font-size: 5vw;
    margin-bottom: 15%;
    margin-top: -5%;

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
    object-fit: fill;
    width: 90%;
    height: auto;
`
const OldSiteButton = styled.a`
    width: 80%;
    padding: 2% 0;
    background-color: RGBA(38, 73, 92, 1);
    color: white;
    font-size: 1vw;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
`



const Maintenance = () => {
    let [currentImageIndex, incrementImageIndex] = useState(3);
    let [currentImageSource, updateImageSource] = useState(logos[3]);


    const swapPhoto = async () => {
        //get the current index
        //increment the index
        //get the source photo,
        //set the global source value to the new value
        console.log('index PRE', `|     ${currentImageIndex}|  `);
        await incrementImageIndex(() => {
            // console.log(currentImageIndex - logos.length + 1);
            if (currentImageIndex === (logos.length - 1)){
                return currentImageIndex - logos.length + 1;
            }
            else {
                return currentImageIndex + 1;
            }
            // const currentIndex = currentImageIndex + 1;
            // const isLastPhoto = currentIndex > (logos.length - 1)
            // console.log(currentImageIndex, isLastPhoto);
            // if (isLastPhoto){
            //     console.log('You just clicked on the last photo', logos);
            //     currentImageIndex = 0;
            //     console.log('Current Index', currentImageIndex);
            //     return 0;
            // }
            // else {
            //     console.log(currentImageIndex, currentIndex);
            //     return currentIndex;
            // }
        });
        console.log('index POST:',`     |${currentImageIndex}|      `);
        updateImageSource(currentImageSource = logos[currentImageIndex]);
        


    }

    return (
        <MaintenanceLayout >
            <MaintenanceMessage>
                <MessageTitle>{"willbender.io"}</MessageTitle>
                <MessageSubtitle><b>{"A more functional site in process"}</b></MessageSubtitle>
                <MessageBody>{"I've recently come across libraries such as Framer Motion that interest me in what I can build. I also have some pent up ideas for solutions that are easy solves. I needed a place that I could benefit from as a playground while also gracing the internet. This is that site!"}</MessageBody>
                <OldSiteButton href={"https://theworkharder.com"} >{"Go to old site"}</OldSiteButton>
            </MaintenanceMessage>
            <motion.div
                style={{ width: "60%", height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', opacity: 1 }}
                animate={{ opacity: 1, rotate: [1, -1], skew: [-1, 1], y: [5, 2, -2, -5], x: [-5, -2, 2, 5] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror', repeatDelay: 1 }}
                onClick={swapPhoto}
            // style={{ width: "60%", height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', opacity: 0, }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 2, type: "spring", stiffness: 20 }}

            >
                {/* <motion.div
                    style={{ width: "100%", height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', opacity: 0, }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2 , delay: 2}}

                > */}
                <MaintenanceImage src={currentImageSource} />
                {/* </motion.div> */}
            </motion.div>
        </MaintenanceLayout>

    );
}

export default Maintenance;