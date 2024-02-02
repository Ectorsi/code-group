import { describe, expect, it, vi } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import Search, { SearchProps } from './Search';
import ProviderMainContext from '../../../contexts/mainContext';

describe('Search component', () => {

    const mockProps: SearchProps = {
        getUserName: vi.fn().mockReturnValue('ectorsi'),
        onFetchUserData: vi.fn(),
    };

    it('renders the search input correctly', () => {
        render(
            <ProviderMainContext>
                <Search {...mockProps} />
            </ProviderMainContext>
        );

        const input: HTMLInputElement = screen.getByTestId(/input-search/i);
        expect(input).toBeDefined();

        const button = screen.getByRole('button');
        expect(button).toBeDefined();

        fireEvent.change(input, { target: { value: 'ectorsi' } });
        expect(input.value).toBe('ectorsi');

        fireEvent.click(button);

        expect(mockProps.getUserName).toHaveBeenCalled();
        expect(mockProps.onFetchUserData).toHaveBeenCalled();

        vi.clearAllMocks();
    });
});