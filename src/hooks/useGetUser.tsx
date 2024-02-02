import { useCallback, useEffect, useState } from "react";
import { fetchUser } from "../services/fetchUser";
import { UserType } from "../ui/components/User/User";

export type useGetUserReturn = {
    data: UserType | undefined;
    loading: boolean;
    error: boolean;
    fetchUserData: () => Promise<void>;
}

const useGetUser = (username: string | undefined): useGetUserReturn => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<UserType>();

    const fetchUserData = useCallback(async () => {
        setLoading(true);
        try {
            if(username) {
                const dataResponse = await fetchUser(username);
                setData(dataResponse);
                setLoading(false);
            }
            setError(true);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [username]);

    useEffect(() => {
        if (username) {
            fetchUserData();
        }

        return () => {
            setData(undefined);
        };
    }, [fetchUserData, username]);

    return { data, loading, error, fetchUserData };
}

export default useGetUser;