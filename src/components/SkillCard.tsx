import React, { FC } from 'react';
import { styled } from 'styled-components';
import skillCardBackground from '../assets/skillCardBackground.png';

interface SkillCardProps {
    title: string;
    aos?: string;
    img?: string[];
}

const SkillCard: FC<SkillCardProps> = ({ title, aos, img }) => {
    const images = img?.map((el: any) => {
        return el;
    });
    console.log(img);
    return (
        <MainContainer>
            <Title>{title}</Title>
            <SkillCardContainer
            //  data-aos={aos}
            >
                {img?.map((el) => {
                    return <SkillImg src={el} alt="skill" />;
                })}
            </SkillCardContainer>
            {/* <img src={images} alt="test" style={{ width: 100, height: 100 }} /> */}
        </MainContainer>
    );
};

const MainContainer = styled.div`
    width: 17%;
    height: 80%;
`;
const Title = styled.div`
    font-weight: 700;
    font-size: 1.2rem;

    margin-bottom: 0.3rem;
`;
const SkillCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    /* background-image: url('${skillCardBackground}'); */
    background-color: #e8eafb55;
    border-radius: 13px;
    height: 90%;
    border-top: 1px solid #636363;
    padding: 1rem 0;
`;
const SkillImg = styled.img`
    /* width: 60%; */
`;

export default SkillCard;
