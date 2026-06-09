import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/about" element={<About />} />
  )
);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
