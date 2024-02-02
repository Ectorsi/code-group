import useMainContext from "../../../hooks/useMain";
import useGetRepoDetail from "../../../hooks/useGetRepoDetail";
import RepoDetailTemplate from "../../templates/RepoDetailTemplate/RepoDetailTemplate";

export const RepoDetailPage = () => {
    const { fullName } = useMainContext();    
    const responseRepos = useGetRepoDetail(fullName);    

    return (
        <RepoDetailTemplate {... responseRepos}/>
    )
};