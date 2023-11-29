import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const ContextApi = createContext(null);

const ContextProviders = ({ children }) => {

    const storedPricingDetails = localStorage.getItem("pricingDetails");
    const initialPricingDetails = storedPricingDetails
      ? JSON.parse(storedPricingDetails)
      : {};
  
    const [pricingDetails, setPricingDetails] = useState(initialPricingDetails);
  
    // Update localStorage whenever pricingDetails changes
    useEffect(() => {
      localStorage.setItem("pricingDetails", JSON.stringify(pricingDetails));
    }, [pricingDetails]);
  
   // Get the time
    const storedTimeSlot = localStorage.getItem('timeSlot');
    const initialTime = storedTimeSlot ? JSON.parse(storedTimeSlot) : {  };
    const [timeSlots, setTimeSlots] = useState(initialTime);
  
    
    useEffect(() => {
      localStorage.setItem("timeSlot", JSON.stringify(timeSlots));
    }, [timeSlots])
   //get the booked page info



   // Get the time
   const storedBookedInfo = localStorage.getItem('bookings');
   const initialBookings = storedBookedInfo ? JSON.parse(storedBookedInfo) : { };
   const [bookings,setBookings] = useState(initialBookings);
 
   
   useEffect(() => {
     localStorage.setItem("bookings", JSON.stringify(bookings));
   }, [bookings])
    
   
  const values = { pricingDetails, setPricingDetails,timeSlots, setTimeSlots ,bookings,setBookings};
  return <ContextApi.Provider value={values}>{children}</ContextApi.Provider>;
};

export default ContextProviders;
