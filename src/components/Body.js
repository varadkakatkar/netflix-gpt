import React, { useEffect } from "react";
import Login from "./Login.js";
import Browse from "./Browse.js";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const appRotuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);



  return (
    <div>
      <RouterProvider router={appRotuter} />
    </div>
  );
};

export default Body;
