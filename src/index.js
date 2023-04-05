import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home"

// import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/movie",
    element: <Detail />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
