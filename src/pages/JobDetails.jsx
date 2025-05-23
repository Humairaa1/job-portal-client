import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function JobDetails() {

    const jobs = useLoaderData();
    const {_id, title, location, description, company, jobType, applicationDeadline, salaryRange, requirements, responsibilities, status } = jobs;

    return (
        <div className='w-8/12 mx-auto mt-10'>
            <h1 className='text-3xl text-center font-bold mb-5'>Job Details</h1>

            <div>
                <p className='font-semibold text-gray-600'>{company}</p>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p>{location}</p>
            </div>

            <div className='mt-5 flex gap-10 font-medium text-lg'>
                <p>Rate Amount : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p>Deadlines : {applicationDeadline}</p>
            </div>
            <div className='mt-5 flex gap-10 font-medium text-lg'>
                <p>Job Type : {jobType}</p>
                <p>Status : {status}</p>
            </div>

            <div className='mt-5 flex gap-10'>
                <div>
                    <h1 className='text-lg font-bold'>responsibilities : </h1>
                    <ul className='list-disc'>

                        {
                            responsibilities.map((req, idx) => <li key={idx}>{req}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-bold'>Requirement : </h1>
                    <ul className='list-disc'>

                        {
                            requirements.map((req, idx) => <li key={idx}>{req}</li>)
                        }
                    </ul>
                </div>
            </div>

            <p className='my-5'>Description : {description}</p>
            <Link to={`/applyjob/${_id}`} className='btn btn-primary'>Apply Now</Link>

        </div>
    )
}
