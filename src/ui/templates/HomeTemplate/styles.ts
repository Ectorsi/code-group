import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    background-color: #333333;
    padding: 2rem;

    position: relative;
    z-index: 1;
`;

export const Text = styled.p`
    color: #cccccc;
    font-size: 1rem;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

export const LinkButton = styled(Link)`
    color: #CC9600;
    font-size: 1rem;
    margin-left: 0.3rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;