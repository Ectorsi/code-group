import { render, screen } from '@testing-library/react';
import { Title } from './Title';

import { describe, expect, it } from 'vitest';

describe('Title', () => {
    it('renders the title correctly', () => {
        render(<Title>Title Text</Title>);
        expect(screen.getByText('Title Text')).toBeDefined();
    });
});