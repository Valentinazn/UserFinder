
import { GetServerSideProps } from "next"
import Link from "next/link"
import {AiOutlineArrowLeft} from 'react-icons/ai'




export default function UserPage({user}:any){

    return(
 
      <div className="relative px-3 mx-auto sm:mb-24  drop-shadow-xl flex mt-8 max-h-min py-7 my-0 w-full max-w-xs sm:max-w-md items-center justify-center bg-white rounded-lg border border-gray-200  dark:bg-slate-200">
        <div className="absolute top-2 left-1">
           <Link href='/' className=" text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             <AiOutlineArrowLeft className="w-5 h-5 ml-2 -mr-1 hover:cursor-pointer  dark:text-emerald-500 dark:hover:text-emerald-700 dark:focus:ring-emerald-800" />
           </Link>

    </div>

    <div className="flex flex-col items-center p-6 w-full">
      <img className="mb-3 w-36 h-36 rounded-full shadow-lg" src={"/img.svg"} alt={user.name}/>
      <h4 className="mb-6 text-2xl font-bold font-medium dark:text-black">{user.name}</h4>



    <div className="flow-root ">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-300">
            <li className="py-3 sm:py-4 w-80 px-3 sm:px-0">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <span className="text-xl">👤</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className=" text-xs text-gray-500 truncate dark:text-gray-400">
                            Username
                        </p>
                        <p className="text-base font-medium text-gray-900 truncate dark:text-yellow-500">
                            {user.address.street}
                        </p>
                    </div>
                    
                </div>
            </li>
            <li className="py-3 sm:py-4 px-3 sm:px-0">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <span className="text-xl">📍</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="  text-sm text-gray-500 truncate dark:text-gray-400">
                            Suite
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-yellow-500">
                            {user.address.suite}
                        </p>
                    </div>
                    
                </div>
            </li>
              <li className="py-3 sm:py-4 px-3 sm:px-0">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <span className="text-xl">🏙 </span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Città
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-yellow-500">
                           {user.address.city}
                        </p>
                    </div>
                    
                </div>
            </li>
            <li className="py-3 sm:py-4 px-3 sm:px-0">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <span className="text-xl">📧</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            E-mail
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-yellow-500">
                           {user.email}
                        </p>
                    </div>
                    
                </div>
            </li>
             <li className="py-3 sm:py-4 px-3 sm:px-0">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <span className="text-xl">📞</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            Cellulare
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-yellow-500">
                           {user.phone}
                        </p>
                    </div>
                    
                </div>
            </li>
             <li className="py-3 sm:py-4 px-3 sm:px-0">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <span className="text-xl">💻</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="  text-sm text-gray-500 truncate dark:text-gray-400">
                            Sito web
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-yellow-500">
                           {user.website}
                        </p>
                    </div>
                    
                </div>
            </li>
         
        </ul>
   </div>
</div>


</div>


    )
}


export const  getServerSideProps : GetServerSideProps = async (context) =>{

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
    
    const user = await res.json()

    return{
       props:{
            user
        }
    }

}