import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Loading } from "../ui/components/Loading/Loading";
const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            async lazy() {
                const { Layout } = await import("../ui/templates/Layout/Layout");
                return { Component: Layout };
            },
            children: [
                {
                    path: "/",
                    async lazy() {
                        const { HomePage } = await import("../ui/pages/HomePage/HomePage");
                        return { Component: HomePage };
                    },
                },
                {
                    path: "/repo-list",
                    async lazy() {
                        const { RepoListPage } = await import("../ui/pages/RepoListPage/RepoListPage");
                        return { Component: RepoListPage };
                    },
                },
                {
                    path: "/repo-list/repo-detail",
                    async lazy() {
                        const { RepoDetailPage } = await import("../ui/pages/RepoDetailPage/RepoDetailPage");
                        return { Component: RepoDetailPage };
                        },
                },
            ],
        },
    ]);
    return <RouterProvider fallbackElement={<Loading />} router={router} />;
};

export default AppRoutes;
