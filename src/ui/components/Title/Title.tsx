
import * as S from './styles';

type TitleProps = {
    children: React.ReactNode;
};

export const Title = ({children}: TitleProps) => {

    return (
        <S.Title>{children}</S.Title>
    );
}