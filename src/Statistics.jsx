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
        <h1>{jobs.job_title}</h1>
        <p>{jobs.job_description}</p>
      </div>
    </>
  );
};

export default Statistics;
