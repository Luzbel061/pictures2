import { useState} from "react"

function SearchBar({onSumit}){
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event)=>{
        event.preventDefault()
        console.log('Necesito decirle al componenete padre sobre los datos')
        onsubmit(term)
    }

    const handleChange = (event) =>{
        console.log(event.target.value)
        setTerm(event.target.value)
    }

    const handleClick = () =>{
        onsubmit(term)
    }

    return(
        <div>
          <h1> Search Bar </h1>
          <form onSubmit={handleFormSubmit}>
            confirma tu busqueda: {term}
            <input onChange={handleChange} value={term}/>
          </form>
          <buttom onClick={handleClick}>Click me!</buttom>
        </div>
    )
}

export default SearchBar