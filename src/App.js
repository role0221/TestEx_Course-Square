import { createContext, useState } from 'react';
import './App.css';
import SearchField from './Components/SearchField';
import SearchForm from './Components/SearchForm';
import useAxios from './Hooks/useAxios';
import Images from './Components/Images';


export const ImageContext = createContext();



function App() {
  const [Visible,setVisible] = useState(8);
  const {response, isLoading,error,fetchData} = useAxios(`search/photos?page=1&query=all&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  console.log(response)

  const btn_move=()=>{ 
    setVisible(Visible+8)
  }
  
  const value={
    response,
    isLoading,
    error,
    fetchData,
    Visible,
  }
 
  return (
    <ImageContext.Provider value={value} >
        <SearchForm>
          <SearchField/>
        </SearchForm>
        <Images/>
        <button 
        className='bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 w-full'
        onClick={btn_move}
        >Load More</button>
    </ImageContext.Provider>
  );
}

export default App;
