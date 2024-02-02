import { useCallback, useEffect, useState } from "react";
import { fetchRepos } from "../services/fetchRepos";
import { RepoItemType } from "../ui/components/RepoItem/RepoItem";

export type useGetReposReturn = {
    data: RepoItemType[] | undefined;
    loading: boolean;
    error: boolean;
    fetchReposData: () => Promise<void>;
}

const useGetRepos = (username: string): useGetReposReturn => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<RepoItemType[]>([]);

    const fetchReposData = useCallback(async () => {
        setLoading(true);
        try {
            const dataResponse = await fetchRepos(username);
            setData([dataResponse]);
            setLoading(false);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [username]);

    useEffect(() => {
        fetchReposData();
        return () => {
            setData([]);
        }
    }, [fetchReposData]);

    return { data, loading, error, fetchReposData };
}

export default useGetRepos;