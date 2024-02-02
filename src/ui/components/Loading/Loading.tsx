import { ThreeDots } from "react-loader-spinner";

type LoadingProps = {
    propHome?: boolean;
}

export const Loading = ({ propHome }: LoadingProps) => {

    return (
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#33333"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: propHome ? '100%' : '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
            wrapperClass="loading"
            visible={true}
        />
    );
}