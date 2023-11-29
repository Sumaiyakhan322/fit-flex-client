import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import TrainerPage from "../Pages/Trainer/TrainerPage";
import Login from "../Pages/Login/Login";
import Classes from "../Pages/Classes/Classes";
import Gallery from "../Pages/Gallery/Gallery";
import BeATrainer from "../Pages/Trainer/BeATrainer";
import Bookedpage from "../Pages/BookedPage/Bookedpage";
import DetailedTrainer from "../Pages/Trainer/DetailedTrainer";
import JoinNow from "../Pages/Trainer/JoinNow";
import Private from "../Private/Private";
import Dashboard from "../Layouts/Dashboard";
import UserHome from "../Pages/Dashboard/UserDashboard/UserHome";
import TrainerHome from "../Pages/Dashboard/TrainerDashboard.jsx/TrainerHome";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome";

  
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
              element:<Private><BeATrainer></BeATrainer></Private>
            },{
              path:'/detailTrainer/:id',
              element:<DetailedTrainer></DetailedTrainer>,
          },{
            path:'/detailTrainer/joinNow/:id',
            element:<Private><JoinNow></JoinNow></Private>
          },{
            path:'/bookedPage',
            element:<Private><Bookedpage></Bookedpage></Private>
          }
          ],
        },{
          path:'dashboard',
          element:<Dashboard></Dashboard>,
          children:[
            //users path
            {
              path:'userHome',
              element:<UserHome></UserHome>

            },

            //trainers paths
            {
              path:'trainerHome',
              element:<TrainerHome></TrainerHome>
            },
            

            //admin paths 
            {
              path:'adminHome',
              element:<AdminHome></AdminHome>
            }
          ]
        }
      ]);


export default router;