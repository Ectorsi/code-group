import { useCallback, useEffect, useState } from "react";
import { RepoDetailType } from "../ui/components/RepoDetail/RepoDetail";
import { fetchRepoDetail } from "../services/fetchRepoDetail";

export type useGetRepoDetailReturn = {
    data: RepoDetailType | undefined;
    loading: boolean;
    error: boolean;
    fetchRepoDetailData: () => Promise<void>;
}

const useGetRepoDetail = (fullName: string): useGetRepoDetailReturn => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState<RepoDetailType>();

    const fetchRepoDetailData = useCallback(async () => {
        setLoading(true);
        try {
            const dataResponse = await fetchRepoDetail(fullName);
            setData(dataResponse);
            setLoading(false);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [fullName]);

    useEffect(() => {
        fetchRepoDetailData();
        return () => {
            setData(undefined);
        }
    }, [fetchRepoDetailData]);

    return { data, loading, error, fetchRepoDetailData };
}

export default useGetRepoDetail;