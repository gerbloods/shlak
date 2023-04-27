import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Main from "./pages/Main"
import Personal from "./pages/Personal"
import { ADMIN_ROUTE, AUTH_ROUTE, MAIN_ROUTE, PERSONAL_ROUTE, REG_ROUTE } from "./utils/const"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PERSONAL_ROUTE,
        Component: Personal
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: REG_ROUTE,
        Component: Auth
    }
]
