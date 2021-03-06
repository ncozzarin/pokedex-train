import React, { useEffect, useState } from 'react';
import "../styles/output.css";
import searchIcon from '../Images/searchIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { filterPokemons, projectFilter } from '../features/pokemons/pokemonsSlice';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            history.push(`/pokemons/${event.target.value}`)

        }
    }
    
    return (
        <div className="flex justify-center align-center items-center">
        <form className="flex justify-start align-center items-center bg-white rounded-xl border-2 w-auto lg:w-3/5 overflow-hidden ml-2 my-3">
            <div className="flex align-center justify-center ml-4">
                <img className="transform scale-150" src={searchIcon}></img>
                <input type="search" onKeyDown={handleKeyDown}
                placeholder="Search" className="block mr-8 rounded-md border-0 focus:outline-none focus:ring-0 focus:border-red-500 flex-grow p-0"/>
            </div>
        </form>
        </div>
   );
}
 
export default Search;