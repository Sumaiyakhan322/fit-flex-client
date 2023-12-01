import { useContext } from "react";
import Title from "../../../Shared/Title";
import { AuthContext } from "../../../Providers/AuthProvider";


const TrainerHome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
           <Title heading={'Welcome'}></Title>
           <h1 className="text-center font-bold text-3xl">Hello Trainer!! <span >  {user?.displayName}</span></h1>
        </div>
    );
};

export default TrainerHome;