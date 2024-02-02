import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: 1rem;

    @media (max-width: 768px) {
        overflow-y: auto;
    }
`;

export const Title = styled.h2`
    color: #cccccc;
    font-size: 1.5rem;
    margin: 1rem 0;
`;