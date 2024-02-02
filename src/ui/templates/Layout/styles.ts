import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    svg {
        width: 1.7rem;
        height: 1.7rem;
        fill: #ccc;
    }
`;

export const Title = styled.h1`
    color: #cccccc;

    font-size: 2rem;
    opacity: 0.5;
    padding: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
    }
`;

export const Logo = styled.div`
    width: 6rem;
    height: 6rem;
    background-image: url('assets/logo.png');
    background-repeat: no-repeat;
    background-size: contain;

    opacity: 0.1;

    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);

    @media (min-width: 768px) {
        width: 10rem;
        height: 10rem;
    }

    @media (min-width: 1024px) {
        width: 15rem;
        height: 15rem;
    }
`;