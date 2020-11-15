import React, { useState } from 'react';
import '../Styles/SearchComp.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useStateValue} from '../StateProvider';

function SearchComp({hideButtons = false}) {

    const [input, setInput] = useState('');
    const history = useHistory();
    const [{}, dispatch] = useStateValue();

    const searchGOOGLE = (evt) => {
        evt.preventDefault();

        dispatch({
            type : 'Search',
            searchInput: input
        })

        history.push(`/search`)
    }

    return (
        <form className = "searchcomp">
            <div className = "search__input">
                <SearchIcon className = "search__inputIcon"/>
                    <input type = "text" value = {input} onChange = {e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            {
                !hideButtons ? (<div className = "search__buttons">
                <Button type = "submit" onClick = {searchGOOGLE}>Google Search</Button>
                <Button>I'm Feeling luncky</Button></div>)
                : (<div className = "search__buttons">
                <Button className = "search__buttonHidden" type = "submit" onClick = {searchGOOGLE}>Google Search</Button>
                <Button className = "search__buttonHidden">I'm Feeling luncky</Button></div>)
            }

            
        </form>
    )
}

export default SearchComp
