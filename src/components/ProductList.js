import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Products from "./Products";
import creationData from "../creationData";

function ProductList() {
    return (
        <Container>
            <Heading>
                <h3>OUR CREATIONS</h3>
                <Button href="#" className="button" buttonName="SEE ALL" />
            </Heading>
            <ProductContainer>
                {creationData.map((data) => {
                    const { id, title, mobileImage, dekstopImage } = data;
                    return (
                        <Products
                            key={id}
                            title={title}
                            mobileImage={mobileImage}
                            dekstopImage={dekstopImage}
                        />
                    );
                })}
            </ProductContainer>
            <Button href="#" className="mobile_button" buttonName="SEE ALL" />
        </Container>
    );
}

const Container = styled.section`
    padding: 6% 6%;
    text-align: center;
    .mobile_button {
        font-size: 15px;
        font-family: "Alata", sans-serif;
        font-weight: 400;
        color: hsl(0, 0%, 0%);
        padding: 10px 30px;
        border: 1px solid hsl(0, 0%, 0%);
        @media (min-width: 1024px) {
            display: none;
        }
    }
`;
const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
        justify-content: space-between;
    }
    h3 {
        font-weight: 300;
        font-size: 35px;
    }
    .button {
        font-size: 15px;
        font-family: "Alata", sans-serif;
        font-weight: 400;
        color: hsl(0, 0%, 0%);
        padding: 5px 25px;
        border: 1px solid hsl(0, 0%, 0%);
        transition: 250ms ease-in;
        &:hover {
            color: hsl(0, 0%, 100%);
            background-color: hsl(0, 0%, 0%);
        }
        @media (max-width: 1024px) {
            display: none;
        }
    }
`;
const ProductContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    min-height: 90vh;
    row-gap: 20px;
    margin-bottom: 20px;
    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        column-gap: 20px;
    }
`;

export default ProductList;
