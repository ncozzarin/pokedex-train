import React from 'react';
import "../styles/output.css";



const Search = () => {
    return (
        <form action="" className="flex justify-center bg-white rounded-xl border-2 overflow-hidden mx-3 my-3">
            <div className="flex align-center">
                <input type="search" placeholder="Search..." className="block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-0"/>
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto m-2" style={{ color: `gray` }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </form>
   );
}
 
export default Search;