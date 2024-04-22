import axios from 'axios'

const SearchImage = async(term) =>{
    const url ='https://api.unsplash.com/search/photos/?client_id=jv22qHgD4CATp5DdD4gkwkJqa0esDL7rJ73os2KXdKU'
    const response = await axios.get(url,{
        params: {
            query: term
        }
    })
    console.log(term)
    console.log(response.data.results)

    return response.data.results

}

export default SearchImage