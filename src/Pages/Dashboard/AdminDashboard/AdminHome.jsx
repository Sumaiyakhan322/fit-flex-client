import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Title from "../../../Shared/Title";
import { Helmet } from "react-helmet-async";


const AdminHome = () => {
    const {user}=useContext(AuthContext);
    
    return (
        <div>
            <Helmet>
        <title> Fit-Flex-Online|Admin-Home </title>
      </Helmet>
        <Title heading={'Welcome Admin'}></Title>
        <h1 className="text-center font-bold text-3xl">Hello Admin!!<span >{user?.displayName}</span></h1>
        </div>
    );
};

export default AdminHome;