
import React, { Fragment } from 'react'

const TextInput = ({ title, type = "text", ...attributes }) => {
    return (
        <Fragment>
            <label className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <input
                style={{ color: "black" }}
                required
                type={type}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                {...attributes}
            />
        </Fragment>
    )
}

export default TextInput