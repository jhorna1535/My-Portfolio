import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../../src/assets/skills/pl.jpg';
import img2 from '../../../../src/assets/skills/jas.jpg';
import img3 from '../../../../src/assets/skills/adop.png';
import img4 from '../../../../src/assets/skills/html.png';
import img5 from '../../../../src/assets/skills/api.png';
import img6 from '../../../../src/assets/skills/communication.png';
import img7 from '../../../../src/assets/skills/crea.png';
import img8 from '../../../../src/assets/skills/git.png';
import img9 from '../../../../src/assets/skills/problem -sol.png';
import img10 from '../../../../src/assets/skills/time.png';
import img11 from '../../../../src/assets/skills/soft.png';
import img12 from '../../../../src/assets/skills/design.png';
import img13 from '../../../../src/assets/skills/time2.png';
import img14 from '../../../../src/assets/skills/virsion.png';




const Skills = () => {
    return (
        <section>
         <h1 className='text-center text-4xl p-10 text-blue-900'>MY SKILLS</h1>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24 mt-8"
        >
            <SwiperSlide>
                <img className='w-40 h-40 rounded-lg' src={img1} alt=''/>
                <h3 className='text-sm uppercase text-wrap text-left  text-black'>Programming language</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img2} alt=''/>
            <h3 className='text-sm uppercase text-center  text-black'>JavaScript</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img3} alt=''/>
            <h3 className='text-sm uppercase text-left  text-black'>Adaptability and flexibility</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img4} alt=''/>
            <h3 className='text-sm uppercase text-wrap text-left  text-black'>HTML</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img5} alt=''/>
            <h3 className='text-sm uppercase text-center  text-black'>API development</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg'  src={img6} alt=''/>
            <h3 className='text-sm uppercase text-center  text-black'>Communication</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img7} alt=''/>
            <h3 className='text-sm uppercase text-center  text-black'>Creativity</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img8} alt=''/>
            <h3 className='text-sm uppercase text-wrap text-left  text-black '>Git and GitHub</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img9} alt=''/>
            <h3 className='text-sm uppercase text-wrap text-left  text-black'>
            Problem solving</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img10} alt=''/>
            <h3 className='text-sm uppercase text-wrap text-left  text-black'>Time management</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img11} alt=''/>
            <h3 className='text-sm uppercase text-wrap text-left  text-black'>Soft skills</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img12} alt=''/>
            <h3 className='text-sm uppercase text-wrap text-left  text-black'>Design skills</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img13} alt=''/>
            <h3 className='text-sm uppercase text-wrap text-left  text-black'>Frontend frameworks</h3>
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-40 h-40 rounded-lg' src={img14} alt=''/>
            <h3 className='text-sm uppercase text-wrap text-left   text-black'>Version control</h3>
            </SwiperSlide>
            
        </Swiper>
        </section>
    );
};

export default Skills;