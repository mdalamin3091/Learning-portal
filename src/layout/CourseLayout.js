
import React from 'react'
import { Outlet } from 'react-router-dom'
import Videos from '../components/Videos'

const CourseLayout = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-7xl px-5 lg:px-0">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <Outlet />
                    <div
                        className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto bg-secondary p-4 rounded-md border border-slate-50/10 divide-y divide-slate-600/30">
                        <Videos />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseLayout