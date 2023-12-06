import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  return (
    <div className="mx-auto mt-20 bg-violet-50 p-10 w-3/4">
      <Link to={`/job/${job.id}`}>
        <img className="object-cover p-5" src={job.logo} alt="" />
        <p className="mt-2 font-bold">{job.job_title}</p>
        <p className="mt-2">{job.company_name}</p>
        <div className="flex mt-2 mb-2 text-violet-800">
          <button className="border-solid border-2 border-indigo-600 me-2 p-3">
            {job.remote_or_onsite}
          </button>
          <button className="border-solid border-2 border-indigo-600 p-3">
            {job.job_type}
          </button>
        </div>
        <div className="flex">
          <p className="me-4">{job.location}</p>
          <p>{job.salary}</p>
        </div>

        <button className="mt-2 text-white bg-violet-500 hover:bg-violet-800 p-3 rounded hover:-translate-y-3 duration-150  ">
          Get started
        </button>
      </Link>
    </div>
  );
};

export default Job;
