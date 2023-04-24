import { useContext, useState } from "react"
import { ImageContext } from "../App";


const SearchField = () => {
    const [searchValue,setSearchValue] = useState("");
    const {fetchData} =useContext(ImageContext);
    const handleInputChange =(e)=>{
        setSearchValue(e.target.value)
    }
    const handleButtonSearch =()=>{
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        setSearchValue("");
    }
    const handleButtonEnter =e=>{
        if(e.key === 'Enter'){
            fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        }
        
    }
  return (
    <div className='flex'>
        <input className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-600
        focus:right-2 rounded-tl rounded-bl ' type='Search' placeholder='Search Anything ...' value={searchValue} onChange={handleInputChange}
        onKeyDown={handleButtonEnter}></input>
        <button 
        className='bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400'
        onClick={handleButtonSearch}> Search </button>
    </div>

  )
}

export default SearchField