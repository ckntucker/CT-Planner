import {useEffect,useState} from 'react';
import {  useSearchParams } from 'react-router-dom'

const Search = ({searchParams}) => {
    const [searchCity, setSearchCity] = useState('')
    const searchOptions ={
        key: process.env.REACT_APP_CTPLANNER_KEY,
        api: 'http://api.opentripmap.com/0.1/ru/places/xid/Q372040?apikey='
    }

    useEffect(() => {
        getPlaces(searchCity)
    }, [])

    function getPlaces(searchCity){
        const url =`${searchOptions.api}${searchOptions.key}`
        fetch(url)
        .then(response => response.json())
        .then(response => {
            
        })
    }


    function handleChange(event){
        setSearchCity(event.target.value)
    }


    function handleSubmit(event){
        event.preventDefault()
        console.log(searchCity)

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='searchCity'>Search City </label>
                <input type="text" id="searchCity" name="searchCity" onChange={handleChange}/>
                <button type="submit">Search</button>
        </form>
        </div>
    );
};

export default Search;