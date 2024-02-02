import { RepoDetailType } from "../ui/components/RepoDetail/RepoDetail";
import { BaseUrl } from "./baseUrl";

export const fetchRepoDetail = async (fullName: string) => {
    const token = import.meta.env.VITE_API_KEY_GITHUB;
    const response = await fetch(`${BaseUrl}/repos/${fullName}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const dataResponse: RepoDetailType = await response.json();
    return dataResponse;
}