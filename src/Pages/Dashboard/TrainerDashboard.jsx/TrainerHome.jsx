import { useContext } from "react";
import Title from "../../../Shared/Title";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const TrainerHome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
             <Helmet>
        <title> Fit-Flex-Online|Trainer-Home </title>
      </Helmet>
           <Title heading={'Welcome'}></Title>
           <h1 className="text-center font-bold text-3xl">Hello Trainer!! <span >  {user?.displayName}</span></h1>
        </div>
    );
};

export default TrainerHome;