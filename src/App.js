import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Detail from "./routes/Detail";
import Home from "./routes/Home"

const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: <Home />
    },
    {
      path: `/movie/:id`,
      element: <Detail />
    }
  ],
  {
    basename: `${process.env.PUBLIC_URL}`,
  })

function App() {
  return <RouterProvider router={router} />;
}

export default App;
