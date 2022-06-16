import React from 'react'



export const Navbar = ({...props}) => {

  
  return (
    
<nav className="bg-white shadow-md  px-2 sm:px-4 py-2.5  dark:bg-white md:flex md:justify-end">
<div className="container flex flex-wrap justify-between  items-center mx-auto">

 
     <h1 className='font-extrabold text-transparent text-lg  bg-clip-text bg-gradient-to-r from-violet-500 to-yellow-500 sm:text-2xl'>UserFinder</h1>

     

   
     <form className="flex justify-end">
        <label htmlFor="simple-search" className="sr-only">Cerca</label>
      <div className="relative w-full">

        <div className="flex absolute inset-y-0 left-0 z-10 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 dark:hover:scale-125 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        

         <input 
           type='text'
            placeholder='Cerca...'
            className=" text-sm border-solid hover:bg-white focus:bg-white dark:focus:outline dark:focus:outline-4 bg-zinc-200 dark:hover:outline  dark:hover:outline-4  dark:hover:outline-violet-300 transition ease-in-out delay-150  rounded-lg focus:outline-violet-300 block w-full pl-10 p-2.5   dark:focus:border-violet-400 dark:placeholder-zinc-400  dark:text-black " 
            id="simple-search"
            autoComplete='off'
            spellCheck='false'
            required 
            {...props}
            
          />

       
       
      </div>

      
    
    </form>

  

</div>

</nav>

  )
}





