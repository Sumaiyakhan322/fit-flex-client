import { Outlet, useLocation} from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Main = () => {
    
    const location=useLocation()
    const noHeaderFooterLogin=location.pathname.includes('login')
    const noHeaderFooterRegister=location.pathname.includes('register')
    return (
        <div>
            {(noHeaderFooterLogin  || noHeaderFooterRegister) || <Navbar></Navbar>}
            <Outlet></Outlet>
            {(noHeaderFooterLogin  || noHeaderFooterRegister) || <Footer></Footer>}

        </div>
    );
};

export default Main;