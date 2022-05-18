import { lazy } from "react";

interface Route {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<() => JSX.Element>;
    name: string;
    private: boolean;
}

const onePage = lazy(() => import("../views/OnePage"))
const twoPage = lazy(() => import("../views/TwoPage"))
const threePage = lazy(() => import("../views/ThreePage"))

export const routes: Route[] = [
    {
        to: "/onePage",
        path: "onePage",
        Component: onePage,
        name: "one-page",
        private: false
    },
    {
        to: "/twoPage",
        path: "twoPage",
        Component: twoPage,
        name: "two-page",
        private: true
    },
    {
        to: "/threePage",
        path: "threePage",
        Component: threePage,
        name: "three-page",
        private: false
    }
]