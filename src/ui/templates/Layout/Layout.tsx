import { Outlet } from "react-router-dom";
import * as S from './styles';


export const Layout = () => {

    return (
        <S.Container>
            <S.Title>Code Group Challenger</S.Title>
            <Outlet />
        </S.Container>
    );
};