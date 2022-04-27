import React from "react";
import styled from "styled-components";
import dekstopBackground from "./../images/image-hero.jpg";
import mobileBackground from "./../images/image-hero-mobile.jpg";

function Hero() {
    return (
        <Container>
            <TextContainer>
                <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </TextContainer>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8%;
    height: 100vh;
    background-image: url(${mobileBackground});
    background-repeat: no-repeat;
    background-size: cover;
    @media (min-width: 992px) {
        align-items: center;
        justify-content: left;
        background-image: url(${dekstopBackground});
    }
`;

const TextContainer = styled.div`
    border: 2px solid hsl(0, 0%, 100%);
    padding: 30px;
    h1 {
        font-family: "Josefin Sans", sans-serif;
        font-size: 40px;
        font-weight: 300;
        color: hsl(0, 0%, 100%);
        line-height: 120%;
        margin: 0;
        @media (max-width: 280px) {
            font-size: 23px;
        }
    }
    @media (min-width: 576px) {
        width: 80%;
        padding: 30px 0 30px 30px;
        h1 {
            font-size: 65px;
            line-height: 70px;
        }
    }
    @media (min-width: 992px) {
        width: 70%;
        padding: 30px 0 30px 30px;
        margin-top: 50px;
        h1 {
            font-size: 65px;
            line-height: 70px;
        }
    }
    @media (min-width: 1025px) {
        width: 50%;
    }
`;
export default Hero;
