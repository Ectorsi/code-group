import { useState } from "react";
import HomeTemplate from "../../templates/HomeTemplate/HomeTemplate";
import useGetGitHubUser from "../../../hooks/useGetUser";

export const HomePage = () => {
    const [username, setUsername] = useState('');
    const getUserName = (usernameParam: string) => setUsername(usernameParam);
    const responseUser = useGetGitHubUser(username);
    return (
        <HomeTemplate
            responseUser={responseUser}
            getUserName={getUserName}
        />
    )
};