import React from "react"
import { IState  } from "../types"
import Link from 'next/link'



export interface IProps{
  people: IState['people']
  search: string

}



export const AddList:React.FC<IProps> = ({people, search}) => {



  const renderList = () =>{

   
    return  people?.filter(user =>{

     return user?.name.toLowerCase().includes(search.toLowerCase())
       

    }).map((user) =>{
          return (
            <div key={user.id} className='mb-4 block p-6 w-full mt-6 t-6 bg-white rounded-lg border shadow-md hover:bg-gray-100 dark:bg-slate-200 dark:text-black   md:max-w-sm'>
              
               <Link href={`/users/${user.id}`} className="">
               <h5 className="mb-2 text-2xl text-black font-bold tracking-tight text-gray-900 dark:hover:cursor-pointer dark:hover:underline hover:decoration-solid dark:hover:text-yellow-500">{user.name}</h5>
              </Link>
                <p className="font-normal text-gray-700 dark:text-emerald-500">Azienda: {user.company.name}</p>

            </div>
          )
        })

  }

  return (
    <>
    {
      renderList().length > 0 ? renderList() : 'Nessun Risultato'
    }
   
   
    </>
  )
}
