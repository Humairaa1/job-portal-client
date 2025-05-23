import React from 'react'
import { Link } from 'react-router-dom';

export default function JobCard({ job }) {

    const {_id, title, location, description, company,company_logo } = job;

    return (
        <div className="card bg-base-100 shadow-sm mt-5 px-5 pt-5">
            <div className='flex items-center gap-3'>
                <figure>
                    <img
                        className='w-14'
                        src={company_logo}
                        alt="logo" />
                </figure>
                <div>
                    <h1 className='text-xl'>{company}</h1>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`} className="btn btn-primary">Apply Now</Link>
                </div>
            </div>
        </div>
    )
}
