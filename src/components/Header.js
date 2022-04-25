import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
    const [mobileNavStatus, setMobileNavStatus] = useState(false);
    const toggleMobileNav = () => setMobileNavStatus(!mobileNavStatus);
    return (
        <Container>
            <Button href="/" buttonName="loopstudios" className="app_logo" />
            <NavBar>
                <Button href="#" buttonName="About" className="nav_link" />
                <Button href="#" buttonName="Careers" className="nav_link" />
                <Button href="#" buttonName="Events" className="nav_link" />
                <Button href="#" buttonName="Products" className="nav_link" />
                <Button href="#" buttonName="Support" className="nav_link" />
            </NavBar>
            <MobileNavbar show={mobileNavStatus}>
                <MobileHeader>
                    <Button
                        href="/"
                        buttonName="loopstudios"
                        className="app_logo"
                    />
                    <CloseButton onClick={toggleMobileNav}>
                        <CloseIcon />
                    </CloseButton>
                </MobileHeader>
                <NavContainer>
                    <Button
                        href="#"
                        buttonName="About"
                        className="mobile_nav_link"
                    />
                    <Button
                        href="#"
                        buttonName="Careers"
                        className="mobile_nav_link"
                    />
                    <Button
                        href="#"
                        buttonName="Events"
                        className="mobile_nav_link"
                    />
                    <Button
                        href="#"
                        buttonName="Products"
                        className="mobile_nav_link"
                    />
                    <Button
                        href="#"
                        buttonName="Support"
                        className="mobile_nav_link"
                    />
                </NavContainer>
            </MobileNavbar>
            <Hamburger onClick={toggleMobileNav}>
                <MenuIcon />
            </Hamburger>
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Alata", sans-serif;
    padding: 0 8%;
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
`;
const NavBar = styled.nav`
    display: block;
    @media (max-width: 576px) {
        display: none;
    }
`;
const MobileNavbar = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height 100vh;
    transform: ${(props) =>
        props.show ? "translatex(0)" : "translatex(-100%)"};
    transition: transform 200ms ease-in-out;
    background-color:hsl(0, 0%, 0%);
    @media (min-width: 765px) {
        display: none;
    }
`;
const MobileHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0 8%;
`;
const NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    padding: 0 8%;
`;
const Hamburger = styled.button`
    background-color: transparent;
    border: none;
    display: block;
    @media (min-width: 576px) {
        display: none;
    }
    svg {
        color: hsl(0, 0%, 100%);
        font-size: 30px;
    }
`;

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    display: block;
    svg {
        color: hsl(0, 0%, 100%);
        font-size: 30px;
    }
`;

export default Header;
