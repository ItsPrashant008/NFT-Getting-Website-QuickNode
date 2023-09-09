import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Members from "./components/Members";
import Wallet from "./components/Wallet";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Wallet /> },
    { path: "/home", element: <Home /> },
    { path: "/members", element: <Members /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
