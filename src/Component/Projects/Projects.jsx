

const Projects = () => {
    return (
        <>
        <div className="mt-20 text-7xl text-center hover:text-red-700">
            <h2>My Projects</h2>
        </div>
                <div> 
           
           <div className="p-8 mt-10">
           <div className="hero w-auto bg-base-200">
     <div className="hero-content flex-col lg:flex-row-reverse justify-between">
       <img  src="../../../src/assets/bd-matriomony.png" className="w-1/2 rounded-sm shadow-2xl" />
       <div>
         <h1 className="text-5xl font-bold">BD-Matriomony</h1>
         <p className="text-sm m-3">BD Matrimony is a modern web platform built using the MERN stack (MongoDB, Express, React, Node.js). The platform is designed to connect individuals seeking life partners, providing an intuitive and user-friendly interface tailored for the Bangladeshi community.</p>
        <a href="https://bd-matrimony.netlify.app/"> <button className="btn btn-primary mt-3">Live Link</button></a>
        <a href="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-jhorna1535"> <button className="btn btn-primary mt-3">GitHub Link</button></a>
       </div>
     </div>
   </div>
           </div>
   
              
     <div className="p-8 mt-10">
     <div className="hero w-auto bg-base-200">
     <div className="hero-content flex-col lg:flex-row-reverse">
       <img src="../../../src/assets/crowdcube.png" className="max-w-sm rounded-lg shadow-2xl" />
       <div>
         <h1 className="text-5xl font-bold">CROWDCUBE</h1>
         <p className="text-sm m-3">Welcome to the CrowdCube: Crowdfunding Platform, a user-friendly web application designed to help individuals and organizations create, manage, and contribute to crowdfunding campaigns. With seamless donation features and real-time campaign updates, this platform is built to empower meaningful contributions toward various causes.</p>
        <a href="https://ph-a10-crowdfunding-client.vercel.app/"> <button className="btn btn-primary">Live Link</button></a>
        <a href="https://github.com/programming-hero-web-course2/b10-a10-client-side-jhorna1535"> <button className="btn btn-primary mt-3">GitHub Link</button></a>
       </div>
     </div>
   </div>
     </div>
   
    <div className="p-8 mt-10">
   
    <div className="hero w-auto bg-base-200">
     <div className="hero-content flex-col lg:flex-row-reverse">
       <img src="../../../src/assets/winter.png" className="max-w-sm rounded-lg shadow-2xl" />
       <div>
         <h1 className="text-5xl font-bold">WINTER WARMTH</h1>
         <p className="text-sm m-3">This is a donation web application where donors can donate cloths for the needy people. The volunteers collect the cloths and give these to the needy people. Our goal is to make a better world where no one will suffer in winter for cloths.</p>
         <a href="https://ph-a9-winter-cloth-donation.vercel.app/"><button className="btn btn-primary">Live Link</button></a>
         <a href="https://github.com/programming-hero-web-course1/b10-a9-authentication-jhorna1535"> <button className="btn btn-primary mt-3">GitHub Link</button></a>
       </div>
     </div>
   </div>
    </div>
   
   
   </div>
        </>




        
    );
};

export default Projects;