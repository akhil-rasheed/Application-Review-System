import React, { useState } from "react";
import CandidateModalView from "./CandidateModalView";
import CandidateList from "./CandidateList";
import AddCandidate from "./AddCandidate";

export default function Dashboard() {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [newCandidate, setNewCandidate] = useState();

  console.log(selectedCandidate);
  if (selectedCandidate) {
    return (
      <CandidateModalView
        candidateId={selectedCandidate}
        setSelectedCandidate={setSelectedCandidate}
      />
    );
  } else if (!newCandidate) {
    return (
      <div className="h-screen bg-gray-900">
        {/* Main header */}
        <div className="h-1/6 text-white text-bold grid place-items-center text-3xl">
          All Candidates
        </div>

        {/* Applications */}
        <CandidateList setSelectedCandidate={setSelectedCandidate} />

        {/* New Candidate button */}
        <div className="grid place-items-center my-12">
          <div className="flow-root w-2/3">
            <button
              className="float-right font-bold p-3 bg-blue-600 rounded-xl text-white"
              onClick={() => {
                setNewCandidate(true);
              }}
            >
              Add new candidate
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <AddCandidate setNewCandidate={setNewCandidate} />;
  }
}
