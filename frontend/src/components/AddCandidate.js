import React, { useEffect, useState } from "react";
import CandidateForm from "./CandidateForm";

export default function CandidateModalView({ setNewCandidate }) {
  return (
    <div className="bg-gray-900 h-screen p-24">
      <div className=" bg-gray-700 text-white flow-root rounded-3xl p-16">
        <button
          className="font-bold float-right text-sm rounded-xl border-2 border-white px-2 text-white hover:bg-gray-400"
          onClick={() => {
            setNewCandidate(false);
          }}
        >
          X
        </button>
        <CandidateForm />
      </div>
    </div>
  );
}
