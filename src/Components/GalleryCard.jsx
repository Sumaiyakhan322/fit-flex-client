

const GalleryCard = ({items}) => {
    return (
     <>
     <div className="bg-opacity-90 brightness-75 md:h-64 md:w-64 h-full w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  dark:shadow-black/20  backdrop-blur-[30px] rounded-lg">
        <img src={items} alt="" className="w-full h-full rounded-lg"/>
     </div>
     
     </>   
    );
};

export default GalleryCard;