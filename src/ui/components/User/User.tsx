
import ButtonLink from '../ButtonLink/ButtonLink';
import * as S from './styles';

export type UserType = {
    id: number;
    name: string;
    followers: number;
    following: number;
    email: string;
    bio: string;
    avatar_url: string;
}

const User = ({
    name,
    followers,
    following,
    email,
    bio,
    avatar_url,
}: UserType) => {
    return (
        <S.Container>
            <S.Profile>
                <S.Avatar src={avatar_url} alt={name} />
                <S.Name>{name}</S.Name>
            </S.Profile>
            <S.TextBox>
                <p>Seguidores: {followers}</p>
                <p>Seguindo: {following}</p>
                {email ? <p>{email}</p> : <p>Não consta e-mail para este user</p>}
                <S.Divider />
                <p>{bio}</p>
            </S.TextBox>
            <ButtonLink type="button" to="/repo-list" referredRoute="Repositórios" />
        </S.Container>
    );
};

export default User;