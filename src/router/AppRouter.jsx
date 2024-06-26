import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { childHeroesRoutes } from "../heroes/routes/childHeroesRoutes";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <PublicRoute> <LoginPage /></PublicRoute>,
    },
    {
        path: "/",
        element:
            <PrivateRoute>
                <HeroesRoutes />
            </PrivateRoute>,
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
