import { ReactNode } from 'react';
import * as S from './styles';

export type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    referredRoute?: string;
    to: string;
    icon?: ReactNode;
    onClick?: () => void;
} & React.LinkHTMLAttributes<HTMLLinkElement>;

const ButtonLink = ({ to, referredRoute, type, icon, onClick }: ButtonProps) => {
    return (
        <S.ButtonLink type={type} to={to} onClick={onClick}>
            {icon ?? referredRoute}
        </S.ButtonLink>
    );
}

export default ButtonLink;