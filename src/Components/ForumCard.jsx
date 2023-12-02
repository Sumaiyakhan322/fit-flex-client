import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdOutlineAddModerator } from "react-icons/md";
import { AiFillDislike, AiFillLike, AiOutlineDislike } from "react-icons/ai"
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";


const ForumCard = ({forum}) => {
    
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const { user } = useContext(AuthContext);
  
    const handleLikeClick = () => {
      setLiked(!liked);
      setDisliked(false);
    };
  
    const handleDislikeClick = () => {
      setDisliked(!disliked);
      setLiked(false);
    };
    return (
        <div>
               <div key={forum._id} className="mb-6 flex  items-center gap-6   flex-col md:flex-row">
                    <div className="mb-6 ml-auto w-full   px-3 md:mb-0 md:w-3/12  h-full">
                      <div
                        className="relative  overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 h-full"
                        data-te-ripple-init=""
                        data-te-ripple-color="light"
                      >
                        <img
                          src={forum.img}
                          className="w-full h-full"
                          alt="Louvre"
                        />
                        <a href="#!">
                          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                        </a>
                      </div>
                    </div>
                    <div className="mb-6 mr-auto w-full  px-3 md:mb-0 md:w-9/12 xl:w-7/12 ">
                      <h5 className="mb-3 text-lg font-bold">{forum.title}</h5>
                      <div className="mb-3 text-[#c3bd2e] flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                        {forum.role==='admin' ? <MdAdminPanelSettings className="text-3xl text-[#c3bd2e]"></MdAdminPanelSettings>:<MdOutlineAddModerator className="text-3xl text-[#c3bd2e]"></MdOutlineAddModerator>}
                        Gym
                      </div>
                      <p className="mb-6 ">
                        <small>
                          Published <u>{forum.date.slice(0,10)}</u> 
                          
                        </small>
                      </p>
                      <p className="">
                     {forum.des}
                      </p>
                      <div className="text-2xl text-[#c3bd2e] ">    {user && (
            <>
              <button className="" onClick={handleLikeClick}>
                {liked ? <AiFillLike /> : <AiOutlineLike />}
              </button>
              <button className="mt-4 ml-3" onClick={handleDislikeClick}>
                {disliked ? <AiFillDislike /> : <AiOutlineDislike />}
              </button>
            </>
          )}</div>
                    </div>
                  </div> 
        </div>
    );
};

export default ForumCard;