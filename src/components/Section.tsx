import React from 'react';
import { styled } from 'styled-components';

interface SectionProps {
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
    return <CustomSection>{children}</CustomSection>;
};

const CustomSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    color: white;
    text-align: center;
`;

export default Section;
