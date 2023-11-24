import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Features from "./Features";
import About from "./About";
import Blog from "./Blog";
import FeatureClass from "./FeatureClass";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fitness | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <About></About>
      <FeatureClass></FeatureClass>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Newsletter></Newsletter>
      
    </div>
  );
};

export default Home;
