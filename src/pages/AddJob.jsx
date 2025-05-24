import React from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddJob() {

  const handleformSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newjob } = initialData;
    newjob.salaryRange = { min, max, currency };
    // console.log(newjob);  
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newjob),
    })
      .then((res) => res.json())
      .then(data => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Apply successfully!",
            icon: "success",
            draggable: true
          });
        }
        Navigate("/jobs");
      })
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Job</h2>
      <form onSubmit={handleformSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Job Title</label>
          <input
            type="text"
            name="title"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Minimum Salary
            </label>
            <input
              type="number"
              name="min"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Maximum Salary
            </label>
            <input
              type="number"
              name="max"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Currency</label>
          <select
            name="currency"
            className="w-full border rounded px-3 py-2">
            <option value="bdt">BDT</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Job Description</label>
          <textarea
            name="description"
            className="w-full border rounded px-3 py-2"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company Logo URL</label>
          <input
            type="url"
            name="logo"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Job
        </button>
      </form>
    </div>
  );
}
