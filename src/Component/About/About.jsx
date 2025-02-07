import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
  const About = () => {
   
    return (
        <>
        <div className="pt-20" >
          <div className="flex m-4 border-4 border-slate-600 p-3 text-left">
            <div className="p-4 mx-4 border-r-2">
               <h1  className="text-xl text-black"> About Me</h1>
               <p>
               I am a Full-Stack Web Developer with a passion for building scalable, user-friendly web applications. With expertise in both front-end and back-end technologies, I specialize in crafting seamless digital experiences from concept to deployment.
               
               </p>
               

            </div>
            <div className="p-4 mx-4">
              <h1 className="text-xl text-black">Work With</h1>
                <p>
                On the front end, I work with HTML, CSS, JavaScript, and modern frameworks like React, Vite to create intuitive and responsive user interfaces. On the back end, I develop robust server-side logic using Node.js, Express, Python (Django/Flask), or PHP (Laravel) and manage databases with MongoDB, PostgreSQL, or MySQL.
                </p>
            </div>
            
            </div>

            

            <div className="py-6 mx-4 rounded-lg text-center bg-stone-400 text-white">
                <p>
                I have experience working with RESTful APIs, GraphQL, cloud services (AWS, Firebase), and DevOps tools to ensure optimal performance and scalability. My focus is on writing clean, maintainable code and continuously learning emerging technologies to stay ahead in the ever-evolving web development landscape.

Whether it's developing a full-fledged web application, optimizing existing systems, or integrating third-party services, I am committed to delivering high-quality, efficient, and scalable solutions tailored to business needs.  
                </p>
            </div>

            <div className="bg-zinc-300 px-14 my-8">
              <h1 className="text-center p-3">CONTACT DETAILS</h1>
            <div className="flex justify-center items-center">
            <CiPhone className="text-2xl"/>
              <h1 className=" text-center p-2 text-2xl text-indigo-600">
                Contact:01********
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <a><MdOutlineMarkEmailRead className="text-2xl"/></a>
            <h2 className=" text-center p-2 text-2xl text-indigo-600">Email :smbappy305@gmail.com</h2>
              </div>
            </div>

            <h2  className="text-xl hover:text-sky-600 text-black my-8 text-center">
            Let’s build something great together! 🚀
            </h2>
        </div>
        </>
    );
};

export default About;