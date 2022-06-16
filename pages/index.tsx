import React from 'react'


import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { AddList } from '../components/AddList'
import { Navbar } from '../components/Navbar'
import { IState} from '../types'
import { Layout } from '../components/Layout'



const Home: NextPage<{i: IState['people']}> = ({i} ) => {



  const [people, setPeople] = useState(i)
  const [search, setSearch] = useState('') 

  
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearch(e.target.value)
  }

  const props = { onChange: handleChange}

  return (
    <Layout>
    <Navbar {...props} />

    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-4 ">
      <Head>
        <title>UserFinder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


     <AddList  people={people} search={search} />


    
    </div>
    </Layout>
  )
}

export default Home



export const getStaticProps: GetStaticProps = async () => {

 const res = await fetch('https://jsonplaceholder.typicode.com/users')



  const i = await res.json()





  return{
    props:{
        i
    }
  }

}