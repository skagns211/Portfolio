import React from 'react';
import { styled } from 'styled-components';
import backgroundImg from '../../../assets/milkyway.jpeg';
import arrowDownImg from '../../../assets/arrow-down.png';
import Section from '../../../components/Section';
import Header from '../../../components/Header';

const IntroSection = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <Header />
            <TopSection>
                <ScrollDownAttach>
                    <span>Scroll Down</span>
                    <ScrollDown />
                </ScrollDownAttach>
            </TopSection>
            <Section>
                <h2 data-aos="fade-up">Front-End Developer</h2>
            </Section>
            <Section>
                <ImageInner>
                    <div className="images">
                        <ImageTag />
                    </div>
                    <ImageContent>
                        <ImageHeadline data-aos="slide-left">
                            <span>KIM NAMHUN</span>
                        </ImageHeadline>
                    </ImageContent>
                </ImageInner>
            </Section>
        </div>
    );
};

const ImageInner = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
`;
const ImageTag = styled.div`
    background-image: url('${backgroundImg}');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
`;
const ImageContent = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
const ImageHeadline = styled.div`
    font-size: 3.5rem;
    font-weight: bold;
    border-bottom: 10px solid white;
`;
const TopSection = styled.section`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const ScrollDownAttach = styled.div`
    display: flex;
    flex-direction: column;
    color: #aae112;
    width: 5rem;
`;
const ScrollDown = styled.div`
    width: inherit;
    height: 30px;
    background: url('${arrowDownImg}') no-repeat center;
    animation: floatingArrow 1.2s infinite ease-in-out alternate;
    @keyframes floatingArrow {
        0% {
            margin-bottom: 10px;
        }
        100% {
            margin-bottom: -30px;
        }
    }
`;

export default IntroSection;
