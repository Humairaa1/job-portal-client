import React, { useEffect, useState } from 'react'
import JobCard from './JobCard';

export default function Jobs() {

    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

  return (
    <div className='mt-10'>
      <h1 className='text-3xl text-center font-bold'>All Jobs</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
            jobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
        }
      </div>
    </div>
  )
}
