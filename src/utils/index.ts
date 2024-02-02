import { RepoItemType } from "../ui/components/RepoItem/RepoItem";

export const sortDataFunction = (data: RepoItemType[], sortData: boolean ) => {
    return sortData ? data.sort((a, b) => a.stargazers_count - b.stargazers_count) : data.sort((a, b) => b.stargazers_count - a.stargazers_count);
}