import { NavLink } from "react-router-dom";
import img1 from '../../src/gif/404.gif'

const Error = () => {
    return (
        <div>
              <div>
               <div>
            <div>
            <div className="space-y-5 my-20">
         
         <h1 className="text-center font-semibold text-2xl md:text-4xl">Oooops ....</h1>
         <img src={img1} alt="" className="block mx-auto h-[400px]" />
        
          <p className="text-center md:text-lg">Sorry the page you are looking for does not exit .</p>
          <div className="text-center px-4 py-4   text-black border border-green-800 md:w-2/12  w-full mx-auto rounded-lg"><NavLink to={'/'}>Go to home page</NavLink></div>
        
       </div>
        </div>
        </div> 
        </div>
        </div>
    );
};

export default Error;