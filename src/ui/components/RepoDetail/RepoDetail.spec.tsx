import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import RepoDetail from './RepoDetail';

describe('RepoDetail', () => {
    const repoDetailProps = {
        name: 'Test Repo',
        description: 'This is a test repository',
        stargazers_count: 10,
        language: 'JavaScript',
        html_url: 'https://github.com/test/repo',
    };

    it('renders the repo name', () => {
        render(<RepoDetail {...repoDetailProps} />);
        expect(screen.getByText(repoDetailProps.name)).toBeDefined();
    });

    it('renders the repo description', () => {
        render(<RepoDetail {...repoDetailProps} />);
        expect(screen.getByText(repoDetailProps.description)).toBeDefined();
    });

    it('renders the repo stargazers count', () => {
        render(<RepoDetail {...repoDetailProps} />);
        expect(screen.getByTestId(/star/i)).toBeDefined();
    });

    it('renders the repo language', () => {
        render(<RepoDetail {...repoDetailProps} />);
        expect(screen.getByText(`Linguagem: ${repoDetailProps.language}`)).toBeDefined();
    });

    it('renders a link to the repo', () => {
        render(<RepoDetail {...repoDetailProps} />);
        const linkElement = screen.getByText(/Acessar Repo no Github/i);
        expect(linkElement).toBeDefined();
    });
});
