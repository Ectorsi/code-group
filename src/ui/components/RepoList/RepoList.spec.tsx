import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RepoList from './RepoList';
import { RepoItemType } from '../RepoItem/RepoItem';
import ProviderMainContext from '../../../contexts/mainContext';
import { BrowserRouter as Router } from 'react-router-dom';

describe('RepoList', () => {
    const mockData: RepoItemType = {
        id: 1,
        name: 'Repo 1',
        stargazers_count: 10,
        full_name: `test/repo1`
    };

    it('renders the repository list', () => {
        render(
            <Router>
                <ProviderMainContext>
                    <RepoList data={mockData} loading={false} />
                </ProviderMainContext>
            </Router>
        )

        expect(screen.findByText('Repo 1')).toBeDefined();
    });

    it('renders the empty list message when data is not an array', () => {
        render(
            <ProviderMainContext>
                <RepoList data={undefined} loading={false} />
            </ProviderMainContext>
        )

        expect(screen.getByText('Falha ao obter dados! 😲')).toBeDefined();
    });

    it('renders the empty list message when sorted data is empty', () => {
        render(
            <ProviderMainContext>
                <RepoList data={undefined} loading={false} />
            </ProviderMainContext>
        )

        expect(screen.findByText('Nenhum repositório encontrado! 😲')).toBeDefined();
    });


    it('toggles the sort data state when the button is clicked', () => {
        render(
            <Router>
                <ProviderMainContext>
                    <RepoList data={mockData} loading={false} />
                </ProviderMainContext>
            </Router>
        )

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(button).toBeDefined();
    });
});