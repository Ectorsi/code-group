import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #2424247c;
    border: none;

    padding: 1rem;

    & p {
        padding: 0.2rem;
        margin-left: 0.2rem;
        color: #cccccc;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Header = styled.h2`
    color: #F5B400;
    font-size: 1.4rem;
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
    gap: 0.3rem;
    color: #cccccc;

    padding: 0.5rem;

    svg {
        color: #F5B400;
    }
`;

export const Link = styled.a`
    color: #cccccc;
    text-decoration: none;
    padding: 0.5rem;
    border: 1px solid #F5B400;
    border-radius: 0.2rem;
    margin-left: 0.2rem;
    &:hover {
        scale: 1.1;
    }

    transition: all 0.1s;
`;