import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../useWindowSize";

function Products({ title, mobileImage, dekstopImage }) {
    const width = useWindowSize();
    return (
        <Container href="#">
            <div className="tes">
                {width > 1024 ? (
                    <img src={dekstopImage} alt={title} />
                ) : (
                    <img src={mobileImage} alt={title} />
                )}
            </div>
            <h4>{title}</h4>
        </Container>
    );
}

const Container = styled.a`
    width: 100%;
    position: relative;
    &:hover::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(255, 255, 255, 0.5);
            z-index: 1;
            transition: 250ms ease-in;
        }
        img {
            width: 100%;
            height: 100%;
            position: relative;
        }
    }
    &:hover h4 {
        color: hsl(0, 0%, 0%);
        font-weight: 400;
    }
    h4 {
        position: absolute;
        width: 150px;
        left: 0;
        bottom: 0;
        font-size: 25px;
        font-weight: 300;
        text-align: left;
        color: hsl(0, 0%, 100%);
        text-transform: uppercase;
        line-height: 100%;
        padding: 0 0 20px 20px;
        margin: 0;
        z-index: 10;
    }
`;

export default Products;
