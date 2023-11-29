import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Title from "../../../Shared/Title";


const AdminHome = () => {
    const {user}=useContext(AuthContext);
    
    return (
        <div>
        <Title heading={'Welcome Admin'}></Title>
        <h1 className="text-center font-bold text-3xl">Admin name:<span >{user?.displayName}</span></h1>
        </div>
    );
};

export default AdminHome;