import * as S from './styles';
import Search from '../../components/Search/Search';
import User from '../../components/User/User';
import useGetGitHubUser from '../../../hooks/useGetUser';
import { Outlet } from 'react-router-dom';
import { Loading } from '../../components/Loading/Loading';

type HomeTemplateProps = {
    getUserName: (username: string) => void;
    responseUser: ReturnType<typeof useGetGitHubUser>;
}

const HomeTemplate = ({getUserName, responseUser}: HomeTemplateProps) => {
    const {data, error, loading, fetchUserData} = responseUser;
    return (
        <S.Container>
            <Outlet />
            <Search onFetchUserData={fetchUserData} getUserName={getUserName} />
            {error && <p>{error}</p>}
            {data && <User {...data} />}
            {loading && <Loading propHome />}
        </S.Container>
    )
};

export default HomeTemplate;