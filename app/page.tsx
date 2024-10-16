

export default function Home() {
  return (
    <div className="flex justify-between items-start bg-slate-100 ">
      <div className="w-1/2">
          <h1 className="font-black text-6xl pt-24 px-24 text-customBlue">Governor Sindh</h1>
          <h1 className="font-medium text-4xl pt-2 px-24 tracking-widest text-customBlue">Kamran Khan Tessori</h1>
          <h1 className="font-black text-4xl text-customSkyBlue tracking-wide pt-8  px-24 ">Certified Cloud</h1>
          <h1 className="font-black text-4xl text-customSkyBlue tracking-wide   px-24 ">Applied Generative AI</h1>
          <h1 className="font-black text-4xl text-customSkyBlue tracking-wide   px-24 ">Engineer (GenEng)</h1>
            <div>
              <h1 className="font-black text-2xl pt-8 px-24  text-customBlue" >Earn up to $5,000 / month</h1>
              <h1 className="font-black text-2xl pt-8 px-24  text-customBlue" >Now admissions are open in <br/> Hyderabad</h1>
            </div>
            <div className="px-24 pt-8">
              <button className="bg-customBlue text-white font-bold py-3 px-8 rounded hover:bg-customSkyBlue hover:my-1">Apply Now</button>
            </div>
      </div>
    
      <div className="flex items-center justify-end pt-10 w-1/2   ">
        <img className="h-auto max-w-full" src="\governor" alt="governor" />
      </div>
    
    </div>
  )
}