
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
    color: #333333;
    text-decoration: none;
    border-radius: 5px;
    
    background-color: #f5b400;
    padding: 8px 16px;

    cursor: pointer;
    &:hover {
        color: #ffffff;
        text-decoration: none;
        scale: 1.1;
    }

    &:active {
        color: #ffffff;
        text-decoration: none;
        scale: 1;
    }
    transition: all 0.1s ease-in-out;
    margin: 0.75rem 1rem;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;