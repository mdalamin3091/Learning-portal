import React from "react";
import HeadRow from "./HeadRow";
import { useSelector } from "react-redux";
import { useGetQuizMarkQuery } from "../../../features/quizMark/quizMarkApi";
import { useGetAssignmentMarkQuery } from "../../../features/assignmentMarks/assignmentMarksApi";

const OwnPosition = () => {
    const { user } = useSelector((state) => state.auth);
    const { data, isSuccess } = useGetQuizMarkQuery(user.id);
    const { data: assignmentMark, isSuccess: isAssignmentSuccess } = useGetAssignmentMarkQuery(user.id);
    let ownQuizMarks;
    let ownAssignmentMarks;
    if (isSuccess) {
        ownQuizMarks = data.reduce(
            (initialMark, quiz) => initialMark + quiz.mark,
            0
        );
    }
    
    if (isAssignmentSuccess) {
        ownAssignmentMarks = assignmentMark.reduce((mark, assign) => mark + assign.mark, 0)
    }
    
    const totalMarks = ownQuizMarks + ownAssignmentMarks;
    return (
        <div>
            <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
            <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                <thead>
                    <HeadRow />
                </thead>
                <tbody>
                    <tr className="border-2 border-cyan">
                        <td className="table-td text-center font-bold">4</td>
                        <td className="table-td text-center font-bold">{user.name}</td>
                        <td className="table-td text-center font-bold">{ownQuizMarks}</td>
                        <td className="table-td text-center font-bold">{ownAssignmentMarks}</td>
                        <td className="table-td text-center font-bold">{totalMarks}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OwnPosition;
