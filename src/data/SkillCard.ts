import frontBrother from '../assets/frontBrother.png';
import ts from '../assets/ts.png';
import reactLogo from '../assets/react.png';
import reduxLogo from '../assets/redux.png';
import styled from '../assets/styled.jpeg';
import express from '../assets/express.png';

export const skillCardEnum = [
    {
        id: 1,
        aos: 'slide-right',
        title: 'Language',
        img: [frontBrother, ts],
    },
    {
        id: 2,
        aos: 'slide-right',
        title: 'Tools',
        img: [reactLogo, reduxLogo, styled, express],
    },
    {
        id: 3,
        aos: 'zoom-in-down',
        title: 'DB',
    },
    {
        id: 4,
        aos: 'slide-left',
        title: 'Deploy',
    },
    {
        id: 5,
        aos: 'slide-left',
        title: 'Etc.',
    },
];
