import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Features from "./Features";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fitness | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
    </div>
  );
};

export default Home;
