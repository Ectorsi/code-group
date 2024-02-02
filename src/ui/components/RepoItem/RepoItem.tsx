
import * as S from './styles';
import useMainContext from '../../../hooks/useMain';
import { FaStar } from "react-icons/fa6";

export type RepoItemType = {
    id: number;
    name: string;
    stargazers_count: number;
    full_name: string;
}

const RepoItem = ({
    name,
    stargazers_count,
    full_name,
}: RepoItemType) => {

    const { setFullName } = useMainContext();

    const handleClick = () => {
        setFullName(full_name);
    };

    return (
        <S.Button to='repo-detail' onClick={handleClick}>
            <S.Header>
                <span>{name}</span>
            </S.Header>
                <S.Stargazers>
                    <span><FaStar className='star' /> {stargazers_count}</span>
                </S.Stargazers>
        </S.Button>
    );
};

export default RepoItem;