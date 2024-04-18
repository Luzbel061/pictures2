import { useState } from 'react'
import SearchBar from './components/searchBar'
import ImageList from './components/imageList'
import './App.css'

function App() {
  const [Imagenes,setImage] = useState([])

  const handleSubmit = async(term) =>{
    console.log('uste esta buscando con: ',term)
  }

  return (
    <div>
      <h1>App</h1>
      <searchBar onSubmit={handleSubmit}/>
    </div>
  )

}

export default App
