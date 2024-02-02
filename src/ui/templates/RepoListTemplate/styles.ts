import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 1rem;

    @media (max-width: 768px) {
        overflow-y: auto;
    }
`;