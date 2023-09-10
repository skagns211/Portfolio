import React from 'react';
import { styled } from 'styled-components';

interface SectionProps {
    children: React.ReactNode;
    height?: number;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, height, id }) => {
    return (
        <CustomSection id={id} height={height}>
            {children}
        </CustomSection>
    );
};

const CustomSection = styled.section<{ height?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${({ height }) => (height ? `${height}vh` : '100vh')};
    color: white;
    text-align: center;
`;

export default Section;
