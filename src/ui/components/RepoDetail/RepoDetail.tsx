
import { FaStar } from 'react-icons/fa6';
import * as S from './styles';

export type RepoDetailType = {
    name: string;
    description: string;
    stargazers_count: number;
    language: string;
    html_url: string;
}

const RepoDetail = ({
    name,
    description,
    stargazers_count,
    language,
    html_url,
}: RepoDetailType) => {
    return (
        <S.Container>
            <S.Header>
                {name}
            </S.Header>
            <S.TextBox>
                <S.Stargazers data-testid='star'><FaStar />{stargazers_count}</S.Stargazers>
                <p>Linguagem: {language}</p>
                <S.Divider />
                <p>{description}</p>
            </S.TextBox>
            <S.Link href={html_url} target='_blank'>Acessar Repo no Github</S.Link>
        </S.Container>
    );
};

export default RepoDetail;