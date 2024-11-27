import React from 'react'
import Link from 'next/link'




function Header() {
  return (
    <div className="bg-customBlue  text-white flex justify-between items-center  px-4 h-20 ">
        <img src="/logo.png" alt="logo" className="h-24 top-5  px-24 "/>
        <h1 className="font-bold  text-2xl "style={{color:"#99bbd1"}}>Tuition Free Education Program on Latest Technologies</h1>
        <ul className="flex space-x-8 justify-end px-24 ">
        <Link href="/"><li>Home</li></Link>
        <Link href="/apply"><li>Apply</li></Link>
        <Link href="/jobs"><li>Jobs</li></Link>
        <Link href="/result"><li>Result</li></Link>
        <Link href="/course"><li>Course</li></Link>
        </ul>
  </div>
  );
}

export default Header