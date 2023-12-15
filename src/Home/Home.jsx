import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {  useLoaderData } from "react-router-dom";
import Job from "../job.jsx";

const Home = () => {
  // Aos effect
  useEffect(() => {
    Aos.init();
  }, []);

  const [jobs, setJobs] = useState([]);
  //  job data
  useEffect(() => {
    fetch("/src/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  // data recieving
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div>
      <div className="bg-violet-100 lg:flex">
        <div
          className="lg:w-1/2 text-center lg:p-20 w-full pt-10"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <p className=" text-4xl lg:text-7xl">
            One Step <br /> Closer To Your <br />
            <span className="text-violet-600">Dream job</span>
          </p>
          <p className="text-gray-400 mt-4 md:text-2xl">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="text-center mt-5 text-white bg-violet-500 hover:bg-violet-800 p-3 rounded hover:-translate-y-2 duration-150">
            View Details
          </button>
        </div>
        <div
          className="lg:w-1/2 sm:w-full pt-10 sm:p-5 lg:p-10"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <img className="" src="/src/assets/images/user.png" alt="" />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center font-bold text-3xl">Job Category List</p>
        <p className="text-center text-slate-400 mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid gap-5  lg:grid-cols-4 sm:grid-cols-3 gap-4 ">
        {categories.map((category) => (
          <div className="mx-auto mt-10 bg-violet-100 p-10">
            <img
              className="bg-violet-200 object-cover"
              src={category.logo}
              alt=""
            />
            <p className="mt-2 font-bold">{category.category_name}</p>
            <p className="mt-2">{category.availability}</p>
          </div>
        ))}
      </div>

      {/* job section header */}
      <div className="mt-20 text-center">
        <p className="font-bold text-2xl">Featured job</p>
        <p className="text-slate-400 mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* job section informations */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-2">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
        {/* {jobs.map((job) => (
          <Statistics job={job}></Statistics>
          
        ))} */}
      </div>
    </div>
  );
};

export default Home;
