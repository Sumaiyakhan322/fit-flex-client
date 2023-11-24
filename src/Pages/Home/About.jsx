import Title from '../../Shared/Title';
import img1 from '../../assets/about/img1.avif'

const About = () => {
    return (
        <div>
            <Title heading={'About US'}></Title>
             <div
    className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%]  h-[500px]" style={{ backgroundImage: `url(${img1})` }}>
  </div>
  
  <div className="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
    <div className="text-center">
      <div
        className="block rounded-lg bg-[#6eac45] px-6 py-12  shadow- [0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)]  md:py-16 md:px-12 mt-[-170px] backdrop-blur-[30px]">
        <h1 className="mt-2 mb-16 text-3xl font-bold tracking-tight md:text-4xl text-white xl:text-5xl">
        <h1>Engaging Visuals</h1> <br /><h1 className="text-[#c3bd2e] -my-10 ">Timeline Infographic</h1> <br />
        <h1>Video Introduction </h1>
        </h1>
       <p className='text-gray-300'>Incorporate images or illustrations that showcase the energy and vibrancy of fitness. Consider using pictures of your team, fitness classes, or even user testimonials to add a personal touch.Create a timeline infographic that highlights key milestones in the development of FitFlexOnline. This can visually represent your journey, showcasing significant achievements, product launches, and growth over time.</p>
      </div>
    </div>
  </div>
        </div>
    );
};

export default About;