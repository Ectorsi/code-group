import { describe, expect, it } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import ProviderMainContext from '../../../contexts/mainContext';
import RepoItem, { RepoItemType } from './RepoItem';
import { BrowserRouter as Router } from 'react-router-dom';

describe('RepoItem component', () => {

    const mockProps: RepoItemType = {
        id: 1,
        name: 'Repo 1',
        stargazers_count: 10,
        full_name: `test/repo1`
    };

    it('renders the RepoItem correctly', () => {
        render(
            <Router>
                <ProviderMainContext>
                    <RepoItem {...mockProps} />
                </ProviderMainContext>
            </Router>
        );

        expect(screen.getByText('Repo 1')).toBeDefined();
    });

    it('renders the RepoItem correctly click on the button', () => {
        render(
            <Router>
                <ProviderMainContext>
                    <RepoItem {...mockProps} />
                </ProviderMainContext>
            </Router>
        );

        const button = screen.getByRole('link');
        expect(button).toBeDefined();
        fireEvent.click(button);

        expect(screen.getByText('Repo 1')).toBeDefined();

    });
});