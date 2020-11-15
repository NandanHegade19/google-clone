import React, {useState, useEffect} from 'react';
import API_KEY from './keys';


const CONTEXT_KEY = '328fc4627e86578cd';

    const useGoogleSearch = (searchInput) => {
        const [data, setData] = useState(null);
        console.log("Input---Searchinput", searchInput);

    useEffect(() => {
        const fetchData = async() => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchInput}`)
            .then(resp => resp.json())
            .then(result => {setData(result)})
        }
        fetchData();
    },[searchInput])
    console.log("dataaaaaa",data)

    return {data}
}
export default useGoogleSearch;