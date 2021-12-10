
import React from 'react';
import "../styles/output.css";



const ProgressBar =  ({stat, color}) => {

    return (
    <div className="relative pt-1">
        <div className={`overflow-hidden h-2 text-xs flex rounded bg-${color}-200`}>
        <div
        className={`
            w-[28%] shadow-none flex flex-col 
            text-center 
            whitespace-nowrap 
            text-white 
            justify-center 
            bg-${color}-500`}
        ></div>
    </div>
    </div>
   );
}
 
export default ProgressBar;

