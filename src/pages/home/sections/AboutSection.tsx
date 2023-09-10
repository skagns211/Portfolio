import React from 'react';
import { styled } from 'styled-components';
import Section from '../../../components/Section';
import SkillCard from '../../../components/SkillCard';
import { skillCardEnum } from '../../../data/SkillCard';

const AboutSection = () => {
    return (
        <MainContainer>
            <Section id="about" height={30}>
                <AboutContainer>
                    <AboutMe data-aos="zoom-in-right">MOTTO</AboutMe>
                    <AboutMeContent data-aos="zoom-in-left">
                        유저 입장에서 더 좋은 UI/UX를 제공하자.
                        <br />
                        상상을 그려내고 현실에 구현하자.
                        <br />
                        세상을 바꿀 무언가를 만들어보자.
                    </AboutMeContent>
                    <div />
                </AboutContainer>
            </Section>
            <Section>
                <SkillContainer>
                    {skillCardEnum.map((el) => {
                        const { id, aos, title, img } = el;
                        return (
                            <SkillCard
                                key={id}
                                aos={aos}
                                title={title}
                                img={img}
                            />
                        );
                    })}
                </SkillContainer>
            </Section>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    background-color: #222222;
`;
const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    border-bottom: 1.5px solid #aae112;
`;
const AboutMe = styled.div`
    border-bottom: 3px solid #aae112;
`;
const AboutMeContent = styled.div``;
const SkillContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-around;
`;

export default AboutSection;
