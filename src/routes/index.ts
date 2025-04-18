import { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <div>Home</div>
    },
    {
        path: "/about",
        element:  <div>About</div>
    },  
]