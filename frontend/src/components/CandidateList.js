import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CandidateList({ setSelectedCandidate }) {
  const [candidates, setCandidates] = useState("");
  console.log(candidates);
  useEffect(() => {
    if (candidates) return;
    axios.get("api/candidates").then((res) => {
      setCandidates(res.data);
    });
  }, [candidates]);

  const STATUS_CHOICES = {
    1: "Applied",
    2: "Accepted",
    3: "Rejected",
  };

  if (candidates[0]) {
    return (
      <div className="grid place-items-center">
        <table className="w-2/3 text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead
            className="
          text-xs
          text-gray-700
          uppercase
          bg-gray-50
          dark:bg-gray-700
          dark:text-gray-400"
          >
            <tr>
              <th scope="col" className="py-3 px-6">
                Date Applied
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Position
              </th>
              <th scope="col" className="py-3 px-6">
                Location
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-900 hover:cursor-pointer"
                key={candidate.id}
                onClick={(e) => {
                  setSelectedCandidate(candidate.id);
                }}
              >
                <td className="py-4 px-6">
                  {candidate.dateApplied.toString().slice(0, 10)}
                </td>
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {candidate.firstName + " " + candidate.lastName}
                </td>
                <td className="py-4 px-6">{candidate.position}</td>
                <td className="py-4 px-6">{candidate.location}</td>
                <td className={`py-4 px-6`}>
                  <p
                    className={`py-2 px-2 w-fit font-semibold rounded-sm text-white
                    ${candidate.status === 2 ? " bg-green-600" : ""} ${
                      candidate.status === 3 ? "bg-red-600" : ""
                    } ${candidate.status === 1 ? "bg-gray-600" : ""}`}
                  >
                    {STATUS_CHOICES[candidate.status]}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else
    return <div>No candidates yet, add one by pressing the below button</div>;
}
