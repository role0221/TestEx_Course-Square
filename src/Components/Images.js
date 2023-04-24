import React from 'react'
 import { useContext } from "react"
 import { ImageContext } from "../App"
import Image from './Image'

const Images = () => {
    const {response,isLoading,Visible} =useContext(ImageContext)
  return (
    <>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 cursor-pointer'>
        {isLoading ? <skeleton item={10}/> : response.slice(0,Visible).map((data,key) => <Image key={{key}} data={data}/>)}
        </div>
        
    </>
  )
}

export default Images
