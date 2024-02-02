import { RepoItemType } from "../ui/components/RepoItem/RepoItem";
import { BaseUrl } from "./baseUrl";

export const fetchRepos = async (username: string) => {
    const token = import.meta.env.VITE_API_KEY_GITHUB;
    const response = await fetch(`${BaseUrl}/users/${username}/repos`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const dataResponse: RepoItemType = await response.json();
    return dataResponse;
}