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
      {/* job details */}
      <div className="lg:flex">
        {/* left side information */}
        <div className="px-4 pt-5 mx-auto lg:w-1/2 md:px-24 lg:px-8">
          {/* job responsibility */}
          <div className="mb-4">
            <h1>
              {" "}
              <span className="font-bold">Job Responsibility: </span>{" "}
              {jobs.job_responsibility}
            </h1>
          </div>
          {/* job description */}
          <div className="mb-4">
            {" "}
            <p className="text-slate-400">
              {" "}
              <span className="font-bold">Job Description: </span>
              {jobs.job_description}
            </p>
          </div>
          {/* Educational requirements */}
          <div className="mb-5">
            <p>
              <span className="font-bold">Educational Requirements: </span>
            </p>
            <p>{jobs.educational_requirements}</p>
          </div>
          {/* job experience */}
          <div className="mb-5">
            <p>
              <span className="font-bold">Job Experience: </span>
            </p>
            <p>{jobs.experiences}</p>
          </div>
        </div>
        {/* job details card */}
        <div className="px-4 pt-5 mx-auto lg:w-1/4 md:px-24 lg:px-8 bg-violet-100 mb-5 mt-5 h-150">
          <p> Job details</p>
          <hr className="border-1 border-black" />

          <p className="mt-3">
            {" "}
            <span className="font-bold">Job Title: </span> {jobs.job_title}
          </p>
          <p className="mt-3">
            <span className="font-bold">Salary: </span> {jobs.salary}
          </p>
          <p className="mt-4 mb-2">Contact Information </p>
          <hr className="border-1 border-black" />
        {/* jons section phone number */}
          {jobs.contact_information ? (
            <p>Email: {jobs.contact_information.email}</p>
          ) : (
            <p>Email: null</p>
          )}
          {jobs.contact_information ? (
            <p>Address: {jobs.contact_information.address}</p>
          ) : (
            <p>Address: null</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Statistics;
