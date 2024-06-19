import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Auth } from "./pages/Auth";
import { Main } from "./pages/Main";
import { Transfer } from "./pages/Transfer";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />
    },
    {
      path: "/main",
      element: <Header />,
      children: [
        {
          path: "/main",
          element: <Main />
        },
      ],
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
