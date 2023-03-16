import { MainPage } from "./pages/MainPage"
import { Projects } from './pages/Projects'
import { About } from './pages/About'

export const routes = [
    {
        path: '/',
        element: MainPage
    },
    {
        path: '/projects',
        element: Projects
    },
    {
        path: '/about',
        element:About
    },
]