import React from 'react'

export default function  DashboardLayout({children}) {
  return (
    <div className="grid grid-cols-4 min-h-screen">
        {/* side navbar */}
    <div className='col-span-1'>
        <ul>
            <li>User Layout</li>
            <li>Admin Layout</li>
            <li></li>
        </ul>
    </div>
    {/* content */}
        <div className="col-span-3">
      {children}

        </div>
    </div>
  )
}
