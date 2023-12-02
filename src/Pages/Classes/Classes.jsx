import { Helmet } from "react-helmet-async";
import AllClass from "./AllClass";
import WeeklyClass from "./weeklyClass";


const Classes = () => {
    return (
        <div>
          <Helmet>
        <title> Fit-Flex-Online| Classes</title>
      </Helmet>
          <WeeklyClass ></WeeklyClass>  
          <AllClass></AllClass>
        </div>
    );
};

export default Classes;