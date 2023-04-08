
import React, { Fragment } from 'react'

const TextArea = ({ title, ...attributes }) => {
    return (
        <Fragment>
            <label className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <div className="mt-1">
                <textarea
                    style={{ color: "black" }}
                    {...attributes}
                    required
                    rows="10"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                ></textarea>
            </div>
        </Fragment>
    )
}

export default TextArea