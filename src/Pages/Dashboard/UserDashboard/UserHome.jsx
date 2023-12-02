import { useContext } from "react";
import Title from "../../../Shared/Title";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const UserHome = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <div>
      <div>
     
      <Helmet>
        <title> Fit-Flex-Online|User-Home </title>
      </Helmet>
        <Title heading={"Welcome "}></Title>
        <h1 className="text-center font-bold text-3xl">
          Hello !! <span>{user?.displayName}</span>
        </h1>
      </div>
    </div>
  );
};

export default UserHome;
