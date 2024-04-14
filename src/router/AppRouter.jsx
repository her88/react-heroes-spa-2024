import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { childHeroesRoutes } from "../heroes/routes/childHeroesRoutes";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <HeroesRoutes />,
        children: childHeroesRoutes
    }
]);

export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
