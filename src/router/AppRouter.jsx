import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { MarvelPage, DcPage } from "../heroes";
import { LoginPage } from "../auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroesApp />,
        children: [
            {
                path: "/marvel",
                element: <MarvelPage />,
            },
            {
                path: "/dc",
                element: <DcPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            }            
        ]
    }
]);

export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
