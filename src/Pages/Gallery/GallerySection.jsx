import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../Loading";
import GalleryCard from "../../Components/GalleryCard";
import { useRef } from "react";
import useLazyLoad from "../../Js/LazyLoading";
import clsx from "clsx";
import LoadingGallery from "../../Components/LoadingGallery";
import '../../Styles/galleryDesign.css'


const GallerySection = () => {
  const axiosPublic=useAxiosPublic();
const NUM_PER_PAGE = 12;
const TOTAL_PAGES = 5;
  
    const { data:images, isPending } = useQuery({
        queryKey: ["gallery"],
        queryFn: async () => {
          const res = await axiosPublic.get("/gallery");
          return res.data;
        },
      });
    
     
      const triggerRef = useRef(null);
      const onGrabData = (currentPage) => {
         
          return new Promise((resolve) => {
          setTimeout(() => {
              const data = images.slice(
              ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
              NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
              );
              console.log(data);
              resolve(data);
          }, 300);
          });
      };
      const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
      if(isPending)<Loading></Loading>
      

  return (
    <div className=" mt-32">
     
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10  ">
            {
                data?.map((items,index)=>(
                    <GalleryCard className={clsx("fade-in", { visible: loading, delay: index * 0.1 })} key={items._id} items={items.image}></GalleryCard> 
                ))
            }
          
        </div>
        <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <LoadingGallery></LoadingGallery>
        </div>
    </div>
  );
};

export default GallerySection;