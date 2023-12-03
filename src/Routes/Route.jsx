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
import AllSubcribers from "../Pages/Dashboard/AdminDashboard/AllSubcribers";
import AppliedTrainer from "../Pages/Dashboard/AdminDashboard/AppliedTrainer";
import AllTrainers from "../Pages/Dashboard/AdminDashboard/AllTrainers";
import TrainerPayment from "../Pages/Dashboard/AdminDashboard/TrainerPayment";
import AdminBalance from "../Pages/Dashboard/AdminDashboard/AdminBalance";
import AdminForum from "../Pages/Dashboard/AdminDashboard/AdminForum";
import TrainerManageSlots from "../Pages/Dashboard/TrainerDashboard.jsx/TrainerManageSlots";
import TrainerManageMember from "../Pages/Dashboard/TrainerDashboard.jsx/TrainerManageMember";
import TrainerForum from "../Pages/Dashboard/TrainerDashboard.jsx/TrainerForum";
import TrainerAddClass from "../Pages/Dashboard/TrainerDashboard.jsx/TrainerAddClass";
import SendInstructions from "../Pages/Dashboard/TrainerDashboard.jsx/SendInstructions";
import ProfileSetting from "../Pages/Dashboard/UserDashboard/ProfileSetting";
import UserClass from "../Pages/Dashboard/UserDashboard/UserClass";
import UserDailyActivity from "../Pages/Dashboard/UserDashboard/UserDailyActivity";
import Forums from "../Pages/Forums/Forums";
import DetailsClass from "../Pages/Classes/DetailsClass";
import Error from "../Error/Error";


  
    const router = createBrowserRouter([
        {
          path: "/",
          element:<Main></Main>,
          errorElement:<Error></Error>,
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
              path:'/classes/:id',
              element:<DetailsClass></DetailsClass>
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
          },{
            path:'/forums',
            element:<Forums></Forums>
          }
          ],
        },{
          path:'dashboard',
          element:<Private><Dashboard></Dashboard></Private>,
          children:[
            //users path
            {
              path:'userHome',
              element:<UserHome></UserHome>
            },
            {
              path:'profileSetting',
              element:<ProfileSetting></ProfileSetting>
            },{
              path:'userClass',
              element:<UserClass></UserClass>
            },{
              path:'userActivity',
              element:<UserDailyActivity></UserDailyActivity>
            },

            
            

            //admin paths 
            {
              path:'adminHome',
              element:<AdminHome></AdminHome>
            },{
              path:'subscribers',
              element:<AllSubcribers></AllSubcribers>
            },{
              path:'appliedTrainer',
              element:<AppliedTrainer></AppliedTrainer>
            },{
              path:'allTrainers',
              element:<AllTrainers></AllTrainers>
            },{
              path:'trainerPay/:id',
              element:<TrainerPayment></TrainerPayment>
            },{
              path:'balance',
              element:<AdminBalance></AdminBalance>
            },{
              path:'addNewForum',
              element:<AdminForum></AdminForum>
            },
            //trainer paths
            {
             path:'trainerHome',
             element:<TrainerHome></TrainerHome>
            },{
              path:'manageSlots',
              element:<TrainerManageSlots></TrainerManageSlots>
            },{
              path:'manageMember',
              element:<TrainerManageMember></TrainerManageMember>
            },{
              path:'trainerForum',
              element:<TrainerForum></TrainerForum>
            },{
              path:'addClass',
              element:<TrainerAddClass></TrainerAddClass>
            },{
              path:'manageMember/sendInstructions/:id',
              element:<SendInstructions></SendInstructions>
            }
          ]
        }
      ]);


export default router;