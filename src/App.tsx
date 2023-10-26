import './App.css'
import {RouterProvider} from "react-router-dom";
import {BrowserRouter} from "./components/BrowserRouter/BrowserRouter.tsx";

function App() {
  return (
    <>
      <RouterProvider router={BrowserRouter}  />
    </>
  )
}

export default App
