import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Features from "./Features";
import About from "./About";
import Blog from "./Blog";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fitness | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <About></About>
      <Blog></Blog>
      
    </div>
  );
};

export default Home;
