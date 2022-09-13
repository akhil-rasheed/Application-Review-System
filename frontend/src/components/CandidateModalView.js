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
      setInfo(response.data);
    });
  };
  const markRejected = () => {
    const newInfo = { ...info, status: 3 };
    console.log(newInfo);
    axios.put(`/api/candidates/${candidateId}/`, newInfo).then((response) => {
      console.log(response);
      setInfo(response.data);
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
      <div className="bg-gray-900 h-screen p-24 grid place-items-center">
        <div className=" bg-gray-700 text-white flow-root rounded-3xl p-16 w-1/2 min-w-max">
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
            <div className="font-light text-sm">
              {info.email}
              <br></br> {info.phone}
              <p className="font-light float right">{info.location}</p>
            </div>

            <br></br>
            <br></br>

            <p>Position: {info.position}</p>
            <p>Compensation in LPA: {info.salary}</p>
            <p>Experience: {info.experience}</p>
            <p>Skills: {info.skills}</p>
            <p>Education: {info.education}</p>
          </div>

          {/* Accept reject buttons shown conditionally */}
          <div
            className={`text-bold text-white text-md ${
              info.status === 1 ? "" : "hidden"
            }`}
          >
            <button
              className="text-bold rounded-xl  p-2 text-white  mx-2 hover:bg-gray-600 bg-green-400 "
              onClick={markAccepted}
            >
              Accept
            </button>
            <button
              className="text-bold rounded-xl  p-2 text-white  mx-2 hover:bg-gray-600 bg-red-400"
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
