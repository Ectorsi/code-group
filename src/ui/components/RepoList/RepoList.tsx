import { useState } from 'react';
import RepoItem, { RepoItemType } from '../RepoItem/RepoItem';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import * as S from './styles';
import { sortDataFunction } from '../../../utils';

export type RepoListProps = {
    data?: RepoItemType;
    loading?: boolean;
};

const RepoList = ({ data, loading }: RepoListProps) => {
    const [sortData, setSortData] = useState(false);

    const renderRepo = () => {
        if (!Array.isArray(data)) return !loading && <S.EmptyList>Falha ao obter dados! 😲</S.EmptyList>;
        const sortedData = sortDataFunction(data, sortData);
        return sortedData.length > 0 ? (
            sortedData?.map((repo, index) => (
                <RepoItem key={(index * Math.random())} {...repo} />
            ))
        ) : (
            !loading && <S.EmptyList>Nenhum repositório encontrado! 😲</S.EmptyList>
        );
    }

    const handleSortData = () => {
        setSortData(!sortData);
    };

    return (
        <S.Container>
            <S.Button type='button' onClick={handleSortData}>Ordenar {sortData ? <FaChevronUp /> : <FaChevronDown />} </S.Button>
            {renderRepo()}
        </S.Container>
    );
}

export default RepoList;