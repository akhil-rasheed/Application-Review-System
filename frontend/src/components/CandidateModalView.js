import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CandidateModalView({
  candidateId,
  setSelectedCandidate,
}) {
  const [info, setInfo] = useState();

  const markAccepted = () => {
    const newInfo = { ...info, status: 2 };
    console.log(newInfo);
    axios.put(`/api/candidates/${candidateId}/`, newInfo).then((response) => {
      console.log(response);
    });
  };
  const markRejected = () => {
    const newInfo = { ...info, status: 3 };
    console.log(newInfo);
    axios.put(`/api/candidates/${candidateId}/`, newInfo).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    if (info) return;
    axios.get(`/api/candidates/${candidateId}`).then((response) => {
      console.log(response.data);
      setInfo(response.data);
    });
  });

  if (info) {
    return (
      <div className="bg-gray-900 h-screen p-24">
        <div className=" bg-gray-700 text-white flow-root rounded-3xl p-16">
          <button
            className="font-bold float-right text-sm rounded-xl border-2 border-white px-2 text-white hover:bg-gray-400"
            onClick={() => {
              setSelectedCandidate("");
            }}
          >
            X
          </button>
          <div className="py-8">
            <p className="font-bold text-3xl">
              {info.firstName + " " + info.lastName}
            </p>
            <p className="font-light text-sm">{info.email}</p>
            <p className="font-light">Location: {info.location}</p>
            <br></br>
            <br></br>

            <p>Applying for position: {info.position}</p>
            <p>Expected Compensation: {info.salary}</p>
          </div>

          {/* Accept reject buttons shown conditionally */}
          <div
            className={`text-bold text-white text-md ${
              info.status === 1 ? "" : "hidden"
            }`}
          >
            <button
              className="text-bold rounded-xl border-2 p-1 text-white  mx-2 hover:bg-transparent bg-green-400 "
              onClick={markAccepted}
            >
              Accept
            </button>
            <button
              className="text-bold rounded-xl border-2 p-1 text-white  mx-2 hover:bg-transparent bg-red-400"
              onClick={markRejected}
            >
              Reject
            </button>
          </div>

          {/* Message indicating that the candidate has been accepted or rejected */}
          <div
            className={`font-bold rounded-md text-white grid place-items-center text-md p-2   ${
              info.status === 1 ? "hidden" : ""
            } ${info.status === 2 ? "bg-green-400" : ""} ${
              info.status === 3 ? " bg-red-400" : ""
            }`}
          >
            <p>
              The candidate has been
              {` ${info.status === 2 ? "accepted" : "rejected"}`}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
