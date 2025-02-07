import { FaDownload } from "react-icons/fa";
import bannerImg from '../../../assets/bannar-back.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10">
           
          <div className="md:flex justify-center items-center   pb-20 pt-12 px-36">
            <div className='pl-2  pr-20'>
                <img className='w-2/3 rounded-lg' src={bannerImg} alt=""/>
            </div>
            <div className="bg-opacity-100 md:mr-24">
                <p className='text-3xl p-3'><small className='text-orange-800 text-3xl'>HI !✋
                  
                </small>
                <br />
                I'M JHORNA</p>
                <p className="uppercase text-2xl mb-3 p-3">I'm a 
                  <br /> <small className='text-cyan-500 hover:text-4xl'>Full- Stack Developer</small></p>
                
                <button className="md:flex-col gap-1 px-6  btn btn-outline btn-primary border-0 border-b-2">Download Resume <FaDownload /></button>
            </div>
          </div>
        </div>
    );
};

export default Banner;