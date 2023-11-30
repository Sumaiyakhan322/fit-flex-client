import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import  {RouterProvider}  from "react-router-dom";


import router from "./Routes/Route.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();


import AuthProvider from "./Providers/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import ContextProviders from "./Providers/ContextProviders.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <>
       <React.StrictMode>
   <AuthProvider>
    <ContextProviders>
   <QueryClientProvider client={queryClient}>
      <HelmetProvider>
     <div className="lg:max-w-screen-xl mx-auto ">
        
        <RouterProvider router={router} />
       </div>
    </HelmetProvider>
      </QueryClientProvider>
      </ContextProviders>
   </AuthProvider>
  </React.StrictMode>
  </>


);
