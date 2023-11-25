import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import TrainerPage from "../Pages/Trainer/TrainerPage";
import Login from "../Pages/Login/Login";
import Classes from "../Pages/Classes/Classes";
import Gallery from "../Pages/Gallery/Gallery";
import BeATrainer from "../Pages/Trainer/BeATrainer";

  
    const router = createBrowserRouter([
        {
          path: "/",
          element:<Main></Main>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },{
              path:'/register',
              element:<Register></Register>
            },{
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/trainer',
              element:<TrainerPage></TrainerPage>
            },{
              path:'/classes',
              element:<Classes></Classes>
            },{
              path:'/gallery',
              element:<Gallery></Gallery>

            },{
              path:'/beATrainer',
              element:<BeATrainer></BeATrainer>
            }
          ]
        },
      ]);


export default router;