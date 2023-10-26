import LayoutPage from "../LayoutPage/LayoutPage.tsx";
import {createBrowserRouter} from "react-router-dom";
import Counter from "../Counter/Counter.tsx";
import Welcome from "../Welcome/Welcome.tsx";
import Accordion from "../Accordion/Accordion.tsx";
import List from "../List/List.tsx";
import ErrorPage from "../ErrorPage/ErrorPage.tsx";

const router = [
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Welcome message={"Hello world"} />
      },
      {
        path: "counter",
        element: <Counter />
      },
      {
        path: "accordion",
        element: <Accordion />
      },
      {
        path: "list",
        element: <List />
      }
    ]
  }
]

export const BrowserRouter = createBrowserRouter(router);