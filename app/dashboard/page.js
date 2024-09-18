"use client"
import React from 'react'

const dashboard = () => {
    return (
        <div className='text-white'>
            <div className="text-center pt-10 text-2xl font-bold ">Welcome to your Dashboard</div>
            <div className='mt-5 w-[70vh] mx-auto'>
                <div>
                    <label htmlFor="Name" className='text-white'>Name</label>
                    <input type="text" className='mb-6 bg-gray-700  rounded-md block w-full' />
                </div>
                <div>
                    <label htmlFor="E-Mail" className='text-white'>E-Mail</label>
                    <input type="text" className='mb-6 bg-gray-700  rounded-md block w-full' />
                </div>
                <div>
                    <label htmlFor="Username" className='text-white'>Username</label>
                    <input type="text" className='mb-6 bg-gray-700  rounded-md block w-full' />
                </div>
                <div>
                    <label htmlFor="Profile Picture" className='text-white'>Profile Picture</label>
                    <input type="text" className='mb-6 bg-gray-700  rounded-md block w-full' />
                </div>
                <div>
                    <label htmlFor="Cover Picture" className='text-white'>Cover Picture</label>
                    <input type="text" className='mb-6 bg-gray-700  rounded-md block w-full' />
                </div>
                <div>
                    <label htmlFor="RazorPay Id" className='text-white'>RazorPay Id</label>
                    <input type="text" className='mb-6 bg-gray-700  rounded-md block w-full' />
                </div>
                <div>
                    <label htmlFor="RazorPay Secret" className='text-white'>RazorPay Secret</label>
                    <input type="text" className=' bg-gray-700  rounded-md block w-full' />
                </div>
                <div>
                    <button className='my-8 bg-gradient-to-t from-[#7d3bef] from-0% to-[#6786ff]   rounded-md block w-full font-bold'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default dashboard
