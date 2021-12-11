import React from 'react';
import "../styles/output.css";
import searchIcon from '../Images/searchIcon.svg';


const Search = () => {
    return (
        <form className="flex justify-center align-center bg-white rounded-xl border-2 w-auto overflow-hidden mx-3 my-3">
            <div className="flex align-center justify-center">
                <img src={searchIcon}></img>
                <input type="search" placeholder="Search" className="block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-0"/>
            </div>
        </form>
   );
}
 
export default Search;