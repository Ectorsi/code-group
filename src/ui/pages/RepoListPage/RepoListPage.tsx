import useGetRepos from "../../../hooks/useGetRepos";
import RepoListTemplate from "../../templates/RepoListTemplate/RepoListTemplate";
import useMainContext from "../../../hooks/useMain";


export const RepoListPage = () => {
    const { userName } = useMainContext();    
    const responseRepos = useGetRepos(userName);    

    return (
        <RepoListTemplate {... responseRepos}/>
    )
};