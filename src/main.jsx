import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import  {RouterProvider}  from "react-router-dom";


import router from "./Routes/Route.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();


import AuthProvider from "./Providers/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";



ReactDOM.createRoot(document.getElementById("root")).render(
  <>
       <React.StrictMode>
   {/* <AuthProvider> */}
   <QueryClientProvider client={queryClient}>
      <HelmetProvider>
     <div className="max-w-screen-xl mx-auto">
         <h2 className="text-black">HEloo</h2>
        <RouterProvider router={router} />
       </div>
    </HelmetProvider>
      </QueryClientProvider>
   {/* </AuthProvider> */}
  </React.StrictMode>
  </>


);
