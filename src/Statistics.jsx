import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Statistics = () => {
  const params = useParams();
  const ID = params.id;
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function loadJobs() {
      await fetch("/src/data/jobs.json")
        .then((res) => res.json())
        .then((data) => {
          data.find((job) => {
            if (job.id == ID) {
              setJobs(job);
            }
          });
        });
    }
    loadJobs();
  }, []);
  return (
    <>
      <div className="px-4 pt-5 mx-auto w-full md:px-24 lg:px-8 bg-violet-100">
        <img className="ms-auto" src="/src/assets/images/bg2.png" alt="" />
        <h1 className="font-bold text-2xl text-center">Job details</h1>
        <img src="/src/assets/images/bg1.png" alt="" />
      </div>
      <div>
      <div  className="px-4 pt-5 mx-auto lg:w-1/2 md:px-24 lg:px-8">
        <div className="mb-4">
        <h1> <span className="font-bold">Job Responsibility: </span> {jobs.job_responsibility}</h1>
        </div>
  
        <p> <span className="font-bold">Job Description: </span>{jobs.job_description}</p>
        <p><span className="font-bold">Educational Requirements: </span></p>
        <p>{jobs.educational_requirements}</p>
        <p><span className="font-bold">Job Experience: </span></p>
        <p>{jobs.experiences}</p>
      </div>
      <div className="px-4 pt-5 mx-auto lg:w-1/4 md:px-24 lg:px-8">

      </div>
      </div>
      
    </>
  );
};

export default Statistics;
 