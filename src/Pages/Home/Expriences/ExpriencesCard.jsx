import img1 from '../../../../src/assets/Experience/ex1.jpg';
import img2 from '../../../../src/assets/Experience/ex2.jpg';
import img3 from '../../../../src/assets/Experience/ex3.jpg';
import img4 from '../../../../src/assets/Experience/ex4.jpg';
import img5 from '../../../../src/assets/Experience/ex5.jpg';
import img6 from '../../../../src/assets/Experience/ex8.jpg';
import img7 from '../../../../src/assets/Experience/ex10.jpg';
import img8 from '../../../../src/assets/Experience/ex11.jpg';
import img9 from '../../../../src/assets/Experience/ex12.jpg';
import img10 from '../../../../src/assets/Experience/trophy.png';

const ExperiencesCard = () => {
  return (
    <>
      <h2 className='text-center text-4xl text-blue-900 p-10'>Amazing Experiences</h2>
      <div className='ml-36 py-10 space-y-8 items-center justify-center grid md:grid-cols-2'>

        {/* Professional Work */}
        <div className="card w-96 p-6 bg-zinc-400 shadow-2xl">
          <figure className="px-10 pt-10 flex">
            <img src={img1} className="rounded-xl" alt="Professional Work 1" />
            <img src={img2} className="rounded-xl" alt="Professional Work 2" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Professional Work</h2>
          </div>
        </div>

        {/* Personal Projects */}
        <div className="card w-96 p-6 bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10 flex">
            <img src={img3} className="rounded-xl" alt="Personal Project 1" />
            <img src={img4} className="rounded-xl" alt="Personal Project 2" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Personal Projects</h2>
          </div>
        </div>

        {/* Freelance Work */}
        <div className="card w-96 p-6 bg-zinc-400 shadow-2xl">
          <figure className="px-10 pt-10 flex">
            <img src={img5} className="rounded-xl" alt="Freelance Work 1" />
            <img src={img6} className="rounded-xl" alt="Freelance Work 2" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Freelance Work</h2>
          </div>
        </div>

        {/* Academic or Training Projects */}
        <div className="card w-96 p-6 bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10 flex">
            <img src={img7} className="rounded-xl" alt="Academic Project 1" />
            <img src={img8} className="rounded-xl" alt="Academic Project 2" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Academic or Training Projects</h2>
          </div>
        </div>

        {/* Collaborative Work */}
        <div className="card w-96 p-6 bg-zinc-400 shadow-2xl">
          <figure className="px-10 pt-10 flex">
            <img src={img9} className="rounded-xl" alt="Collaborative Work 1" />
            <img src={img4} className="rounded-xl" alt="Collaborative Work 2" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Collaborative Work</h2>
          </div>
        </div>

        {/* Certifications & Skills Demonstrations */}
        <div className="card w-96 p-6 bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10 flex">
            <img src={img10} className="rounded-xl" alt="Certifications Image" />
            <img src={img7} className="rounded-xl" alt="Skills Demonstration" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Certifications & Skills Demonstrations</h2>
          </div>
        </div>

      </div>
    </>
  );
};

export default ExperiencesCard;
