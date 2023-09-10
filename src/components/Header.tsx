import React, { FC, useEffect, useState } from 'react';
import Scroll, { Link } from 'react-scroll';
import { styled } from 'styled-components';

const Header = () => {
    const scroll = Scroll.animateScroll;

    const handleTop = () => {
        scroll.scrollToTop();
    };

    return (
        <MainContainer>
            <MainHeader>
                <HeaderButton onClick={handleTop}>Top</HeaderButton>
                <Link to="about" smooth spy>
                    <HeaderButton>About</HeaderButton>
                </Link>
                <HeaderButton>Header</HeaderButton>
                <HeaderButton>Header</HeaderButton>
            </MainHeader>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 3rem;
`;
const MainHeader = styled.header`
    position: fixed;
    z-index: 1;
    background-color: black;
    opacity: 0.6;
    justify-content: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 25rem;
    height: 2.2rem;
`;
const HeaderButton = styled.button`
    border: none;
    background-color: inherit;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: white;
    cursor: pointer;
    width: 25%;
    height: 100%;
    &:hover {
        background-color: grey;
    }
`;

export default Header;
