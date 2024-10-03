import { createBrowserRouter} from "react-router-dom";
import PublicLayout from "@/layout/PublicLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import LoginPage from "@/pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/login", element: <LoginPage /> },
        ],
    },
]);

export default router
