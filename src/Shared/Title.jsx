
import '../Styles/Headings.css'
const Title = ({heading}) => {
    return (
        <div>
            <h2 className="headings   text-center text-2xl md:text-5xl  mt-20">
       {heading}
      </h2>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent  w-10/12 via-[#193e51] to-transparent opacity-25 dark:opacity-100 center"  />
        </div>
    );
};

export default Title;