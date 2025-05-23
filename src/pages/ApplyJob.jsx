import React from 'react'
// import useAuth from '../hooks/useAuth';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function ApplyJob() {

    const { id } = useParams();

    // const { user } = useAuth();

    const handleJobApply = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        // console.log(email, linkedin, github)

        const jobApplication = {
            job_Id: id,
            email,
            linkedin,
            github
        }

        fetch("http://localhost:5000/jobs_apply", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Apply successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
                form.reset();
            })
    }

    return (
        <div className="hero bg-base-200 w-11/12 mx-auto mt-10">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Apply now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleJobApply} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">LinkedIn URL</label>
                            <input type="url" name='linkedin' className="input" placeholder="linkedin url" />
                            <label className="label">Github</label>
                            <input type="url" name='github' className="input" placeholder="github url" />

                            <button type='submit' className="btn btn-primary mt-4">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
