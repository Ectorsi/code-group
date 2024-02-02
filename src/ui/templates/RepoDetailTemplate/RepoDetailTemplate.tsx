import { Outlet } from 'react-router-dom';
import * as S from './styles';
import RepoDetail from '../../components/RepoDetail/RepoDetail';
import { Loading } from '../../components/Loading/Loading';
import { useGetRepoDetailReturn } from '../../../hooks/useGetRepoDetail';
import { Title } from '../../components/Title/Title';

type RepoDetailTemplateProps = Omit<useGetRepoDetailReturn, 'fetchRepoDetailData'>;

const RepoDetailTemplate = ({ data, error, loading }: RepoDetailTemplateProps) => {    
    return (
        <S.Container>
            <Title>Repositório</Title>
            {error && <p>{error}</p>}
            {data && <RepoDetail
                {... data}
            />}
            {loading && <Loading />}
            <Outlet />
        </S.Container>
    )
};

export default RepoDetailTemplate;