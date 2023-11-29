import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextApi } from "../Providers/ContextProviders";

const TimeStamp = ({ item ,id,trainerDescritption}) => {
  
  const {setTimeSlots,setPricingDetails}=useContext(ContextApi)
 const handleTime=()=>{
 
  const time=item;
  setTimeSlots(time);
  setPricingDetails(trainerDescritption)
  

 }
    
    
  return (
    <div onClick={handleTime}>
      <Link to={`/detailTrainer/joinNow/${id}`}>
    <div className="btn bg-white text-[#193e51] btn-sm w-1/4 my-3" >
      <span>{item}</span>
    </div></Link>
    </div>
  );
};

export default TimeStamp;
