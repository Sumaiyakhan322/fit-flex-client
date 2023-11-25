import { Helmet } from 'react-helmet-async';

import img1 from '../../assets/gallery/bg.jpg'
import { Parallax } from 'react-parallax';

const PageTitle = () => {
    return (
        <div>
            <Helmet><title> Fit-Flex-Online | Home</title></Helmet>
            
            <div className="" >
  
      <Parallax blur={4} bgImage={img1} bgImageAlt="the cat" strength={200} className='hero min-h-screen'>
      <div className="hero-overlay bg-opacity-40 bg-gray-400"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-[#c3bd2e]">Gallery</h1>
      <p className="mb-5 font-semibold text-white text-3xl">Fit-Flex-Online | Home</p>
      </div>
      </div>
    </Parallax>
     
   
 
</div>
        </div>
    );
};

export default PageTitle;