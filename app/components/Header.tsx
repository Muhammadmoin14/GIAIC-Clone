import React from 'react'

function Header() {
  return (
    <div className="bg-customBlue  text-white flex justify-between items-center  px-4 h-20 ">
        <img src="/logo.png" alt="logo" className="h-24 top-5  px-24 "/>
        <h1 className="font-bold  text-2xl "style={{color:"#99bbd1"}}>Tuition Free Education Program on Latest Technologies</h1>
        <ul className="flex space-x-8 justify-end px-24 ">
        <li>Home</li>
        <li>Apply</li>
        <li>Jobs</li>
        <li>Result</li>
        <li>Course</li>
        </ul>
  </div>
  )
}

export default Header