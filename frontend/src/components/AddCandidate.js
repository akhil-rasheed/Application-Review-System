import React, { useEffect, useState } from "react";
import CandidateForm from "./CandidateForm";

export default function CandidateModalView({ setNewCandidate }) {
  return (
    <div className="bg-gray-900 h-screen p-24 grid place-items-center">
      <div className=" bg-gray-700 text-white rounded-3xl p-16 w-1/2 min-w-max">
        <button
          className="font-bold float-right text-sm rounded-xl border-2 border-white px-2 text-white hover:bg-gray-400"
          onClick={() => {
            setNewCandidate(false);
          }}
        >
          X
        </button>
        <p className="text-3xl font-bold my-12">Add a new candidate</p>
        <CandidateForm />
      </div>
    </div>
  );
}
