
import React from 'react'

const DataRow = ({name, qzMarks, assignmentMark, totalMarks}) => {
    return (
        <tr className="border-b border-slate-600/50">
            <td className="table-td text-center">4</td>
            <td className="table-td text-center">{name}</td>
            <td className="table-td text-center">{qzMarks}</td>
            <td className="table-td text-center">{assignmentMark}</td>
            <td className="table-td text-center">{totalMarks}</td>
        </tr>
    )
}

export default DataRow