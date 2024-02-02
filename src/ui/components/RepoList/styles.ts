import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const EmptyList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    font-size: 1.5rem;
    color: #cccccc;
`;

export const Button = styled.button`
    padding: 8px 16px;
    background-color: #f5b400;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-start;
    transition: background-color 0.1s ease-in-out;
    margin-bottom: 1rem;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        background-color: #cc9600;
    }
`;