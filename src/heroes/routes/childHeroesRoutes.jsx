import { Navigate } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const childHeroesRoutes = [
    {
        path: "/marvel",
        element: <MarvelPage />,
    },
    {
        path: "/dc",
        element: <DcPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
    },
    {
        path: "/hero",
        element: <HeroPage />,
    },
    {
        path: "/*",
        element: <Navigate to={"/marvel"} />

    }
]