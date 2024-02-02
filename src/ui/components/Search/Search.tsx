import { useCallback, useState } from 'react';
import * as S from './styles';
import useMainContext from '../../../hooks/useMain';

export type SearchProps = {
    getUserName: (username: string) => void;
    onFetchUserData: () => void;
}

const Search = ({getUserName, onFetchUserData}: SearchProps) => {
    const {setUserName} = useMainContext();
    const [name, setName] = useState('');

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getUserName(name);
        setUserName(name);
        onFetchUserData();        
    }, [getUserName, name, setUserName, onFetchUserData])

    return (
        <S.Container onSubmit={handleSubmit}>
            <S.Label>
                <span>Buscar usuário no github:</span>
                <S.Input type="text" value={name} onChange={event => setName(event.target.value)} data-testid='input-search' />
            </S.Label>
            <S.Button type="submit">Pesquisar</S.Button>
        </S.Container>
    );
};

export default Search;