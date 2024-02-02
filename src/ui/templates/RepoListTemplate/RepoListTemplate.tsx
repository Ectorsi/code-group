import { Outlet } from 'react-router-dom';
import * as S from './styles';
import { useGetReposReturn } from '../../../hooks/useGetRepos';
import { Loading } from '../../components/Loading/Loading';
import RepoList from '../../components/RepoList/RepoList';
import { Title } from '../../components/Title/Title';

type RepoListTemplateProps = Omit<useGetReposReturn, 'fetchReposData'>;

const RepoListTemplate = ({ data, error, loading }: RepoListTemplateProps) => {    
    return (
        <S.Container>
            <Title>Lista de Repositórios</Title>
            {error && <p>{error}</p>}
            {data && <RepoList data={data} loading={loading} />}
            {loading && <Loading />}
            <Outlet />
        </S.Container>
    )
};

export default RepoListTemplate;