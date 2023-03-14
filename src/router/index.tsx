import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../components/home"
import TopicList from "../components/topic-list"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "topic-list",
                element: <TopicList />,
            },
        ],
    },
])

export default router
