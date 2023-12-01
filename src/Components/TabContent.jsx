

const TabContent = ({items}) => {
    return (
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
{
    items?.map(classes=>(
        <div key={classes._id} className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#193e51de]">
       
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
           Class-Name:<span>{classes.className}</span>
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-bold">Trainer Name:
           <span className="text-base  text-[#c3bd2e]">{classes.trainerName}</span>
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 font-bold">Time Slot:
           <span className="text-[#c3bd2e] ">{classes.timeSlot}</span>
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
           <span>{classes.classDescription}</span>
          </p>
         
        </div>
      </div>
      
    ))
}
            
        </div>
    );
};

export default TabContent;