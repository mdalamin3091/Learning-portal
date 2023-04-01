import React from "react";
import Navbar from "../components/Navbar";
import HeadRow from "../components/student/leaderboard/HeadRow";
import DataRow from "../components/student/leaderboard/DataRow";
import OwnPosition from "../components/student/leaderboard/OwnPosition";

const Leaderboard = () => {
  return (
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          {/* your own position in the leaderboard  */}

          <OwnPosition />

          <div className="my-8">
            <h3 className="text-lg font-bold">Top 20 Result</h3>
            <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
              <thead>
                <HeadRow />
              </thead>

              <tbody>
                <DataRow />
              </tbody>
            </table>
          </div>
        </div>
      </section>
  );
};

export default Leaderboard;
