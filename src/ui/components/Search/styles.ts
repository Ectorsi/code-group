import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 420px;

    @media (max-width: 1024px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Input = styled.input`
    padding: 8px;
    margin: 4px 0;
    background-color: #484848;
    border-radius: 4px;
    width: 300px;
    border: none;
    max-width: 400px;

    outline: none;
    color: #a2a2a2;
    font-size: 1rem;

    box-shadow: 0 5px 20px 1px #2d2d2d;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const Label = styled.label`
    margin: 8px 0;
    width: 100%;
    color: #a2a2a2;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 1024px) {
        align-items: center;
        & span {
            margin: 10px 0;
        }
    }
`;

export const Button = styled.button`
    padding: 8px 16px;
    background-color: #f5b400;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: center;
    transition: background-color 0.1s ease-in-out;
    margin-top: 20px;
    font-weight: 500;

    &:hover {
        background-color: #cc9600;
    }
`;

export const ErrorFeedback = styled.span`
    color: #ef4141;
    font-size: 0.8rem;
    width: 100%;
    text-align: left;
`;