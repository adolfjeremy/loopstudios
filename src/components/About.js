import React from "react";
import styled from "styled-components";
import aboutImageDekstop from "./../images/desktop/image-interactive.jpg";
import aboutImageMobile from "./../images/mobile/image-interactive.jpg";

function About() {
    return (
        <Container>
            <ImageContainer>
                <DekstopImage
                    src={aboutImageDekstop}
                    alt="a guy using VR headset"
                    className="dekstop"
                />
                <MobileImage
                    src={aboutImageMobile}
                    alt="a guy using VR headset"
                    className="mobile"
                />
            </ImageContainer>
            <TextContainer>
                <h2>THE LEADER IN INTERACTIVE VR</h2>
                <p>
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies
                    around the globe. Our award-winning creations have
                    transformd businesses through digital experinces that bind
                    to their brand.
                </p>
            </TextContainer>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 100px 6%;
    text-align: center;
    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: flex-start;
        text-align: left;
        position: relative;
    }
`;
const ImageContainer = styled.div`
    display: flex;
    @media (min-width: 1024px) {
        width: 65%;
    }
`;

const DekstopImage = styled.img`
    width: 100%;
    @media (max-width: 768px) {
        display: none;
    }
`;
const MobileImage = styled.img`
    width: 100%;
    @media (min-width: 768px) {
        display: none;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
        width: 50%;
        position: absolute;
        right: 0;
        bottom: 100px;
        padding: 90px 90px 0 90px;
        background-color: hsl(0, 0%, 100%);
    }
    h2 {
        color: hsl(0, 0%, 0%);
        font-size: 30px;
        font-weight: 300;
        margin: 60px 0 15px;
        @media (min-width: 1024px) {
            font-size: 35px;
            margin-top: 0;
        }
    }
    p {
        color: hsl(0, 0%, 41%);
        font-size: 15px;
        font-family: "Alata", sans-serif;
        font-weight: 400;
    }
`;

export default About;
