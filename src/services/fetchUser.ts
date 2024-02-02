import { UserType } from "../ui/components/User/User";
import { BaseUrl } from "./baseUrl";

export const fetchUser = async (username: string) => {
    const token = import.meta.env.VITE_API_KEY_GITHUB;
    const response = await fetch(`${BaseUrl}/users/${username}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const dataResponse: UserType = await response.json();
    return dataResponse;
}