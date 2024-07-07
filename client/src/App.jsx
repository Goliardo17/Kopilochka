import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Auth } from "./pages/Auth";
import { Main } from "./pages/Main";
import { Transfer } from "./pages/Transfer";
import { History } from "./pages/History"
import { Modal } from "./components/shared/Modal";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />
    },
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "main",
          element: <Main />,
          children: [
            {
              path: "/main/create-new-account",
              element: <Modal type='modal-new-account'/>
            }
          ]
        },
        {
          path: "history",
          element: <History />
        }
      ]
    },
    {
      path: "/transfer",
      element: <Transfer />  
    },
    {
      path: "/transfer/:typeTransfer/:accountId",
      element: <Transfer />  
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
