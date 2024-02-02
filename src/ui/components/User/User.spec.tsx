import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import User, { UserType } from './User';
import ProviderMainContext from '../../../contexts/mainContext';

describe('User component', () => {

    const mokedUser: UserType = {
        id: 1,
        name: 'ectorsi',
        followers: 100,
        following: 50,
        email: 'johndoe@example.com',
        bio: 'Lorem ipsum dolor sit amet',
        avatar_url: 'https://example.com/avatar.jpg',
    };

    it('renders user information correctly', () => {
        <ProviderMainContext>
            render(<User {...mokedUser} />);
        </ProviderMainContext>

        expect(screen.findByText(mokedUser.name)).toBeTruthy();
        expect(screen.findByText(`Seguidores: ${mokedUser.followers}`)).toBeTruthy();
        expect(screen.findByText(`Seguindo: ${mokedUser.following}`)).toBeTruthy();
        expect(screen.findByText(mokedUser.email)).toBeTruthy();
        expect(screen.findByText(mokedUser.bio)).toBeTruthy();
    });

    it('renders the no email text when email is not provided', () => {
        <ProviderMainContext>
            render(<User {...mokedUser} email='' />);
        </ProviderMainContext>

        expect(screen.findByText(/Não consta e-mail para este user/i)).toBeDefined();
    });
});