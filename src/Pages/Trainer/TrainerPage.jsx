import { Link } from "react-router-dom";



const TrainerPage = () => {
    return (
        <div>
          <Link to={'/beATrainer'}> <button className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto">Join as a Trainer</button></Link>
        </div>
    );
};

export default TrainerPage;