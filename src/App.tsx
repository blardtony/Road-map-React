import './App.css'
import {RouterProvider} from "react-router-dom";
import {BrowserRouter} from "./components/BrowserRouter/BrowserRouter.tsx";
import UserContext, {defaultUserData} from "./contexts/UserContext/UserContext.tsx";
import {useState} from "react";

function App() {
  const [userData, setUserData] = useState(defaultUserData);
  return (
    <>
      <UserContext.Provider value={{userData, setUserData}}>
        <RouterProvider router={BrowserRouter} />
      </UserContext.Provider>
    </>
  )
}

export default App
