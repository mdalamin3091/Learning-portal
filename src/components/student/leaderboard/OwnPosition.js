
import React from 'react'
import HeadRow from './HeadRow'

const OwnPosition = () => {
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
                        <td className="table-td text-center font-bold">Saad Hasan</td>
                        <td className="table-td text-center font-bold">50</td>
                        <td className="table-td text-center font-bold">50</td>
                        <td className="table-td text-center font-bold">100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OwnPosition