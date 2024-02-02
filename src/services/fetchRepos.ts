import { RepoType } from "../ui/components/RepoItem/RepoItem";
import { BaseUrl } from "./baseUrl";

export const fetchRepos = async (username: string) => {
    const token = import.meta.env.VITE_API_KEY_GITHUB;
    const response = await fetch(`${BaseUrl}/users/${username}/repos`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const dataResponse: RepoType = await response.json();
    return dataResponse;
}