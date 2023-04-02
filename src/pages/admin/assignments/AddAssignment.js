
import React from 'react'
import TextInput from '../../../components/shared/TextInput'
import TextArea from '../../../components/shared/TextArea'

const AddAssignment = () => {
    return (
        <form style={{ width: "80%", margin: "0 auto", marginTop: "30px" }}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput
                                title="Assignment Title"
                                type="text"
                                placeholder="Enter Assignment Title"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">
                            Video Title
                            </label>
                            <select className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 text-gray-500"
                                style={{ color: "black" }}
                                required
                            >
                                <option value="" hidden>Select Video Title</option>
                                <option value="title1">title1</option>
                                <option value="title2">title2</option>
                                <option value="title3">title3</option>
                                <option value="title4">title4</option>
                            </select>
                        </div>
                        <div className="col-span-6">
                            <TextInput
                                title="Total Marks"
                                type="number"
                                placeholder="Enter Total Marks"
                            />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="group relative mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                    >
                        Add Assignment
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddAssignment