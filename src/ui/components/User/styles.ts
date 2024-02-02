import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0.5rem;
    margin: 2rem 0;
    width: 100%;
    background-color: #2424247c;

    & p {
        padding: 0.2rem;
        margin-left: 0.2rem;
        color: #cccccc;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const Avatar = styled.img`
    width: 25%;
    height: auto;
    border-radius: 50%;
    padding: 1rem;
    margin: 1rem 0;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const Name = styled.h2`
    color: #5b5b5b;
    font-size: 1.5rem;

    @media (min-width: 768px) {
        width: 40%;
    }
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