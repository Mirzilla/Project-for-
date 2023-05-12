import Admin from "./pages/Admin";
import {ADMIN_ROUTE, HERO_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, WIKI_ROUTE, MODE_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";
import ModePage from "./pages/ModePage";
import HeroPage from "./pages/HeroPage";
import Wiki from  "./pages/Wiki"
import Mode from "./pages/Mode"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: WIKI_ROUTE,
        Component: Wiki
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HERO_ROUTE + '/:id',
        Component: HeroPage
    },
    {
        path: MODE_ROUTE + '/:id',
        Component: ModePage
    },
    {
        path: MODE_ROUTE,
        Component: Mode
    },
]


