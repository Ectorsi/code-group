import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Button = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #2424247c;
    border: none;
    text-decoration: none;

    &:hover {
        background-color: #242424;
    }

    padding: 1rem;

    & p {
        padding: 0.2rem;
        margin-left: 0.2rem;
        color: #cccccc;
    }
    
    @media (max-width: 768px) {
        /* flex-direction: column; */
    }
`;

export const Header = styled.h2`
    color: #cccccc;
    border-radius: 0.2rem;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Divider = styled.div`
    width: 70%;
    height: 1px;
    background-color: #404040;
    margin: 1rem auto;
    @media (min-width: 768px) {
        width: 1px;
        height: 100%;
        margin: 0 1rem;
    }
`;

export const TextBox = styled.div`
    padding: 1rem;
`;

export const Stargazers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    & p {
        margin-left: 0.5rem;
    }
    color: #cccccc;
    min-width: 3rem;

    & svg {
        fill: #F5B400;
    }
`;